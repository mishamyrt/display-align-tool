(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _(){}function ee(e){return e()}function Q(){return Object.create(null)}function P(e){e.forEach(ee)}function te(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function se(e){return Object.keys(e).length===0}function $(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function ue(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function V(e){return document.createTextNode(e)}function X(){return V(" ")}function le(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ce(e){return Array.from(e.childNodes)}function fe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function C(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let A;function E(e){A=e}function ne(){if(!A)throw new Error("Function called outside component initialization");return A}function de(e){ne().$$.on_mount.push(e)}function ae(e){ne().$$.on_destroy.push(e)}const k=[],w=[],T=[],W=[],he=Promise.resolve();let G=!1;function _e(){G||(G=!0,he.then(ie))}function J(e){T.push(e)}function L(e){W.push(e)}const K=new Set;let S=0;function ie(){const e=A;do{for(;S<k.length;){const t=k[S];S++,E(t),pe(t.$$)}for(E(null),k.length=0,S=0;w.length;)w.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];K.has(n)||(K.add(n),n())}T.length=0}while(k.length);for(;W.length;)W.pop()();G=!1,K.clear(),E(e)}function pe(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}const j=new Set;let me;function x(e,t){e&&e.i&&(j.delete(e),e.i(t))}function H(e,t,n,i){if(e&&e.o){if(j.has(e))return;j.add(e),me.c.push(()=>{j.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function N(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function U(e){e&&e.c()}function O(e,t,n,i){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),i||J(()=>{const o=e.$$.on_mount.map(ee).filter(te);e.$$.on_destroy?e.$$.on_destroy.push(...o):P(o),e.$$.on_mount=[]}),s.forEach(J)}function M(e,t){const n=e.$$;n.fragment!==null&&(P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){e.$$.dirty[0]===-1&&(k.push(e),_e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(e,t,n,i,r,s,o,f=[-1]){const l=A;E(e);const c=e.$$={fragment:null,ctx:[],props:s,update:_,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Q(),dirty:f,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(e,t.props||{},(d,p,...a)=>{const m=a.length?a[0]:p;return c.ctx&&r(c.ctx[d],c.ctx[d]=m)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](m),h&&ge(e,d)),p}):[],c.update(),h=!0,P(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const d=ce(t.target);c.fragment&&c.fragment.l(d),d.forEach(v)}else c.fragment&&c.fragment.c();t.intro&&x(e.$$.fragment),O(e,t.target,t.anchor,t.customElement),ie()}E(l)}class R{$destroy(){M(this,1),this.$destroy=_}$on(t,n){if(!te(n))return _;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function we(e){let t,n,i;return{c(){t=b("button"),t.innerHTML=`<span class="plus svelte-vpdoyw">+</span>
    \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u043A\u0443`,y(t,"class","button svelte-vpdoyw")},m(r,s){z(r,t,s),n||(i=le(t,"click",e[0]),n=!0)},p:_,i:_,o:_,d(r){r&&v(t),n=!1,i()}}}function ye(e){return[()=>window.open("./")]}class be extends R{constructor(t){super(),B(this,t,ye,we,q,{})}}function Y(e,t,n){const i=e.slice();return i[3]=t[n],i}function Z(e){let t;return{c(){t=b("div"),y(t,"class","column svelte-11wu9mo"),C(t,"--opacity",e[3])},m(n,i){z(n,t,i)},p(n,i){i&2&&C(t,"--opacity",n[3])},d(n){n&&v(t)}}}function ve(e){let t,n=e[1],i=[];for(let r=0;r<n.length;r+=1)i[r]=Z(Y(e,n,r));return{c(){t=b("div");for(let r=0;r<i.length;r+=1)i[r].c();y(t,"class","container svelte-11wu9mo"),C(t,"--width",e[0]+"px")},m(r,s){z(r,t,s);for(let o=0;o<i.length;o+=1)i[o].m(t,null)},p(r,[s]){if(s&2){n=r[1];let o;for(o=0;o<n.length;o+=1){const f=Y(r,n,o);i[o]?i[o].p(f,s):(i[o]=Z(f),i[o].c(),i[o].m(t,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}s&1&&C(t,"--width",r[0]+"px")},i:_,o:_,d(r){r&&v(t),ue(i,r)}}}function ke(e,t,n){let{count:i=7}=t,{width:r=100}=t,s=Array(i);return e.$$set=o=>{"count"in o&&n(2,i=o.count),"width"in o&&n(0,r=o.width)},e.$$.update=()=>{if(e.$$.dirty&4){const o=Math.floor(i/2),f=o>0?1/(o+1):0;n(1,s=Array(i));for(let l=0;l<i;l++)l===o?n(1,s[l]=1,s):l>o?n(1,s[l]=(i-l)*f,s):n(1,s[l]=(l+1)*f,s)}},[r,s,i]}class $e extends R{constructor(t){super(),B(this,t,ke,ve,q,{count:2,width:0})}}function Ee(e){let t,n,i,r,s;return{c(){t=b("div"),n=b("div"),i=V(e[1]),r=V("%"),y(n,"class",s="snack "+(e[0]?"__visible":"")+" svelte-1qkjfp0"),y(t,"class","container svelte-1qkjfp0")},m(o,f){z(o,t,f),$(t,n),$(n,i),$(n,r)},p(o,[f]){f&2&&fe(i,o[1]),f&1&&s!==(s="snack "+(o[0]?"__visible":"")+" svelte-1qkjfp0")&&y(n,"class",s)},i:_,o:_,d(o){o&&v(t)}}}const Ae=100;function ze(e,t,n){let i,{width:r}=t,{visible:s=!1}=t;return e.$$set=o=>{"width"in o&&n(2,r=o.width),"visible"in o&&n(0,s=o.visible)},e.$$.update=()=>{e.$$.dirty&4&&n(1,i=Math.floor(r/Ae*100))},[s,i,r]}class Le extends R{constructor(t){super(),B(this,t,ze,Ee,q,{width:2,visible:0})}}function Se(e){let t,n,i,r,s,o,f,l,c,h,d;function p(u){e[3](u)}function a(u){e[4](u)}let m={};e[0]!==void 0&&(m.width=e[0]),e[1]!==void 0&&(m.count=e[1]),n=new $e({props:m}),w.push(()=>N(n,"width",p)),w.push(()=>N(n,"count",a));function re(u){e[5](u)}function oe(u){e[6](u)}let D={};return e[0]!==void 0&&(D.width=e[0]),e[2]!==void 0&&(D.visible=e[2]),o=new Le({props:D}),w.push(()=>N(o,"width",re)),w.push(()=>N(o,"visible",oe)),h=new be({}),{c(){t=b("main"),U(n.$$.fragment),s=X(),U(o.$$.fragment),c=X(),U(h.$$.fragment)},m(u,g){z(u,t,g),O(n,t,null),$(t,s),O(o,t,null),$(t,c),O(h,t,null),d=!0},p(u,[g]){const F={};!i&&g&1&&(i=!0,F.width=u[0],L(()=>i=!1)),!r&&g&2&&(r=!0,F.count=u[1],L(()=>r=!1)),n.$set(F);const I={};!f&&g&1&&(f=!0,I.width=u[0],L(()=>f=!1)),!l&&g&4&&(l=!0,I.visible=u[2],L(()=>l=!1)),o.$set(I)},i(u){d||(x(n.$$.fragment,u),x(o.$$.fragment,u),x(h.$$.fragment,u),d=!0)},o(u){H(n.$$.fragment,u),H(o.$$.fragment,u),H(h.$$.fragment,u),d=!1},d(u){u&&v(t),M(n),M(o),M(h)}}}function Ne(e,t,n){let i=100,r=7,s=!1,o=0;function f(){n(2,s=!0),o&&window.clearTimeout(o),o=window.setTimeout(()=>{n(2,s=!1)},1e3)}function l(a){switch(a.code){case"ArrowDown":i>5&&n(0,i-=1),f();break;case"ArrowUp":i<300&&n(0,i+=1),f();break;case"ArrowLeft":r>3&&n(1,r-=2);break;case"ArrowRight":r<15&&n(1,r+=2);break}console.log(a,{width:i,count:r})}de(()=>document.addEventListener("keydown",l)),ae(()=>document.removeEventListener("keydown",l));function c(a){i=a,n(0,i)}function h(a){r=a,n(1,r)}function d(a){i=a,n(0,i)}function p(a){s=a,n(2,s)}return[i,r,s,c,h,d,p]}class Te extends R{constructor(t){super(),B(this,t,Ne,Se,q,{})}}new Te({target:document.getElementById("app")});
