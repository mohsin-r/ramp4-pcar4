import { aT as h, aU as m$2, aV as r$1, a8 as G, aW as e, ag as b$1, J as s$1, aX as e$1, aY as y$1, aZ as c } from './main-d7ab64e3.js';
import { r, n } from './imageUtils-50f1ce02.js';
import { m as m$1, u } from './LayerView-4b5fa9d6.js';
import { i } from './RefreshableLayerView-86b0906d.js';
import './preload-helper-a4975f27.js';
import './Bitmap-75a666df.js';
import './Container-d3c5c8a6.js';
import './highlightReasons-d74a0c47.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-603ecef1.js';
import './WGLContainer-34d899fb.js';
import './LabelMetric-16e10627.js';
import './enums-d24bcbbf.js';
import './Program-42b7d8bc.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-97ad7a9c.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-b59d8610.js';
import './TileContainer-3ff9c8c1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=new Set([102113,102100,3857,3785,900913]),y=[0,0];let _=class extends(i(r(m$1(u)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new h(e),this._fetchQueue=new m$2({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add((()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet]),(()=>this.doRefresh()))),super.attach());}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some((t=>G(t.tileInfo?.spatialReference,e)))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))));}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(y,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e$1,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:a=0}=t;if(!s)return this._fetchImage(e$1,r);const l=new e(0,0,0,0);let o;try{await s.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:r}),o=await this._fetchImage(l,r);}catch(n$1){if(b$1(n$1))throw n$1;if(a<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const s=new e(i),r=await this.fetchTile(s,{...t,resamplingLevel:a+1});return n(this._tileInfoView,r,s,e$1)}}throw n$1}return n(this._tileInfoView,o,l,e$1)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(s){b$1(s)||s$1.getLogger(this).error(s);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>G(e.tileInfo?.spatialReference,t)));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>m.has(e.tileInfo?.spatialReference.wkid??-1)))),i}};e$1([y$1({readOnly:!0})],_.prototype,"tileMatrixSet",null),_=e$1([c("esri.views.2d.layers.WMTSLayerView2D")],_);const w=_;

export { w as default };
