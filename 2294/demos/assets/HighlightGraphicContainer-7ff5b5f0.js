import { aX as e, aZ as c } from './main-d7ab64e3.js';
import { E, a as a$1, R } from './Container-d3c5c8a6.js';
import { i } from './AGraphicContainer-02bf592d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a=class extends i{get hasHighlight(){return this.children.some((r=>r.hasData))}renderChildren(r){this.attributeView.update(),r.drawPhase===E.HIGHLIGHT&&this.children.some((r=>r.hasData))&&(super.renderChildren(r),r.context.setColorMask(!0,!0,!0,!0),a$1(r,!0,(r=>{this._renderChildren(r,R.All);})));}};a=e([c("esri.views.2d.layers.support.HighlightGraphicContainer")],a);const h=a;

export { h };