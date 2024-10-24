import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { n } from './date-305484fc.js';
import { dc as Ae, dd as Ue, d9 as pe, de as ye, aJ as ge, df as _e, dg as N } from './main-bf9b57d3.js';

class u{constructor(){this.code=null,this.description=null;}}class c{constructor(t){this.error=new u,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t;}}function f(t){return new c(t)}class a{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t;}}function d(t){return new a(t)}const m=new Set;function p(t,n,i,o=!1){m.clear();for(const s in i){const l=t.get(s);if(!l)continue;const u=g(l,i[s]);if(m.add(l.name),l&&(o||l.editable)){const t=Ae(l,u);if(t)return f(Ue(t,l,u));n[l.name]=u;}}for(const e of t?.requiredFields??[])if(!m.has(e.name))return f(`missing required field "${e.name}"`);return null}function g(n$1,e){let r=e;return pe(n$1)&&"string"==typeof e?r=parseFloat(e):ye(n$1)&&null!=e&&"string"!=typeof e?r=String(e):ge(n$1)&&"string"==typeof e&&(r=n(e)),_e(r)}let h;function y(t,e){if(!t||!N(e))return t;if("rings"in t||"paths"in t){if(null==h)throw new TypeError("geometry engine not loaded");return h.simplify(e,t)}return t}async function w(){return null==h&&(h=await __vitePreload(() => import('./geometryEngineJSON-d8166d26.js'),true?["./geometryEngineJSON-d8166d26.js","./geometryEngineBase-d5ddadfb.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./geometryEngineJSON-d5d8e3f2.js","./json-aab78c64.js"]:void 0,import.meta.url)),h}async function j(t,e){!N(t)||"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e||await w();}

export { d, f, j, p, y };
