import { aX as e, aY as y, aZ as c } from './main-bf9b57d3.js';
import { X } from './FeatureLayerView2D-2a0d39f8.js';
import './preload-helper-a4975f27.js';
import './Container-e19a54f6.js';
import './highlightReasons-f969ffc8.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-9ab46769.js';
import './LayerView-4bc126b9.js';
import './TechniqueInstance-bb80b2f0.js';
import './UpdateTracking2D-5137ace1.js';
import './TurboLine-0947bb40.js';
import './enums-d24bcbbf.js';
import './earcut-a070b095.js';
import './GeometryUtils-7d614938.js';
import './Rect-09e0f861.js';
import './LabelMetric-91516c46.js';
import './Program-e3d0b290.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-dc144851.js';
import './constants-412c3a33.js';
import './TileContainer-8c9e64ce.js';
import './WGLContainer-55e248f0.js';
import './ProgramTemplate-80223d7c.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-b44db3de.js';
import './floatRGBA-46606fb0.js';
import './FeatureCommandQueue-f295b5a1.js';
import './HighlightCounter-e7de550c.js';
import './popupUtils-be8e0642.js';
import './RefreshableLayerView-4dec4ccb.js';

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
