import { aX as e, aY as y, fB as d, aZ as c, b3 as d$1, s, fC as r$1, ay as e$1, b6 as d$2 } from './main-bf9b57d3.js';
import { n, X } from './FeatureLayerView2D-2a0d39f8.js';
import './preload-helper-a4975f27.js';
import './Container-e19a54f6.js';
import './highlightReasons-f969ffc8.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-9ab46769.js';
import './LayerView-4bc126b9.js';
import './TechniqueInstance-bb80b2f0.js';
import './UpdateTracking2D-5137ace1.js';
import './TurboLine-0947bb40.js';
import './enums-d24bcbbf.js';
import './earcut-a070b095.js';
import './GeometryUtils-7d614938.js';
import './Rect-09e0f861.js';
import './LabelMetric-91516c46.js';
import './Program-e3d0b290.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-dc144851.js';
import './constants-412c3a33.js';
import './TileContainer-8c9e64ce.js';
import './WGLContainer-55e248f0.js';
import './ProgramTemplate-80223d7c.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-b44db3de.js';
import './floatRGBA-46606fb0.js';
import './FeatureCommandQueue-f295b5a1.js';
import './HighlightCounter-e7de550c.js';
import './popupUtils-be8e0642.js';
import './RefreshableLayerView-4dec4ccb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r=r=>{let i=class extends r{resume(){this._isUserPaused=!1,this.suspended||this._doResume();}pause(){this._isUserPaused=!0,this.suspended||this._doPause();}disconnect(){this._doDisconnect();}connect(){this._doConnect();}clear(){this._doClear();}constructor(...s){super(...s),this._isUserPaused=!1,this.filter=null;}get connectionStatus(){return (this._isUserPaused||this.suspended)&&"connected"===this._streamConnectionStatus?"paused":this._streamConnectionStatus}_onSuspendedChange(s){s?this._doPause():this._isUserPaused||this._doResume();}};return e([y()],i.prototype,"_isUserPaused",void 0),e([y({readOnly:!0})],i.prototype,"connectionStatus",null),e([y({type:d})],i.prototype,"filter",void 0),i=e([c("esri.layers.mixins.StreamLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p=class extends(r(X)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null;}initialize(){this.addHandles([d$1((()=>this.layer.customParameters),(e=>this._worker.streamMessenger.updateCustomParameters(e))),this.layer.on("send-message-to-socket",(e=>this._worker.streamMessenger.sendMessageToSocket(e))),this.layer.on("send-message-to-client",(e=>{this._worker.streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&"clear"===e.type&&this.incrementSourceRefreshVersion();})),d$1((()=>this.layer.purgeOptions),(()=>this._update())),d$1((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor"),this._doResume();}destroy(){this._doPause();}get connectionError(){return this.pipelineErrorString?new s("stream-controller",this.pipelineErrorString):null}on(e,r){if(Array.isArray(e))return r$1(e.map((e=>this.on(e,r))));const o=["data-received","message-received"].includes(e);o&&this._worker.streamMessenger.enableEvent(e,!0);const n=super.on(e,r),i=this;return e$1((()=>{n.remove(),o&&(i._worker.closed||i.hasEventListener(e)||i._worker.streamMessenger.enableEvent(e,!1));}))}queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return n(this._worker.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then((e=>{const r=d$2.fromJSON(e);return r.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),r})),new d$2({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected";}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){null!=this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null);}_doResume(){this._refreshInterval=setInterval((()=>this.incrementSourceRefreshVersion()),this.layer.updateInterval);}_doDisconnect(){this._worker.streamMessenger.disconnect(),this._doPause();}_doConnect(){this._worker.streamMessenger.connect(),this.resume();}_doClear(){this._worker.streamMessenger.clear(),null==this._refreshInterval&&this.incrementSourceRefreshVersion();}_createClientOptions(){const e=super._createClientOptions(),r=this;return {...e,get container(){return r.featureContainer},setProperty:e=>{this.set(e.propertyName,e.value);}}}};e([y()],p.prototype,"pipelineConnectionStatus",void 0),e([y()],p.prototype,"pipelineErrorString",void 0),e([y({readOnly:!0})],p.prototype,"connectionError",null),e([y({readOnly:!0})],p.prototype,"_streamConnectionStatus",null),p=e([c("esri.views.2d.layers.StreamLayerView2D")],p);const u=p;

export { u as default };
