(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=React;var r=e.n(t);const n=ReactDOM;var o=e.n(n);function l(){return t.createElement("div",null,window.widget.widget1({propValue:"propValue"}),t.createElement("hr",null),window.widget.widget2({propValue:"propValue"}))}(async()=>{const e=document.getElementById("root");e.hasChildNodes()?(console.log("hydrate"),o().hydrate(r().createElement(l,null),document.getElementById("root"))):(console.log("render"),o().render(r().createElement(l,null),e))})()})();