if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"1.bundle.js",revision:"a4c5f1526a2989c3e1a4e13b24dc8c3a"},{url:"1.bundle.js.LICENSE.txt",revision:"857d129e4a5f4f33c7a4a143bf79109c"},{url:"404.html",revision:"aa7aec9b625e8d00965a79e8af8c6ba8"},{url:"bundle.js",revision:"ae7a2d89b078f63324d47a878551e608"},{url:"icons/favicon-32x32.png",revision:"80986bb228b2c208b4338b12c5db427a"},{url:"icons/favicon-32x32.svg",revision:"e4c5096b86abee1242d15363b679efda"},{url:"icons/shortcut-192x192.png",revision:"6bb7ab097f441e3653bff4deebaaa5f7"},{url:"icons/shortcut-512x512.png",revision:"5223ece5a9eb58256a802885f6188305"},{url:"images/loader.gif",revision:"69dad4bdf6e8163c136d4d7a98ac50e0"},{url:"index.html",revision:"3cd884a834c5f21c4c78e7ed8f7bb6c3"},{url:"manifest.webmanifest",revision:"3fbe9a098a07153f77847d7cba5d4067"}],{})}));
