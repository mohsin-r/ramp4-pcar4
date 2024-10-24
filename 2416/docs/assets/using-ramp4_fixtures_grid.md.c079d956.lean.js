import{_ as a,o as n,c as s,S as l}from"./chunks/framework.9cf79a7d.js";const u=JSON.parse('{"title":"Grid","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/fixtures/grid.md","filePath":"using-ramp4/fixtures/grid.md"}'),t={name:"using-ramp4/fixtures/grid.md"};function o(i,e,r,p,c,d){return n(),s("div",null,e[0]||(e[0]=[l(`<h1 id="grid" tabindex="-1">Grid <a class="header-anchor" href="#grid" aria-label="Permalink to &quot;Grid&quot;">​</a></h1><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h2><p>The grid panel contains multiple different components. Listed below are the most important ones, along with a brief description of what they do:</p><h3 id="the-grid-table" tabindex="-1">The Grid Table <a class="header-anchor" href="#the-grid-table" aria-label="Permalink to &quot;The Grid Table&quot;">​</a></h3><p>The grid table is the main component of the grid fixture. It contains a row for each feature on the layer. The grid columns correspond to the attributes that belong to the features. <strong>Note</strong>: features will only appear on the grid if they are currently visible</p><h3 id="global-search-and-column-filters" tabindex="-1">Global Search and Column Filters <a class="header-anchor" href="#global-search-and-column-filters" aria-label="Permalink to &quot;Global Search and Column Filters&quot;">​</a></h3><p>The global search and column filters allow the user to display smaller subsets of data within the table. See the <a href="#global-search">global search</a> and <a href="#column-filters">column filters</a>.</p><h3 id="scroll-and-filter-status" tabindex="-1">Scroll and Filter Status <a class="header-anchor" href="#scroll-and-filter-status" aria-label="Permalink to &quot;Scroll and Filter Status&quot;">​</a></h3><p>The scroll and filter status is located in the upper left corner of the grid panel. It displays the range of rows that are currently visible on the table, and the total number of records that are in the table. If any filters are applied to the grid, the number of filtered rows will be displayed instead of the total number. The range of displayed rows updates as the user scrolls up or down in the table.</p><h3 id="zoom-and-details-buttons" tabindex="-1">Zoom and Details Buttons <a class="header-anchor" href="#zoom-and-details-buttons" aria-label="Permalink to &quot;Zoom and Details Buttons&quot;">​</a></h3><p>Each row in the grid table contains a zoom and details button. The zoom button centers the map on the feature in the row, and the details button opens the details panel of the feature.</p><h2 id="controls" tabindex="-1">Controls <a class="header-anchor" href="#controls" aria-label="Permalink to &quot;Controls&quot;">​</a></h2><p>Various controls have been added to the grid for user convenience.</p><h3 id="copy-text" tabindex="-1">Copy Text <a class="header-anchor" href="#copy-text" aria-label="Permalink to &quot;Copy Text&quot;">​</a></h3><p>Any cell with text in it can be copied to the clipboard by double clicking on the cell, or for keyboard users, by navigating to the cell and pressing the control and c keys. A tooltip will appear to indicate that the text has been successfully copied.</p><h3 id="show-hide-columns" tabindex="-1">Show/Hide Columns <a class="header-anchor" href="#show-hide-columns" aria-label="Permalink to &quot;Show/Hide Columns&quot;">​</a></h3><p>A dropdown menu located in the upper right corner of the grid panel, labeled <code>Columns</code>. This allows the user to hide unwanted columns from the table. Columns that are visible have a checkmark displayed beside them.</p><h3 id="clear-search-and-filters" tabindex="-1">Clear Search and Filters <a class="header-anchor" href="#clear-search-and-filters" aria-label="Permalink to &quot;Clear Search and Filters&quot;">​</a></h3><p>A button located in the upper right corner of the grid panel. This clears the global search and removes all filters currently applied to the columns.</p><h3 id="apply-filters-to-map" tabindex="-1">Apply Filters to Map <a class="header-anchor" href="#apply-filters-to-map" aria-label="Permalink to &quot;Apply Filters to Map&quot;">​</a></h3><p>A control located in the upper right corner of the grid panel, within the <code>More</code> dropdown menu. When this control is enabled, features on the map are in sync with filtered features on the grid table.</p><h3 id="show-hide-column-filters" tabindex="-1">Show/Hide Column Filters <a class="header-anchor" href="#show-hide-column-filters" aria-label="Permalink to &quot;Show/Hide Column Filters&quot;">​</a></h3><p>A control located in the upper right corner of the grid panel, within the <code>More</code> dropdown menu. Pressing this button toggles the <a href="#column-filters">column filters</a> on and off. <strong>Note</strong>: turning the column filter display off will not remove any column filters currently applied to the table.</p><h3 id="toggle-extent-filter" tabindex="-1">Toggle Extent Filter <a class="header-anchor" href="#toggle-extent-filter" aria-label="Permalink to &quot;Toggle Extent Filter&quot;">​</a></h3><p>A control located in the upper right corner of the grid panel, within the <code>More</code> dropdown menu. When enabled, the table only displays features within the current extent.</p><h3 id="re-order-columns" tabindex="-1">Re-Order Columns <a class="header-anchor" href="#re-order-columns" aria-label="Permalink to &quot;Re-Order Columns&quot;">​</a></h3><p>Each column in the table has a pair of buttons beside it, labeled <code>&lt;</code> and <code>&gt;</code>. Pressing either of these buttons will shift the column to the left or right, respectively. You cannot move the rightmost column to the right, or the leftmost column to the left.</p><h3 id="sort-columns" tabindex="-1">Sort Columns <a class="header-anchor" href="#sort-columns" aria-label="Permalink to &quot;Sort Columns&quot;">​</a></h3><p>Clicking on the column header will switch it between sorting methods. There are three sorting methods: no sorting, ascending order, and descending order.</p><ul><li>If there is an upwards arrow beside the column name, the column is being sorted in ascending order.</li><li>If there is a downwards arrow beside the column name, the column is being sorted in descending order.</li><li>If there is no arrow beside the column name, no sorting is being applied to the column (this is the default).</li></ul><h2 id="global-search" tabindex="-1">Global Search <a class="header-anchor" href="#global-search" aria-label="Permalink to &quot;Global Search&quot;">​</a></h2><p>The global search is located in the panel header. It is a text filter that applies to <em>all columns</em> in the table. It will display any row with an entry that matches the entered text.</p><h2 id="column-filters" tabindex="-1">Column Filters <a class="header-anchor" href="#column-filters" aria-label="Permalink to &quot;Column Filters&quot;">​</a></h2><p>The grid table currently supports four different types of column filters. If the grid panel is closed, any column filters that are applied to the table will be re-applied when it is re-opened.</p><ul><li><strong>Text Filter</strong> Represented by a text input box. Displays entries that contain matching text.</li><li><strong>Number Filter</strong> Represented by two input boxes labelled <code>min</code> and <code>max</code>. Only supports numbers. <ul><li>If only the minimum is entered, the table displays all values <em>greater than or equal to</em> the minimum value.</li><li>If only the maximum is entered, the table displays all values <em>less than or equal to</em> the maximum value.</li><li>If both the minimum and maximum are entered, the table displays all values in between the two numbers (including the minimum and maximum themselves).</li></ul></li><li><strong>Selector Filter</strong> Represented by a dropdown field. Displays all entries that match the selected value. The selector filter generates the available options automatically by creating an option for each unique row value.</li><li><strong>Date Filter</strong> Represented by two date input fields. The date filter works in the same fashion as the number filter: <ul><li>If only the minimum is entered, the table displays all dates <em>later than or on</em> the minimum date.</li><li>If only the maximum is entered, the table displays all dates <em>earlier than or on</em> the maximum date.</li><li>If both the minimum and maximum are entered, the table displays all dates <em>in between or on</em> the dates.</li></ul></li></ul><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>Like other fixtures, the grid has multiple options that can be adjusted through the configuration file. Since the grid settings are layer specific, the configuration resides in the fixtures property of layer config objects.</p><ul><li><code>title: string</code>, renders a custom title above the grid.</li><li><code>columns: Object[]</code>, an array that specifies how the columns of the grid are defined. Its configuration is defined under <a href="#column-configuration">column configuration</a>.</li><li><code>columnMetadata: Object</code>, an object specifying options for the columns displayed on the grid</li><li><code>search: boolean</code>, shows/hides the <a href="#global-search">global search bar</a>.</li><li><code>searchFilter: string</code>, provides an initial filter in the global search bar</li><li><code>showFilter: boolean</code>, shows/hides the <a href="#show-hide-column-filters">column filters</a> on grid load</li><li><code>applyToMap: boolean</code>, enables/disables the <a href="#apply-filters-to-map">Apply to Map filter</a> by default</li><li><code>filterByExtent: boolean</code>, enables/disables the <a href="#toggle-extent-filter">Extent filter</a> by default</li></ul><p>An example of a layer with a configured grid is below</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const config = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    layers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            ... layer configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">            fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                grid: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    title: &#39;Datatable for this layer&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    showFilter: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    searchFilter: &#39;Alberta&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="column-configuration" tabindex="-1">Column Configuration <a class="header-anchor" href="#column-configuration" aria-label="Permalink to &quot;Column Configuration&quot;">​</a></h3><p>Every column in the datagrid can be configured separately.</p><ul><li><code>field: string</code>, a unique column identifier that aligns with attribute field name</li><li><code>title: string</code>, applies a custom title to the column</li><li><code>visible: boolean</code>, shows/hides the column on the grid by default</li><li><code>width: number</code>, sets the width of the column</li><li><code>sort: string</code>, determines the default order of the column, which can be unsorted, ascending, or descending</li><li><code>searchable: boolean</code>, shows/hides the column filter</li><li><code>filter: Object</code>, specifies filter values for the column <ul><li><code>type: string</code>, specifies the datatype of the column (string, selector, number, date)</li><li><code>value: string</code>, specifies the default filter value for string and selector types</li><li><code>min: string | number</code>, specifies the default lower bound filter value for number and date types</li><li><code>max: string | number</code>, specifies the default upper bound filter value for number and date types</li><li><code>static: boolean</code>, enables/disables filter input</li></ul></li><li><code>template: string</code>, specifies a custom Vue component name to use as the cell renderer for the column. Does not apply to the OBJECTID column.</li></ul><p>An example of a datatable with a single configured column is below</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const config = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    layers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            ... layer configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">            fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                grid: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    columns: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                        {</span></span>
<span class="line"><span style="color:#A6ACCD;">                            field: &#39;station_id__id_station&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            title: &#39;Station ID&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            width: 500,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            filter: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                                type: &#39;string&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                value: 6020384,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                static: true</span></span>
<span class="line"><span style="color:#A6ACCD;">                            }</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="columnmetadata-configuration" tabindex="-1">columnMetadata Configuration <a class="header-anchor" href="#columnmetadata-configuration" aria-label="Permalink to &quot;columnMetadata Configuration&quot;">​</a></h3><p>The columnMetadata object for a grid has the following properties:</p><ul><li><code>exclusiveColumns: boolean</code>, this specifies whether to only make availible the columns specified in the grid when true, and to make all columns availible when false. By default, this is set to false.</li></ul><p>An example of a datatable with the exclusiveColumns flag set</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const config = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    layers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            ... layer configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">            fixtures: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                grid: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    columnMetadata: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        exclusiveColumns: true</span></span>
<span class="line"><span style="color:#A6ACCD;">                    },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    columns: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                        {</span></span>
<span class="line"><span style="color:#A6ACCD;">                            field: &#39;station_id__id_station&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            title: &#39;Station ID&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            width: 500,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            filter: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                                type: &#39;string&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                value: 6020384,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                static: true</span></span>
<span class="line"><span style="color:#A6ACCD;">                            }</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="zoom-button-configuration" tabindex="-1">Zoom Button Configuration <a class="header-anchor" href="#zoom-button-configuration" aria-label="Permalink to &quot;Zoom Button Configuration&quot;">​</a></h3><p>It is possible to change the icon for the zoom button in the data grid using the system variable <code>zoomIcon</code>. There are two built-in icons: <code>globe</code> and <code>magnify</code>. If you would like to customize the icon, the variable may be set to any emoji or SVG. Providing this value with a URL will not fetch the remote image.</p><p>Note that if the details fixture is added, the zoom icon will be modified there as well.</p><p>Example usage which sets the zoom icon to the magnifying glass:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    configs: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        en: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            system: { zoomIcon: &#39;magnify&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,55)]))}const m=a(t,[["render",o]]);export{u as __pageData,m as default};
