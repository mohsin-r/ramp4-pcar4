import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-af5539f8.js';
import { X } from './FeatureLayerView2D-22f5e160.js';
import './preload-helper-a4975f27.js';
import './Container-8d82d880.js';
import './highlightReasons-1fcbf435.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-0ccbdade.js';
import './LayerView-05a32abb.js';
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
import './tileUtils-6f82bc7d.js';
import './SDFHelper-ebe6faff.js';
import './floatRGBA-327249da.js';
import './FeatureCommandQueue-774112cd.js';
import './HighlightCounter-99190fa7.js';
import './popupUtils-225191ef.js';
import './RefreshableLayerView-6a5072e6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
