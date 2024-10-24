import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-fb35569c.js';
import { a } from './BitmapContainer-91a85155.js';
import { m as m$1, u } from './LayerView-244f21d1.js';
import { v } from './ExportStrategy-dad2dc73.js';
import { i } from './RefreshableLayerView-b6fd4aa6.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-ec60a313.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-f8143ebf.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-ebcb6fa6.js';
import './Program-eafa5015.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-c3d25716.js';
import './Container-6c3f3a54.js';
import './highlightReasons-07e547f0.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-22d8797f.js';
import './Bitmap-33b30f52.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
