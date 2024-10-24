import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-fb35569c.js';
import { X } from './FeatureLayerView2D-984b63ae.js';
import './preload-helper-a4975f27.js';
import './Container-6c3f3a54.js';
import './highlightReasons-07e547f0.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-ebcb6fa6.js';
import './LayerView-244f21d1.js';
import './TechniqueInstance-524c2a52.js';
import './UpdateTracking2D-d1a43a21.js';
import './TurboLine-6707b443.js';
import './enums-d24bcbbf.js';
import './earcut-22d8797f.js';
import './GeometryUtils-72027249.js';
import './Rect-09e0f861.js';
import './LabelMetric-f8143ebf.js';
import './Program-eafa5015.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-f3a59f57.js';
import './constants-412c3a33.js';
import './TileContainer-3c7c0559.js';
import './WGLContainer-ec60a313.js';
import './ProgramTemplate-c3d25716.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-cc779354.js';
import './floatRGBA-aa75ff99.js';
import './FeatureCommandQueue-6dde4a7d.js';
import './HighlightCounter-c631e516.js';
import './popupUtils-5960df65.js';
import './RefreshableLayerView-b6fd4aa6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
