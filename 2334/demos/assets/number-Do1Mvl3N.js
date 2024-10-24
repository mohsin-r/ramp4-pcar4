import { aC as c$1, aD as o$1 } from './main-94WFCC9C.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const n={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function r(e=c$1()){let r=(e=e.toLowerCase())in n;if(!r){const t=e.split("-");t.length>1&&t[0]in n&&(e=t[0],r=!0),r||(e="en");}const[s,l,o="#,##0.###"]=n[e];return {decimal:s,group:l,pattern:o}}function s(e,t){const n=r((t={...t}).locale);t.customs=n;const s=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:o(e,s,t)}const l=/[#0,]*[#0](?:\.0*#*)?/;function o(e,t,n){const r=(n=n||{}).customs.group,s=n.customs.decimal,o=t.split(";"),c=o[0];if((t=o[e<0?1:0]||"-"+c).includes("%"))e*=100;else if(t.includes("‰"))e*=1e3;else {if(t.includes("¤"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const a=l,p=c.match(a);if(!p)throw new Error("unable to find a number expression in pattern: "+t);return !1===n.fractional&&(n.places=0),t.replace(a,i(e,p[0],{decimal:s,group:r,places:n.places,round:n.round}))}function i(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const r=t.split("."),s="string"==typeof n.places&&n.places.indexOf(",");let l=n.places;s?l=n.places.substring(s+1):+l>=0||(l=(r[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(l))));const o=String(Math.abs(e)).split("."),i=o[1]||"";if(r[1]||n.places){s&&(n.places=n.places.substring(0,s));const e=void 0!==n.places?n.places:r[1]&&r[1].lastIndexOf("0")+1;+e>i.length&&(o[1]=i.padEnd(Number(e),"0")),+l<i.length&&(o[1]=i.substr(0,Number(l)));}else o[1]&&o.pop();const c=r[0].replace(",","");let a=c.indexOf("0");-1!==a&&(a=c.length-a,a>o[0].length&&(o[0]=o[0].padStart(a,"0")),c.includes("#")||(o[0]=o[0].substr(o[0].length-a)));let p,u,d=r[0].lastIndexOf(",");if(-1!==d){p=r[0].length-d-1;const e=r[0].substr(0,d);d=e.lastIndexOf(","),-1!==d&&(u=e.length-d-1);}const g=[];for(let f=o[0];f;){const e=f.length-p;g.push(e>0?f.substr(e):f),f=e>0?f.slice(0,e):"",u&&(p=u,u=void 0);}return o[0]=g.reverse().join(n.group||","),o.join(n.decimal||".")}function a(t){const n=r((t=t||{}).locale),s=t.pattern||n.pattern,o=n.group,i=n.decimal;let c=1;if(s.includes("%"))c/=100;else if(s.includes("‰"))c/=1e3;else if(s.includes("¤"))throw new Error("currency notation not supported");const a=s.split(";");1===a.length&&a.push("-"+a[0]);const p=g(a,(n=>(n="(?:"+o$1(n,".")+")").replace(l,(e=>{const n={signed:!1,separator:t.strict?o:[o,""],fractional:t.fractional,decimal:i,exponent:!1},r=e.split(".");let s=t.places;1===r.length&&1!==c&&(r[1]="###"),1===r.length||0===s?n.fractional=!1:(void 0===s&&(s=t.pattern?r[1].lastIndexOf("0")+1:1/0),s&&null==t.fractional&&(n.fractional=!0),!t.places&&+s<r[1].length&&(s+=","+r[1].length),n.places=s);const l=r[0].split(",");return l.length>1&&(n.groupSize=l.pop().length,l.length>1&&(n.groupSize2=l.pop().length)),"("+u(n)+")"}))),!0);return {regexp:p.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:o,decimal:i,factor:c}}function p(e,t){const n=a(t),r=new RegExp("^"+n.regexp+"$").exec(e);if(!r)return NaN;let s=r[1];if(!r[1]){if(!r[2])return NaN;s=r[2],n.factor*=-1;}return s=s.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(s)*n.factor}function u(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=d(e),n=g(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let r=t+n;return n&&(r="(?:(?:"+r+")|(?:"+n+"))"),r+g(e.exponent,(t=>t?"([eE]"+d({signed:e.eSigned})+")":""))}function d(t){"signed"in(t=t||{})||(t.signed=[!0,!1]),"separator"in t?"groupSize"in t||(t.groupSize=3):t.separator="";return g(t.signed,(e=>e?"[-+]":""),!0)+g(t.separator,(n=>{if(!n)return "(?:\\d+)";" "===(n=o$1(n))?n="\\s":" "===n&&(n="\\s\\xa0");const r=t.groupSize,s=t.groupSize2;if(s){const e="(?:0|[1-9]\\d{0,"+(s-1)+"}(?:["+n+"]\\d{"+s+"})*["+n+"]\\d{"+r+"})";return r-s>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(r-1)+"}))":e}return "(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+n+"]\\d{"+r+"})*)"}),!0)}const g=(e,t,n)=>{if(!(e instanceof Array))return t(e);const r=[];for(let s=0;s<e.length;s++)r.push(t(e[s]));return f(r.join("|"),Boolean(n))},f=(e,t)=>"("+(t?"?:":"")+e+")";

export { a, p, s };
