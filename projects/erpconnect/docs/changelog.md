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
      <th>Note</th>
    </tr>
  </thead>
  <tbody id="catalogBody">
    <!-- Table body will be populated dynamically -->
  </tbody>
</table>

<!-- Modal HTML -->
<div id="modal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div id="modalBody"></div>
  </div>
</div>

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
      if (item.IsCritical) {
        row.setAttribute('class', 'is-critical');
      }

      row.innerHTML = `
        <td>${item.Version}</td>
        <td>${item.LegacyReleaseDate.split(' ')[0]}</td>
        <td>${change.Component}</td>
        <td>${change.Message}</td>
        ${change.ReleaseNote ? `<td><button class="show-more" data-release-note="${encodeURIComponent(change.ReleaseNote)}" style="text-decoration: underline; color: blue;">show more</button></td>` : '<td></td>'}
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
    if (!isMarkdown(markdownText)) {
      return `<p>${markdownText}</p>`;
    }

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
      .replace(/^\s*\*\s*\*\s*\*.*$/gm, '<hr>')
      .replace(/^ReleaseNote:\s*"([^"]+)"$/gm, '<div class="release-note">$1</div>')
      .replace(/^(?!<h[1-6]>)(?!<div class="release-note">)(.*)$/gm, '<p>$1</p>');

    return htmlText;
  }

  // Add event listeners for filtering and "Show More" buttons
  const addEventListeners = () => {
    const filterInput = document.getElementById('search');
    if (filterInput) {
      filterInput.addEventListener('input', () => {
        const newFilterValue = filterInput.value.toLowerCase();
        filterRows(newFilterValue);
        updateURLParams(newFilterValue);
      });
    }

    const clearButton = document.querySelector('.btn-clear');
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        filterInput.value = ''; 
        filterRows('');
        updateURLParams('');
      });
    }

    const catalogTable = document.getElementById('catalogTable');
    if (catalogTable) {
      catalogTable.addEventListener('click', event => {
        if (event.target.tagName.toLowerCase() === 'button' && event.target.classList.contains('show-more')) {
          const releaseNote = decodeURIComponent(event.target.getAttribute('data-release-note'));
          if (releaseNote) {
            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = parseMarkdown(releaseNote);
            modal.style.display = 'block';
          }
        }
      });
    }

    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    if (closeModal) {
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    window.addEventListener('click', event => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  };

  const updateURLParams = (filterValue) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    if (filterValue) {
      urlSearchParams.set('filter', filterValue);
    } else {
      urlSearchParams.delete('filter');
    }
    const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
  };

  const filterRows = (filterValue) => {
    const comparisonOperator = filterValue.charAt(0);
    const versionNumber = filterValue.slice(1).trim();

    document.querySelectorAll('#catalogBody tr').forEach(row => {
      const versionCell = row.querySelector('td:first-child');
      const version = versionCell.textContent.trim();

      let displayRow = false;
      if (comparisonOperator === '>') {
        displayRow = compareVersions(version, versionNumber) > 0;
      } else if (comparisonOperator === '<') {
        displayRow = compareVersions(version, versionNumber) < 0;
      } else {
        displayRow = version.includes(versionNumber);
      }

      row.style.display = displayRow ? '' : 'none';
    });
  };

  const compareVersions = (version1, version2) => {
    const parts1 = version1.split('.').map(part => parseInt(part));
    const parts2 = version2.split('.').map(part => parseInt(part));

    for (let i = 0; i < Math.min(parts1.length, parts2.length); i++) {
      if (parts1[i] !== parts2[i]) {
        return parts1[i] - parts2[i];
      }
    }

    return parts1.length - parts2.length;
  };

  // Read the search parameter from the URL and apply the filter
  window.addEventListener('load', () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const filterValue = urlSearchParams.get('filter');
    const filterInput = document.getElementById('search');
    if (filterInput && filterValue) {
      filterInput.value = filterValue;
      filterRows(filterValue);
    }
  });

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
