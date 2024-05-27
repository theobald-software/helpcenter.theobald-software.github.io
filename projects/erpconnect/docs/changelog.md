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

  />

  <button class="btn-clear md-button md-button--primary"
    _="on click set #search.value to '' then trigger keyup on #search">Clear</button>
</div>

<table id="catalogTable">
  <thead>
    <tr>
      <th>Version</th>
      <th>Release Date</th>
      <th>Component</th>
      <th> </th>
      <th>Description</th>
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

      row.innerHTML = `
        <td>${item.Version}</td>
        <td style="width:12%">${item.LegacyReleaseDate.split(' ')[0]}</td>
        <td>${change.Component}</td>
        <td>
        ${item.IsBreaking ? '<img src="../version-history-new/link_broken.svg" alt="breaking-change" style="width:20px;">': ''}
        ${item.IsCritical ? '<img src="../version-history-new/critical.svg" alt="breaking-change" style="width:20px;">': ''}
        </td>
        <td>${item.IsBreaking ? 'Breaking Change: ': ''} ${item.IsCritical ? 'Critical Change: ': ''} ${change.Message} ${change.ReleaseNote ? ` <br><button class="show-more" data-release-note="${encodeURIComponent(change.ReleaseNote)}" style="cursor: pointer; color: #ED1A33;">(Open Release Notes)</button>` : ''}</td>
      `;
      return row;
    });
    return rows;
  };

  // Populate the table with data
  const populateTable = async () => {
    const data = await fetchData();
    const tableBody = document.getElementById('catalogBody');
    tableBody.innerHTML = ''; 
    data.forEach(item => {
      const rows = renderRow(item);
      rows.forEach(row => tableBody.appendChild(row));
    });
    addEventListeners(); 
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
      .replace(/`([^`]+)`/g, '<code class="highlight">$1</code>')
      .replace(/^-+\s*$/gm, '<hr>')
      .replace(/^\*\s+(.*)$/gm, '<li>$1</li>')
      .replace(/^- (.*)$/gm, '<li>$1</li>')
      .replace(/^\d+\.\s+(.*)$/gm, '<li>$1</li>')
      .replace(/^\s*-\s(.*)$/gm, (match, p1) => `<li>${p1}</li>`)
      .replace(/^\s*  -\s(.*)$/gm, (match, p1) => `<li style="margin-left: 20px;">${p1}</li>`)
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      .replace(/<\/ul>\n<ul>/g, '')
      .replace(/<\/ul><ul>/g, '')
      .replace(/^\>\s+(.*)$/gm, '<blockquote>$1</blockquote>')
      .replace(/^ReleaseNote:\s*"([^"]+)"$/gm, '<div class="release-note">$1</div>')
      .replace(/^(?!<h[1-6]>)(?!<div class="release-note">)(?!<blockquote>)(?!<li>)(?!<\/?ul>)(.*)$/gm, '<p>$1</p>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>'); 

    return htmlText;
  }

  const addEventListeners = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const filterValue = urlSearchParams.get('filter');
    const filterInput = document.querySelector('.input-search');
    if (filterInput) {
      filterInput.value = filterValue || '';
      filterRows(filterValue || ''); 
      filterInput.addEventListener('input', () => {
        const newFilterValue = filterInput.value.toLowerCase();
        filterRows(newFilterValue);

        urlSearchParams.set('filter', newFilterValue);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({}, '', newUrl);
      });
    }

    const clearButton = document.querySelector('.btn-clear');
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        filterInput.value = ''; 
        filterRows(''); 
        urlSearchParams.delete('filter');
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({}, '', newUrl);
      });
    }

    const catalogTable = document.getElementById('catalogTable');
    if (catalogTable) {
      catalogTable.addEventListener('click', async (event) => {
        if (event.target.classList.contains('showMoreBtn')) {
          const versionRow = event.target.closest('tr');
          const versionCell = versionRow.querySelector('td:first-child');
          const version = versionCell.textContent;
          const additionalData = await fetchAdditionalData(version);
          if (additionalData) {
            console.log("ReleaseNote", additionalData);

            additionalData.forEach(dataObj => {
              event.target.textContent = `${dataObj.Component}`;
              const messageCell = document.createElement('td');
              messageCell.textContent = dataObj.Message;
              versionRow.appendChild(messageCell);

              if (dataObj.ReleaseNote !== undefined) {
                const noteCell = document.createElement('td');
                noteCell.innerHTML = parseMarkdown(dataObj.ReleaseNote);
                versionRow.appendChild(noteCell);
              }
            })
          }
        }
      });
    }
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
    const descriptionCell = row.querySelector('td:nth-child(5)'); // Adjust if your description column is not the 4th one
    const version = versionCell.textContent.trim();
    const description = descriptionCell.textContent.trim().toLowerCase();
    const searchText = filterValue.toLowerCase();

    let displayRow = false;

    if (comparisonOperator === '>') {
      displayRow = compareVersions(version, versionNumber) > 0;
    } else if (comparisonOperator === '<') {
      displayRow = compareVersions(version, versionNumber) < 0;
    } else {
      displayRow = version.includes(searchText) || description.includes(searchText);
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
