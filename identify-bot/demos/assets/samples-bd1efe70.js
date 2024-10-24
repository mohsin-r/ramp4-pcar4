import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper-f8bb4967.js';

var SAMPLE_KEY = 'sample';
            var currentUrl = new URL(window.location.href);

            document
                .getElementById('selectConfig')
                .addEventListener('change', onConfigSelect);
            initialLoad();

            async function loadScript(scriptName) {
                // vite dynamic import. requires assigning to a variable to be recognized.
                await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"./starter-scripts/alternate.js": () => __vitePreload(() => import('./alternate-4c254994.js'),true?[]:void 0,import.meta.url),"./starter-scripts/basemap-fail.js": () => __vitePreload(() => import('./basemap-fail-83cf79a3.js'),true?["./basemap-fail-83cf79a3.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/basemap-only.js": () => __vitePreload(() => import('./basemap-only-1e711326.js'),true?["./basemap-only-1e711326.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/basemaps.js": () => __vitePreload(() => import('./basemaps-1ba33969.js'),true?["./basemaps-1ba33969.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/cam.js": () => __vitePreload(() => import('./cam-29e7b453.js'),true?["./cam-29e7b453.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/cccs.js": () => __vitePreload(() => import('./cccs-c2405957.js'),true?["./cccs-c2405957.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/cesi.js": () => __vitePreload(() => import('./cesi-5a5e14ba.js'),true?["./cesi-5a5e14ba.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/cumulative-effects.js": () => __vitePreload(() => import('./cumulative-effects-1999b558.js'),true?["./cumulative-effects-1999b558.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/custom-appbar-button.js": () => __vitePreload(() => import('./custom-appbar-button-3372fde2.js'),true?["./custom-appbar-button-3372fde2.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/custom-arrow.js": () => __vitePreload(() => import('./custom-arrow-d08e0eab.js'),true?["./custom-arrow-d08e0eab.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/custom-grid-buttons.js": () => __vitePreload(() => import('./custom-grid-buttons-096b76ac.js'),true?["./custom-grid-buttons-096b76ac.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/custom-overviewmap.js": () => __vitePreload(() => import('./custom-overviewmap-06c8857f.js'),true?["./custom-overviewmap-06c8857f.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/custom-renderer.js": () => __vitePreload(() => import('./custom-renderer-31d3fde7.js'),true?["./custom-renderer-31d3fde7.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/custom-store.js": () => __vitePreload(() => import('./custom-store-3d8d77c4.js'),true?["./custom-store-3d8d77c4.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css","./custom-store-6f829547.css"]:void 0,import.meta.url),"./starter-scripts/custom-symbology.js": () => __vitePreload(() => import('./custom-symbology-77aa46af.js'),true?["./custom-symbology-77aa46af.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/delayed-start.js": () => __vitePreload(() => import('./delayed-start-d7a12b7e.js'),true?["./delayed-start-d7a12b7e.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/disabled-options.js": () => __vitePreload(() => import('./disabled-options-f9eaaca3.js'),true?["./disabled-options-f9eaaca3.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/error-layers.js": () => __vitePreload(() => import('./error-layers-70c072c1.js'),true?["./error-layers-70c072c1.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/exclusive-fields.js": () => __vitePreload(() => import('./exclusive-fields-6a46e56e.js'),true?["./exclusive-fields-6a46e56e.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/export-custom-renderer.js": () => __vitePreload(() => import('./export-custom-renderer-99afa944.js'),true?["./export-custom-renderer-99afa944.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/fog-hilight.js": () => __vitePreload(() => import('./fog-hilight-e991ebf9.js'),true?["./fog-hilight-e991ebf9.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/form.js": () => __vitePreload(() => import('./form-8f5201cd.js'),true?["./form-8f5201cd.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/geosearch-filtered.js": () => __vitePreload(() => import('./geosearch-filtered-6ce1062f.js'),true?["./geosearch-filtered-6ce1062f.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/geosearch.js": () => __vitePreload(() => import('./geosearch-962535df.js'),true?["./geosearch-962535df.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/grid-config.js": () => __vitePreload(() => import('./grid-config-624ca294.js'),true?["./grid-config-624ca294.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/grid-custom-template.js": () => __vitePreload(() => import('./grid-custom-template-bc33affc.js'),true?["./grid-custom-template-bc33affc.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/grid.js": () => __vitePreload(() => import('./grid-cc36aff5.js'),true?["./grid-cc36aff5.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/help.js": () => __vitePreload(() => import('./help-3a7f3900.js'),true?["./help-3a7f3900.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/info-section.js": () => __vitePreload(() => import('./info-section-98e8b353.js'),true?["./info-section-98e8b353.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/lambert.js": () => __vitePreload(() => import('./lambert-6ee76506.js'),true?["./lambert-6ee76506.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/layer-metadata.js": () => __vitePreload(() => import('./layer-metadata-eb55527a.js'),true?["./layer-metadata-eb55527a.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/legend.js": () => __vitePreload(() => import('./legend-611ee3da.js'),true?["./legend-611ee3da.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/main.js": () => __vitePreload(() => import('./main-7ec6385b.js'),true?["./main-7ec6385b.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/map-image-layer.js": () => __vitePreload(() => import('./map-image-layer-ad8fad5f.js'),true?["./map-image-layer-ad8fad5f.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/mapnav.js": () => __vitePreload(() => import('./mapnav-371cf424.js'),true?["./mapnav-371cf424.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/merge-grid.js": () => __vitePreload(() => import('./merge-grid-1597d8ee.js'),true?["./merge-grid-1597d8ee.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/multi-instances.js": () => __vitePreload(() => import('./multi-instances-879c92a1.js'),true?["./multi-instances-879c92a1.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/multi-ramp.js": () => __vitePreload(() => import('./multi-ramp-9d99b077.js'),true?["./multi-ramp-9d99b077.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/no-layers.js": () => __vitePreload(() => import('./no-layers-20069c89.js'),true?["./no-layers-20069c89.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/offscale-layer.js": () => __vitePreload(() => import('./offscale-layer-523b6335.js'),true?["./offscale-layer-523b6335.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/old-main.js": () => __vitePreload(() => import('./old-main-8c8a6d61.js'),true?["./old-main-8c8a6d61.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/panel-party.js": () => __vitePreload(() => import('./panel-party-c81041d1.js'),true?["./panel-party-c81041d1.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/perm-filter.js": () => __vitePreload(() => import('./perm-filter-7ba8b02b.js'),true?["./perm-filter-7ba8b02b.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/r2-config-upgraded.js": () => __vitePreload(() => import('./r2-config-upgraded-06639047.js'),true?["./r2-config-upgraded-06639047.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/ramp-basic.js": () => __vitePreload(() => import('./ramp-basic-488305fc.js'),true?["./ramp-basic-488305fc.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/section-item.js": () => __vitePreload(() => import('./section-item-64913b3a.js'),true?["./section-item-64913b3a.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/simple-data.js": () => __vitePreload(() => import('./simple-data-702a416e.js'),true?["./simple-data-702a416e.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/simple-feature.js": () => __vitePreload(() => import('./simple-feature-c8d64ad4.js'),true?["./simple-feature-c8d64ad4.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/simple-file.js": () => __vitePreload(() => import('./simple-file-a1e19731.js'),true?["./simple-file-a1e19731.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/simple-mil.js": () => __vitePreload(() => import('./simple-mil-85933d6e.js'),true?["./simple-mil-85933d6e.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/teleport-details.js": () => __vitePreload(() => import('./teleport-details-ee36bd26.js'),true?["./teleport-details-ee36bd26.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/teleport-wet.js": () => __vitePreload(() => import('./teleport-wet-aa551201.js'),true?["./teleport-wet-aa551201.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/teleport.js": () => __vitePreload(() => import('./teleport-3809e2d5.js'),true?["./teleport-3809e2d5.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/tree-grow.js": () => __vitePreload(() => import('./tree-grow-304f0062.js'),true?["./tree-grow-304f0062.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/wet.js": () => __vitePreload(() => import('./wet-ba116cd5.js'),true?["./wet-ba116cd5.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url),"./starter-scripts/wms-layer.js": () => __vitePreload(() => import('./wms-layer-0383fde3.js'),true?["./wms-layer-0383fde3.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css"]:void 0,import.meta.url)})), `./starter-scripts/${scriptName}.js`);
            }

            function onConfigSelect(event) {
                // refresh page with new selection in URL
                currentUrl.searchParams.set(
                    SAMPLE_KEY,
                    document.getElementById('selectConfig').selectedIndex + 1
                );
                window.location.href = currentUrl;
            }

            function initialLoad() {
                var params = new URLSearchParams(currentUrl.search);
                var sampleIndex = params.get(SAMPLE_KEY) - 1;
                var selectElem = document.getElementById('selectConfig');
                if (
                    params.has(SAMPLE_KEY) &&
                    sampleIndex >= 1 &&
                    selectElem.item(sampleIndex)
                ) {
                    selectElem.options[sampleIndex].selected = 'selected';
                    loadScript(selectElem.options[sampleIndex].value);
                } else {
                    loadScript(selectElem.options[0].value);
                }
            }