import { hC as o, bk as f$2, dK as y$1, hD as pt, d3 as rt, hE as n, hF as e, hG as t$1 } from './main-94WFCC9C.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let f$1 = class f{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null;}};class g{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null;}}function z(e,t,s,r){if(t?.size&&null!=s&&e)for(const n in e){if(!t.has(n))continue;const i=e[n];"string"==typeof i&&i.length>s&&(r(n),e[n]="");}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function u(t,e){return e}function d(t,e,r,s){switch(r){case 0:return f(t,e+s,0);case 1:return "lowerLeft"===t.originPosition?f(t,e+s,1):y(t,e+s,1)}}function p(t,e,r,s){return 2===r?f(t,e,2):d(t,e,r,s)}function c(t,e,r,s){return 2===r?f(t,e,3):d(t,e,r,s)}function m(t,e,r,s){return 3===r?f(t,e,3):p(t,e,r,s)}function f({translate:t,scale:e},r,s){return t[s]+r*e[s]}function y({translate:t,scale:e},r,s){return t[s]-r*e[s]}class _{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=u,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[];}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new g}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=o(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const r of t.features)e(r.geometry);}createSpatialReference(){return new f$2}addField(t,e){t.fields.push(y$1.fromJSON(e));const r=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of r)this[t]=null;};}addFeature(t,e){const r=this._options.maxStringAttributeLength,s=this._options.maxStringAttributeFields;z(e.attributes,s,r,(r=>{const s=e.attributes[t.objectIdFieldName];null!=s&&this._missingAttributes.push({objectId:s,attribute:r});})),t.features.push(e);}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,i=pt(r.clone(),r,!1,!1,this._transform),o=rt(i,s,!1,!1);let n=null;switch(s){case"esriGeometryPoint":n="point";break;case"esriGeometryPolygon":n="polygon";break;case"esriGeometryPolyline":n="polyline";break;case"esriGeometryMultipoint":n="multipoint";}o.type=n,t.queryGeometryType=s,t.queryGeometry=o;}prepareFeatures(e){switch(this._transform=e.transform??null,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:n(e.geometryType);}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new f$1(e(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0;}addLength(t,e){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e);}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const s=this._transform?this._applyTransform(this._transform,e,r,0):e;if(null!=s)switch(r){case 0:t.x=s;break;case 1:t.y=s;break;case 2:t.hasZ?t.z=s:t.m=s;break;case 3:t.m=s;}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,r):t}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r);}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r);}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s);}_createPolygonGeometry(t){return {type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return {type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return {type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r),i=t[t.length-1],o=this._coordinateBuffer;if(o){if(0===r){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;i.push(new Float64Array(o.buffer,t,this._vertexDimension));}o[this._coordinateBufferPtr++]=s;}}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?m:e?p:r?c:d}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t{_parseFeatureQuery(t){const s=new _(t.options),i=t$1(t.buffer,s),o={...i,spatialReference:i.spatialReference?.toJSON(),fields:i.fields?i.fields.map((e=>e.toJSON())):void 0,missingAttributes:s.missingAttributes};return Promise.resolve(o)}}function s(){return new t}

export { s as default };
