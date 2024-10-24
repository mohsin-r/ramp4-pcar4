import { V as has, c4 as r, ax as e$1, iO as r$1, ay as n$2, iP as t, aA as V$1, U as U$1, J as s, f6 as w, a1 as r$3, c3 as s$1, M as u, f7 as A, N as i$3, B as a$2, eX as Wt, H as s$2 } from './main-DoZrzYXH.js';
import { h as h$1, N, i as i$2, o, A as A$1 } from './External-CnokhOji.js';
import { r as r$2, n as n$3, a as a$1, d, c as c$2, l as l$2, t as t$1, u as u$1, p as p$2 } from './uploadAssetErrors-D9W2yZ65.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function i$1(s,t=(s=>{}),e){return new n$1(s,t,e)}let n$1 = class n{constructor(s,t=(s=>{}),e){if(this.onProgress=t,this.taskName=e,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof s){this._weights={};for(let t=0;t<s;t++){const e=t,r=1/s;this._weights[e]=r,this._progressMap.set(e,0);}}else this._weights=s;this.emitProgress();}emitProgress(){let s=0;for(const[t,e]of this._progressMap.entries()){s+=e*this._weights[t];}if(1===s&&has("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[t,e]of this._timingsMap){const r=Math.round(e.end-e.start)/1e3,o=Math.round(r/s*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:r,relativeTime:o});}}this.onProgress(s);}setProgress(s,e){if(this._progressMap.set(s,e),has("enable-feature:esri-3dofl-upload-timings")){const r$1=performance.now();this._startTime??=r$1;const o=r(this._timingsMap,s,(()=>({start:r$1,end:0})));1===e&&(o.end=r$1);}this.emitProgress();}simulate(s,t){return a((t=>this.setProgress(s,t)),t)}makeOnProgress(s){return t=>this.setProgress(s,t)}};function a(t=(s=>{}),e=l$1){const r=performance.now();t(0);const o=setInterval((()=>{const s=performance.now()-r,o=1-Math.exp(-s/e);t(o);}),g);return e$1((()=>{clearInterval(o),t(1);}))}function h(s,t$1=c$1){return r$1(t(s*f/t$1))}function m$1(s,t$1=p$1){return r$1(t(s*f/t$1))}const c$1=10,p$1=10,f=8e-6,g=n$2(50),l$1=n$2(1e3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const n=1e6,i=20*n,p=2e9,l=3;async function m({data:m,name:f,description:d},u,h$1){let w$1=null;try{const y=V$1(u,"uploads"),j=V$1(y,"info"),{data:g}=await U$1(j,{query:{f:"json"},responseType:"json"});s(h$1);const q=w(u),z=g.maxUploadFileSize*n,T=q?p:z,U=q?Math.min(i,z):i;if(m.size>T)throw new Error("Data too large");const A=V$1(y,"register"),{data:E}=await U$1(A,{query:{f:"json",itemName:c(f),description:d},responseType:"json",method:"post"});if(s(h$1),!E.success)throw new Error("Registration failed");const{itemID:P}=E.item;w$1=V$1(y,P);const D=V$1(w$1,"uploadPart"),I=Math.ceil(m.size/U),M=new Array;for(let e=0;e<I;++e)M.push(m.slice(e*U,Math.min((e+1)*U,m.size)));const v=M.slice().reverse(),x=new Array,F=i$1(I,h$1?.onProgress,"uploadItem"),_=async()=>{for(;0!==v.length;){const t=M.length-v.length,r=v.pop(),s$1=new FormData,n=F.simulate(t,h(r.size));try{s$1.append("f","json"),s$1.append("file",r),s$1.append("partId",`${t}`);const{data:a}=await U$1(D,{timeout:0,body:s$1,responseType:"json",method:"post"});if(s(h$1),!a.success)throw new Error("Part upload failed")}finally{n.remove();}}};for(let e=0;e<l&&0!==v.length;++e)x.push(_());await Promise.all(x);const b=V$1(w$1,"commit"),{data:C}=await U$1(b,{query:{f:"json",parts:M.map(((e,o)=>o)).join(",")},responseType:"json",method:"post"});if(s(h$1),!C.success)throw new Error("Commit failed");return C.item}catch(y){if(null!=w$1){const o=V$1(w$1,"delete");await U$1(o,{query:{f:"json"},responseType:"json",method:"post"});}throw y}}function c(e){return e.replaceAll("/","_").replaceAll("\\","_")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function O(s,e,t){const r=s.length;if(!r)return t?.onProgress?.(1),[];const o=i$1(r,t?.onProgress,"uploadAssets");return Promise.all(s.map(((s,r)=>v(s,e,{...t,onProgress:o.makeOnProgress(r)}))))}async function v(s,{layer:e,ongoingUploads:t},r){const o=t.get(s);if(o)return o;if(!Z(e))throw new r$2;if(I(s,e))return r?.onProgress?.(1),s;const n=k(s,e,r);t.set(s,n);try{await n;}finally{t.delete(s);}return s}function I(s,e){const{parsedUrl:t}=e;return null!=t&&s.metadata.externalSources.some((s=>h$1(s,t)))}async function k(s$1,e,r){const{metadata:o}=s$1,{displaySource:n}=o,a=H(n?.source,e),i=!!a,c=o.externalSources.length>0,u=i?B(a,e,r):c?R(s$1,e,r):C(s$1,e,r),l=await u;return s(r),s$1.addExternalSources([l]),s$1}async function B(s,e,t){return {source:await G(s,e,t),original:!0}}async function R(s,e$1,t){const r=_(e$1),{externalSources:o}=s.metadata,n=q(o,e$1);if(!n)throw new n$3;const a=i$1(e.uploadConvertibleSource,t?.onProgress,"uploadConvertibleSource"),i=await G(n,e$1,{onProgress:a.makeOnProgress("uploadEditSource")});s.addExternalSources([{source:i,original:!0}]);const c=n.reduce(((s,{asset:e})=>e instanceof File?s+e.size:s),0),u=a.simulate("serviceAssetsToGlb",m$1(c));try{return {source:await V(i,e$1,r)}}finally{u.remove();}}async function C(s,e$1,t){const r=i$1(e.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),o=L(s,e$1,{...t,onProgress:r.makeOnProgress("meshToAssetBlob")});return {source:await J([o],e$1,{...t,onProgress:r.makeOnProgress("uploadAssetBlobs")}),extent:s.extent.clone(),original:!0}}async function L(s$1,e,r){const o=_(e),n=await s$1.load(r),a=await n.toBinaryGLTF({ignoreLocalTransform:!0});s(r);const i=await a.buffer();return s(r),{blob:new Blob([i.data],{type:i.type}),assetName:`${r$3()}.glb`,assetType:o}}function q(s,e){for(const t of s){const s=H(t.source,e);if(s)return s}return null}function H(s,e){if(!s)return null;const{infoFor3D:{supportedFormats:t,editFormats:r}}=e,o=A$1(s),n=new Array;let a=!1;for(let i=0;i<o.length;++i){const s=$(o[i],t);if(!s)return null;r.includes(s.assetType)&&(a=!0),n.push(s);}return a?n:null}function $(s,e){const t=N(s,e);return t?{asset:s,assetType:t}:null}async function G(s,e,t){return J(s.map((s=>M(s,t))),e,t)}async function J(s$1,e$1,r){const o=i$1(e.uploadAssetBlobs,r?.onProgress,"uploadAssetBlobs"),n=await z(s$1,e$1,{...r,onProgress:o.makeOnProgress("prepareAssetItems")});s(r);const a=n.map((({item:s})=>s)),{uploadResults:i}=await K(a,e$1,{...r,onProgress:o.makeOnProgress("uploadAssetItems")});return s(r),s$1.map(((s,t)=>Q(n[t],i[t],e$1)))}async function M(s$1,e){const{asset:r,assetType:o}=s$1;if(r instanceof File)return {blob:r,assetName:r.name,assetType:o};const n=await r.toBlob(e);return s(e),{blob:n,assetName:r.assetName,assetType:o}}async function W(s$1,e,r){const{blob:n,assetType:a,assetName:c}=s$1;let u=null;try{const s$1=await m({data:n,name:c},e.url,r);s(r),u={assetType:a,assetUploadId:s$1.itemID};}catch(l){a$2(l),ss().warnOnce(`Service ${e.url} does not support the REST Uploads API.`);}if(!u){const s$1=await Wt(n);if(s(r),!s$1.isBase64)throw new u$1;u={assetType:a,assetData:s$1.data};}if(!u)throw new p$2;return {item:u,assetName:c}}function z(s$1,e,r){const o=i$1(s$1.length,r?.onProgress,"prepareAssetItems");return Promise.all(s$1.map((async(s$1,n)=>{const a=W(await s$1,e,{...r,onProgress:o.makeOnProgress(n)});return s(r),a})))}async function K(e,r,o){const n=a(o?.onProgress);try{const n=await U$1(V$1(r.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if(s(o),n.data.uploadResults.length!==e.length)throw new a$1(e.length,n.data.uploadResults.length);return n.data}finally{n.remove();}}function Q(s,e,t){const{success:r}=e;if(!r){const{error:t}=e;throw new d(s.assetName,t)}const{assetHash:o$1}=e,{assetName:n,item:{assetType:a}}=s,{infoFor3D:{supportedFormats:i}}=t,c=s$1(a,i);if(!c)throw new c$2(a);return new i$2(n,c,[new o(`${t.parsedUrl.path}/assets/${o$1}`,o$1)])}async function V(s,e,t){const r=s.map((({assetName:s,parts:e})=>({assetName:s,assetHash:e[0].partHash}))),o$1=e.capabilities?.operations.supportsAsyncConvert3D,n={f:"json",assets:JSON.stringify(r),transportType:"esriTransportTypeUrl",targetFormat:t,async:o$1},i=V$1(e.parsedUrl.path,"convert3D");let c;try{c=(await(o$1?Y:X)(i,{query:n,responseType:"json",timeout:0})).data;}catch(l){throw new l$2}const{supportedFormats:u$1}=e.infoFor3D;return c.assets.map((s=>{const e=u(s.contentType,u$1);if(!e)throw new c$2(e);return new i$2(s.assetName,s.contentType,[new o(s.assetURL,s.assetHash)])}))}function X(e,t){return U$1(e,t)}async function Y(e,t){const o=(await U$1(e,t)).data.statusUrl;for(;;){const e=(await U$1(o,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return U$1(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await A(es);}}function Z(s){return !!s.infoFor3D&&!!s.url}function _(s){const{infoFor3D:e}=s,t=u("model/gltf-binary",e.supportedFormats)??i$3("glb",e.supportedFormats);if(!t)throw new t$1;return t}function ss(){return s$2.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const es=n$2(1e3);

export { O as uploadAssets };
