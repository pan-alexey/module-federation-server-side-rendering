(()=>{"use strict";var e,r={379:(e,r,t)=>{var o={widget:()=>t.e(330).then((()=>()=>t(330)))},i=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var o="default",i=t.S[o];if(i&&i!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>i,init:()=>n})},689:e=>{e.exports=require("react")}},t={};function o(e){var i=t[e];if(void 0!==i)return i.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,o.c=t,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".js",o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o.S={};var e={},r={};o.I=(t,i)=>{i||(i=[]);var n=r[t];if(n||(n=r[t]={}),!(i.indexOf(n)>=0)){if(i.push(n),e[t])return e[t];o.o(o.S,t)||(o.S[t]={}),o.S[t];var a=[];return e[t]=a.length?Promise.all(a).then((()=>e[t]=1)):1}}})(),e={163:1},o.f.require=(r,t)=>{e[r]||(r=>{var t=r.modules,i=r.ids,n=r.runtime;for(var a in t)o.o(t,a)&&(o.m[a]=t[a]);n&&n(o);for(var u=0;u<i.length;u++)e[i[u]]=1})(require("./"+o.u(r)))};var i=o(379);module.exports=i})();