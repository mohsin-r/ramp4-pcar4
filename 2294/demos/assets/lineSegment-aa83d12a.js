import { ct as t, cm as n$1, cu as r, cv as e, ci as P, cw as v$1, cx as g, ak as e$1, cy as u } from './main-d7ab64e3.js';
import { s } from './ObjectStack-6b28f441.js';
import { c } from './plane-6ad3d2f4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function v(t$1){return t$1?{origin:t(t$1.origin),vector:t(t$1.vector)}:{origin:n$1(),vector:n$1()}}function b(t,r$1,e$1=v()){return r(e$1.origin,t),e(e$1.vector,r$1,t),e$1}function j(t,r,n){return A(t,r,0,1,n)}function A(r,n,a,u$1,g$1){const{vector:v,origin:p}=r,m=e(c.get(),n,p),h=P(v,m)/v$1(v);return g(g$1,v,e$1(h,a,u$1)),u(g$1,g$1,r.origin)}new s((()=>v()));

export { b, j, v };
