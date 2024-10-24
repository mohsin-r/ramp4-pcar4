import { a, K as s, U as U$1, M as c$1, N as u$1, O as i$1 } from './main-af5539f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class i{constructor(t,r,e){this.assetName=t,this.assetMimeType=r,this.parts=e;}equals(t){return this===t||this.assetName===t.assetName&&this.assetMimeType===t.assetMimeType&&a(this.parts,t.parts,((t,r)=>t.equals(r)))}isOnService(t){return this.parts.every((r=>r.isOnService(t)))}makeHash(){let t="";for(const r of this.parts)t+=r.partHash;return t}async toBlob(t){const{parts:r}=this;if(1===r.length)return r[0].toBlob(t);const s$1=await Promise.all(r.map((r=>r.toBlob(t))));return s(t),new Blob(s$1)}}class o{constructor(t,r){this.partUrl=t,this.partHash=r;}equals(t){return this===t||this.partUrl===t.partUrl&&this.partHash===t.partHash}isOnService(t){return this.partUrl.startsWith(`${t.path}/assets/`)}async toBlob(r){const{data:s$1}=await U$1(this.partUrl,{responseType:"blob"});return s(r),s$1}}function u(t){return p(t?.source)}function c(t){if(!Array.isArray(t))return !1;return t.every((t=>t instanceof i))}const f=/^(model\/gltf\+json)|(model\/gltf-binary)$/,l=/\.(gltf|glb)/i;function p(t){if(!t)return !1;if(Array.isArray(t)){return t.some(m)}return m(t)}function m(t){if(t instanceof File){const{type:r,name:e}=t;return f.test(r)||l.test(e)}return f.test(t.assetMimeType)||l.test(t.assetName)}function h(t,r){if(!t)return !1;const{source:e}=t;return g(e,r)}function y(t,r){if(t===r)return !0;const{source:e}=t,{source:s}=r;if(e===s)return !0;if(c(e)&&c(s)){if(e.length!==s.length)return !1;const t=(t,r)=>t.assetName<r.assetName?-1:t.assetName>r.assetName?1:0,r=[...e].sort(t),n=[...s].sort(t);for(let e=0;e<r.length;++e)if(!r[e].equals(n[e]))return !1;return !0}return !1}function g(t,r){if(Array.isArray(t)){const e=t;return e.length>0&&e.every((t=>b(t,r)))}return b(t,r)}function b(t,r){return t instanceof i&&t.isOnService(r)}function N(t,r){return t instanceof File?c$1(t,r):u$1(t.assetMimeType,r)??i$1(t.assetName,r)}function A(t){return Array.isArray(t)?t:[t]}function v(t){return !!t.original}

export { A, N, h, i, o, u, v, y };
