import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-d7ab64e3.js';
import { t as t$2 } from './highlightReasons-d74a0c47.js';
import { m as m$1, u as u$2 } from './LayerView-4b5fa9d6.js';
import { t as t$1 } from './GraphicContainer-4ff04a19.js';
import { $ } from './GraphicsView2D-4c674350.js';
import { t } from './HighlightCounter-7909e839.js';
import './preload-helper-a4975f27.js';
import './Container-d3c5c8a6.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-603ecef1.js';
import './AGraphicContainer-02bf592d.js';
import './TechniqueInstance-1156c06d.js';
import './UpdateTracking2D-772f167a.js';
import './TurboLine-00c725d8.js';
import './enums-d24bcbbf.js';
import './earcut-b59d8610.js';
import './GeometryUtils-8344b856.js';
import './Rect-09e0f861.js';
import './LabelMetric-16e10627.js';
import './Program-42b7d8bc.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-b8e98072.js';
import './constants-412c3a33.js';
import './TileContainer-3ff9c8c1.js';
import './WGLContainer-34d899fb.js';
import './ProgramTemplate-97ad7a9c.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-1eb7a1cf.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-a1682ebb.js';
import './TimeOnly-af348bc5.js';
import './timeSupport-bc1f5da5.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-1fea1e58.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
