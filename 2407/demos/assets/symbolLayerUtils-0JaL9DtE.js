const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./objectResourceUtils-BAkBV6rF.js","./devEnvironmentUtils-CAuYLvCt.js","./main-BhyDjZ0Q.js","./preload-helper-dJJaZANz.js","./main-ByE8X11X.css","./mat3f64-DiVtVT5k.js","./mat4f64-D1udxz0O.js","./BufferView-UZl0aYCE.js","./vec3-RN6FJqmF.js","./DefaultMaterial_COLOR_GAMMA-CdBnGtUt.js","./enums-CgzwTbC2.js","./quat-Duo2HkLB.js","./quatf64-BVXz_O4E.js","./resourceUtils-DvIuT944.js","./basicInterfaces-WNnrzIVI.js","./Indices-DRbkz07f.js","./NestedMap-DnQjTF8c.js","./requestImageUtils-BhA2GvIJ.js","./orientedBoundingBox-B55R4C6x.js","./computeTranslationToOriginAndRotation-DcQJIXld.js","./plane-D6jnmzVu.js","./triangle-ChLAr2WW.js","./Util-BKzTl2d2.js","./ObjectStack-B89sHAv-.js","./lineSegment-Be0Bkh4F.js","./VertexAttribute-NSFkUlX8.js","./Texture-BEoxsVE3.js","./InterleavedLayout-Bfb-WAME.js","./types-iH5tHpma.js","./OrderIndependentTransparency-NzZWznOo.js","./sphere-BpHDMTzV.js","./BindType-KnpK3yZX.js","./symbolColorUtils-DyFFeZsx.js","./doublePrecisionUtils-D7kjth1C.js","./RenderState-Bf2oUuZv.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { dN as e, s, U as U$1, dO as F, bo as i$1, dP as c$1, cl as n$1 } from './main-BhyDjZ0Q.js';

let c=a();function a(){return new e(50)}function u(){c=a();}async function l(e,o){if(e.resource?.href)return m(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return null!=o?[o,o]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function m(r){return U$1(r,{responseType:"image"}).then((e=>e.data))}async function f(e,o=null){if(!e.isPrimitive){const o=e.resource.href;if(!o)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const s$1=c.get(o);if(void 0!==s$1)return s$1;const{fetch:n}=await __vitePreload(() => import('./objectResourceUtils-BAkBV6rF.js'),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]):void 0,import.meta.url),a=await n(o,{disableTextures:!0}),u=F(a.referenceBoundingBox,n$1());return c.put(o,u),u}if(!e.resource?.primitive)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const a=i$1(c$1(e.resource.primitive));if(null!=o)for(let r=0;r<a.length;r++)a[r]*=o;return F(a,n$1())}

export { u as clearBoundingBoxCache, l as computeIconLayerResourceSize, f as computeObjectLayerResourceSize };