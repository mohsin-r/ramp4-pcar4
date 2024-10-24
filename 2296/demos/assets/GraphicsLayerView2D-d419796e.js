import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-af5539f8.js';
import { t as t$2 } from './highlightReasons-1fcbf435.js';
import { m as m$1, u as u$2 } from './LayerView-05a32abb.js';
import { t as t$1 } from './GraphicContainer-9ee77ca5.js';
import { $ } from './GraphicsView2D-44ba4edd.js';
import { t } from './HighlightCounter-99190fa7.js';
import './preload-helper-a4975f27.js';
import './Container-8d82d880.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-0ccbdade.js';
import './AGraphicContainer-239b05f0.js';
import './TechniqueInstance-f30198de.js';
import './UpdateTracking2D-fe9d623f.js';
import './TurboLine-b12a7504.js';
import './enums-d24bcbbf.js';
import './earcut-cef93dc8.js';
import './GeometryUtils-173c8cad.js';
import './Rect-09e0f861.js';
import './LabelMetric-796164f1.js';
import './Program-44169f53.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-c9885a26.js';
import './constants-412c3a33.js';
import './TileContainer-20a2e231.js';
import './WGLContainer-1e70c607.js';
import './ProgramTemplate-63bbfb72.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-774112cd.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-0214e6b8.js';
import './TimeOnly-64eccee0.js';
import './timeSupport-ef1a31d5.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-527a0d49.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
