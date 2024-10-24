import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-94WFCC9C.js';
import { X } from './FeatureLayerView2D-CPwM7N_4.js';
import './preload-helper-dJJaZANz.js';
import './Container-DZdZBDVl.js';
import './highlightReasons-D9kPI6n4.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-D1CUGV4e.js';
import './LayerView-C6S4uXg9.js';
import './TechniqueInstance-CCKZRFU1.js';
import './UpdateTracking2D-aQXfZfZU.js';
import './TurboLine-DXumXpYw.js';
import './enums-DZmWLm_j.js';
import './earcut-DZo8K6EN.js';
import './GeometryUtils-Boy0dC7D.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-sUt0p7Ya.js';
import './Program-C5Yz3pEO.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BeMuJDJb.js';
import './constants-C0QDwCF4.js';
import './TileContainer-0bMuX7Sl.js';
import './WGLContainer-Bd_1osWu.js';
import './ProgramTemplate-BZYq_7J1.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CJRh-Aoi.js';
import './floatRGBA-BEYE4kSu.js';
import './FeatureCommandQueue-BpAvXkwb.js';
import './HighlightCounter-Dm7JaibM.js';
import './popupUtils-DgeUobkt.js';
import './RefreshableLayerView-Ct2SKp18.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
