(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const lt=(e,t)=>e===t,S=Symbol("solid-proxy"),pe=Symbol("solid-track"),Q={equals:lt};let ut=We;const k=1,Z=2,Me={owned:null,cleanups:null,context:null,owner:null};var m=null;let fe=null,g=null,b=null,L=null,se=0;function J(e,t){const n=g,r=m,i=e.length===0,o=i?Me:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},s=i?e:()=>e(()=>M(()=>ue(o)));m=o,g=null;try{return B(s,!0)}finally{g=n,m=r}}function D(e,t){t=t?Object.assign({},Q,t):Q;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.value)),Ge(n,i));return[Ke.bind(n),r]}function _(e,t,n){const r=qe(e,t,!1,k);le(r)}function U(e,t,n){n=n?Object.assign({},Q,n):Q;const r=qe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,le(r),Ke.bind(r)}function ct(e){return B(e,!1)}function M(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function at(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function Be(){return g}function ft(e,t){const n=Symbol("context");return{id:n,Provider:mt(n),defaultValue:e}}function dt(e){let t;return(t=ze(m,e.id))!==void 0?t:e.defaultValue}function ht(e){const t=U(e),n=U(()=>be(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Ke(){if(this.sources&&this.state)if(this.state===k)le(this);else{const e=b;b=null,B(()=>ee(this),!1),b=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function Ge(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],s=fe&&fe.running;s&&fe.disposed.has(o),(s?!o.tState:!o.state)&&(o.pure?b.push(o):L.push(o),o.observers&&Xe(o)),s||(o.state=k)}if(b.length>1e6)throw b=[],new Error},!1)),t}function le(e){if(!e.fn)return;ue(e);const t=m,n=g,r=se;g=m=e,gt(e,e.value,r),g=n,m=t}function gt(e,t,n){let r;try{r=e.fn(t)}catch(i){return e.pure&&(e.state=k,e.owned&&e.owned.forEach(ue),e.owned=null),e.updatedAt=n+1,He(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ge(e,r):e.value=r,e.updatedAt=n)}function qe(e,t,n,r=k,i){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==Me&&(m.owned?m.owned.push(o):m.owned=[o]),o}function Ve(e){if(e.state===0)return;if(e.state===Z)return ee(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===k)le(e);else if(e.state===Z){const r=b;b=null,B(()=>ee(e,t[0]),!1),b=r}}function B(e,t){if(b)return e();let n=!1;t||(b=[]),L?n=!0:L=[],se++;try{const r=e();return yt(n),r}catch(r){n||(L=null),b=null,He(r)}}function yt(e){if(b&&(We(b),b=null),e)return;const t=L;L=null,t.length&&B(()=>ut(t),!1)}function We(e){for(let t=0;t<e.length;t++)Ve(e[t])}function ee(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const i=r.state;i===k?r!==t&&(!r.updatedAt||r.updatedAt<se)&&Ve(r):i===Z&&ee(r,t)}}}function Xe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Z,n.pure?b.push(n):L.push(n),n.observers&&Xe(n))}}function ue(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),s=n.observerSlots.pop();r<i.length&&(o.sourceSlots[s]=r,i[r]=o,n.observerSlots[r]=s)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ue(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function He(e){throw e}function ze(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ze(e.owner,t):void 0}function be(e){if(typeof e=="function"&&!e.length)return be(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=be(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function mt(e,t){return function(r){let i;return _(()=>i=M(()=>(m.context={[e]:r.value},ht(()=>r.children))),void 0),i}}const pt=Symbol("fallback");function xe(e){for(let t=0;t<e.length;t++)e[t]()}function bt(e,t,n={}){let r=[],i=[],o=[],s=0,l=t.length>1?[]:null;return at(()=>xe(o)),()=>{let u=e()||[],a,c;return u[pe],M(()=>{let f=u.length,v,w,T,C,W,O,P,E,R;if(f===0)s!==0&&(xe(o),o=[],r=[],i=[],s=0,l&&(l=[])),n.fallback&&(r=[pt],i[0]=J(st=>(o[0]=st,n.fallback())),s=1);else if(s===0){for(i=new Array(f),c=0;c<f;c++)r[c]=u[c],i[c]=J(d);s=f}else{for(T=new Array(f),C=new Array(f),l&&(W=new Array(f)),O=0,P=Math.min(s,f);O<P&&r[O]===u[O];O++);for(P=s-1,E=f-1;P>=O&&E>=O&&r[P]===u[E];P--,E--)T[E]=i[P],C[E]=o[P],l&&(W[E]=l[P]);for(v=new Map,w=new Array(E+1),c=E;c>=O;c--)R=u[c],a=v.get(R),w[c]=a===void 0?-1:a,v.set(R,c);for(a=O;a<=P;a++)R=r[a],c=v.get(R),c!==void 0&&c!==-1?(T[c]=i[a],C[c]=o[a],l&&(W[c]=l[a]),c=w[c],v.set(R,c)):o[a]();for(c=O;c<f;c++)c in T?(i[c]=T[c],o[c]=C[c],l&&(l[c]=W[c],l[c](c))):i[c]=J(d);i=i.slice(0,s=f),r=u.slice(0)}return i});function d(f){if(o[c]=f,l){const[v,w]=D(c);return l[c]=w,t(u[c],v)}return t(u[c])}}}function h(e,t){return M(()=>e(t||{}))}function X(){return!0}const _e={get(e,t,n){return t===S?n:e.get(t)},has(e,t){return t===S?!0:e.has(t)},set:X,deleteProperty:X,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:X,deleteProperty:X}},ownKeys(e){return e.keys()}};function de(e){return(e=typeof e=="function"?e():e)?e:{}}function _t(...e){let t=!1;for(let r=0;r<e.length;r++){const i=e[r];t=t||!!i&&S in i,e[r]=typeof i=="function"?(t=!0,U(i)):i}if(t)return new Proxy({get(r){for(let i=e.length-1;i>=0;i--){const o=de(e[i])[r];if(o!==void 0)return o}},has(r){for(let i=e.length-1;i>=0;i--)if(r in de(e[i]))return!0;return!1},keys(){const r=[];for(let i=0;i<e.length;i++)r.push(...Object.keys(de(e[i])));return[...new Set(r)]}},_e);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const i=Object.getOwnPropertyDescriptors(e[r]);for(const o in i)o in n||Object.defineProperty(n,o,{enumerable:!0,get(){for(let s=e.length-1;s>=0;s--){const l=(e[s]||{})[o];if(l!==void 0)return l}}})}return n}function Se(e,...t){const n=new Set(t.flat());if(S in e){const i=t.map(o=>new Proxy({get(s){return o.includes(s)?e[s]:void 0},has(s){return o.includes(s)&&s in e},keys(){return o.filter(s=>s in e)}},_e));return i.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},_e)),i}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(i=>!n.has(i))),t.map(i=>{const o={};for(let s=0;s<i.length;s++){const l=i[s];l in e&&Object.defineProperty(o,l,r[l]?r[l]:{get(){return e[l]},set(){return!0},enumerable:!0})}return o})}function vt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return U(bt(()=>e.each,e.children,t||void 0))}function wt(e,t,n){let r=n.length,i=t.length,o=r,s=0,l=0,u=t[i-1].nextSibling,a=null;for(;s<i||l<o;){if(t[s]===n[l]){s++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===s){const c=o<r?l?n[l-1].nextSibling:n[o-l]:u;for(;l<o;)e.insertBefore(n[l++],c)}else if(o===l)for(;s<i;)(!a||!a.has(t[s]))&&t[s].remove(),s++;else if(t[s]===n[o-1]&&n[l]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[l++],t[s++].nextSibling),e.insertBefore(n[--o],c),t[i]=n[o]}else{if(!a){a=new Map;let d=l;for(;d<o;)a.set(n[d],d++)}const c=a.get(t[s]);if(c!=null)if(l<c&&c<o){let d=s,f=1,v;for(;++d<i&&d<o&&!((v=a.get(t[d]))==null||v!==c+f);)f++;if(f>c-l){const w=t[s];for(;l<c;)e.insertBefore(n[l++],w)}else e.replaceChild(n[l++],t[s++])}else s++;else t[s++].remove()}}}function $t(e,t,n,r={}){let i;return J(o=>{i=o,t===document?e():y(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=""}}function $(e,t,n){let r;const i=()=>{const s=document.createElement("template");return s.innerHTML=e,n?s.content.firstChild.firstChild:s.content.firstChild},o=t?()=>(r||(r=i())).cloneNode(!0):()=>M(()=>document.importNode(r||(r=i()),!0));return o.cloneNode=o,o}function p(e,t){t==null?e.removeAttribute("class"):e.className=t}function y(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return te(e,t,r,n);_(i=>te(e,t(),i,n),r)}function te(e,t,n,r,i){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,s=r!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),s){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=N(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||o==="boolean")n=N(e,n,r);else{if(o==="function")return _(()=>{let l=t();for(;typeof l=="function";)l=l();n=te(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(ve(l,t,n,i))return _(()=>n=te(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=N(e,n,r),s)return n}else u?n.length===0?Ee(e,l,r):wt(e,n,l):(n&&N(e),Ee(e,l));n=l}else if(t instanceof Node){if(Array.isArray(n)){if(s)return n=N(e,n,r,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ve(e,t,n,r){let i=!1;for(let o=0,s=t.length;o<s;o++){let l=t[o],u=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=ve(e,l,u)||i;else if(typeof l=="function")if(r){for(;typeof l=="function";)l=l();i=ve(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||i}else e.push(l),i=!0;else{const a=String(l);u&&u.nodeType===3?(u.data=a,e.push(u)):e.push(document.createTextNode(a))}}return i}function Ee(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function N(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let o=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(i!==l){const u=l.parentNode===e;!o&&!s?u?e.replaceChild(i,l):e.insertBefore(i,n):u&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const we=Symbol("store-raw"),G=Symbol("store-node");function Je(e){let t=e[S];if(!t&&(Object.defineProperty(e,S,{value:t=new Proxy(e,Ot)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let i=0,o=n.length;i<o;i++){const s=n[i];r[s].get&&Object.defineProperty(e,s,{enumerable:r[s].enumerable,get:r[s].get.bind(t)})}}return t}function ne(e){let t;return e!=null&&typeof e=="object"&&(e[S]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function q(e,t=new Set){let n,r,i,o;if(n=e!=null&&e[we])return n;if(!ne(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,l=e.length;s<l;s++)i=e[s],(r=q(i,t))!==i&&(e[s]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const s=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let u=0,a=s.length;u<a;u++)o=s[u],!l[o].get&&(i=e[o],(r=q(i,t))!==i&&(e[o]=r))}return e}function Oe(e){let t=e[G];return t||Object.defineProperty(e,G,{value:t=Object.create(null)}),t}function $e(e,t,n){return e[t]||(e[t]=Qe(n))}function At(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===S||t===G||(delete n.value,delete n.writable,n.get=()=>e[S][t]),n}function Ye(e){if(Be()){const t=Oe(e);(t._||(t._=Qe()))()}}function St(e){return Ye(e),Reflect.ownKeys(e)}function Qe(e){const[t,n]=D(e,{equals:!1,internal:!0});return t.$=n,t}const Ot={get(e,t,n){if(t===we)return e;if(t===S)return n;if(t===pe)return Ye(e),n;const r=Oe(e),i=r[t];let o=i?i():e[t];if(t===G||t==="__proto__")return o;if(!i){const s=Object.getOwnPropertyDescriptor(e,t);Be()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(o=$e(r,t,o)())}return ne(o)?Je(o):o},has(e,t){return t===we||t===S||t===pe||t===G||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:St,getOwnPropertyDescriptor:At};function re(e,t,n,r=!1){if(!r&&e[t]===n)return;const i=e[t],o=e.length;n===void 0?delete e[t]:e[t]=n;let s=Oe(e),l;(l=$e(s,t,i))&&l.$(()=>n),Array.isArray(e)&&e.length!==o&&(l=$e(s,"length",o))&&l.$(e.length),(l=s._)&&l.$()}function Ze(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const i=n[r];re(e,i,t[i])}}function Pt(e,t){if(typeof t=="function"&&(t=t(e)),t=q(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const i=t[n];e[n]!==i&&re(e,n,i)}re(e,"length",r)}else Ze(e,t)}function K(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();const s=typeof r,l=Array.isArray(e);if(Array.isArray(r)){for(let u=0;u<r.length;u++)K(e,[r[u]].concat(t),n);return}else if(l&&s==="function"){for(let u=0;u<e.length;u++)r(e[u],u)&&K(e,[u].concat(t),n);return}else if(l&&s==="object"){const{from:u=0,to:a=e.length-1,by:c=1}=r;for(let d=u;d<=a;d+=c)K(e,[d].concat(t),n);return}else if(t.length>1){K(e[r],t,[r].concat(n));return}i=e[r],n=[r].concat(n)}let o=t[0];typeof o=="function"&&(o=o(i,n),o===i)||r===void 0&&o==null||(o=q(o),r===void 0||ne(i)&&ne(o)&&!Array.isArray(o)?Ze(i,o):re(e,r,o))}function xt(...[e,t]){const n=q(e||{}),r=Array.isArray(n),i=Je(n);function o(...s){ct(()=>{r&&s.length===1?Pt(n,s[0]):K(n,s)})}return[i,o]}function et(e,t,n){return new Intl.NumberFormat(t,n).format(e)}function tt(e,t,n){return new Intl.DateTimeFormat(t,n).format(e)}var A;(function(e){e.number="number",e.plural="plural",e.date="date",e.tag="tag"})(A||(A={}));function he(e){return typeof e=="number"}function x(e){return typeof e=="string"}function Et(e){return e instanceof Date}function Tt(e){return typeof e=="function"}function jt(e){return e!==null&&typeof e=="object"}function nt(e){return Object.keys(e).every(t=>!e[t])}function ie(e,t){return x(t)?e?.[t]:e?.default}function Ct(e,t,n,r={},i){if(typeof n=="string")return n;const[o,s,l]=n,u=r[o];if(he(u)&&(!s||s===A.number))return et(u,e,ie(t.number,l));if(Et(u)||(x(u)||he(u))&&s===A.date)return tt(new Date(u),e,ie(t.dateTime,l));if(s===A.tag){const a=x(l)||Array.isArray(l)?Ae(e,t,l,r,i):void 0;if(Tt(u))return u(a);if(i){const c=x(u)?u:o;return i(c,a)}return""}else if(s===A.plural&&he(u)&&jt(l)){if(u===0&&l["=0"])return l["=0"];const a=new Intl.PluralRules(e).select(u),c=l[a]||l.other||"";return Ae(e,t,c,r,i)}else return String(u)}function Ae(e,t,n,r={},i){if(Array.isArray(n)){const o=n.map(s=>Ct(e,t,s,r,i));return o.every(x)?o.join(""):o}return n}const Te="var",ge="%%%",rt="num|number|plural|date",ce="=0|zero|one|two|few|many|other",Dt=new RegExp(`((${ce})\\s{)`,"g"),Lt=new RegExp(`^(${ce})\\s{(.+?)}$`),It=/(<(\w+?)>(.+?)<\/\w+?>|<(\w+?)(| )\/>)/g,kt=/^<(\w+?)(?:(?:| )\/>|>(.+?)<\/\w+?>)$/,Rt=new RegExp(`{(\\w+?)(, (${rt})(, ((${ce}) {.+?}+|\\w+?)|)|)}`,"g"),Nt=new RegExp(`^{(\\w+?)(?:, (${rt})(?:, ((?:${ce}) {.+?}+|\\w+?)|)|)}$`);function Ft(e){if(e==="num"||e==="number")return A.number;if(e==="plural")return A.plural;if(e==="date")return A.date}function je(e,t,n){return t.reduce((r,i,o)=>r.replace(i,`${ge}${Te}${o}${ge}`),e).split(ge).filter(r=>r!=="").map(r=>{const i=r.match(new RegExp(`^${Te}(\\d+?)$`));return i&&i[1]?n(t[i[1]],r):r})}function Ce(e){return e.reduceRight((t,n)=>!n&&!t.length?t:[n,...t],[])}function Ut(e){return e!==null&&e.length===3}function De(e){return e!==null&&[...e].filter(Boolean).slice(1)}function Mt(e){return e.replace(Dt,`
$1`).split(`
`).map(t=>t.trim().match(Lt)).filter(Ut).reduce((t,n)=>(t[n[1]]=Pe(n[2]),t),{})}function Bt(e,t){return e===A.plural&&t?Mt(t):t}function Pe(e){const t=[e].reduce((n,r)=>{const i=r.match(It);return n.push(...i?je(e,i,(o,s)=>{const l=De(o.match(kt));return l?Ce([l[0],A.tag,l[1]&&Pe(l[1])]):s}):[r]),n},[]).reduce((n,r)=>{const i=x(r)&&r.match(Rt);return n.push(...i?je(r,i,(o,s)=>{const l=De(o.match(Nt));if(!l)return s;const u=Ft(l[1]);return Ce([l[0],u,Bt(u,l[2])])}):[r]),n},[]);return t.length===1&&typeof t[0]=="string"?t[0]:t}function Kt(e){const t=new Set;function n(){[...t.values()].forEach(o=>o())}const r={language:e.language,locales:Object.assign({},e.locales),presets:Object.assign({},e.presets),setLanguage:o=>{r.language=o,n()},setLocales:o=>{r.locales=Object.assign(Object.assign({},r.locales),{[r.language]:Object.assign(Object.assign({},r.locales[r.language]),o)}),n()},t:(o,s)=>{var l;const u=x(o)?void 0:o.id,a=x(o)?o:o.message;return Ae(r.language,r.presets,Pe(((l=r.locales[r.language])===null||l===void 0?void 0:l[u||a])||a),s,e.formatTag)},formatNumber:(o,s)=>{const l=!s||x(s)?ie(r.presets.number,s):s;return et(o,r.language,l)},formatDateTime:(o,s)=>{const l=typeof o=="string"?new Date(o):o,u=!s||x(s)?ie(r.presets.dateTime,s):s;return tt(l,r.language,u)}};function i(o){return t.add(o),()=>{t.delete(o)}}return{i18n:r,subscribe:i}}const it=ft();function ae(){const e=dt(it);if(!e)throw new ReferenceError("I18nContext");return e}function Gt(e){return h(it.Provider,{get value(){return e.i18n},get children(){return e.children}})}const qt=$("<span></span>",2);function Vt(e,t){return zt(e)||Ht(e,t)||Xt(e,t)||Wt()}function Wt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xt(e,t){if(e){if(typeof e=="string")return Le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Le(e,t)}}function Le(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ht(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function zt(e){if(Array.isArray(e))return e}function H(e){const t=ae(),n=Se(e,["id","message","class"]),r=Vt(n,2),i=r[0],o=r[1];return(()=>{const s=qt.cloneNode(!0);return y(s,()=>t.t({id:i.id,message:i.message},o)),_(()=>p(s,i.class)),s})()}const Jt=$("<span></span>",2);function Yt(e,t){return tn(e)||en(e,t)||Zt(e,t)||Qt()}function Qt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zt(e,t){if(e){if(typeof e=="string")return Ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(e,t)}}function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function en(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function tn(e){if(Array.isArray(e))return e}function nn(e){const t=ae(),n=Se(e,["value","preset","numberStyle","class"]),r=Yt(n,2),i=r[0],o=r[1],s=_t(o,{style:i.numberStyle});return(()=>{const l=Jt.cloneNode(!0);return y(l,()=>{var u;return t.formatNumber(i.value,nt(s)?(u=t.presets.number)===null||u===void 0?void 0:u[i.preset||"default"]:s)}),_(()=>p(l,i.class)),l})()}const rn=$("<span></span>",2);function on(e,t){return cn(e)||un(e,t)||ln(e,t)||sn()}function sn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ln(e,t){if(e){if(typeof e=="string")return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ke(e,t)}}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function un(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function cn(e){if(Array.isArray(e))return e}function an(e){const t=ae(),n=Se(e,["date","preset","class"]),r=on(n,2),i=r[0],o=r[1];return(()=>{const s=rn.cloneNode(!0);return y(s,()=>{var l;return t.formatDateTime(i.date,nt(o)?(l=t.presets.dateTime)===null||l===void 0?void 0:l[i.preset||"default"]:o)}),_(()=>p(s,i.class)),s})()}function fn(e,t){return yn(e)||gn(e,t)||hn(e,t)||dn()}function dn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hn(e,t){if(e){if(typeof e=="string")return Re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Re(e,t)}}function Re(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function yn(e){if(Array.isArray(e))return e}function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ne(Object(n),!0).forEach(function(r){mn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pn(e,t){const n=$(`<${e}>`,0);return y(n,()=>t),n}function ye(e){return e.bind({})}function Fe(e){return oe(oe({},e),{},{t:ye(e.t),formatNumber:ye(e.formatNumber),formatDateTime:ye(e.formatDateTime)})}function bn(e){const t=Kt(oe(oe({},e),{},{formatTag:pn})),n=t.i18n,r=t.subscribe,i=xt(Fe(n)),o=fn(i,2),s=o[0],l=o[1];return r(()=>l(Fe(n))),s}const _n="modulepreload",vn=function(e){return"/solid-i18n-example/"+e},Ue={},wn=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=vn(o),o in Ue)return;Ue[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":_n,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((c,d)=>{a.addEventListener("load",c),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},$n=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})};var V=(e=>(e.Default="default",e.Fraction="fraction",e))(V||{}),I=(e=>(e.Default="default",e.Simple="simple",e.Full="full",e))(I||{});const ot="en",Y=bn({language:ot,presets:{number:{[V.Default]:{minimumFractionDigits:0,maximumFractionDigits:0},[V.Fraction]:{minimumFractionDigits:2,maximumFractionDigits:2}},dateTime:{[I.Default]:{day:"numeric",month:"short",year:"numeric"},[I.Full]:{day:"numeric",month:"long",year:"numeric"},[I.Simple]:{day:"numeric",month:"short"}}}});async function An(e){if(Y.setLanguage(e),e!==ot&&!(e in Y.locales)){const t=await $n(Object.assign({"./languages/ru.json":()=>wn(()=>import("./ru-8eeb43cb.js"),[])}),`./languages/${e}.json`);Y.setLocales(t.default)}}const Sn="_root_1x2mu_1",On={root:Sn},Pn=$("<select>"),xn=$("<option>"),z=e=>{const t=n=>{e.onChange(n.currentTarget.value)};return(()=>{const n=Pn();return n.addEventListener("change",t),y(n,h(vt,{get each(){return e.options},children:r=>(()=>{const i=xn();return i.value=r,y(i,r),_(()=>i.selected=e.value()===r),i})()})),_(()=>p(n,On.root)),n})()},En="_root_70nk4_1",Tn={root:En},jn=$('<input type="date" pattern="d{4}-d{2}-d{2}">'),Cn=e=>{const t=U(()=>e.value()?.toISOString().slice(0,10)),n=r=>{e.onChange(r.currentTarget.valueAsDate)};return(()=>{const r=jn();return r.addEventListener("change",n),_(()=>p(r,Tn.root)),_(()=>r.value=t()),r})()},Dn="_root_1tbxa_1",Ln="_header_1tbxa_10",In="_title_1tbxa_20",kn="_description_1tbxa_25",Rn="_content_1tbxa_30",Nn="_code_1tbxa_35",Fn="_result_1tbxa_72",j={root:Dn,header:Ln,title:In,description:kn,content:Rn,code:Nn,break:"_break_1tbxa_43",result:Fn},Un=$("<section><header><div><h3></h3></div></header><div><code></code><div></div><p>"),Mn=$("<p>"),F=e=>(()=>{const t=Un(),n=t.firstChild,r=n.firstChild,i=r.firstChild,o=n.nextSibling,s=o.firstChild,l=s.nextSibling,u=l.nextSibling;return y(i,()=>e.title),y(r,(()=>{const a=U(()=>!!e.description);return()=>a()&&(()=>{const c=Mn();return y(c,()=>e.description),_(()=>p(c,j.description)),c})()})(),null),y(n,()=>e.controls,null),y(s,()=>e.code),y(u,()=>e.children),_(a=>{const c=j.root,d=j.header,f=j.title,v=j.content,w=j.code,T=j.break,C=j.result;return c!==a._v$&&p(t,a._v$=c),d!==a._v$2&&p(n,a._v$2=d),f!==a._v$3&&p(i,a._v$3=f),v!==a._v$4&&p(o,a._v$4=v),w!==a._v$5&&p(s,a._v$5=w),T!==a._v$6&&p(l,a._v$6=T),C!==a._v$7&&p(u,a._v$7=C),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),t})(),Bn="_root_1h1hd_1",Kn={root:Bn},Gn=$("<div>"),qn=$('<a href="https://github.com/SanichKotikov/solid-i18n">'),Vn=()=>{const e=ae(),[t,n]=D("en"),[r,i]=D("9999"),[o,s]=D(V.Default),[l,u]=D(new Date),[a,c]=D(I.Default),d=f=>{n(f),An(f)};return(()=>{const f=Gn();return y(f,h(F,{title:"Base example",description:"String formatting with markup (simple html or custom components).",get controls(){return h(z,{value:t,options:["en","ru"],onChange:d})},code:`<Text
  message="Read the <link>documentation</link> for more info."
  link={(text) => <a href="https://github.com/SanichKotikov/solid-i18n">{text}</a>}
/>`,get children(){return h(H,{message:"Read the <link>documentation</link> for more info.",link:v=>(()=>{const w=qn();return y(w,v),w})()})}}),null),y(f,h(F,{title:"Text with plural",description:"Pluralization category can be one of: =0, one, two, few, many or other.",get controls(){return h(z,{value:r,options:["0","1","9999"],onChange:i})},get code(){return`<Text
  message="Selected {count, plural, =0 {zero items} one {single item} other {{count} items}}."
  count={${r()}}
/>`},get children(){return h(H,{message:"Selected {count, plural, =0 {zero items} one {single item} other {{count} items}}.",get count(){return+r()}})}}),null),y(f,h(F,{title:"Simple date",description:"Date formatting with custom parameters.",get controls(){return h(Cn,{value:l,onChange:u})},code:`<DateTime
  date={date()}
  day="numeric"
  month="long"
  weekday="long"
  year="numeric"
/>`,get children(){return h(an,{get date(){return l()},day:"numeric",month:"long",weekday:"long",year:"numeric"})}}),null),y(f,h(F,{title:"Text with date",get description(){return`Parameters: ${JSON.stringify(e.presets.dateTime[a()])}`},get controls(){return h(z,{value:a,get options(){return Object.values(I)},onChange:c})},get code(){return`<Text
  message="Selected date: {datetime${a()!==I.Default?", date, "+a():""}}"
  datetime={date()}
/>`},get children(){return h(H,{get message(){return`Selected date: {datetime, date, ${a()}}`},get datetime(){return l()}})}}),null),y(f,h(F,{title:"Text with number",get description(){return`Parameters: ${JSON.stringify(e.presets.number[o()])}`},get controls(){return h(z,{value:o,get options(){return Object.values(V)},onChange:s})},get code(){return`<Text
  message="Some value: {count, number, ${o()}}"
  count={9999.99}
/>`},get children(){return h(H,{get message(){return`Some value: {count, number, ${o()}}`},count:9999.99})}}),null),y(f,h(F,{title:"Amount with currency",code:`<Numeric
  value={9.99}
  numberStyle="currency"
  currency="EUR"
/>`,get children(){return h(nn,{value:9.99,numberStyle:"currency",currency:"EUR"})}}),null),_(()=>p(f,Kn.root)),f})()},Wn="_app_kec2d_1",Xn="_title_kec2d_6",Hn="_desc_kec2d_10",me={app:Wn,title:Xn,desc:Hn},zn=$("<header><h1>solid-i18n</h1><p>Tiny internationalization library for SolidJS."),Jn=$("<main>"),Yn=()=>(()=>{const e=Jn();return y(e,h(Gt,{i18n:Y,get children(){return[(()=>{const t=zn(),n=t.firstChild,r=n.nextSibling;return _(i=>{const o=me.title,s=me.desc;return o!==i._v$&&p(n,i._v$=o),s!==i._v$2&&p(r,i._v$2=s),i},{_v$:void 0,_v$2:void 0}),t})(),h(Vn,{})]}})),_(()=>p(e,me.app)),e})(),Qn=document.getElementById("root");$t(()=>h(Yn,{}),Qn);