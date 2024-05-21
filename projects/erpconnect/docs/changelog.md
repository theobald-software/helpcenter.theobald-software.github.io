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

  // Function to render a row in the table
const renderRow = (item) => {
    const rows = item.Changes.map(change => {
      const row = document.createElement('tr');
      if (item.IsBreaking) {
        row.setAttribute('class', 'is-breaking');
      }
      row.innerHTML = `
        <td>${item.Version}</td>
        <td>${item.LegacyReleaseDate.split(' ')[0]}</td>
        <td>${change.Component}</td>
        <td>${change.Message}</td>
      `;
      return row;
    });
    return rows;
  };

  // Populate the table with data
  const populateTable = async () => {
    const data = await fetchData();
    const tableBody = document.getElementById('catalogBody');
    data.forEach(item => {
      const rows = renderRow(item);
      rows.forEach(row => tableBody.appendChild(row));
    });
    addEventListeners(); // Add event listeners after the table is populated
  };


  const isMarkdown = (content) => {
      const markdownSyntax = ['*', '_', '**', '__', '[', ']', '`', '#', '##', '###', '####', '#####', '######'];
      return markdownSyntax.some((syntax) => content.includes(syntax));
  };

  const parseMarkdown = (markdownText) => {
    console.log("markdownText: ", markdownText)
    // Replace Markdown syntax with corresponding HTML tags
    if (!isMarkdown(markdownText)) {
        // If not, return the input text wrapped in <p> tags
      return `<p>${markdownText}</p>`;
    }

    // Replace Markdown syntax with corresponding HTML tags
    let htmlText = markdownText
        // Handle headings
      .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')
      .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
      .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
      .replace(/^####\s+(.*)$/gm, '<h4>$1</h4>')
      .replace(/^#####\s+(.*)$/gm, '<h5>$1</h5>')
      .replace(/^######\s+(.*)$/gm, '<h6>$1</h6>')
      // Handle bold and italic
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>') // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
      // Handle lists
      .replace(/^\*\s+(.*)$/gm, '<li>$1</li>')
      .replace(/^(\d+)\.\s+(.*)$/gm, '<li>$2</li>')
      .replace(/<\/li>\s+<li>/g, '</li><li>') // Fix multiple list items
      // Handle blockquotes
      .replace(/^\>(.*)$/gm, '<blockquote>$1</blockquote>')
      // Handle code blocks
      // Handle horizontal rules
      .replace(/^\s*\*\s*\*\s*\*.*$/gm, '<hr>')
      // Handle ReleaseNote with new line
      .replace(/^ReleaseNote:\s*"([^"]+)"$/gm, '<div class="release-note">$1</div>')
        // Handle paragraphs
      .replace(/^(?!<h[1-6]>)(?!<div class="release-note">)(.*)$/gm, '<p>$1</p>');

    return htmlText;
  }
  // Add event listeners for filtering and "Show More" buttons
  const addEventListeners = () => {
    // Function to filter rows based on the search parameter
  const filterRows = (filterValue) => {
    const comparisonOperator = filterValue.charAt(0);
    const versionNumber = filterValue.slice(1).trim();

    document.querySelectorAll('#catalogBody tr').forEach(row => {
      const versionCell = row.querySelector('td:first-child');
      const version = versionCell.textContent.trim();

      // Compare versions based on the operator
      let displayRow = false;
      if (comparisonOperator === '>') {
        displayRow = compareVersions(version, versionNumber) > 0;
      } else if (comparisonOperator === '<') {
        displayRow = compareVersions(version, versionNumber) < 0;
      } else {
        // Default behavior for other operators or invalid input
        displayRow = version.includes(versionNumber);
      }

      // Set display style based on comparison result
      row.style.display = displayRow ? '' : 'none';
    });
  };

  // Function to compare versions (e.g., "5.6", "6.0")
  const compareVersions = (version1, version2) => {
    const parts1 = version1.split('.').map(part => parseInt(part));
    const parts2 = version2.split('.').map(part => parseInt(part));

    for (let i = 0; i < Math.min(parts1.length, parts2.length); i++) {
      if (parts1[i] !== parts2[i]) {
        return parts1[i] - parts2[i];
      }
    }

    // If all parts are equal, consider the longer version as greater
    return parts1.length - parts2.length;
  };

    // Reading the search parameter from the URL and applying the filter
    const urlSearchParams = new URLSearchParams(window.location.search);
    const filterValue = urlSearchParams.get('filter');
    const filterInput = document.getElementById('search');
    if (filterInput) {
      filterInput.value = filterValue || ''; // Set input value to the filter parameter
      filterRows(filterValue || ''); // Apply initial filter

      // Add event listener to update filter on input change
      filterInput.addEventListener('input', () => {
        const newFilterValue = filterInput.value.toLowerCase();
        filterRows(newFilterValue);

        // Update URL with new filter value
        urlSearchParams.set('filter', newFilterValue);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({}, '', newUrl);
      });
    }

    const clearButton = document.querySelector('.btn-clear');
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        filterInput.value = ''; // Clear the input field
        filterRows(''); // Reset the filter
        urlSearchParams.delete('filter'); // Remove the filter parameter from the URL
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({}, '', newUrl);
      });
    }
    //Event listener for the "Show More" button
    const catalogTable = document.getElementById('catalogTable');
    if (catalogTable) {

          // Your existing logic here
          const versionRow = event.target.closest('tr');
          const versionCell = versionRow.querySelector('td:first-child');
          const version = versionCell.textContent;
          

    }
  };

  // Call the function to add event listeners

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
