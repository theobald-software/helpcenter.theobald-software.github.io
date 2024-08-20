
document.addEventListener('DOMContentLoaded', async () => {
	const modal = document.getElementById('modal');
	const modalContent = document.getElementById('modalBody');
	const modalHeader = document.getElementById('modalHeader');
	const span = document.getElementsByClassName('close')[0];
	let originalData = [];

	// Function to open the modal
	const openModal = (headerContent, bodyContent) => {
		modalHeader.innerHTML = headerContent;
		modalContent.innerHTML = bodyContent;
		modal.style.display = 'block';
	};

	// Function to close the modal
	const closeModal = () => {
		modal.style.display = 'none';
		const urlSearchParams = new URLSearchParams(window.location.search);
		urlSearchParams.delete('product');
		urlSearchParams.delete('version');
		urlSearchParams.delete('changeIndex');
		const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
		window.history.pushState({}, '', newUrl);
	};

	span.onclick = () => {
		closeModal();
	};

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
			const changeIndex = event.target.dataset.changeIndex;
			const parsedContent = parseMarkdown(releaseNote);
			const headerContent = `<h2>${productName} - Version ${version}</h2>`;
			openModal(headerContent, parsedContent);

			const urlSearchParams = new URLSearchParams(window.location.search);
			urlSearchParams.set('product', productName);
			urlSearchParams.set('version', version);
			urlSearchParams.set('changeIndex', changeIndex);
			const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
			window.history.pushState({}, '', newUrl);
		}
	});

	// Function to fetch data from catalog.json
	const fetchData = async () => {
		try {
			const response = await fetch('../assets/catalog.json');
			const data = await response.json();
			originalData = data;
			return data;
		} catch (error) {
			console.error('Error fetching catalog data:', error);
			return [];
		}
	};

	const renderRow = (item) => {
		const rows = [];
		const hasMultipleChanges = item.Changes.length > 1;

		const summaryRow = document.createElement('tr');
		summaryRow.innerHTML = `
			<td>${item.Version}</td>
			<td>${item.LegacyReleaseDate.split(' ')[0]}</td>
			<td>${hasMultipleChanges ? 'Multiple changes' : `${item.Changes[0].Component} <br> ${item.Changes[0].Product ? `(${item.Changes[0].Product})` : ''}`}</td>
			<td class='${item.IsBreaking ? "breaking" : ""}${item.IsCritical ? " critical" : ""}'>
			${item.IsBreaking ? '<img src="../assets/images/logos/link_broken.svg" alt="breaking-change" title="Breaking Change: This update affects (breaks) your existing extraction setup.  Be sure to test this update on a QA environment, before updating your production environment. Read the Release Note to understand if and how your extractions are affected by this update." style="width:20px;">' : ''}
			${item.IsCritical ? '<img src="../assets/images/logos/critical.svg" alt="critical-change" title="Critical Change: This is an important software release. Installing this update is highly recommended." style="width:20px;">' : ''}
			</td>
			<td>${!hasMultipleChanges ? item.Changes[0].Message : ''}</td>
		`;
		rows.push(summaryRow);

		if (hasMultipleChanges) {
			item.Changes.forEach((change, index) => {
				const row = document.createElement('tr');
				row.innerHTML = `
					<td></td>
					<td></td>
					<td>${change.Component} <br> (${change.Product})</td>
					<td></td>
					<td>${change.Message} ${change.ReleaseNote ? `<button class="show-more" data-release-note="${encodeURIComponent(change.ReleaseNote)}" data-product-name="${change.Product}" data-version="${item.Version}" data-change-index="${index}" style="cursor: pointer; color: #ED1A33;">(Open Release note)</button>` : ''}</td>
				`;
				rows.push(row);
			});
		}

		return rows;
	};

	const renderTable = (dataToDisplay) => {
		const tableBody = document.getElementById('catalogBody');
		tableBody.innerHTML = '';
		dataToDisplay.forEach(item => {
			const rows = renderRow(item);
			rows.forEach(row => tableBody.appendChild(row));
		});
	};

	const applyFilter = (data, filterValue) => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		if (filterValue) {
			urlSearchParams.set('filter', filterValue);
		} else {
			urlSearchParams.delete('filter');
		}
		const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
		window.history.pushState({}, '', newUrl);

		if (!filterValue) return data;

		const comparisonOperator = filterValue.charAt(0);
		let versionNumber = filterValue.slice(1).trim();

		if (filterValue.toLowerCase() === 'critical') {
			return data.filter(item => item.IsCritical);
		} else if (filterValue.toLowerCase() === 'breaking') {
			return data.filter(item => item.IsBreaking);
		} else if (comparisonOperator === '>' || comparisonOperator === '<') {
			return data.filter(item => {
				if (!versionNumber.includes('.')) {
					versionNumber += '.0'; // Handle cases like '>5' by appending '.0'
				}
				return comparisonOperator === '>'
					? compareVersions(item.Version, versionNumber) > 0
					: compareVersions(item.Version, versionNumber) < 0;
			});
		} else {
			return data.filter(item => {
				const searchText = filterValue.toLowerCase();
				return (
					item.Version.includes(searchText) ||
					item.LegacyReleaseDate.split(' ')[0].includes(searchText) ||
					item.Changes.some(change =>
						change.Component.toLowerCase().includes(searchText) ||
						change.Message.toLowerCase().includes(searchText) ||
						(change.Product && change.Product.toLowerCase().includes(searchText))
					)
				);
			});
		}
	};

	const compareVersions = (version1, version2) => {
		const parts1 = version1.split('.').map(part => parseInt(part, 10));
		const parts2 = version2.split('.').map(part => parseInt(part, 10));

		for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
			const part1 = parts1[i] || 0;
			const part2 = parts2[i] || 0;
			if (part1 > part2) return 1;
			if (part1 < part2) return -1;
		}
		return 0;
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
	};

	const openModalFromURLParams = (data) => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const productName = urlSearchParams.get('product');
		const version = urlSearchParams.get('version');
		const changeIndex = urlSearchParams.get('changeIndex');

		if (productName && version && changeIndex !== null) {
			data.forEach(item => {
				if (item.Version === version && item.Changes[changeIndex]) {
					const change = item.Changes[changeIndex];
					if (change.Product === productName && change.ReleaseNote) {
						const releaseNote = decodeURIComponent(change.ReleaseNote);
						const parsedContent = parseMarkdown(releaseNote);
						const headerContent = `<h2>${productName} - Version ${version}</h2>`;
						openModal(headerContent, parsedContent);
					}
				}
			});
		}
	};

	const data = await fetchData();
	const urlSearchParams = new URLSearchParams(window.location.search);
	const filterValue = urlSearchParams.get('filter');

	let filteredData = data;
	if (filterValue) {
		filteredData = applyFilter(data, filterValue);
	}

	renderTable(filteredData);

	const filterInput = document.querySelector('.input-search');
	if (filterInput) {
		filterInput.value = filterValue || '';
		filterInput.addEventListener('input', debounce(() => {
			const newFilterValue = filterInput.value.toLowerCase();
			const newFilteredData = applyFilter(originalData, newFilterValue);
			renderTable(newFilteredData);
		}, 300));
	}

	openModalFromURLParams(filteredData);
});

const debounce = (func, delay) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
};