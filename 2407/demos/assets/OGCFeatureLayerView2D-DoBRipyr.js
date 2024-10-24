import { aW as e, aX as y, aY as c } from './main-BhyDjZ0Q.js';
import { X } from './FeatureLayerView2D-Dv0Kw1F_.js';
import './preload-helper-dJJaZANz.js';
import './Container-ddLFvo_i.js';
import './highlightReasons-Djfsz-43.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BEoxsVE3.js';
import './LayerView-DjxLU4A5.js';
import './TechniqueInstance-BdBgnZv5.js';
import './UpdateTracking2D-m_HAnFY3.js';
import './TurboLine-Bbqslyv_.js';
import './enums-DZmWLm_j.js';
import './earcut-9bQ4Wcu3.js';
import './GeometryUtils-D-LE2Lsk.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BN9vC4N1.js';
import './Program-BoC-3bQ1.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BKzTl2d2.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DfH9WsLD.js';
import './WGLContainer-CGSzXE41.js';
import './ProgramTemplate-BmrNRl7_.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CDt_gXMj.js';
import './floatRGBA-Xh600XFu.js';
import './FeatureCommandQueue-BNOuH6NO.js';
import './HighlightCounter-Dr-nJcKg.js';
import './popupUtils-BGXqYRDd.js';
import './RefreshableLayerView--h-ZLrcg.js';

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
