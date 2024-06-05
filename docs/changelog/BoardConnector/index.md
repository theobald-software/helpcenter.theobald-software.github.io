---
title: BoardConnector
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
    <!-- Placeholder rows -->
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.7.1.0</td>
        <td class="placeholder-cell">2024-05-24</td>
        <td class="placeholder-cell">Designer</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a bug that would show incorrect information regarding extractions last run</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.7.0.2	</td>
        <td class="placeholder-cell">2024-05-21</td>
        <td class="placeholder-cell">General</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a bug where refreshing the metadata without any objects selected for extraction would cause an unexpected error.</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">2024-04-25</td>
        <td class="placeholder-cell">2024-04-25</td>
        <td class="placeholder-cell">TableCDC</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Delta extractions now only fetch data up to the maximum log table sequence number at the start of the extraction to avoid cursor concurrency conflicts with simultaneous inserts. Update of /THEO/CDC required.</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.4.1.0</td>
        <td class="placeholder-cell">2024-04-11	</td>
        <td class="placeholder-cell">Destinations</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Json Destination: Implement file split functionality. (Open Release note)</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.4.1.4</td>
        <td class="placeholder-cell">2024-04-16	</td>
        <td class="placeholder-cell">	Report</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a visual bug where when scrolling the selection screen some parameters would have values from other parameters displayed. Fixed a bug where double clicking the 'Load Preview' button would cause an error.</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.2.3.14</td>
        <td class="placeholder-cell">2024-01-10</td>
        <td class="placeholder-cell">General</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a bug where the server would try to read the SAP password from json file even though SSO is enabled and fail if none is found. Fixed a bug where destination settings would not be applied correctly when switching the parameter with the "destination" parameter in a web API call.</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.2.2.0</td>
        <td class="placeholder-cell">2023-12-07</td>
        <td class="placeholder-cell">General</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a bug where custom parameters in the finalization step in snowflake destinations would not be evaluated. The columns in the Designer's main view now allow more flexibility when resizing. The run window does not show an error anymore when trying to abort an extraction, which just finished.</td>
      </tr>
      <!-- Placeholder rows -->
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.7.1.0</td>
        <td class="placeholder-cell">2024-05-24</td>
        <td class="placeholder-cell">Designer</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a bug that would show incorrect information regarding extractions last run</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.7.0.2</td>
        <td class="placeholder-cell">2024-05-21</td>
        <td class="placeholder-cell">General</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a bug where refreshing the metadata without any objects selected for extraction would cause an unexpected error.</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">2024-04-25</td>
        <td class="placeholder-cell">2024-04-25</td>
        <td class="placeholder-cell">TableCDC</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Delta extractions now only fetch data up to the maximum log table sequence number at the start of the extraction to avoid cursor concurrency conflicts with simultaneous inserts. Update of /THEO/CDC required.</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.4.1.0</td>
        <td class="placeholder-cell">2024-04-11	</td>
        <td class="placeholder-cell">Destinations</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Json Destination: Implement file split functionality. (Open Release note)</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.4.1.4</td>
        <td class="placeholder-cell">2024-04-16	</td>
        <td class="placeholder-cell">Report</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a visual bug where when scrolling the selection screen some parameters would have values from other parameters displayed. Fixed a bug where double clicking the 'Load Preview' button would cause an error.</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.2.3.14</td>
        <td class="placeholder-cell">2024-01-10</td>
        <td class="placeholder-cell">General</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a bug where the server would try to read the SAP password from json file even though SSO is enabled and fail if none is found. Fixed a bug where destination settings would not be applied correctly when switching the parameter with the "destination" parameter in a web API call.</td>
      </tr>
      <tr class="placeholder-row">
        <td class="placeholder-cell">6.2.2.0</td>
        <td class="placeholder-cell">2023-12-07</td>
        <td class="placeholder-cell">General</td>
        <td class="placeholder-cell"></td>
        <td class="placeholder-cell">Fixed a bug where custom parameters in the finalization step in snowflake destinations would not be evaluated. The columns in the Designer's main view now allow more flexibility when resizing. The run window does not show an error anymore when trying to abort an extraction, which just finished.</td>
      </tr>
  </tbody>
</table>

<!-- Modal HTML -->
<div id="modal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div id="modalBody"></div>
  </div>
</div>


