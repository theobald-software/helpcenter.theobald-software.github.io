import requests
import os
from collections import defaultdict

# Output file for the article list
OUTPUT_FILE = "index.md"

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
            filtered_articles_sections = [a for a in filtered_articles if "Troubleshooting" in a.get('CategoryName', [])]
            save_article_list_by_section_and_category(filtered_articles_sections)
        except ValueError:
            print("Error: Response is not valid JSON")
            print(response.text)
    else:
        print(f"Error: {response.status_code}, {response.text}")

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
        file.write("Below is a categorized list of all troubleshooting articles in the knowledge base with the tag 'hxu1' (no how-tos):\n\n")
        
        for section, categories in grouped_articles.items():
            file.write(f"### {section}\n\n")
            for category, articles in categories.items():
                #file.write(f"### {category}\n\n")
                file.write(f"<div class=\"mdx-columns\" markdown>\n\n")

                # Sort articles alphabetically by title (Subject)
                sorted_articles = sorted(articles, key=lambda a: a.get('Subject', '').lower())

                for article in sorted_articles:
                    title = article.get('Subject', 'Untitled')
                    link = article.get('Url', '#')  # Use '#' as fallback if URL is missing
                    file.write(f"- [{title}]({link})\n")
                file.write("\n")  # Add a blank line between categories
                file.write("</div>\n\n")  # Add text after each category
            file.write("\n")  # Add a blank line between sections
            file.write("---\n\n")  # Add text after each category

# Run the script
if __name__ == "__main__":
    fetch_articles()