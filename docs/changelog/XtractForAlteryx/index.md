---
title: Xtract for Alteryx
---

--8<-- "version-history/version-history-header.md"


<div style="display:flex">
  <input class="input-search"
    id="search"
    type="text"
    placeholder="🔍 Search (e.g., 'breaking', 'critical', '1.2.3', '>1.2.3', ...)"

  />

  <button class="btn-clear md-button md-button--primary"
    _="on click set #search.value to '' then trigger keyup on #search">Clear</button>
</div>

<table id="catalogTable" style="table-layout: auto;">
  <thead>
    <tr>
      <th>Version</th>
      <th style="width:12%;">Release Date</th>
      <th>Component</th>
	  <th style="width:5%;text-align:center;">Impact</th>
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


