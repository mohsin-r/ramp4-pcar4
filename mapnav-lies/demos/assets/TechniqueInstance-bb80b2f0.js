import { W as has, _ as L$1, s, J as s$1 } from './main-bf9b57d3.js';
import { M, q, y as y$1, H, z, B, C, E } from './definitions-1e43ef7c.js';
import { f, n } from './UpdateTracking2D-5137ace1.js';
import { d, c } from './LabelMetric-91516c46.js';
import { D as D$1, L } from './enums-af0bf3a9.js';
import { x } from './Program-e3d0b290.js';
import { e, m as m$1 } from './Texture-9ab46769.js';
import { i as i$1 } from './TileContainer-8c9e64ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const T=()=>s$1.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");class m{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:n}=t,a=d(r);this.blockIndex=i,this.pixelType=r,this.size=e,this.textureOnly=n,n||(this.data=new a(s)),this._resetRange();}destroy(){this._texture?.dispose();for(const t in this._fbos){const e=this._fbos[t];e&&("0"===t&&e.detachColorTexture(),e.dispose()),this._fbos[t]=null;}this._texture=null;}get _textureDesc(){const t=new e;return t.wrapMode=D$1.CLAMP_TO_EDGE,t.samplingMode=L.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,i){const s=f(t),r=this.data,n=s*this.texelSize+e;!r||n>=r.length||(r[n]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s));}getData(t,e){if(null==this.data)return null;const i=f(t)*this.texelSize+e;return !this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t,e=0){if(!this._fbos[e]){const i=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new x(t,i);}return this._fbos[e]}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(e,i){try{const s$1=this.dirtyStart,r=this.dirtyEnd;if(!this.hasDirty)return;has("esri-2d-update-debug")&&console.debug(`Version[${i}] AttributeStoreView.updateTexture`,{start:s$1,end:r,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();const n=this.data.buffer,a=this.getTexture(e),o=4,u=(s$1-s$1%this.size)/this.size,h=(r-r%this.size)/this.size,d$1=u,l=this.size,c=h,_=u*this.size*o,g=(l+c*this.size)*o-_,x=d(this.pixelType),f=new x(n,_*x.BYTES_PER_ELEMENT,g),b=this.size,m=c-d$1+1;if(m>this.size)return void T().error(new s("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,d$1,b,m,f);}catch(s){}}update(t){const{data:e,start:i,end:s}=t;if(null!=e&&null!=this.data){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const n=1<<i%this.texelSize;t.layout&n&&(s[r+i]=e[i]);}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s);}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=d(this.pixelType);this.destroy(),this.data=new s(t.buffer);}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0;}_initTexture(t){const e=new m$1(t,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(t),o=c(r),u=new(d(r))(new ArrayBuffer(i*s*o*this.texelSize)),h=t.getBoundFramebufferObject(),{x:d$1,y:l,width:_,height:g}=t.getViewport();t.bindFramebuffer(a),a.readPixels(0,0,i,s,n,r,u),e.updateData(0,0,0,2*i,s/2,u),t.setViewport(d$1,l,_,g),t.bindFramebuffer(h);}return this.destroy(),this._texture=e,this._texture}}class y{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1;}_initialize(t){if(!t)throw new Error("InternalError: initArgs must be defined");const e=t.blockDescriptors;if(this.size=t.blockSize,has("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:t}),null==this._data)this._data=e.map(((t,e)=>null!=t?new m(t,this.size,e):null));else for(let i=0;i<this._data.length;i++){const t=this._data[i],s=e[i];null!=s&&(null==t?this._data[i]=new m(s,this.size,i):t.resize(s,this.size));}}destroy(){for(const t of this._data??[])t?.destroy();this._defaultTexture?.dispose();for(const{resolver:t}of this._pendingAttributeUpdates)t.reject("AttributeStore destroyed");this._pendingAttributeUpdates=[];}isEmpty(){return null==this._data}getBlock(t){if(null==this._data)return null;return this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e);}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,M.VV,0,0)}getData(t,e,i,s){if(!this._data)return 0;const r=this._data[e];if(null==r)return 0;const n=r.getData(t,i);return null!=n?n:s}setData(t,e,i,s){this._data[e].setData(t,i,s);}lockTextureUploads(){this._locked=!0;}unlockTextureUploads(){this._locked=!1,this.update();}async requestUpdate(t){const e=L$1();e.promise=e.promise.catch((t=>{has("esri-2d-update-debug")&&console.error("AttributeStoreView.requestUpdate rejected",t);})),this._version=t.version,this._pendingAttributeUpdates.push({inner:t,resolver:e}),has("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:t});}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const t=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const{inner:e,resolver:i}of t){const{blockData:t,initArgs:s,sendUpdateEpoch:r,version:n}=e;has("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${r}] AttributeStoreView.applyUpdate`),this._version=n,this._epoch=r,null!=s&&this._initialize(s);const a=this._data;for(let e=0;e<t.length;e++){const i=t[e],s=a[e];null!=s&&null!=i&&(has("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${e}] AttributeStoreView.update`,{block:i}),s.update(i));}i.resolve();}}getUniforms(t){return {filterFlags:{texture:this._getTexture(t,M.FilterFlags),unit:q},animation:{texture:this._getTexture(t,M.Animation),unit:y$1},gpgpu:{texture:this._getTexture(t,M.GPGPU),unit:H},visualVariableData:{texture:this._getTexture(t,M.VV),unit:z},dataDriven0:{texture:this._getTexture(t,M.DD0),unit:B},dataDriven1:{texture:this._getTexture(t,M.DD1),unit:C},dataDriven2:{texture:this._getTexture(t,M.DD2),unit:E},size:this.size}}_getTexture(t,e){const i=this._data?.[e];return i?(i.updateTexture(t,this._version),i.getTexture(t)):this._getDefaultTexture(t)}_getDefaultTexture(t){if(null==this._defaultTexture){const e$1=new e;e$1.wrapMode=D$1.CLAMP_TO_EDGE,e$1.samplingMode=L.NEAREST,e$1.width=1,e$1.height=1,this._defaultTexture=new m$1(t,e$1,new Uint8Array(4));}return this._defaultTexture}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class r extends i$1{constructor(t){super(t),this._statisticsByLevel=new Map,this.attributeView=new y;}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy();}doRender(e){e.context.capabilities.enable("textureFloat"),super.doRender(e);}createRenderParams(e){const t=super.createRenderParams(e);return t.attributeView=this.attributeView,t.instanceStore=this._instanceStore,t.statisticsByLevel=this._statisticsByLevel,t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class i{constructor(t,i,e,s,n){this._instanceId=t,this.techniqueRef=i,this._meshWriterName=e,this._input=s,this.optionalAttributes=n;}get instanceId(){return n(this._instanceId)}createMeshInfo(t){return {id:this._instanceId,meshWriterName:this._meshWriterName,options:t,optionalAttributes:this.optionalAttributes}}getInput(){return this._input}setInput(t){this._input=t;}}

export { i, r };
