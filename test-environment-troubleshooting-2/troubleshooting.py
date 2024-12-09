import requests
import os
import re
from collections import defaultdict

# Output file for the article list
OUTPUT_FILE = "index.md"

# Output folder for individual article files
ARTICLE_FOLDER = "./"

# Desired tag for filtering
FILTER_TAG = "hxu1"


# Fetch Knowledge Base Articles
def fetch_articles():
    
    response = requests.get('https://support.theobald-software.com/helpdesk/api/Articles', auth=('Schipka', 'Ganbare4'))
       
    if response.status_code == 200:
        try:
            data = response.json()  # Parse JSON response
            articles = data.get("Articles", [])  # Extract the list of articles
            filtered_articles = [a for a in articles if FILTER_TAG in a.get('TagString', [])]
            #filtered_articles_sections = [a for a in filtered_articles if "Troubleshooting" in a.get('CategoryName', [])]
            os.makedirs(ARTICLE_FOLDER, exist_ok=True)  # Ensure output folder exists
            save_article_list_by_section_and_category(filtered_articles)
        except ValueError:
            print("Error: Response is not valid JSON")
            print(response.text)
    else:
        print(f"Error: {response.status_code}, {response.text}")

# Fetch and save each article's content to a separate Markdown file
def fetch_and_save_article_content(article_id):
    try:
        response = requests.get('https://support.theobald-software.com/helpdesk/api/Article/' + str(article_id), auth=('Schipka', 'Ganbare4'))
        print(f"https://support.theobald-software.com/helpdesk/api/Article/{article_id}")
        if response.status_code == 200:
            try:
                data = response.json()  # Parse JSON response
                print(f"Article {article_id}: {data}")  # Debug: Log the API response
                # return data.get("Body", "No content available.")  # Fetch article body

                article_body = data.get("Body", "No content available.")

                # Replace <img src="/helpdesk/File/Get/XXXX"> with fully qualified URLs
                base_url = "https://support.theobald-software.com"
                article_body = re.sub(
                    r'<img src="(/helpdesk/File/Get/\d+)"',
                    lambda match: f'<img src="{base_url}{match.group(1)}"',
                    article_body
                )

                return article_body

            except ValueError:
                print(f"Error parsing JSON for article {article_id}, Response: {response.text}")
                return "Error: Could not retrieve content."
        else:
            print(f"Error: {response.status_code} for article {article_id}, Response: {response.text}")
            return "Error: Could not retrieve content."
    except requests.RequestException as e:
        print(f"Request Exception for article {article_id}: {e}")
        return "Error: Could not retrieve content."



def save_article_list_by_section_and_category(articles):
    # Group articles by SectionName and then by CategoryName
    grouped_articles = defaultdict(lambda: defaultdict(list))
    for article in articles:
        section = article.get('SectionName', 'Uncategorized Sections')
        category = article.get('CategoryName', 'Uncategorized Categories')
        grouped_articles[section][category].append(article)

    # Write grouped articles to Markdown
    with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
        file.write("---\ntitle: Troubleshooting\ndescription: A list of short troubleshooting articles from our support portal.\nhide:\n  - navigation\n  - tags\n---\n\n")
        file.write("Below is a categorized list of all articles in the knowledge base with the tag 'hxu1':\n\n")
        
        for section, categories in grouped_articles.items():
            file.write(f"## {section}\n\n")
            
            # Create a subfolder for the section
            section_folder = os.path.join(ARTICLE_FOLDER, section)
            os.makedirs(section_folder, exist_ok=True)
            
            for category, articles in categories.items():
                file.write(f"### {category}\n\n")
                file.write(f"<div class=\"mdx-columns\" markdown>\n\n")

                # Sort articles alphabetically by title (Subject)
                sorted_articles = sorted(articles, key=lambda a: a.get('Subject', '').lower())

                for article in sorted_articles:
                    title = article.get('Subject', 'Untitled')
                    article_id = article.get('ArticleId')

                    # Define the path for the article file
                    article_filename = os.path.join(section_folder, f"{article_id}.md")
                    
                    # Fetch content and save to a separate file
                    content = fetch_and_save_article_content(article_id)
                    with open(article_filename, "w", encoding="utf-8") as article_file:
                        article_file.write(f"# {title}\n\n")
                        article_file.write(content)
                    
                    # Link to the new Markdown file
                    relative_link = os.path.relpath(article_filename, ARTICLE_FOLDER).replace(os.sep, "/")
                    file.write(f"- [{title}]({relative_link})\n")
                file.write("\n")  # Add a blank line between categories
                file.write("</div>\n\n")  # Add text after each category
            file.write("\n")  # Add a blank line between sections
            file.write("---\n\n")  # Add text after each section
            
# Run the script
if __name__ == "__main__":
    fetch_articles()