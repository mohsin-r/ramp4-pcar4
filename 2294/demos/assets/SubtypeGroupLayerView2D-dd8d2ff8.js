import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-d7ab64e3.js';
import { X } from './FeatureLayerView2D-a20d5853.js';
import './preload-helper-a4975f27.js';
import './Container-d3c5c8a6.js';
import './highlightReasons-d74a0c47.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-603ecef1.js';
import './LayerView-4b5fa9d6.js';
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
import './tileUtils-6f82bc7d.js';
import './SDFHelper-d2b2bc36.js';
import './floatRGBA-0ba3d2fe.js';
import './FeatureCommandQueue-1eb7a1cf.js';
import './HighlightCounter-7909e839.js';
import './popupUtils-efea3c37.js';
import './RefreshableLayerView-86b0906d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
