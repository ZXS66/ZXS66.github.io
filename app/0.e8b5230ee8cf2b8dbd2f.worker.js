!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,(function(t){return e[t]}).bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="e2Pj")}({e2Pj:function(e,t,n){"use strict";function o(e,t,n,o){return new(n||(n=Promise))((function(r,i){function u(e){try{c(o.next(e))}catch(t){i(t)}}function a(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((o=o.apply(e,t||[])).next())}))}n.r(t);var r=function(e){return e[e.Initial=0]="Initial",e[e.OK=1]="OK",e[e.Error=2]="Error",e[e.Empty=3]="Empty",e[e.ToBeContinued=4]="ToBeContinued",e}({});class i{constructor(e,t){this.data=e,this.action=t,this.status=r.Initial}}addEventListener("message",({data:e})=>o(void 0,void 0,void 0,(function*(){if(e&&e.action&&e.action.length){const t=e.action,n=e.data,o=new i(null,t);switch(t){case"INIT":yield a();break;case"EXECUTE":const e=yield c(n);o.data=e;break;case"TERMINATE":break;default:const t="unknown action when invoking web worker";console.error(t),o.data=t,o.status=r.Error}return postMessage(o)}{const e="please specify your arguments (action, data) when invoking web worker";return console.error(e),postMessage(new Error(e))}})));let u=null;const a=()=>o(void 0,void 0,void 0,(function*(){if(u&&u.size)return;const e=yield fetch("https://zxs66.github.io/images/emoji-knowledge-review/full-emoji-list.json").catch(e=>{console.error(e),u=new Set});let t=[];e&&(t=yield e.json()),u=new Set(t)})),c=e=>o(void 0,void 0,void 0,(function*(){if(u&&u.size||(yield a()),!e||!e.length)return Array.from(u).slice(0,100);const t=e.trim().toLowerCase(),n=[];for(const e of u)if((e.group.toLowerCase().includes(t)||e.sub_group.toLowerCase().includes(t)||e.description.toLowerCase().includes(t))&&n.push(e),n.length>=100)break;return n}))}});