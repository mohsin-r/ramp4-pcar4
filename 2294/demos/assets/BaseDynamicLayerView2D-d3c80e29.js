import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-d7ab64e3.js';
import { a } from './BitmapContainer-aba1bd42.js';
import { m as m$1, u } from './LayerView-4b5fa9d6.js';
import { v } from './ExportStrategy-45ef8107.js';
import { i } from './RefreshableLayerView-86b0906d.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-34d899fb.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-16e10627.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-603ecef1.js';
import './Program-42b7d8bc.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-97ad7a9c.js';
import './Container-d3c5c8a6.js';
import './highlightReasons-d74a0c47.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-b59d8610.js';
import './Bitmap-75a666df.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
