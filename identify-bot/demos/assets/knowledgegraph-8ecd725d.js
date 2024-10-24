import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { Q as Q$1, E as s$1, bb as E$1, bc as B, bd as U$1, bl as f$1, S, eO as n$1, eS as R, eT as d } from './main-fb35569c.js';
import { a as ae, b as a, r, x as t, d as de, G, a9 as $, v as Y, N, U, q as Be, E as E$2, X, k as ee, t as te, aa as K$1, ab as q, ac as re } from './arcadeUtils-8301adba.js';
import { l } from './portalUtils-ff39fa09.js';
import { p, n } from './project-4e710465.js';
import { a as a$1, m, t as t$1, p as p$1, c } from './GraphQueryStreaming-af0b9268.js';
import './TimeOnly-a45b96c1.js';
import './ImmutableArray-da974cd4.js';
import './number-b9d6c0e5.js';

let F=null;async function J(r){const t=s$1.geometryServiceUrl??"";if(!t){E$1()||await B();for(const e of r)e.container[e.indexer]=U$1(e.container[e.indexer],f$1.WGS84);return}const n$1=r.map((e=>e.container[e.indexer])),o=new p({geometries:n$1,outSpatialReference:f$1.WGS84}),a=await n(t,o);for(let e=0;e<a.length;e++){const t=r[e];t.container[t.indexer]=a[e];}}async function M(e,r){const t=new S({portal:e,id:r});return await t.load(),null===F&&(F=await __vitePreload(() => import('./knowledgeGraphService-a78a4c3c.js').then(n => n.k),true?["./knowledgeGraphService-a78a4c3c.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css","./GraphQueryStreaming-af0b9268.js"]:void 0,import.meta.url)),await F.fetchKnowledgeGraph(t.url)}function Q(e,r$1,t,a$1,i){if(null===e)return null;if(G(e)||E$2(e))return e;if(X(e))return e.toJSDate();if(X(e))return e.toJSDate();if(ee(e))return e.toStorageFormat();if(te(e))return e.toStorageString();if(K$1(e)){const n={};for(const o of e.keys())n[o]=Q(e.field(o),r$1,t,a$1,i),n[o]instanceof n$1&&i.push({container:n,indexer:o});return n}if(U(e)){const n=e.map((e=>Q(e,r$1,t,a$1,i)));for(let e=0;e<n.length;e++)n[e]instanceof n$1&&i.push({container:n,indexer:e});return n}if(q(e)){if(e.spatialReference.isWGS84)return e;if(e.spatialReference.isWebMercator&&r$1)return R(e);if(!r$1||!t)return e;throw new a(a$1,r.WrongSpatialReference,null)}}function E(e,r$1){if(!e)return e;if(e.spatialReference.isWGS84&&r$1.spatialReference.isWebMercator)return d(e);if(e.spatialReference.equals(r$1.spatialReference))return e;throw new a(r$1,r.WrongSpatialReference,null)}function K(e,r){if(!e)return null;const t={};for(const n in e)t[n]=V(e[n],r);return t}function V(e,r){return null===e?null:U(e)?e.map((e=>V(e,r))):e instanceof m?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:K(e.properties,r)}:e instanceof t$1?{graphType:"object",properties:K(e.properties,r)}:e instanceof p$1?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:K(e.properties,r)}:e instanceof c?{graphType:"path",path:e.path?e.path.map((e=>V(e,r))):null}:q(e)?E(e,r):G(e)||E$2(e)||re(e)?e:null}function C(e){"async"===e.mode&&(e.functions.knowledgegraphbyportalitem=function(t$1,p){return e.standardFunctionAsync(t$1,p,((e,l$1,c)=>{if(ae(c,2,2,t$1,p),null===c[0])throw new a(t$1,r.PortalRequired,p);if(c[0]instanceof t){const e=de(c[1]);let r=null;r=t$1.services?.portal?t$1.services.portal:Q$1.getDefault();return M(l(c[0],r),e)}if(!1===G(c[0]))throw new a(t$1,r.InvalidParameter,p);const f=de(c[0]);return M(t$1.services?.portal??Q$1.getDefault(),f)}))},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(r$1,i){return e.standardFunctionAsync(r$1,i,(async(e,u,m)=>{ae(m,2,4,r$1,i);const g=m[0];if(!$(g))throw new a(r$1,r.InvalidParameter,i);const h=m[1];if(!G(h))throw new a(r$1,r.InvalidParameter,i);null===F&&(F=await __vitePreload(() => import('./knowledgeGraphService-a78a4c3c.js').then(n => n.k),true?["./knowledgeGraphService-a78a4c3c.js","./main-fb35569c.js","./preload-helper-a4975f27.js","./main-7e7f41a5.css","./GraphQueryStreaming-af0b9268.js"]:void 0,import.meta.url));let d=null;const w=Y(m[2],null);if(!(w instanceof N||null===w))throw new a(r$1,r.InvalidParameter,i);if(w){let e=[];d=Q(w,!0,!1,r$1,e),e=e.filter((e=>!e.container[e.indexer].spatialReference.isWGS84)),e.length>0&&await J(e);}const y=new a$1({openCypherQuery:h,bindParameters:d});(g?.serviceDefinition?.currentVersion??11.3)>11.2&&(y.outputSpatialReference=r$1.spatialReference);const j=(await F.executeQueryStreaming(g,y)).resultRowsStream.getReader(),S=[];try{for(;;){const{done:e,value:t}=await j.read();if(e)break;if(U(t))for(const n of t)S.push(V(n,r$1));else {const e=[];for(const n of t)e.push(V(t[n],r$1));S.push(e);}}}catch(R){throw R}return N.convertJsonToArcade(S,Be(r$1),!1,!0)}))},e.signatures.push({name:"querygraph",min:2,max:4}));}

export { C as registerFunctions };