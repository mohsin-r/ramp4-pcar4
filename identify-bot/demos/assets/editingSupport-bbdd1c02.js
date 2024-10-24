import { Y as p, Z as h, _ as L$1, X as a, s, $ as B$1, a0 as O$1, J as s$1, a1 as ot, a2 as r, a3 as R$1, a4 as V$1, a5 as c, N as u, O as i, a6 as Te, a7 as A$1, a8 as G$1, a9 as C, aa as w } from './main-fb35569c.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function F(e){return null!=e?.applyEdits}function A(e){return "object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function v(e){return e.every(A)}function I(e){return "object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function $(e){return e.every(I)}async function E(e,t,a$1,s={}){let n;const o="gdbVersion"in e?e.gdbVersion:null,l=s.gdbVersion??o;if(p(e)&&e.url)n=h(e.url,e.layerId,l,"original-and-current-features"===s.returnServiceEditsOption);else {n=L$1(),n.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t);}));const t={result:n.promise};e.emit("apply-edits",t);}try{const{results:i,edits:o}=await S(e,t,a$1,s),l=e=>e.filter((e=>!e.error)).map(a),d={edits:o,addedFeatures:l(i.addFeatureResults),updatedFeatures:l(i.updateFeatureResults),deletedFeatures:l(i.deleteFeatureResults),addedAttachments:l(i.addAttachmentResults),updatedAttachments:l(i.updateAttachmentResults),deletedAttachments:l(i.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:i.editMoment?new Date(i.editMoment):null,globalIdToObjectId:s.globalIdToObjectId};return i.editedFeatureResults?.length&&(d.editedFeatures=i.editedFeatureResults),n.resolve(d),i}catch(d){throw n.reject(d),d}}async function S(e,t,r,s$1){if(await e.load(),!F(t))throw new s(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!B$1(e))throw new s(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:n}=await R(e,r,s$1);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,n)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function R(e,t,r){const i=O$1(e),n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(M(t,i,r,!!n,!!o,`${e.type}-layer`),!i.data.isVersioned&&r?.gdbVersion)throw new s(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!i.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new s(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const d={...r};if(null!=d.rollbackOnFailureEnabled||i.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||"original-and-current-features"!==d.returnServiceEditsOption||(!1===d.rollbackOnFailureEnabled&&s$1.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),d.rollbackOnFailureEnabled=!0),!i.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new s(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&"original-and-current-features"!==d.returnServiceEditsOption)throw new s(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const u=V(t,i,`${e.type}-layer`),p=r?.globalIdUsed||l,c=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(p){const{globalIdField:t}=e;if(null==t)throw new s(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");u.addFeatures.forEach((e=>T(e,t)));}u.addFeatures.forEach((t=>U(t,e,p,c))),u.updateFeatures.forEach((t=>L(t,e,p,c))),u.deleteFeatures.forEach((t=>k(t,e,p,c))),u.addAttachments.forEach((t=>B(t,e))),u.updateAttachments.forEach((t=>B(t,e))),l&&await z(u,e);return {edits:await D(u),options:d}}function j(e,t,r,s$1){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new s(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(s$1.length&&"attributes"in e)for(const i of s$1){const r=e.attributes[i.name];if(void 0!==r&&!Te(i,r))throw new s(`${t.type}-layer:invalid-parameter`,`Big-integer field '${i.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function O(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:r}=e,{spatialReference:s$1,vertexSpace:i}=r,n=t.spatialReference,o="local"===i.type,l=A$1(n),h=G$1(n,s$1),m=h||C(n)&&(C(s$1)||w(s$1));if(!(o&&l&&m||!o&&!l&&h))throw new s(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${i.type} vertex space and a spatial reference wkid:${s$1.wkid} to a layer with a spatial reference wkid:${n.wkid} is not supported.`)}}function U(e,t,a,r){j(e,t,a,r),O(e,t);}function k(e,t,a,r){j(e,t,a,r);}function L(e,t,r,s$1){j(e,t,r,s$1),O(e,t);const i=O$1(t);if("geometry"in e&&null!=e.geometry&&!i?.editing.supportsGeometryUpdate)throw new s(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function B(e,t){const{feature:r,attachment:s$1}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s$1.globalId)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s$1.data&&!s$1.uploadId)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s$1.data instanceof File&&!!s$1.data.name)&&!s$1.name)throw new s(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&s$1.uploadId)throw new s(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s$1.data){const e=ot(s$1.data);if(e&&!e.isBase64)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function T(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=r());}async function D(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),s=await R$1(r),i=t.length,n=a.length;return s.slice(0,i).forEach(((e,a)=>t[a].geometry=e)),s.slice(i,i+n).forEach(((e,t)=>a[t].geometry=e)),e}function G(e){return {addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&V$1.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function V(e,t,r){const s$1=G(e);if(s$1.addFeatures?.length&&!t.operations.supportsAdd)throw new s(`${r}:unsupported-operation`,"Layer does not support adding features.");if(s$1.updateFeatures?.length&&!t.operations.supportsUpdate)throw new s(`${r}:unsupported-operation`,"Layer does not support updating features.");if(s$1.deleteFeatures?.length&&!t.operations.supportsDelete)throw new s(`${r}:unsupported-operation`,"Layer does not support deleting features.");return s$1.addFeatures=s$1.addFeatures.map(x),s$1.updateFeatures=s$1.updateFeatures.map(x),s$1.addAssetFeatures=[],s$1}function M(e,t,r,s$1,i,n){if(!e||!s$1&&!i)throw new s(`${n}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new s(`${n}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&i)throw new s(`${n}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&i)throw new s(`${n}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function x(t){const a=new c;return t.attributes||(t.attributes={}),a.geometry=t.geometry,a.attributes=t.attributes,a}async function z(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,s$1=u("model/gltf-binary",r.supportedFormats)??i("glb",r.supportedFormats);if(!(!!s$1&&r.editFormats.includes(s$1)))throw new s(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:i$1}=e;for(const a of e.addFeatures??[])q(a)&&i$1.push(a);for(const a of e.updateFeatures??[])q(a)&&i$1.push(a);}function q(e){return "mesh"===e?.geometry?.type}function W(e,t,r,s$1){if(!F(t))throw new s(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,s$1)}

export { E as applyEdits, M as checkEditingCapabilities, $ as isFeatureIdentifierArrayWithGlobalId, v as isFeatureIdentifierArrayWithObjectId, I as isFeatureIdentifierWithGlobalId, A as isFeatureIdentifierWithObjectId, G as normalizeCollections, V as normalizeEdits, D as normalizeGeometries, x as shallowCloneFeature, W as uploadAssets };
