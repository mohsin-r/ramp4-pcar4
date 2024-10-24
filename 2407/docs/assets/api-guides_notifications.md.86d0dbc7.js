import{_ as a,o as n,c as o,S as e}from"./chunks/framework.cd2f8eb4.js";const F=JSON.parse('{"title":"Notification API","description":"","frontmatter":{},"headers":[],"relativePath":"api-guides/notifications.md","filePath":"api-guides/notifications.md"}'),l={name:"api-guides/notifications.md"};function p(t,s,r,c,i,D){return n(),o("div",null,s[0]||(s[0]=[e(`<h1 id="notification-api" tabindex="-1">Notification API <a class="header-anchor" href="#notification-api" aria-label="Permalink to &quot;Notification API&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The notifications API provides the ability to alert users to errors, warnings or general info about what is happening in the app.</p><h2 id="showing-a-basic-notification" tabindex="-1">Showing a basic notification <a class="header-anchor" href="#showing-a-basic-notification" aria-label="Permalink to &quot;Showing a basic notification&quot;">​</a></h2><p>As stated above there are three types of notifications; <code>error</code>, <code>warning</code> and <code>info</code>.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">notify</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The map has been created!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">notify</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Could not connect to the server for fixture A, try reloading the page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">notify</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Slow response times from the server</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>In real cases errors and warnings would probably not be right after the instance creation and would be in a callback or some error handling code.</p><h2 id="grouping-notifications" tabindex="-1">Grouping notifications <a class="header-anchor" href="#grouping-notifications" aria-label="Permalink to &quot;Grouping notifications&quot;">​</a></h2><p>The notifications API also allows the creation of groups</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> serverErrors </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">notify</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addGroup</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">server-errors</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Some servers seem to be having issues</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>After creating a group you can show messages in them</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">serverErrors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Could not connect to server A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">serverErrors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">No response from server B in 10 seconds</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,12)]))}const A=a(l,[["render",p]]);export{F as __pageData,A as default};
