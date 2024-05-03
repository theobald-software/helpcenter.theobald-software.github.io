---
title: ChangeLog
hide:
  - navigation
  - feedback
  - tags
---


<div class="grid cards" markdown>

-   ![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section contains a version history for ERPConnect.

</div>

{% include "version-history/version-history-header.md" %}

<div style="display:flex">
  <input class="input-search"
    id="search"
    type="text"
    placeholder="🔍 Search "
    _="on keyup
      if the event's key is 'Escape'
        set my value to ''
        trigger keyup
      else
        show <tr/> in next <tbody/> when its textContent.toLowerCase() contains my value.toLowerCase()" />

  <button class="btn-clear md-button md-button--primary"
    _="on click set #search.value to '' then trigger keyup on #search">Clear</button>
</div>

<table id="catalogTable">
  <thead>
    <tr>
      <th>Version</th>
      <th>Release Date</th>
      <th>Button</th>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody id="catalogBody">
    <!-- Table body will be populated dynamically -->
  </tbody>
</table>

<script>
  // Function to fetch data from catalog.json
  const fetchData = async () => {
    try {
      const response = await fetch('../version-history-new/ERPConnect/catalog.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching catalog data:', error);
      return [];
    }
  };

  // Function to fetch additional data for a specific version
  const fetchAdditionalData = async (version) => {
    try {
      const response = await fetch(`../version-history-new/ERPConnect/${version}.json`);
      const additionalData = await response.json();
      return additionalData;
    } catch (error) {
      console.error(`Error fetching additional data for ${version}:`, error);
      return null;
    }
  };

  // Function to render a row in the table
  const renderRow = (item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.Version}</td>
      <td>${item.LegacyReleaseDate.split(' ')[0]}</td>
      <td><button class="showMoreBtn" style="border-radius: 5px; padding: 3px 6px; background-color: #007bff; color: #ffffff;">Show More</button></td>
    `;
    return row;
  };

  // Populate the table with data
  const populateTable = async () => {
    const data = await fetchData();
    const tableBody = document.getElementById('catalogBody');
    data.forEach(item => {
      const row = renderRow(item);
      tableBody.appendChild(row);
    });
    addEventListeners(); // Add event listeners after the table is populated
  };


  const parseMarkdown = (markdownText) => {
    // Replace Markdown syntax with corresponding HTML tags
    let htmlText = markdownText
      .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')
      .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
      .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
      .replace(/^####\s+(.*)$/gm, '<h4>$1</h4>')
      .replace(/^#####\s+(.*)$/gm, '<h5>$1</h5>')
      .replace(/^######\s+(.*)$/gm, '<h6>$1</h6>')
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^\*\s+(.*)$/gm, '<li>$1</li>')
      .replace(/^(\d+)\.\s+(.*)$/gm, '<li>$2</li>')
      .replace(/<\/li>\s+<li>/g, '</li><li>')
      .replace(/^\>(.*)$/gm, '<blockquote>$1</blockquote>')
      .replace(/^\s*\*\s*\*\s*\*.*$/gm, '<hr>');

    htmlText = htmlText.replace(/^(?!<h[1-6]>)(.*)$/gm, '<p>$1</p>');

    return htmlText;
  }
  // Add event listeners for filtering and "Show More" buttons
  const addEventListeners = () => {
    // Filtering
    const filterInput = document.getElementById('filterInput');
    if (filterInput) {
      filterInput.addEventListener('input', () => {
        const filterValue = filterInput.value.toLowerCase();
        document.querySelectorAll('#catalogBody tr').forEach(row => {
          const version = row.firstChild.textContent.toLowerCase();
          if (version.includes(filterValue)) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    }
    // Show More button
    const catalogTable = document.getElementById('catalogTable');
    if (catalogTable) {
      catalogTable.addEventListener('click', async (event) => {
        if (event.target.classList.contains('showMoreBtn')) {
          const versionRow = event.target.closest('tr');
          const versionCell = versionRow.querySelector('td:first-child');
          const version = versionCell.textContent;
          const additionalData = await fetchAdditionalData(version);
          if (additionalData) {
            // Create new <td> elements for each piece of additional data
            additionalData.forEach(dataObj => {

              const componentCell = document.createElement('td');
              componentCell.textContent = dataObj.Component;
              versionRow.appendChild(componentCell);

              const messageCell = document.createElement('td');
              messageCell.textContent = dataObj.Message;
              versionRow.appendChild(messageCell);

              if (dataObj.IsBreaking) {
                versionRow.classList.add('isBreaking');
                const noteCell = document.createElement('td');
                noteCell.innerHTML = parseMarkdown(dataObj.ReleaseNote);
                versionRow.appendChild(noteCell);
              }

            });

            event.target.remove();
          }
        }
      });
    }


  };

  populateTable();
</script>

<!-- --8<-- "version-history/ERPConnect.md" -->

<!---
Tabs:

=== "Xtract Universal"

    --8<-- "version-history/XtractUniversal.md"

=== "Theobald Extractors"

    --8<-- "version-history/TheobaldExtractors.md"
	
-->
