import { s as s$2, J as s$3, X as a$2 } from './main-fb35569c.js';
import { e } from './VertexAttribute-66b2103c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t=!0,o={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function r(e,r,n){return {identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+o.identifierOffset,o.identifierLength)),version:r.getUint16(n+o.versionOffset,t),checksum:r.getUint32(n+o.checksumOffset,t)}}const n={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function i(e,o){return {sizeLo:e.getUint32(o+n.sizeLo,t),sizeHi:e.getUint32(o+n.sizeHi,t),minX:e.getFloat64(o+n.minX,t),minY:e.getFloat64(o+n.minY,t),minZ:e.getFloat64(o+n.minZ,t),maxX:e.getFloat64(o+n.maxX,t),maxY:e.getFloat64(o+n.maxY,t),maxZ:e.getFloat64(o+n.maxZ,t),errorX:e.getFloat64(o+n.errorX,t),errorY:e.getFloat64(o+n.errorY,t),errorZ:e.getFloat64(o+n.errorZ,t),count:e.getUint32(o+n.count,t),reserved:e.getUint32(o+n.reserved,t)}}function c$1(t){const c=new DataView(t,0);let d=0;const{identifier:l,version:a}=r(t,c,d);if(d+=o.byteCount,"LEPCC     "!==l)throw new s$2("lepcc-decode-error","Bad identifier");if(a>1)throw new s$2("lepcc-decode-error","Unknown version");const u=i(c,d);d+=n.byteCount;if(u.sizeHi*2**32+u.sizeLo!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");const f=new Float64Array(3*u.count),h=[],w=[],g=[],p=[];if(d=s$1(t,d,h),d=s$1(t,d,w),d=s$1(t,d,g),d=s$1(t,d,p),d!==t.byteLength)throw new s$2("lepcc-decode-error","Bad length");let m=0,U=0;for(let e=0;e<h.length;e++){U+=h[e];let t=0;for(let o=0;o<w[e];o++){t+=g[m];const e=p[m];f[3*m]=Math.min(u.maxX,u.minX+2*u.errorX*t),f[3*m+1]=Math.min(u.maxY,u.minY+2*u.errorY*U),f[3*m+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*e),m++;}}return {errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:f}}function s$1(e,t,o){const r=[];t=d$1(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=d$1(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i]);}return t}function d$1(o,r,n){const i=new DataView(o,r),c=i.getUint8(0),s=31&c,d=!!(32&c),l=(192&c)>>6;let a=0;if(0===l)a=i.getUint32(1,t),r+=5;else if(1===l)a=i.getUint16(1,t),r+=3;else {if(2!==l)throw new s$2("lepcc-decode-error","Bad count type");a=i.getUint8(1),r+=2;}if(d)throw new s$2("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*s/8),f=new Uint8Array(o,r,u);let h=0,w=0,g=0;const p=-1>>>32-s;for(let e=0;e<a;e++){for(;w<s;)h|=f[g]<<w,w+=8,g+=1;n[e]=h&p,h>>>=s,w-=s,w+s>32&&(h|=f[g-1]>>8-w);}return r+g}const l$1={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function a$1(e,o){return {sizeLo:e.getUint32(o+l$1.sizeLo,t),sizeHi:e.getUint32(o+l$1.sizeHi,t),count:e.getUint32(o+l$1.count,t),colorMapCount:e.getUint16(o+l$1.colorMapCount,t),lookupMethod:e.getUint8(o+l$1.lookupMethod),compressionMethod:e.getUint8(o+l$1.compressionMethod)}}function u$1(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"ClusterRGB"!==c)throw new s$2("lepcc-decode-error","Bad identifier");if(s>1)throw new s$2("lepcc-decode-error","Unknown version");const d=a$1(n,i);i+=l$1.byteCount;if(d.sizeHi*2**32+d.sizeLo!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");if((2===d.lookupMethod||1===d.lookupMethod)&&0===d.compressionMethod){if(3*d.colorMapCount+d.count+i!==t.byteLength||d.colorMapCount>256)throw new s$2("lepcc-decode-error","Bad count");const o=new Uint8Array(t,i,3*d.colorMapCount),r=new Uint8Array(t,i+3*d.colorMapCount,d.count),n=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++){const t=r[e];n[3*e]=o[3*t],n[3*e+1]=o[3*t+1],n[3*e+2]=o[3*t+2];}return n}if(0===d.lookupMethod&&0===d.compressionMethod){if(3*d.count+i!==t.byteLength||0!==d.colorMapCount)throw new s$2("lepcc-decode-error","Bad count");return new Uint8Array(t,i).slice()}if(d.lookupMethod<=2&&1===d.compressionMethod){if(i+3!==t.byteLength||1!==d.colorMapCount)throw new s$2("lepcc-decode-error","Bad count");const o=n.getUint8(i),r=n.getUint8(i+1),c=n.getUint8(i+2),s=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=c;return s}throw new s$2("lepcc-decode-error","Bad method "+d.lookupMethod+","+d.compressionMethod)}const f$1={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h$1(e,o){return {sizeLo:e.getUint32(o+f$1.sizeLo,t),sizeHi:e.getUint32(o+f$1.sizeHi,t),count:e.getUint32(o+f$1.count,t),scaleFactor:e.getUint16(o+f$1.scaleFactor,t),bitsPerPoint:e.getUint8(o+f$1.bitsPerPoint),reserved:e.getUint8(o+f$1.reserved)}}function w$1(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"Intensity "!==c)throw new s$2("lepcc-decode-error","Bad identifier");if(s>1)throw new s$2("lepcc-decode-error","Unknown version");const l=h$1(n,i);i+=f$1.byteCount;if(l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");const a=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+i!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");const o=new Uint8Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor;}else if(16===l.bitsPerPoint){if(2*l.count+i!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");const o=new Uint16Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor;}else {const o=[];if(d$1(t,i,o)!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor;}return a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u=()=>s$3.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function a(t,n,r){let o="",i=0;for(;i<r;){const u=t[n+i];if(u<128)o+=String.fromCharCode(u),i++;else if(u>=192&&u<224){if(i+1>=r)throw new s$2("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&u)<<6|63&t[n+i+1];o+=String.fromCharCode(a),i+=2;}else if(u>=224&&u<240){if(i+2>=r)throw new s$2("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&u)<<12|(63&t[n+i+1])<<6|63&t[n+i+2];o+=String.fromCharCode(a),i+=3;}else {if(!(u>=240&&u<248))throw new s$2("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new s$2("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&u)<<18|(63&t[n+i+1])<<12|(63&t[n+i+2])<<6|63&t[n+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t);}else o+=String.fromCharCode(a);i+=4;}}}return o}function s(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],u=i.valueType||i.type,a=A[u];n.fields[i.property]=a(e,r),r+=h[u].BYTES_PER_ELEMENT;}return n.byteCount=r,n}function c(e,t,n){return f(e,t,n).map((e=>{const t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}function f(t,n,r){const o=[];let i,u,s=0;for(u=0;u<t;u+=1){if(i=n[u],i>0){if(o.push(a(r,s,i-1)),0!==r[s+i-1])throw new s$2("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i;}return o}function l(e,t){return new(h[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function d(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function b(n,r,o){const i=null!=r.header?s(n,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},u={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let s=0;s<r.ordering.length;s++){const n=r.ordering[s],o=a$2(r[n]);if(o.count=i.fields.count??0,"String"===o.valueType){if(o.byteOffset=a,o.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==o.encoding)throw new s$2("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding});if(o.timeEncoding&&"ECMA_ISO8601"!==o.timeEncoding)throw new s$2("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:o.timeEncoding})}else {if(!O(o.valueType))throw new s$2("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=E(o.valueType);a+=a%e!=0?e-a%e:0,o.byteOffset=a,o.byteCount=e*o.valuesPerElement*o.count;}}a+=o.byteCount??0,u.entries[n]=o;}return u.byteCount=a-u.byteOffset,u}function y(t,n,r){if(n!==t&&u().error(`Invalid ${r} buffer size\n expected: ${t}, actual: ${n})`),n<t)throw new s$2("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:n})}function w(e,t){const n=s(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const e={...t.vertexAttributes[s],byteOffset:r,count:u},n=C[s]||"_"+s;o.vertexAttributes[n]=e,r+=E(e.valueType)*e.valuesPerElement*u;}const a=i.faceCount;if(t.faces&&a){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:a};o.faces[e]=n,r+=E(n.valueType)*n.valuesPerElement*a;}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n;r+=("UInt64"===n.valueType?8:E(n.valueType))*n.valuesPerElement*c;}}return y(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}const C={position:e.POSITION,normal:e.NORMAL,color:e.COLOR,uv0:e.UV0,region:e.UVREGION};function I(t,n,i){if("lepcc-rgb"===t.encoding)return u$1(n);if("lepcc-intensity"===t.encoding)return w$1(n);if(null!=t.encoding&&""!==t.encoding)throw new s$2("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(u().warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(u().warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const a=b(n,t,i);y(a.byteOffset+a.byteCount,n.byteLength,"attribute");const s=a.entries.attributeValues||a.entries.objectIds;if(s){if("String"===s.valueType){const e=a.entries.attributeByteCounts,t=l(n,e),r=d(n,s);return s.timeEncoding?c(e.count,t,r):f(e.count,t,r)}return l(n,s)}throw new s$2("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const h={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},A={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function O(e){return h.hasOwnProperty(e)}function E(e){return O(e)?h[e].BYTES_PER_ELEMENT:0}

export { I, c$1 as c, l, w };
