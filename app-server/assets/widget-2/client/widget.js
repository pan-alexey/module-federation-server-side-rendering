(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=React;var n=e.n(t);window.widget||(window.widget={}),window.widget.widget2=({propValue:e})=>{const[r,l]=(0,t.useState)(100);return n().createElement("div",null,n().createElement("div",null,"Widget 2 (remote) + client"),n().createElement("div",null,"Widget useState (",r,") ",n().createElement("button",{onClick:()=>{l((e=>e+1))}},"+")),n().createElement("div",null,"Prop value (",JSON.stringify(e),")"))}})();