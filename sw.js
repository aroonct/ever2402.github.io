if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=e=>r(e,n),d={module:{uri:n},exports:o,require:c};i[n]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-77bad2e8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.css",revision:"3affec43eef3b04df27e7485a7ad78c5"},{url:"index.html",revision:"5cb882b70a50ade6c9865388d7fca788"},{url:"index.js",revision:"9269e0caef72be375029cffcd9e812e9"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
