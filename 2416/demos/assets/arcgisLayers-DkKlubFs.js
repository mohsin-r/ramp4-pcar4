const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GroupLayer-Cx4dUMax.js","./preload-helper-dJJaZANz.js","./main-DoZrzYXH.js","./main-C4TGYCrz.css","./lazyLayerLoader-BAXYNIV3.js","./saveUtils-DrBfCRCK.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { p as p$1, s, o as d$1, r as bt, I as I$1, t as g } from './main-DoZrzYXH.js';
import { s as s$1 } from './associatedFeatureServiceUtils-qZFnEyUx.js';
import { t as t$1 } from './fetchService-CNhs0JzZ.js';
import { t, a } from './lazyLayerLoader-BAXYNIV3.js';

const c={FeatureLayer:!0,SceneLayer:!0};async function y(e){const r=e.properties?.customParameters,a=await p(e.url,r),t={...e.properties,url:e.url};if(a.layers.length+a.tables.length===0)return null!=a.layerId&&(t.layerId=a.layerId),null!=a.sourceJSON&&(t.sourceJSON=a.sourceJSON),new a.Constructor(t);const s=new((await __vitePreload(async () => { const {default: __vite_default__} = await import('./GroupLayer-Cx4dUMax.js');return { default: __vite_default__ }},true?__vite__mapDeps([0,1,2,3,4,5]):void 0,import.meta.url)).default)({title:a.parsedUrl.title});return await m(s,a,t),s}function f(e,r){return e?e.find((e=>e.id===r)):null}async function m(e,r,a){function t(e,r,t,s){const n={...a,layerId:r,sublayerTitleMode:"service-name"};return null!=e&&(n.url=e),null!=t&&(n.sourceJSON=t),s(n)}const s=r.sublayerConstructorProvider;for(const{id:n,serverUrl:l}of r.layers){const a=f(r.sublayerInfos,n),o=(a&&s?.(a))??r.Constructor,i=t(l,n,a,(e=>new o(e)));e.add(i);}if(r.tables.length){const a=await h("FeatureLayer");r.tables.forEach((({id:s,serverUrl:n})=>{const l=t(n,s,f(r.tableInfos,s),(e=>new a(e)));e.tables.add(l);}));}}async function p(r,a){let s$1=p$1(r);if(null==s$1&&(s$1=await d(r,a)),null==s$1)throw new s("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:n,sublayer:l}=s$1;let i;const y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},f="FeatureServer"===n,m="SceneServer"===n,p={parsedUrl:s$1,Constructor:null,layerId:f||m?l??void 0:void 0,layers:[],tables:[]};switch(n){case"MapServer":if(null!=l)i="FeatureLayer";else {i=await b(r,a)?"TileLayer":"MapImageLayer";}break;case"ImageServer":{const e=await t(r,{customParameters:a}),{tileInfo:t$1,cacheType:s}=e;i=t$1?"LERC"!==t$1?.format?.toUpperCase()||s&&"elevation"!==s.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await t(s$1.url.path,{customParameters:a});if(i="SceneLayer",e){const r=e?.layers;if("Voxel"===e?.layerType)i="VoxelLayer";else if(r?.length){const e=r[0]?.layerType;null!=e&&null!=g[e]&&(i=g[e]);}}break}case"3DTilesServer":throw new s("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(i="FeatureLayer",null!=l){const e=await t(r,{customParameters:a});p.sourceJSON=e,"Oriented Imagery Layer"===e.type&&(i="OrientedImageryLayer");}break;default:i=y[n];}if(c[i]&&null==l){const e=await S(r,n,a);f&&(p.sublayerInfos=e.layerInfos,p.tableInfos=e.tableInfos);if(1!==e.layers.length+e.tables.length)p.layers=e.layers,p.tables=e.tables,f&&e.layerInfos?.length&&(p.sublayerConstructorProvider=await I(e.layerInfos));else if(f||m){const r=e.layerInfos?.[0]??e.tableInfos?.[0];p.layerId=e.layers[0]?.id??e.tables[0]?.id,p.sourceJSON=r,f&&"Oriented Imagery Layer"===r?.type&&(i="OrientedImageryLayer");}}return p.Constructor=await h(i),p}async function d(e,t$1){const n=await t(e,{customParameters:t$1});let l=null,o=null;const i=n.type;if("Feature Layer"===i||"Table"===i?(l="FeatureServer",o=n.id??null):"indexedVector"===i?l="VectorTileServer":n.hasOwnProperty("mapName")?l="MapServer":n.hasOwnProperty("bandCount")&&n.hasOwnProperty("pixelSizeX")?l="ImageServer":n.hasOwnProperty("maxRecordCount")&&n.hasOwnProperty("allowGeometryUpdates")?l="FeatureServer":n.hasOwnProperty("streamUrls")?l="StreamServer":v(n)?(l="SceneServer",o=n.id):n.hasOwnProperty("layers")&&v(n.layers?.[0])&&(l="SceneServer"),!l)return null;const c=null!=o?d$1(e):null;return {title:null!=c&&n.name||bt(e),serverType:l,sublayer:o,url:{path:null!=c?c.serviceUrl:I$1(e).path}}}function v(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function S(e,r,a){let t$2,s,n=!1;switch(r){case"FeatureServer":{const r=await t$1(e,{customParameters:a});n=!!r.layersJSON,t$2=r.layersJSON||r.serviceJSON;break}case"SceneServer":{const r=await w(e,a);t$2=r.serviceInfo,s=r.tableServerUrl;break}default:t$2=await t(e,{customParameters:a});}const o=t$2?.layers,i=t$2?.tables;return {layers:o?.map((e=>({id:e.id}))).reverse()||[],tables:i?.map((e=>({serverUrl:s,id:e.id}))).reverse()||[],layerInfos:n?o:[],tableInfos:n?i:[]}}async function w(e,r){const a=await t(e,{customParameters:r}),t$1=a.layers?.[0];if(!t$1)return {serviceInfo:a};try{const{serverUrl:t$1}=await s$1(e),s=await t(t$1,{customParameters:r}).catch((()=>null));return s&&(a.tables=s.tables),{serviceInfo:a,tableServerUrl:t$1}}catch{return {serviceInfo:a}}}async function h(e){return (0, a[e])()}async function b(e,r){return (await t(e,{customParameters:r})).tileInfo}async function I(e){const r=[],a=[];if(e.forEach((e=>{const{type:t}=e;"Oriented Imagery Layer"===t?(r.push(t),a.push(h("OrientedImageryLayer"))):(r.push(t),a.push(h("FeatureLayer")));})),!a.length)return;const t=await Promise.all(a),s=new Map;return r.forEach(((e,r)=>{s.set(e,t[r]);})),e=>s.get(e.type)}

export { y as fromUrl };
