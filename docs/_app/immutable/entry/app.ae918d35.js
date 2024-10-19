import{s as C,a as q,o as U,t as W,b as T}from"../chunks/scheduler.63274e7e.js";import{S as j,i as z,s as F,e as d,c as G,a as b,t as h,b as L,d as p,f as g,g as H,h as J,j as K,k as D,l as m,m as M,n as Q,o as X,p as P,q as E,r as v,u as I,v as R,w as y}from"../chunks/index.9e07f724.js";const Y="modulepreload",Z=function(o,e){return new URL(o,e).href},O={},w=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in O)return;O[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let a=s.length-1;a>=0;a--){const u=s[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(o){let e,n,i;var s=o[1][0];function f(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{y(l,1)}),L()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),p(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&p(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&g(n),o[12](null),e&&y(e,t)}}}function x(o){let e,n,i;var s=o[1][0];function f(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{y(l,1)}),L()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),p(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&p(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&g(n),o[11](null),e&&y(e,t)}}}function ee(o){let e,n,i;var s=o[1][1];function f(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{y(l,1)}),L()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),p(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&p(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&g(n),o[10](null),e&&y(e,t)}}}function V(o){let e,n=o[6]&&A(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(g),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function A(o){let e;return{c(){e=M(o[7])},l(n){e=Q(n,o[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&g(e)}}}function te(o){let e,n,i,s,f;const t=[x,$],r=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=r[e]=t[e](o);let c=o[5]&&V(o);return{c(){n.c(),i=F(),c&&c.c(),s=d()},l(a){n.l(a),i=G(a),c&&c.l(a),s=d()},m(a,u){r[e].m(a,u),b(a,i,u),c&&c.m(a,u),b(a,s,u),f=!0},p(a,[u]){let k=e;e=l(a),e===k?r[e].p(a,u):(P(),h(r[k],1,1,()=>{r[k]=null}),L(),n=r[e],n?n.p(a,u):(n=r[e]=t[e](a),n.c()),p(n,1),n.m(i.parentNode,i)),a[5]?c?c.p(a,u):(c=V(a),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(a){f||(p(n),f=!0)},o(a){h(n),f=!1},d(a){a&&(g(i),g(s)),r[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:c=null}=e;q(i.page.notify);let a=!1,u=!1,k=null;U(()=>{const _=i.page.subscribe(()=>{a&&(n(6,u=!0),W().then(()=>{n(7,k=document.title||"untitled page")}))});return n(5,a=!0),_});function N(_){T[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){T[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function B(_){T[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return o.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,s=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,r=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,c=_.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(s)},[t,f,r,l,c,a,u,k,i,s,N,S,B]}class oe extends j{constructor(e){super(),z(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>w(()=>import("../nodes/0.349fa290.js"),["../nodes/0.349fa290.js","../chunks/scheduler.63274e7e.js","../chunks/index.9e07f724.js","../chunks/each.e59479a4.js","../chunks/stores.216808ed.js","../chunks/singletons.03ffcfe0.js","../assets/0.d88ffb05.css"],import.meta.url),()=>w(()=>import("../nodes/1.598e1cd9.js"),["../nodes/1.598e1cd9.js","../chunks/scheduler.63274e7e.js","../chunks/index.9e07f724.js","../chunks/stores.216808ed.js","../chunks/singletons.03ffcfe0.js"],import.meta.url),()=>w(()=>import("../nodes/2.69c3fd6b.js"),["../nodes/2.69c3fd6b.js","../chunks/scheduler.63274e7e.js","../chunks/index.9e07f724.js","../chunks/FreedomWallets.f0a84f3d.js","../chunks/Philosophy.519abfdb.js","../chunks/each.e59479a4.js","../assets/2.14633f1d.css"],import.meta.url),()=>w(()=>import("../nodes/3.59f45d8f.js"),["../nodes/3.59f45d8f.js","../chunks/scheduler.63274e7e.js","../chunks/index.9e07f724.js","../chunks/Seo.899853ac.js","../chunks/stores.216808ed.js","../chunks/singletons.03ffcfe0.js","../assets/3.0cb37363.css"],import.meta.url),()=>w(()=>import("../nodes/4.e19dd8b3.js"),["../nodes/4.e19dd8b3.js","../chunks/scheduler.63274e7e.js","../chunks/index.9e07f724.js","../chunks/Seo.899853ac.js","../chunks/stores.216808ed.js","../chunks/singletons.03ffcfe0.js","../chunks/FreedomWallets.f0a84f3d.js","../assets/4.d0760df1.css"],import.meta.url),()=>w(()=>import("../nodes/5.d85c5dfd.js"),["../nodes/5.d85c5dfd.js","../chunks/scheduler.63274e7e.js","../chunks/index.9e07f724.js","../assets/4.d0760df1.css"],import.meta.url),()=>w(()=>import("../nodes/6.75b79b1f.js"),["../nodes/6.75b79b1f.js","../chunks/scheduler.63274e7e.js","../chunks/index.9e07f724.js","../chunks/Seo.899853ac.js","../chunks/stores.216808ed.js","../chunks/singletons.03ffcfe0.js","../chunks/Philosophy.519abfdb.js","../assets/4.d0760df1.css"],import.meta.url)],le=[],fe={"/":[2],"/freedomTreasuries":[3],"/freedomWallets":[4],"/logBook":[5],"/philosophy":[6]},ce={handleError:({error:o})=>{console.error(o)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
