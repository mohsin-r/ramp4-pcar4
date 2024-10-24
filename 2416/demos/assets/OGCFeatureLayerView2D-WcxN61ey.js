import { aW as e, aX as y, aY as c } from './main-DoZrzYXH.js';
import { X } from './FeatureLayerView2D-5kICHmel.js';
import './preload-helper-dJJaZANz.js';
import './Container-C6AzISVR.js';
import './highlightReasons-DBA9qjIO.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BSBIQRqZ.js';
import './LayerView-BaGmZgTZ.js';
import './TechniqueInstance-CtVO7BRO.js';
import './UpdateTracking2D-CrCKjrVJ.js';
import './TurboLine-03ocHNmC.js';
import './enums-DZmWLm_j.js';
import './earcut-DNWRvTE8.js';
import './GeometryUtils-C1ZrjPiA.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DLxFddeq.js';
import './Program-CrpSkACc.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-C-SSnD-O.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BdMub1Nc.js';
import './WGLContainer-D8MQjkC5.js';
import './ProgramTemplate-rGVGAa2a.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CuL8Eca0.js';
import './floatRGBA-BpYiVk0r.js';
import './FeatureCommandQueue-AJ_8yK6E.js';
import './HighlightCounter-D_uUlKHx.js';
import './popupUtils-BC4vd-63.js';
import './RefreshableLayerView-BGS1bUVF.js';

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
