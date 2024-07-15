
document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('modal');
	const modalContent = document.getElementById('modalBody');
	const modalHeader = document.getElementById('modalHeader');
	const span = document.getElementsByClassName('close')[0];

	// Function to open the modal
	const openModal = (headerContent, bodyContent) => {
		modalHeader.innerHTML = headerContent;
		modalContent.innerHTML = bodyContent;
		modal.style.display = 'block';
	};

	// Function to close the modal
	const closeModal = () => {
		modal.style.display = 'none';
		// Update the URL to remove modal parameters
		const urlSearchParams = new URLSearchParams(window.location.search);
		urlSearchParams.delete('product');
		urlSearchParams.delete('version');
		const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
		window.history.pushState({}, '', newUrl);
	};

	// When the user clicks on <span> (x), close the modal
	span.onclick = () => {
		closeModal();
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = (event) => {
		if (event.target == modal) {
			closeModal();
		}
	};

	document.getElementById('catalogTable').addEventListener('click', (event) => {
		if (event.target.classList.contains('show-more')) {
			const releaseNote = decodeURIComponent(event.target.dataset.releaseNote);
			const productName = event.target.dataset.productName;
			const version = event.target.dataset.version;
			const parsedContent = parseMarkdown(releaseNote);
			const headerContent = `<h1>${productName} - Version ${version}</h1>`;
			openModal(headerContent, parsedContent);

			const urlSearchParams = new URLSearchParams(window.location.search);
			urlSearchParams.set('product', productName);
			urlSearchParams.set('version', version);
			const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
			window.history.pushState({}, '', newUrl);
		}
	});

	// Function to fetch data from catalog.json
	const fetchData = async () => {
		try {
			const response = await fetch('../assets/catalog.json');
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error fetching catalog data:', error);
			return [];
		}
	};

	const renderRow = (item) => {
		const rows = item.Changes.map(change => {
			const row = document.createElement('tr');

			row.innerHTML = `
          <td>${item.Version}</td>
          <td>${item.LegacyReleaseDate.split(' ')[0]}</td>
          <td>${change.Component} <br>(${change.Product})</td>
          <td style="width:5%;text-align:center;">${item.IsBreaking ? '<img src="../assets/images/logos/link_broken.svg" alt="breaking-change" title="Breaking Change: This update affects (breaks) your existing extraction setup.  Be sure to test this update on a QA environment, before updating your production environment. Read the Release Note to understand if and how your extractions are affected by this update." style="width:20px;"> ' : ' '}${item.IsCritical ? '<img src="../assets/images/logos/critical.svg" alt="critical-change" title="Critical Change: This is an important software release. Installing this update is highly recommended." style="width:20px;">' : ' '}</td>
		  <td>${item.IsBreaking ? 'Breaking change: ' : ''}${item.IsCritical ? 'Critical change: ' : ''}
		  ${change.Message} ${change.ReleaseNote ? `<br> <button class="show-more" data-release-note="${encodeURIComponent(change.ReleaseNote)}" data-product-name="Xtract for Alteryx" data-version="${item.Version}" style="cursor: pointer; color: #ED1A33;">(Release Notes)</button>` : ''}</td>
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
		openModalFromURLParams(data);
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
			const descriptionCell = row.querySelector('td:nth-child(5)');
			const componentCell = row.querySelector('td:nth-child(3)');
			const releaseDateCell = row.querySelector('td:nth-child(2)');
			const version = versionCell.textContent.trim();
			const description = descriptionCell.textContent.trim().toLowerCase();
			const component = descriptionCell.textContent.trim().toLowerCase();
			const releaseDate = releaseDateCell.textContent.trim().toLowerCase();
			const searchText = filterValue.toLowerCase();

			let displayRow = false;

			if (comparisonOperator === '>') {
				displayRow = compareVersions(version, versionNumber) > 0;
			} else if (comparisonOperator === '<') {
				displayRow = compareVersions(version, versionNumber) < 0;
			} else {
				displayRow = version.includes(searchText) || description.includes(searchText) || component.includes(searchText) || releaseDate.includes(searchText);
			}

			row.style.display = displayRow ? '' : 'none';
		});
	};

	const openModalFromURLParams = (data) => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const productName = urlSearchParams.get('product');
		const version = urlSearchParams.get('version');

		if (productName && version) {
			data.forEach(item => {
				if (item.Version === version) {
					item.Changes.forEach(change => {
						if (change.Product === productName && change.ReleaseNote) {
							const releaseNote = decodeURIComponent(change.ReleaseNote);
							const parsedContent = parseMarkdown(releaseNote);
							const headerContent = `<h2>${productName} - Version ${version}</h2>`;
							openModal(headerContent, parsedContent);
						}
					});
				}
			});
		}
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
});
