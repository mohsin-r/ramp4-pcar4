import { aX as e, aY as y, aZ as c } from './main-fb35569c.js';
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
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([c("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends(o(X)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([c("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
