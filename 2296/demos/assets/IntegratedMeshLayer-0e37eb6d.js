import { aX as e, aY as y$1, aF as j, ey as r, aZ as c, c2 as f$1, bf as H, dE as s, i5 as rn, X as a$1, dW as u, a4 as V, I, U as U$1, eB as l$1, e0 as u$1, e1 as j$2, e2 as t, e3 as m$1, eC as e$1, eD as i, a_ as v, fn as C, h as u$2, C as a$2, s as s$1, J as s$2, e4 as o, eK as f$2, ed as b } from './main-af5539f8.js';
import { j as j$1 } from './persistable-5e0f8caf.js';
import { L, P as P$1 } from './SceneService-63dacbe5.js';
import { s as s$3, l as l$2, u as u$3, m as m$2 } from './I3SLayerDefinitions-3f7be2ae.js';
import { I as I$1, x, Z } from './elevationInfoUtils-7a443963.js';
import './preload-helper-a4975f27.js';
import './multiOriginJSONSupportUtils-3d5af7a5.js';
import './resourceExtension-e1ec0495.js';
import './originUtils-f2cf510b.js';
import './jsonContext-21ea60cb.js';
import './resourceUtils-60c6ff13.js';
import './resourceUtils-eb91f147.js';
import './saveAPIKeyUtils-461ed97b.js';
import './saveUtils-dc3bb505.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var l;let y=l=class extends f$1{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s$1){if(s$1.layer?.spatialReference&&!s$1.layer.spatialReference.equals(this.geometry.spatialReference)){if(!H(e.spatialReference,s$1.layer.spatialReference))return void(s$1?.messages&&s$1.messages.push(new s("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s$1.layer.spatialReference,context:s$1})));const p=new j;rn(e,p,s$1.layer.spatialReference),r[o]=p.toJSON(s$1);}else r[o]=e.toJSON(s$1);delete r[o].spatialReference;}clone(){return new l({geometry:a$1(this.geometry),type:this.type})}};e([y$1({type:j}),j$1()],y.prototype,"geometry",void 0),e([r(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([y$1({type:["clip","mask","replace"],nonNullable:!0}),j$1()],y.prototype,"type",void 0),y=l=e([c("esri.layers.support.SceneModification")],y);const f=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var m;let n=m=class extends(u(V.ofType(f))){constructor(r){super(r),this.url=null;}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}static fromJSON(r,o){const t=new m;for(const e of r)t.add(f.fromJSON(e,o));return t}static async fromUrl(r,t,e){const i={url:I(r),origin:"service"},c=await U$1(r,{responseType:"json",signal:e?.signal}),n=t.toJSON(),a=[];for(const o of c.data)a.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},i));return new m({url:r,items:a})}};e([y$1({type:String})],n.prototype,"url",void 0),n=m=e([c("esri.layers.support.SceneModifications")],n);const a=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let A=class extends(L(l$1(u$1(j$2(t(m$1(e$1(i(b))))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null;}initialize(){this.addHandles(v((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),C));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:u$2(e,o),context:o};}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(o){a$2(o);}if(await this._fetchService(t),null!=this._modificationsSource){const t=await a.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(P$1.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(P$1.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s$1("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";I$1(s$2.getLogger(this),x(t,"absolute-height",e)),I$1(s$2.getLogger(this),Z(t,e));}};e([y$1({type:String,readOnly:!0})],A.prototype,"geometryType",void 0),e([y$1({type:["show","hide"]})],A.prototype,"listMode",void 0),e([y$1({type:["IntegratedMeshLayer"]})],A.prototype,"operationalLayerType",void 0),e([y$1({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),e([y$1({type:s$3,readOnly:!0})],A.prototype,"nodePages",void 0),e([y$1({type:[l$2],readOnly:!0})],A.prototype,"materialDefinitions",void 0),e([y$1({type:[u$3],readOnly:!0})],A.prototype,"textureSetDefinitions",void 0),e([y$1({type:[m$2],readOnly:!0})],A.prototype,"geometryDefinitions",void 0),e([y$1({readOnly:!0})],A.prototype,"serviceUpdateTimeStamp",void 0),e([y$1({type:a}),j$1({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],A.prototype,"modifications",void 0),e([o(["web-scene","portal-item"],"modifications")],A.prototype,"readModifications",null),e([y$1(f$2)],A.prototype,"elevationInfo",null),e([y$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),A=e([c("esri.layers.IntegratedMeshLayer")],A);const P=A;

export { P as default };
