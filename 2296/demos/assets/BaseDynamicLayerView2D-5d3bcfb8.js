import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-af5539f8.js';
import { a } from './BitmapContainer-b2106ed3.js';
import { m as m$1, u } from './LayerView-05a32abb.js';
import { v } from './ExportStrategy-90c65bcb.js';
import { i } from './RefreshableLayerView-6a5072e6.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-1e70c607.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-796164f1.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-0ccbdade.js';
import './Program-44169f53.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-63bbfb72.js';
import './Container-8d82d880.js';
import './highlightReasons-1fcbf435.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-cef93dc8.js';
import './Bitmap-cc9f9d70.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
