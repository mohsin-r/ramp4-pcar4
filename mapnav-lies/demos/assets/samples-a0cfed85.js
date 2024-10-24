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
                await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"./starter-scripts/alternate.js": () => __vitePreload(() => import('./alternate-4c254994.js'),true?[]:void 0,import.meta.url),"./starter-scripts/basemap-fail.js": () => __vitePreload(() => import('./basemap-fail-314fdd1d.js'),true?["./basemap-fail-314fdd1d.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/basemap-only.js": () => __vitePreload(() => import('./basemap-only-74bbe1d0.js'),true?["./basemap-only-74bbe1d0.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/basemaps.js": () => __vitePreload(() => import('./basemaps-fe2b9af2.js'),true?["./basemaps-fe2b9af2.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cam.js": () => __vitePreload(() => import('./cam-5ad93ab0.js'),true?["./cam-5ad93ab0.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cccs.js": () => __vitePreload(() => import('./cccs-ba57ef3b.js'),true?["./cccs-ba57ef3b.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cesi.js": () => __vitePreload(() => import('./cesi-5d41304a.js'),true?["./cesi-5d41304a.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/cumulative-effects.js": () => __vitePreload(() => import('./cumulative-effects-81a9ebf6.js'),true?["./cumulative-effects-81a9ebf6.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-appbar-button.js": () => __vitePreload(() => import('./custom-appbar-button-cc269764.js'),true?["./custom-appbar-button-cc269764.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-arrow.js": () => __vitePreload(() => import('./custom-arrow-a7562b7d.js'),true?["./custom-arrow-a7562b7d.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-grid-buttons.js": () => __vitePreload(() => import('./custom-grid-buttons-d31cfcd3.js'),true?["./custom-grid-buttons-d31cfcd3.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-overviewmap.js": () => __vitePreload(() => import('./custom-overviewmap-68ed4f6a.js'),true?["./custom-overviewmap-68ed4f6a.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-renderer.js": () => __vitePreload(() => import('./custom-renderer-f9691a7e.js'),true?["./custom-renderer-f9691a7e.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/custom-store.js": () => __vitePreload(() => import('./custom-store-4df43fe9.js'),true?["./custom-store-4df43fe9.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./custom-store-6f829547.css"]:void 0,import.meta.url),"./starter-scripts/custom-symbology.js": () => __vitePreload(() => import('./custom-symbology-8345efdc.js'),true?["./custom-symbology-8345efdc.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/delayed-start.js": () => __vitePreload(() => import('./delayed-start-157c6249.js'),true?["./delayed-start-157c6249.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/disabled-options.js": () => __vitePreload(() => import('./disabled-options-6523e846.js'),true?["./disabled-options-6523e846.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/error-layers.js": () => __vitePreload(() => import('./error-layers-ef120e1a.js'),true?["./error-layers-ef120e1a.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/exclusive-fields.js": () => __vitePreload(() => import('./exclusive-fields-dc4f61ca.js'),true?["./exclusive-fields-dc4f61ca.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/export-custom-renderer.js": () => __vitePreload(() => import('./export-custom-renderer-bac9c6b3.js'),true?["./export-custom-renderer-bac9c6b3.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/fog-hilight.js": () => __vitePreload(() => import('./fog-hilight-a0e300d1.js'),true?["./fog-hilight-a0e300d1.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/form.js": () => __vitePreload(() => import('./form-80ea4fba.js'),true?["./form-80ea4fba.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/geosearch-filtered.js": () => __vitePreload(() => import('./geosearch-filtered-39afc3e2.js'),true?["./geosearch-filtered-39afc3e2.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/geosearch.js": () => __vitePreload(() => import('./geosearch-8fd28b16.js'),true?["./geosearch-8fd28b16.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/grid-config.js": () => __vitePreload(() => import('./grid-config-d1d2ac54.js'),true?["./grid-config-d1d2ac54.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/grid-custom-template.js": () => __vitePreload(() => import('./grid-custom-template-bfaddb18.js'),true?["./grid-custom-template-bfaddb18.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/grid.js": () => __vitePreload(() => import('./grid-1f5ad65c.js'),true?["./grid-1f5ad65c.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/help.js": () => __vitePreload(() => import('./help-ae3f6f8c.js'),true?["./help-ae3f6f8c.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/info-section.js": () => __vitePreload(() => import('./info-section-f6f89c79.js'),true?["./info-section-f6f89c79.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/lambert.js": () => __vitePreload(() => import('./lambert-7fa4c4c5.js'),true?["./lambert-7fa4c4c5.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/layer-metadata.js": () => __vitePreload(() => import('./layer-metadata-1d97441b.js'),true?["./layer-metadata-1d97441b.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/legend.js": () => __vitePreload(() => import('./legend-4a7342db.js'),true?["./legend-4a7342db.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/main.js": () => __vitePreload(() => import('./main-b7c20136.js'),true?["./main-b7c20136.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/map-image-layer.js": () => __vitePreload(() => import('./map-image-layer-d3cf58e5.js'),true?["./map-image-layer-d3cf58e5.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/mapnav.js": () => __vitePreload(() => import('./mapnav-317f22e8.js'),true?["./mapnav-317f22e8.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/merge-grid.js": () => __vitePreload(() => import('./merge-grid-14eff910.js'),true?["./merge-grid-14eff910.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/multi-instances.js": () => __vitePreload(() => import('./multi-instances-c63318b3.js'),true?["./multi-instances-c63318b3.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/multi-ramp.js": () => __vitePreload(() => import('./multi-ramp-5f3d94e7.js'),true?["./multi-ramp-5f3d94e7.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/no-layers.js": () => __vitePreload(() => import('./no-layers-ea3b7386.js'),true?["./no-layers-ea3b7386.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/offscale-layer.js": () => __vitePreload(() => import('./offscale-layer-28db8a29.js'),true?["./offscale-layer-28db8a29.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/old-main.js": () => __vitePreload(() => import('./old-main-42db4ce7.js'),true?["./old-main-42db4ce7.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/panel-party.js": () => __vitePreload(() => import('./panel-party-b7824778.js'),true?["./panel-party-b7824778.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/perm-filter.js": () => __vitePreload(() => import('./perm-filter-a336431f.js'),true?["./perm-filter-a336431f.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/r2-config-upgraded.js": () => __vitePreload(() => import('./r2-config-upgraded-5f11e7a7.js'),true?["./r2-config-upgraded-5f11e7a7.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/ramp-basic.js": () => __vitePreload(() => import('./ramp-basic-0927e4bb.js'),true?["./ramp-basic-0927e4bb.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/section-item.js": () => __vitePreload(() => import('./section-item-01dc550a.js'),true?["./section-item-01dc550a.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-data.js": () => __vitePreload(() => import('./simple-data-db6080ad.js'),true?["./simple-data-db6080ad.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-feature.js": () => __vitePreload(() => import('./simple-feature-e35ad8fa.js'),true?["./simple-feature-e35ad8fa.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-file.js": () => __vitePreload(() => import('./simple-file-61af7653.js'),true?["./simple-file-61af7653.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/simple-mil.js": () => __vitePreload(() => import('./simple-mil-9db7d20a.js'),true?["./simple-mil-9db7d20a.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/teleport-details.js": () => __vitePreload(() => import('./teleport-details-e242e1d5.js'),true?["./teleport-details-e242e1d5.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/teleport-wet.js": () => __vitePreload(() => import('./teleport-wet-02da1bc5.js'),true?["./teleport-wet-02da1bc5.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/teleport.js": () => __vitePreload(() => import('./teleport-f57f3180.js'),true?["./teleport-f57f3180.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/tree-grow.js": () => __vitePreload(() => import('./tree-grow-4d5d8f8d.js'),true?["./tree-grow-4d5d8f8d.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/wet.js": () => __vitePreload(() => import('./wet-7737fe7f.js'),true?["./wet-7737fe7f.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url),"./starter-scripts/wms-layer.js": () => __vitePreload(() => import('./wms-layer-c496e8f6.js'),true?["./wms-layer-c496e8f6.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)})), `./starter-scripts/${scriptName}.js`);
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