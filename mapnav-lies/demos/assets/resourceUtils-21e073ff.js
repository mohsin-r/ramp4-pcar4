import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { dT as n$1, dU as P, K as s, s as s$1, dV as v } from './main-bf9b57d3.js';
import { getSiblingOfSameTypeI as m, contentToBlob as p$1 } from './resourceUtils-15912736.js';

async function p(e,t,r){const o=await u(e,t,r);await h(o,t,r);}async function n(e,t,r,o,s){const a=await u(r,o,s);await e.update({data:t}),await h(a,o,s);}async function u(o,p,n){if(!p?.resources)return;const u=p.portalItem===o.portalItem?new Set(o.paths):new Set;o.paths.length=0,o.portalItem=p.portalItem;const h=new Set(p.resources.toKeep.map((e=>e.resource.path))),i=new Set,m$1=[];h.forEach((e=>{u.delete(e),o.paths.push(e);}));const f=[],l=[],w=[];for(const e of p.resources.toUpdate)if(u.delete(e.resource.path),h.has(e.resource.path)||i.has(e.resource.path)){const{resource:t,content:r,finish:p}=e,n=m(t,n$1());o.paths.push(n.path),f.push({resource:n,content:await p$1(r),compress:e.compress}),p&&w.push((()=>p(n)));}else {o.paths.push(e.resource.path),l.push({resource:e.resource,content:await p$1(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource))),i.add(e.resource.path);}for(const e of p.resources.toAdd)if(o.paths.push(e.resource.path),u.has(e.resource.path))u.delete(e.resource.path);else {f.push({resource:e.resource,content:await p$1(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource)));}if(f.length||l.length){const{addOrUpdateResources:e}=await __vitePreload(() => import('./resourceUtils-15912736.js'),true?["./resourceUtils-15912736.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url);await e(p.portalItem,f,"add",n),await e(p.portalItem,l,"update",n);}if(w.forEach((e=>e())),0===m$1.length)return u;const d=await P(m$1);if(s(n),d.length>0)throw new s$1("save:resources","Failed to save one or more resources",{errors:d});return u}async function h(e,t,r){if(!e||!t.portalItem)return;const s=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);s.push(e.portalItem.removeResource(e,r));}await v(s);}

export { n, p };
