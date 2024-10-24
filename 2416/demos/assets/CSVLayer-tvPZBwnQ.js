import { aW as e, aX as y, aY as c$1, eZ as m$1, b0 as k, b5 as d, aH as M, eP as p$1, V as has, e3 as o, ef as p, g2 as f$1, er as We, bk as f$2, B as a, I, f9 as b, s } from './main-DoZrzYXH.js';
import { l } from './clientSideDefaults-aAVP0vc1.js';
import './preload-helper-dJJaZANz.js';
import './QueryEngineCapabilities-CCudnOfH.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let c=class extends m$1{constructor(t){super(t),this.type="csv",this.refresh=k((async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return e&&(this.sourceJSON.extent=e),o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const o=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return d.fromJSON(o)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const o=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return {count:o.count,extent:M.fromJSON(o.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await p$1("CSVSourceWorker",{strategy:has("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:o,fields:i,latitudeField:s,longitudeField:n,spatialReference:a,timeInfo:c}=this.loadOptions,l=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:i?.map((t=>t.toJSON())),latitudeField:s,longitudeField:n,spatialReference:a?.toJSON(),timeInfo:c?.toJSON()}},{signal:t});this.locationInfo=l.locationInfo,this.sourceJSON=l.layerDefinition,this.delimiter=l.delimiter;}};e([y()],c.prototype,"type",void 0),e([y()],c.prototype,"loadOptions",void 0),e([y()],c.prototype,"customParameters",void 0),e([y()],c.prototype,"locationInfo",void 0),e([y()],c.prototype,"sourceJSON",void 0),e([y()],c.prototype,"delimiter",void 0),c=e([c$1("esri.layers.graphics.sources.CSVSource")],c);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function h(e,r){throw new s(r,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let m=class extends We{constructor(...e){super(...e),this.geometryType="point",this.capabilities=l(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=f$2.WGS84,this.source=null,this.type="csv";}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(a).then((async()=>this.initLayerProperties(await this.createGraphicsSource(t))));return this.addResolvingPromise(i),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!t.layerDefinition?.drawingInfo?.labelingInfo}set url(e){if(!e)return void this._set("url",e);const t=I(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query});}async createGraphicsSource(e){const t=new c({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(b.from(e)||this.createQuery()))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(b.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(b.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(b.from(e)||this.createQuery())))}read(e,t){super.read(e,t),t&&"service"===t.origin&&this.revert(["latitudeField","longitudeField"],"service");}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new s("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return h(this,"csv-layer:save")}async saveAs(e,t){return h(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return !1}};e([y({readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"capabilities",void 0),e([y({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],m.prototype,"delimiter",void 0),e([y({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],m.prototype,"editingEnabled",void 0),e([y({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],m.prototype,"fields",void 0),e([y({type:Boolean,readOnly:!0})],m.prototype,"isTable",null),e([o("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],m.prototype,"readWebMapLabelsVisible",null),e([y({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],m.prototype,"latitudeField",void 0),e([y({type:["show","hide"]})],m.prototype,"listMode",void 0),e([y({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"locationType",void 0),e([y({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],m.prototype,"longitudeField",void 0),e([y({type:["CSV"]})],m.prototype,"operationalLayerType",void 0),e([y()],m.prototype,"outFields",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],m.prototype,"path",void 0),e([y({json:{read:!1},cast:null,type:c,readOnly:!0})],m.prototype,"source",void 0),e([y({json:{read:!1},value:"csv",readOnly:!0})],m.prototype,"type",void 0),e([y({json:{read:p,write:{isRequired:!0,ignoreOrigin:!0,writer:f$1}}})],m.prototype,"url",null),m=e([c$1("esri.layers.CSVLayer")],m);const f=m;

export { f as default };
