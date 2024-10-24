import { jc as e$1, bx as l, cx as g$2, cy as u, hA as p$1, cu as r, hz as A$1, cm as n$1, cn as r$1, hR as q$1, hX as x$1, aX as e$2, aZ as c, K as s$2, ct as t$1 } from './main-bf9b57d3.js';
import { v as v$1, b as b$3, j as j$3 } from './lineSegment-26c7b51b.js';
import { d, O as O$1, p, Z, V, I as I$1, w as w$1, s as st } from './sphere-e8582f09.js';
import { s as s$1 } from './ObjectStack-72ba47a5.js';
import './plane-618ffdc6.js';
import { i } from './Util-dc144851.js';
import { m } from './edgeProcessing-fe9b107d.js';
import './preload-helper-a4975f27.js';
import './mat3f64-3fe11525.js';
import './mat4f64-b32e2490.js';
import './quatf64-137a8dbb.js';
import './deduplicate-bc644308.js';
import './Indices-d2842f7e.js';
import './InterleavedLayout-15599d5f.js';
import './BufferView-71c891bf.js';
import './types-e38a67d0.js';
import './VertexAttribute-66b2103c.js';
import './enums-af0bf3a9.js';
import './VertexElementDescriptor-ec2771ab.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function a(r){return r?{ray:d(r.ray),c0:r.c0,c1:r.c1}:{ray:d(),c0:0,c1:Number.MAX_VALUE}}new s$1((()=>a()));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function s(T,_){for(let O=0;O<b$2;O++){const R=T[O];if(R[0]*_[0]+R[1]*_[1]+R[2]*_[2]+R[3]>=_[3])return !1}return !0}var j$2,g$1;!function(T){T[T.LEFT=0]="LEFT",T[T.RIGHT=1]="RIGHT",T[T.BOTTOM=2]="BOTTOM",T[T.TOP=3]="TOP",T[T.NEAR=4]="NEAR",T[T.FAR=5]="FAR";}(j$2||(j$2={})),function(T){T[T.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",T[T.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",T[T.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",T[T.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",T[T.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",T[T.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",T[T.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",T[T.FAR_TOP_LEFT=7]="FAR_TOP_LEFT";}(g$1||(g$1={}));({bottom:[g$1.FAR_BOTTOM_RIGHT,g$1.NEAR_BOTTOM_RIGHT,g$1.NEAR_BOTTOM_LEFT,g$1.FAR_BOTTOM_LEFT],near:[g$1.NEAR_BOTTOM_LEFT,g$1.NEAR_BOTTOM_RIGHT,g$1.NEAR_TOP_RIGHT,g$1.NEAR_TOP_LEFT],far:[g$1.FAR_BOTTOM_RIGHT,g$1.FAR_BOTTOM_LEFT,g$1.FAR_TOP_LEFT,g$1.FAR_TOP_RIGHT],right:[g$1.NEAR_BOTTOM_RIGHT,g$1.FAR_BOTTOM_RIGHT,g$1.FAR_TOP_RIGHT,g$1.NEAR_TOP_RIGHT],left:[g$1.FAR_BOTTOM_LEFT,g$1.NEAR_BOTTOM_LEFT,g$1.NEAR_TOP_LEFT,g$1.FAR_TOP_LEFT],top:[g$1.FAR_TOP_LEFT,g$1.NEAR_TOP_LEFT,g$1.NEAR_TOP_RIGHT,g$1.FAR_TOP_RIGHT]});const b$2=6;new s$1(a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let b$1 = class b{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new g,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth));}destroy(){this._degenerateObjects.clear(),g.clearPool(),B[0]=null,P.prune(),H.prune();}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const o=g.acquire();for(let n=0;n<t;n++){const t=e[n];this._isDegenerate(t)?this._degenerateObjects.add(t):(o.init(this._root),this._add(t,o));}g.release(o);}remove(e,t=null){this._objectCount-=e.length;const o=g.acquire();for(const n of e){const e=t??O$1(this.objectToBoundingSphere(n),w);E(e[3])?(o.init(this._root),this._remove(n,e,o)):this._degenerateObjects.delete(n);}g.release(o),this._shrink();}update(e,t){if(!E(t[3])&&this._isDegenerate(e))return;const o=R(e);this.remove(o,t),this.add(o);}forEachAlongRay(e,t,o){const n=p(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(n,e))return !1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(n,e)&&o(e);})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(n,e)&&o(e);})),!0}));}forEachAlongRayWithVerticalOffset(e,t,o,n){const i=p(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(i,e,n))return !1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e);})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e);})),!0}));}forEach(e){this._forEachNode(this._root,(t=>{const o=t.node;return o.terminals.forAll(e),null!==o.residents&&o.residents.forAll(e),!0})),this._degenerateObjects.forEach(e);}forEachDegenerateObject(e){this._degenerateObjects.forEach(e);}findClosest(e,t,i,s$1=(()=>!0),r=1/0){let h=1/0,a=1/0,l=null;const u$1=T(e,t),f=o=>{if(--r,!s$1(o))return;const n=this.objectToBoundingSphere(o);if(!s(i,n))return;const u=z(e,t,Z(n)),f=u-n[3],m=u+n[3];f<h&&(h=f,a=m,l=o);};return this._forEachNodeDepthOrdered(this._root,(s$1=>{if(r<=0||!s(i,s$1.bounds))return !1;g$2(v,u$1,s$1.halfSize),u(v,v,Z(s$1.bounds));if(z(e,t,v)>a)return !1;const h=s$1.node;return h.terminals.forAll((e=>f(e))),null!==h.residents&&h.residents.forAll((e=>f(e))),!0}),e,t),l}forEachInDepthRange(e,t,i,s$1,r,h,a){let l=-1/0,u$1=1/0;const f={setRange:e=>{i===b.DepthOrder.FRONT_TO_BACK?(l=Math.max(l,e.near),u$1=Math.min(u$1,e.far)):(l=Math.max(l,-e.far),u$1=Math.min(u$1,-e.near));}};f.setRange(s$1);const m=z(t,i,e),_=T(t,i),p=T(t,-i),g=e=>{if(!a(e))return;const o=this.objectToBoundingSphere(e),n=Z(o),s$1=z(t,i,n)-m,_=s$1-o[3],p=s$1+o[3];_>u$1||p<l||!s(h,o)||r(e,f);};this._forEachNodeDepthOrdered(this._root,(e=>{if(!s(h,e.bounds))return !1;g$2(v,_,e.halfSize),u(v,v,Z(e.bounds));if(z(t,i,v)-m>u$1)return !1;g$2(v,p,e.halfSize),u(v,v,Z(e.bounds));if(z(t,i,v)-m<l)return !1;const s$1=e.node;return s$1.terminals.forAll((e=>g(e))),null!==s$1.residents&&s$1.residents.forAll((e=>g(e))),!0}),t,i);}forEachNode(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize,t.depth)));}forEachNeighbor(e,t){const o=V(t),n=Z(t),s=t=>{const s=this.objectToBoundingSphere(t),r=V(s),h=o+r;return !(p$1(Z(s),n)-h*h<=0)||e(t)};let r=!0;const h=e=>{r&&(r=s(e));};this._forEachNode(this._root,(e=>{const t=V(e.bounds),s=o+t;if(p$1(Z(e.bounds),n)-s*s>0)return !1;const a=e.node;return a.terminals.forAll(h),r&&null!==a.residents&&a.residents.forAll(h),r})),r&&this.forEachDegenerateObject(h);}_intersectsNode(e,t){return j$1(Z(t.bounds),2*-t.halfSize,C),j$1(Z(t.bounds),2*t.halfSize,y),i(e.origin,e.direction,C,y)}_intersectsNodeWithOffset(e,t,o){return j$1(Z(t.bounds),2*-t.halfSize,C),j$1(Z(t.bounds),2*t.halfSize,y),o.applyToMinMax(C,y),i(e.origin,e.direction,C,y)}_intersectsObject(e,t){const o=this.objectToBoundingSphere(t);return !(o[3]>0)||I$1(o,e)}_intersectsObjectWithOffset(e,t,o){const n=this.objectToBoundingSphere(t);return !(n[3]>0)||I$1(o.applyToBoundingSphere(n),e)}_forEachNode(e,t){let o=g.acquire().init(e);const n=[o];for(;0!==n.length;){if(o=n.pop(),t(o)&&!o.isLeaf())for(let e=0;e<o.node.children.length;e++){o.node.children[e]&&n.push(g.acquire().init(o).advance(e));}g.release(o);}}_forEachNodeDepthOrdered(e,t,o,n=b.DepthOrder.FRONT_TO_BACK){let i=g.acquire().init(e);const s=[i];for(N(o,n,K);0!==s.length;){if(i=s.pop(),t(i)&&!i.isLeaf())for(let e=7;e>=0;--e){const t=K[e];i.node.children[t]&&s.push(g.acquire().init(i).advance(t));}g.release(i);}}_remove(e,t,o){P.clear();const n=o.advanceTo(t,((e,t)=>{P.push(e.node),P.push(t);}))?o.node.terminals:o.node.residents;if(n.removeUnordered(e),0===n.length)for(let i=P.length-2;i>=0;i-=2){const e=P.data[i],t=P.data[i+1];if(!this._purge(e,t))break}}_nodeIsEmpty(e){if(0!==e.terminals.length)return !1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return !1;return !0}_purge(e,o){return o>=0&&(e.children[o]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new l({shrink:!0})),!0)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t));}_split(e){const t=e.node.residents;e.node.residents=null;for(let o=0;o<t.length;o++){const n=g.acquire().init(e);this._add(t.at(o),n),g.release(n);}}_grow(e,t){if(0!==t&&(x(e,t,(e=>this.objectToBoundingSphere(e)),q),E(q[3])&&!this._fitsInsideTree(q)))if(this._nodeIsEmpty(this._root.node))O$1(q,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else {const e=this._rootBoundsForRootAsSubNode(q);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(q,e):this._growRootAsSubNode(e),g.release(e);}}_rebuildTree(e,t){r(Z(k),Z(t.bounds)),k[3]=t.halfSize,x([e,k],2,(e=>e),I);const o=g.acquire().init(this._root);this._root.initFrom(null,I,I[3]),this._root.increaseHalfSize(1.25),this._forEachNode(o,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),g.release(o);}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let o=0;return this._forEachNode(this._root,(e=>(o=Math.max(o,e.depth),o+t<=this._maximumDepth))),o+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],o=e;let n=-1/0;const i=this._root.bounds,s=this._root.halfSize;for(let h=0;h<3;h++){const e=i[h]-s-(o[h]-t),r=o[h]+t-(i[h]+s),a=Math.max(0,Math.ceil(e/(2*s))),d=Math.max(0,Math.ceil(r/(2*s)))+1,l=2**Math.ceil(Math.log(a+d)*Math.LOG2E);n=Math.max(n,l),L[h].min=a,L[h].max=d;}for(let h=0;h<3;h++){let e=L[h].min,t=L[h].max;const o=(n-(e+t))/2;e+=Math.ceil(o),t+=Math.floor(o);const r=i[h]-s-e*s*2;F[h]=r+(t+e)*s;}const r=n*s;return F[3]=r*A,g.acquire().initFrom(null,F,r,0)}_growRootAsSubNode(e){const t=this._root.node;r(Z(q),Z(this._root.bounds)),q[3]=this._root.halfSize,this._root.init(e),e.advanceTo(q,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals;}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0;}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return -1;let e=null;const t=this._root.node.children;let o=0,n=0;for(;n<t.length&&null==e;)o=n++,e=t[o];for(;n<t.length;)if(t[n++])return -1;return o}_isDegenerate(e){return !E(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,o=this._root.halfSize;return e[3]<=o&&e[0]>=t[0]-o&&e[0]<=t[0]+o&&e[1]>=t[1]-o&&e[1]<=t[1]+o&&e[2]>=t[2]-o&&e[2]<=t[2]+o}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:o}=this,n=this._nodeToJSON(this._root.node);return {maximumDepth:e,maximumObjectsPerNode:t,objectCount:o,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:n}}}_nodeToJSON(e){const t=e.children.map((e=>e?this._nodeToJSON(e):null)),o=e.residents?.map((e=>this.objectToBoundingSphere(e))),n=e.terminals?.map((e=>this.objectToBoundingSphere(e)));return {children:t,residents:o,terminals:n}}static fromJSON(e){const t=new b((e=>e),{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}};class g{constructor(){this.bounds=w$1(),this.halfSize=0,this.initFrom(null,null,0,0);}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,o,n=this.depth){return this.node=null!=e?e:g.createEmptyNode(),t&&O$1(t,this.bounds),this.halfSize=o,this.depth=n,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize();}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*A;}advance(e){let t=this.node.children[e];t||(t=g.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const o=M[e];return this.bounds[0]+=o[0]*this.halfSize,this.bounds[1]+=o[1]*this.halfSize,this.bounds[2]+=o[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,o=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!o)return t&&t(this,-1),!1;this.node.residents=null;}const n=this._childIndex(e);t&&t(this,n),this.advance(n);}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return (t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return {children:[null,null,null,null,null,null,null,null],terminals:new l({shrink:!0}),residents:new l({shrink:!0})}}static acquire(){return g._pool.acquire()}static release(e){g._pool.release(e);}static clearPool(){g._pool.prune();}}function S(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3]);}function O(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3]);}function j$1(e,t,o){o[0]=e[0]+t,o[1]=e[1]+t,o[2]=e[2]+t;}function x(e,t,o,n){if(1===t){const t=o(e[0]);O$1(t,n);}else {C[0]=1/0,C[1]=1/0,C[2]=1/0,y[0]=-1/0,y[1]=-1/0,y[2]=-1/0;for(let n=0;n<t;n++){const t=o(e[n]);E(t[3])&&(S(C,t),O(y,t));}A$1(Z(n),C,y,.5),n[3]=Math.max(y[0]-C[0],y[1]-C[1],y[2]-C[2])/2;}}function N(e,t,o){if(!H.length)for(let n=0;n<8;++n)H.push({index:0,distance:0});for(let n=0;n<8;++n){const o=M[n];H.data[n].index=n,H.data[n].distance=z(e,t,o);}H.sort(((e,t)=>e.distance-t.distance));for(let n=0;n<8;++n)o[n]=H.data[n].index;}function T(e,t){let o,n=1/0;for(let i=0;i<8;++i){const s=z(e,t,D[i]);s<n&&(n=s,o=D[i]);}return o}function z(e,t,o){return t*(e[0]*o[0]+e[1]*o[1]+e[2]*o[2])}function E(e){return !isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}g._pool=new e$1(g),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT";}(b$1||(b$1={}));const M=[r$1(-1,-1,-1),r$1(1,-1,-1),r$1(-1,1,-1),r$1(1,1,-1),r$1(-1,-1,1),r$1(1,-1,1),r$1(-1,1,1),r$1(1,1,1)],D=[r$1(-1,-1,-1),r$1(-1,-1,1),r$1(-1,1,-1),r$1(-1,1,1),r$1(1,-1,-1),r$1(1,-1,1),r$1(1,1,-1),r$1(1,1,1)],A=Math.sqrt(3),B=[null];function R(e){return B[0]=e,B}const F=w$1(),v=n$1(),C=n$1(),y=n$1(),P=new l,w=w$1(),q=w$1(),k=w$1(),I=w$1(),L=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],H=new l,K=[0,0,0,0,0,0,0,0],W=b$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t=1e3;function e(t,e,a){const m=w$1(),p=Z(m);return q$1(p,p,t,.5),q$1(p,p,e,.5),m[3]=x$1(p,t),u(p,p,a),m}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let _=class{constructor(){this._idToComponent=new Map,this._components=new W((e=>e.bounds)),this._edges=new W((e=>e.bounds)),this._tmpLineSegment=v$1(),this._tmpP1=n$1(),this._tmpP2=n$1(),this._tmpP3=n$1(),this.remoteClient=null;}async fetchCandidates(e,o){await Promise.resolve(),s$2(o),await this._ensureEdgeLocations(e,o);const s=[];return this._edges.forEachNeighbor((t$1=>(this._addCandidates(e,t$1,s),s.length<t)),e.bounds),{result:{candidates:s}}}async _ensureEdgeLocations(e,t){const o=[];if(this._components.forEachNeighbor((e=>{if(null==e.info){const{id:t,uid:s}=e;o.push({id:t,uid:s});}return !0}),e.bounds),!o.length)return;const s={components:o},n=await this.remoteClient.invoke("fetchAllEdgeLocations",s,t??{});for(const i of n.components)this._setFetchEdgeLocations(i);}async add(e){const t=new b(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((o=>(o.component===t&&e.push(o),!0)),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id);}return {result:{}}}_setFetchEdgeLocations(e$1){const t=this._idToComponent.get(e$1.id);if(null==t||e$1.uid!==t.uid)return;const o=m.createView(e$1.locations),s=new Array(o.count),n=n$1(),r=n$1();for(let i=0;i<o.count;i++){o.position0.getVec(i,n),o.position1.getVec(i,r);const d=e(n,r,e$1.origin),c=new j(t,i,d);s[i]=c;}this._edges.add(s);const{objectIds:d,origin:c}=e$1;t.info={locations:o,objectIds:d,origin:c};}_addCandidates(e,t,o){const{info:n}=t.component,{origin:i,objectIds:r}=n,d=n.locations,c=d.position0.getVec(t.index,this._tmpP1),a=d.position1.getVec(t.index,this._tmpP2);u(c,c,i),u(a,a,i);const p=r[d.componentIndex.get(t.index)];this._addEdgeCandidate(e,p,c,a,o),this._addVertexCandidate(e,p,c,o),this._addVertexCandidate(e,p,a,o);}_addEdgeCandidate(e,t,o,s,i){if(!e.returnEdge)return;const d=Z(e.bounds),h=b$3(o,s,this._tmpLineSegment),u=j$3(h,d,this._tmpP3);st(e.bounds,u)&&i.push({type:"edge",objectId:t,target:t$1(u),distance:x$1(d,u),start:t$1(o),end:t$1(s)});}_addVertexCandidate(e,t,o,s){if(!e.returnVertex||!st(e.bounds,o))return;const i=Z(e.bounds);s.push({type:"vertex",objectId:t,target:t$1(o),distance:x$1(i,o)});}};_=e$2([c("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],_);const f=_;class b{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++b.uid;}}b.uid=0;class j{constructor(e,t,o){this.component=e,this.index=t,this.bounds=o;}}

export { f as default };
