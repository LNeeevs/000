!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){"use strict";o.r(t),o.d(t,"Carro",function(){return r});class r{constructor(e){this.c=e}show(){console.log(`${this.c}`)}}},function(e,t,o){"use strict";o.r(t),o.d(t,"prometheus",function(){return r});const r=new Promise((e,t)=>e("Deu certo!"))},function(e,t,o){"use strict";o.r(t);console.log("teste");const r=o(0),n=o(1);new r.Carro("Fiat Uno").show(),n.prometheus.then(e=>console.log(e)).catch(e=>console.error(e));console.log("Hello World"),console.log("teste")}]);