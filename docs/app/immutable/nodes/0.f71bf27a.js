import{s as j,c as J,u as K,g as Q,d as X,e as ne,n as A}from"../chunks/scheduler.63274e7e.js";import{S as z,i as D,g as k,h as b,j as w,f as g,k as $,x as q,a as L,y as T,d as v,t as d,s as C,c as F,z as Z,p as G,b as N,A as P,r as S,u as B,v as O,w as R,m as x,n as ee}from"../chunks/index.9e07f724.js";import{e as I}from"../chunks/each.e59479a4.js";import{p as ae}from"../chunks/stores.210c36c9.js";const re=!0,ye=Object.freeze(Object.defineProperty({__proto__:null,prerender:re},Symbol.toStringTag,{value:"Module"}));function oe(n){let t,l,e;const s=n[3].default,a=J(s,n,n[2],null);return{c(){t=k("li"),l=k("a"),a&&a.c(),this.h()},l(i){t=b(i,"LI",{class:!0});var _=w(t);l=b(_,"A",{href:!0,class:!0});var p=w(l);a&&a.l(p),p.forEach(g),_.forEach(g),this.h()},h(){$(l,"href",n[0]),$(l,"class","nav-item svelte-bs8x38"),q(l,"active",n[1]),$(t,"class","svelte-bs8x38")},m(i,_){L(i,t,_),T(t,l),a&&a.m(l,null),e=!0},p(i,[_]){a&&a.p&&(!e||_&4)&&K(a,s,i,i[2],e?X(s,i[2],_,null):Q(i[2]),null),(!e||_&1)&&$(l,"href",i[0]),(!e||_&2)&&q(l,"active",i[1])},i(i){e||(v(a,i),e=!0)},o(i){d(a,i),e=!1},d(i){i&&g(t),a&&a.d(i)}}}function ie(n,t,l){let{$$slots:e={},$$scope:s}=t,{path:a}=t,{active:i=!1}=t;return n.$$set=_=>{"path"in _&&l(0,a=_.path),"active"in _&&l(1,i=_.active),"$$scope"in _&&l(2,s=_.$$scope)},[a,i,s,e]}class te extends z{constructor(t){super(),D(this,t,ie,oe,j,{path:0,active:1})}}function V(n,t,l){const e=n.slice();return e[3]=t[l][0],e[4]=t[l][1],e}function W(n,t,l){const e=n.slice();return e[3]=t[l][0],e[4]=t[l][1],e}function ce(n){let t=n[4]+"",l;return{c(){l=x(t)},l(e){l=ee(e,t)},m(e,s){L(e,l,s)},p:A,d(e){e&&g(l)}}}function U(n){let t,l;return t=new te({props:{path:n[3],active:n[3]==="/"?n[0].url.pathname==="/":n[0].url.pathname.includes(n[3]),$$slots:{default:[ce]},$$scope:{ctx:n}}}),{c(){S(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,s){O(t,e,s),l=!0},p(e,s){const a={};s&1&&(a.active=e[3]==="/"?e[0].url.pathname==="/":e[0].url.pathname.includes(e[3])),s&512&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){R(t,e)}}}function fe(n){let t=n[4]+"",l,e;return{c(){l=x(t),e=C()},l(s){l=ee(s,t),e=F(s)},m(s,a){L(s,l,a),L(s,e,a)},p:A,d(s){s&&(g(l),g(e))}}}function Y(n){let t,l;return t=new te({props:{path:n[3],active:n[3]==="/"?n[0].url.pathname==="/":n[0].url.pathname.includes(n[3]),$$slots:{default:[fe]},$$scope:{ctx:n}}}),{c(){S(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,s){O(t,e,s),l=!0},p(e,s){const a={};s&1&&(a.active=e[3]==="/"?e[0].url.pathname==="/":e[0].url.pathname.includes(e[3])),s&512&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){R(t,e)}}}function ue(n){let t,l,e,s,a,i,_='<a href="/" class="logo svelte-s0hk1x"><img style="border-radius: 50%;" alt="Geo Cash Logo" src="/libertas-favicon/steinbock.png" class="svelte-s0hk1x"/></a>',p,c,m=I(n[1]),u=[];for(let o=0;o<m.length;o+=1)u[o]=U(W(n,m,o));const le=o=>d(u[o],1,1,()=>{u[o]=null});let E=I(n[2]),h=[];for(let o=0;o<E.length;o+=1)h[o]=Y(V(n,E,o));const se=o=>d(h[o],1,1,()=>{h[o]=null});return{c(){t=k("header"),l=k("div"),e=k("nav"),s=k("ul");for(let o=0;o<u.length;o+=1)u[o].c();a=C(),i=k("li"),i.innerHTML=_,p=C();for(let o=0;o<h.length;o+=1)h[o].c();this.h()},l(o){t=b(o,"HEADER",{class:!0});var f=w(t);l=b(f,"DIV",{class:!0});var r=w(l);e=b(r,"NAV",{class:!0});var y=w(e);s=b(y,"UL",{class:!0});var M=w(s);for(let H=0;H<u.length;H+=1)u[H].l(M);a=F(M),i=b(M,"LI",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-14abdb2"&&(i.innerHTML=_),p=F(M);for(let H=0;H<h.length;H+=1)h[H].l(M);M.forEach(g),y.forEach(g),r.forEach(g),f.forEach(g),this.h()},h(){$(i,"class","svelte-s0hk1x"),$(s,"class","svelte-s0hk1x"),$(e,"class","svelte-s0hk1x"),$(l,"class","container"),$(t,"class","svelte-s0hk1x")},m(o,f){L(o,t,f),T(t,l),T(l,e),T(e,s);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(s,null);T(s,a),T(s,i),T(s,p);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(s,null);c=!0},p(o,[f]){if(f&3){m=I(o[1]);let r;for(r=0;r<m.length;r+=1){const y=W(o,m,r);u[r]?(u[r].p(y,f),v(u[r],1)):(u[r]=U(y),u[r].c(),v(u[r],1),u[r].m(s,a))}for(G(),r=m.length;r<u.length;r+=1)le(r);N()}if(f&5){E=I(o[2]);let r;for(r=0;r<E.length;r+=1){const y=V(o,E,r);h[r]?(h[r].p(y,f),v(h[r],1)):(h[r]=Y(y),h[r].c(),v(h[r],1),h[r].m(s,null))}for(G(),r=E.length;r<h.length;r+=1)se(r);N()}},i(o){if(!c){for(let f=0;f<m.length;f+=1)v(u[f]);for(let f=0;f<E.length;f+=1)v(h[f]);c=!0}},o(o){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)d(u[f]);h=h.filter(Boolean);for(let f=0;f<h.length;f+=1)d(h[f]);c=!1},d(o){o&&g(t),P(u,o),P(h,o)}}}function he(n,t,l){let e;return ne(n,ae,i=>l(0,e=i)),[e,[["/freedomWallets","Wallets"],["/freedomTreasuries","Schätze"]],[["/logBook","Log Buch"],["/philosophy","Philosophie"]]]}class _e extends z{constructor(t){super(),D(this,t,he,ue,j,{})}}function pe(n){let t,l='<div class="container svelte-pir2t"><span><a class="underline" href="https://github.com/moniquebaumann/freedomcash" target="_blank" rel="noopener">GitHub Code</a></span> <span>•</span> <span><a class="underline" href="https://privacy-is-not-a-crime.de" target="_blank" rel="noopener">Freiheit</a></span> <span>•</span> <span><a href="/philosophy">Impressum</a></span></div>';return{c(){t=k("footer"),t.innerHTML=l,this.h()},l(e){t=b(e,"FOOTER",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1iaetmv"&&(t.innerHTML=l),this.h()},h(){$(t,"class","svelte-pir2t")},m(e,s){L(e,t,s)},p:A,i:A,o:A,d(e){e&&g(t)}}}function me(n){return new Date().getFullYear(),[]}class ge extends z{constructor(t){super(),D(this,t,me,pe,j,{})}}function ve(n){let t,l,e,s,a,i;t=new _e({});const _=n[1].default,p=J(_,n,n[0],null);return a=new ge({}),{c(){S(t.$$.fragment),l=C(),e=k("main"),p&&p.c(),s=C(),S(a.$$.fragment),this.h()},l(c){B(t.$$.fragment,c),l=F(c),e=b(c,"MAIN",{class:!0});var m=w(e);p&&p.l(m),m.forEach(g),s=F(c),B(a.$$.fragment,c),this.h()},h(){$(e,"class","container svelte-40n5a")},m(c,m){O(t,c,m),L(c,l,m),L(c,e,m),p&&p.m(e,null),L(c,s,m),O(a,c,m),i=!0},p(c,[m]){p&&p.p&&(!i||m&1)&&K(p,_,c,c[0],i?X(_,c[0],m,null):Q(c[0]),null)},i(c){i||(v(t.$$.fragment,c),v(p,c),v(a.$$.fragment,c),i=!0)},o(c){d(t.$$.fragment,c),d(p,c),d(a.$$.fragment,c),i=!1},d(c){c&&(g(l),g(e),g(s)),R(t,c),p&&p.d(c),R(a,c)}}}function $e(n,t,l){let{$$slots:e={},$$scope:s}=t;return n.$$set=a=>{"$$scope"in a&&l(0,s=a.$$scope)},[s,e]}class Ee extends z{constructor(t){super(),D(this,t,$e,ve,j,{})}}export{Ee as component,ye as universal};
