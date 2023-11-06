(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Jr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const oe={},sn=[],Fe=()=>{},gl=()=>!1,_l=/^on[^a-z]/,js=t=>_l.test(t),Yr=t=>t.startsWith("onUpdate:"),_e=Object.assign,Xr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vl=Object.prototype.hasOwnProperty,q=(t,e)=>vl.call(t,e),$=Array.isArray,rn=t=>Vs(t)==="[object Map]",ia=t=>Vs(t)==="[object Set]",H=t=>typeof t=="function",pe=t=>typeof t=="string",Qr=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",oa=t=>(ae(t)||H(t))&&H(t.then)&&H(t.catch),aa=Object.prototype.toString,Vs=t=>aa.call(t),yl=t=>Vs(t).slice(8,-1),ca=t=>Vs(t)==="[object Object]",Zr=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ys=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bl=/-(\w)/g,Qe=Ws(t=>t.replace(bl,(e,n)=>n?n.toUpperCase():"")),El=/\B([A-Z])/g,vn=Ws(t=>t.replace(El,"-$1").toLowerCase()),Ks=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),cr=Ws(t=>t?`on${Ks(t)}`:""),Bt=(t,e)=>!Object.is(t,e),bs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Sr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Li;const Tr=()=>Li||(Li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ei(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=pe(s)?Tl(s):ei(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(pe(t)||ae(t))return t}const wl=/;(?![^(]*\))/g,Il=/:([^]+)/,Sl=/\/\*[^]*?\*\//g;function Tl(t){const e={};return t.replace(Sl,"").split(wl).forEach(n=>{if(n){const s=n.split(Il);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ti(t){let e="";if(pe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=ti(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cl=Jr(Rl);function la(t){return!!t||t===""}const mt=t=>pe(t)?t:t==null?"":$(t)||ae(t)&&(t.toString===aa||!H(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ia(e)?{[`Set(${e.size})`]:[...e.values()]}:ae(e)&&!$(e)&&!ca(e)?String(e):e;let Ae;class da{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function fa(t){return new da(t)}function Pl(t,e=Ae){e&&e.active&&e.effects.push(t)}function ha(){return Ae}function Al(t){Ae&&Ae.cleanups.push(t)}const ni=t=>{const e=new Set(t);return e.w=0,e.n=0,e},pa=t=>(t.w&Tt)>0,ma=t=>(t.n&Tt)>0,Ol=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Tt},kl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];pa(r)&&!ma(r)?r.delete(t):e[n++]=r,r.w&=~Tt,r.n&=~Tt}e.length=n}},Os=new WeakMap;let kn=0,Tt=1;const Rr=30;let Ue;const Lt=Symbol(""),Cr=Symbol("");class si{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pl(this,s)}run(){if(!this.active)return this.fn();let e=Ue,n=bt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ue,Ue=this,bt=!0,Tt=1<<++kn,kn<=Rr?Ol(this):Ui(this),this.fn()}finally{kn<=Rr&&kl(this),Tt=1<<--kn,Ue=this.parent,bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(Ui(this),this.onStop&&this.onStop(),this.active=!1)}}function Ui(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bt=!0;const ga=[];function yn(){ga.push(bt),bt=!1}function bn(){const t=ga.pop();bt=t===void 0?!0:t}function Re(t,e,n){if(bt&&Ue){let s=Os.get(t);s||Os.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=ni()),_a(r)}}function _a(t,e){let n=!1;kn<=Rr?ma(t)||(t.n|=Tt,n=!pa(t)):n=!t.has(Ue),n&&(t.add(Ue),Ue.deps.push(t))}function rt(t,e,n,s,r,i){const o=Os.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Zr(n)&&a.push(o.get("length")):(a.push(o.get(Lt)),rn(t)&&a.push(o.get(Cr)));break;case"delete":$(t)||(a.push(o.get(Lt)),rn(t)&&a.push(o.get(Cr)));break;case"set":rn(t)&&a.push(o.get(Lt));break}if(a.length===1)a[0]&&Pr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Pr(ni(c))}}function Pr(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&$i(s);for(const s of n)s.computed||$i(s)}function $i(t,e){(t!==Ue||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Nl(t,e){var n;return(n=Os.get(t))==null?void 0:n.get(e)}const Ml=Jr("__proto__,__v_isRef,__isVue"),va=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qr)),Fi=xl();function xl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=J(this);for(let i=0,o=this.length;i<o;i++)Re(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(J)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){yn();const s=J(this)[e].apply(this,n);return bn(),s}}),t}function Dl(t){const e=J(this);return Re(e,"has",t),e.hasOwnProperty(t)}class ya{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&s===(r?i?Gl:Ia:i?wa:Ea).get(e))return e;const o=$(e);if(!r){if(o&&q(Fi,n))return Reflect.get(Fi,n,s);if(n==="hasOwnProperty")return Dl}const a=Reflect.get(e,n,s);return(Qr(n)?va.has(n):Ml(n))||(r||Re(e,"get",n),i)?a:ue(a)?o&&Zr(n)?a:a.value:ae(a)?r?Ta(a):ns(a):a}}class ba extends ya{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(dn(i)&&ue(i)&&!ue(s))return!1;if(!this._shallow&&(!ks(s)&&!dn(s)&&(i=J(i),s=J(s)),!$(e)&&ue(i)&&!ue(s)))return i.value=s,!0;const o=$(e)&&Zr(n)?Number(n)<e.length:q(e,n),a=Reflect.set(e,n,s,r);return e===J(r)&&(o?Bt(s,i)&&rt(e,"set",n,s):rt(e,"add",n,s)),a}deleteProperty(e,n){const s=q(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&rt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Qr(n)||!va.has(n))&&Re(e,"has",n),s}ownKeys(e){return Re(e,"iterate",$(e)?"length":Lt),Reflect.ownKeys(e)}}class Ll extends ya{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ul=new ba,$l=new Ll,Fl=new ba(!0),ri=t=>t,zs=t=>Reflect.getPrototypeOf(t);function fs(t,e,n=!1,s=!1){t=t.__v_raw;const r=J(t),i=J(e);n||(Bt(e,i)&&Re(r,"get",e),Re(r,"get",i));const{has:o}=zs(r),a=s?ri:n?ai:jn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function hs(t,e=!1){const n=this.__v_raw,s=J(n),r=J(t);return e||(Bt(t,r)&&Re(s,"has",t),Re(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ps(t,e=!1){return t=t.__v_raw,!e&&Re(J(t),"iterate",Lt),Reflect.get(t,"size",t)}function Bi(t){t=J(t);const e=J(this);return zs(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function Hi(t,e){e=J(e);const n=J(this),{has:s,get:r}=zs(n);let i=s.call(n,t);i||(t=J(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Bt(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function ji(t){const e=J(this),{has:n,get:s}=zs(e);let r=n.call(e,t);r||(t=J(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&rt(e,"delete",t,void 0),i}function Vi(){const t=J(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function ms(t,e){return function(s,r){const i=this,o=i.__v_raw,a=J(o),c=e?ri:t?ai:jn;return!t&&Re(a,"iterate",Lt),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function gs(t,e,n){return function(...s){const r=this.__v_raw,i=J(r),o=rn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ri:e?ai:jn;return!e&&Re(i,"iterate",c?Cr:Lt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function lt(t){return function(...e){return t==="delete"?!1:this}}function Bl(){const t={get(i){return fs(this,i)},get size(){return ps(this)},has:hs,add:Bi,set:Hi,delete:ji,clear:Vi,forEach:ms(!1,!1)},e={get(i){return fs(this,i,!1,!0)},get size(){return ps(this)},has:hs,add:Bi,set:Hi,delete:ji,clear:Vi,forEach:ms(!1,!0)},n={get(i){return fs(this,i,!0)},get size(){return ps(this,!0)},has(i){return hs.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:ms(!0,!1)},s={get(i){return fs(this,i,!0,!0)},get size(){return ps(this,!0)},has(i){return hs.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:ms(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=gs(i,!1,!1),n[i]=gs(i,!0,!1),e[i]=gs(i,!1,!0),s[i]=gs(i,!0,!0)}),[t,n,e,s]}const[Hl,jl,Vl,Wl]=Bl();function ii(t,e){const n=e?t?Wl:Vl:t?jl:Hl;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(q(n,r)&&r in s?n:s,r,i)}const Kl={get:ii(!1,!1)},zl={get:ii(!1,!0)},ql={get:ii(!0,!1)},Ea=new WeakMap,wa=new WeakMap,Ia=new WeakMap,Gl=new WeakMap;function Jl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yl(t){return t.__v_skip||!Object.isExtensible(t)?0:Jl(yl(t))}function ns(t){return dn(t)?t:oi(t,!1,Ul,Kl,Ea)}function Sa(t){return oi(t,!1,Fl,zl,wa)}function Ta(t){return oi(t,!0,$l,ql,Ia)}function oi(t,e,n,s,r){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Yl(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Et(t){return dn(t)?Et(t.__v_raw):!!(t&&t.__v_isReactive)}function dn(t){return!!(t&&t.__v_isReadonly)}function ks(t){return!!(t&&t.__v_isShallow)}function Ra(t){return Et(t)||dn(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function qs(t){return As(t,"__v_skip",!0),t}const jn=t=>ae(t)?ns(t):t,ai=t=>ae(t)?Ta(t):t;function Ca(t){bt&&Ue&&(t=J(t),_a(t.dep||(t.dep=ni())))}function Pa(t,e){t=J(t);const n=t.dep;n&&Pr(n)}function ue(t){return!!(t&&t.__v_isRef===!0)}function Oe(t){return Aa(t,!1)}function Xl(t){return Aa(t,!0)}function Aa(t,e){return ue(t)?t:new Ql(t,e)}class Ql{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:jn(e)}get value(){return Ca(this),this._value}set value(e){const n=this.__v_isShallow||ks(e)||dn(e);e=n?e:J(e),Bt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jn(e),Pa(this))}}function ge(t){return ue(t)?t.value:t}const Zl={get:(t,e,n)=>ge(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ue(r)&&!ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Oa(t){return Et(t)?t:new Proxy(t,Zl)}function eu(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=nu(t,n);return e}class tu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Nl(J(this._object),this._key)}}function nu(t,e,n){const s=t[e];return ue(s)?s:new tu(t,e,n)}class su{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new si(e,()=>{this._dirty||(this._dirty=!0,Pa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=J(this);return Ca(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ru(t,e,n=!1){let s,r;const i=H(t);return i?(s=t,r=Fe):(s=t.get,r=t.set),new su(s,r,i||!r,n)}function wt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Gs(i,e,n)}return r}function Be(t,e,n,s){if(H(t)){const i=wt(t,e,n,s);return i&&oa(i)&&i.catch(o=>{Gs(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Be(t[i],e,n,s));return r}function Gs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wt(c,null,10,[t,o,a]);return}}iu(t,n,r,s)}function iu(t,e,n,s=!0){console.error(t)}let Vn=!1,Ar=!1;const be=[];let Ge=0;const on=[];let tt=null,Mt=0;const ka=Promise.resolve();let ci=null;function li(t){const e=ci||ka;return t?e.then(this?t.bind(this):t):e}function ou(t){let e=Ge+1,n=be.length;for(;e<n;){const s=e+n>>>1;Wn(be[s])<t?e=s+1:n=s}return e}function ui(t){(!be.length||!be.includes(t,Vn&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?be.push(t):be.splice(ou(t.id),0,t),Na())}function Na(){!Vn&&!Ar&&(Ar=!0,ci=ka.then(xa))}function au(t){const e=be.indexOf(t);e>Ge&&be.splice(e,1)}function cu(t){$(t)?on.push(...t):(!tt||!tt.includes(t,t.allowRecurse?Mt+1:Mt))&&on.push(t),Na()}function Wi(t,e=Vn?Ge+1:0){for(;e<be.length;e++){const n=be[e];n&&n.pre&&(be.splice(e,1),e--,n())}}function Ma(t){if(on.length){const e=[...new Set(on)];if(on.length=0,tt){tt.push(...e);return}for(tt=e,tt.sort((n,s)=>Wn(n)-Wn(s)),Mt=0;Mt<tt.length;Mt++)tt[Mt]();tt=null,Mt=0}}const Wn=t=>t.id==null?1/0:t.id,lu=(t,e)=>{const n=Wn(t)-Wn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function xa(t){Ar=!1,Vn=!0,be.sort(lu);const e=Fe;try{for(Ge=0;Ge<be.length;Ge++){const n=be[Ge];n&&n.active!==!1&&wt(n,null,14)}}finally{Ge=0,be.length=0,Ma(),Vn=!1,ci=null,(be.length||on.length)&&xa()}}function uu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||oe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[u]||oe;p&&(r=n.map(g=>pe(g)?g.trim():g)),h&&(r=n.map(Sr))}let a,c=s[a=cr(e)]||s[a=cr(Qe(e))];!c&&i&&(c=s[a=cr(vn(e))]),c&&Be(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Be(l,t,6,r)}}function Da(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=Da(l,e,!0);u&&(a=!0,_e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ae(t)&&s.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):_e(o,i),ae(t)&&s.set(t,o),o)}function Js(t,e){return!t||!js(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,vn(e))||q(t,e))}let ke=null,Ys=null;function Ns(t){const e=ke;return ke=t,Ys=t&&t.type.__scopeId||null,e}function En(t){Ys=t}function wn(){Ys=null}function Je(t,e=ke,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&to(-1);const i=Ns(e);let o;try{o=t(...r)}finally{Ns(i),s._d&&to(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function lr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:g,ctx:I,inheritAttrs:P}=t;let U,k;const M=Ns(t);try{if(n.shapeFlag&4){const x=r||s;U=qe(u.call(x,x,h,i,g,p,I)),k=c}else{const x=e;U=qe(x.length>1?x(i,{attrs:c,slots:a,emit:l}):x(i,null)),k=e.props?c:du(c)}}catch(x){Ln.length=0,Gs(x,t,1),U=G(Ht)}let V=U;if(k&&P!==!1){const x=Object.keys(k),{shapeFlag:X}=V;x.length&&X&7&&(o&&x.some(Yr)&&(k=fu(k,o)),V=fn(V,k))}return n.dirs&&(V=fn(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),U=V,Ns(M),U}const du=t=>{let e;for(const n in t)(n==="class"||n==="style"||js(n))&&((e||(e={}))[n]=t[n]);return e},fu=(t,e)=>{const n={};for(const s in t)(!Yr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ki(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==s[p]&&!Js(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ki(s,o,l):!0:!!o;return!1}function Ki(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Js(n,i))return!0}return!1}function pu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mu=t=>t.__isSuspense;function gu(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):cu(t)}const _s={};function an(t,e,n){return La(t,e,n)}function La(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=oe){var a;const c=ha()===((a=me)==null?void 0:a.scope)?me:null;let l,u=!1,h=!1;if(ue(t)?(l=()=>t.value,u=ks(t)):Et(t)?(l=()=>t,s=!0):$(t)?(h=!0,u=t.some(x=>Et(x)||ks(x)),l=()=>t.map(x=>{if(ue(x))return x.value;if(Et(x))return Dt(x);if(H(x))return wt(x,c,2)})):H(t)?e?l=()=>wt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Be(t,c,3,[g])}:l=Fe,e&&s){const x=l;l=()=>Dt(x())}let p,g=x=>{p=M.onStop=()=>{wt(x,c,4)}},I;if(Gn)if(g=Fe,e?n&&Be(e,c,3,[l(),h?[]:void 0,g]):l(),r==="sync"){const x=ld();I=x.__watcherHandles||(x.__watcherHandles=[])}else return Fe;let P=h?new Array(t.length).fill(_s):_s;const U=()=>{if(M.active)if(e){const x=M.run();(s||u||(h?x.some((X,de)=>Bt(X,P[de])):Bt(x,P)))&&(p&&p(),Be(e,c,3,[x,P===_s?void 0:h&&P[0]===_s?[]:P,g]),P=x)}else M.run()};U.allowRecurse=!!e;let k;r==="sync"?k=U:r==="post"?k=()=>Se(U,c&&c.suspense):(U.pre=!0,c&&(U.id=c.uid),k=()=>ui(U));const M=new si(l,k);e?n?U():P=M.run():r==="post"?Se(M.run.bind(M),c&&c.suspense):M.run();const V=()=>{M.stop(),c&&c.scope&&Xr(c.scope.effects,M)};return I&&I.push(V),V}function _u(t,e,n){const s=this.proxy,r=pe(t)?t.includes(".")?Ua(s,t):()=>s[t]:t.bind(s,s);let i;H(e)?i=e:(i=e.handler,n=e);const o=me;hn(this);const a=La(r,i.bind(s),n);return o?hn(o):$t(),a}function Ua(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Dt(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))Dt(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Dt(t[n],e);else if(ia(t)||rn(t))t.forEach(n=>{Dt(n,e)});else if(ca(t))for(const n in t)Dt(t[n],e);return t}function Kn(t,e){const n=ke;if(n===null)return t;const s=tr(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=oe]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&Dt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ot(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(yn(),Be(c,n,8,[t.el,a,t,e]),bn())}}/*! #__NO_SIDE_EFFECTS__ */function $a(t,e){return H(t)?(()=>_e({name:t.name},e,{setup:t}))():t}const Es=t=>!!t.type.__asyncLoader,Fa=t=>t.type.__isKeepAlive;function vu(t,e){Ba(t,"a",e)}function yu(t,e){Ba(t,"da",e)}function Ba(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Fa(r.parent.vnode)&&bu(s,e,n,r),r=r.parent}}function bu(t,e,n,s){const r=Xs(e,t,s,!0);Ha(()=>{Xr(s[e],r)},n)}function Xs(t,e,n=me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;yn(),hn(n);const a=Be(e,n,t,o);return $t(),bn(),a});return s?r.unshift(i):r.push(i),i}}const ot=t=>(e,n=me)=>(!Gn||t==="sp")&&Xs(t,(...s)=>e(...s),n),Eu=ot("bm"),Qs=ot("m"),wu=ot("bu"),Iu=ot("u"),Su=ot("bum"),Ha=ot("um"),Tu=ot("sp"),Ru=ot("rtg"),Cu=ot("rtc");function Pu(t,e=me){Xs("ec",t,e)}const ja="components";function Kt(t,e){return Ou(ja,t,!0,e)||t}const Au=Symbol.for("v-ndc");function Ou(t,e,n=!0,s=!1){const r=ke||me;if(r){const i=r.type;if(t===ja){const a=od(i,!1);if(a&&(a===e||a===Qe(e)||a===Ks(Qe(e))))return i}const o=zi(r[t]||i[t],e)||zi(r.appContext[t],e);return!o&&s?i:o}}function zi(t,e){return t&&(t[e]||t[Qe(e)]||t[Ks(Qe(e))])}function Rt(t,e,n,s){let r;const i=n&&n[s];if($(t)||pe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ae(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Or=t=>t?ec(t)?tr(t)||t.proxy:Or(t.parent):null,Dn=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$emit:t=>t.emit,$options:t=>di(t),$forceUpdate:t=>t.f||(t.f=()=>ui(t.update)),$nextTick:t=>t.n||(t.n=li.bind(t.proxy)),$watch:t=>_u.bind(t)}),ur=(t,e)=>t!==oe&&!t.__isScriptSetup&&q(t,e),ku={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ur(s,e))return o[e]=1,s[e];if(r!==oe&&q(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==oe&&q(n,e))return o[e]=4,n[e];kr&&(o[e]=0)}}const u=Dn[e];let h,p;if(u)return e==="$attrs"&&Re(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==oe&&q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ur(r,e)?(r[e]=n,!0):s!==oe&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==oe&&q(t,o)||ur(e,o)||(a=i[0])&&q(a,o)||q(s,o)||q(Dn,o)||q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qi(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kr=!0;function Nu(t){const e=di(t),n=t.proxy,s=t.ctx;kr=!1,e.beforeCreate&&Gi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:g,updated:I,activated:P,deactivated:U,beforeDestroy:k,beforeUnmount:M,destroyed:V,unmounted:x,render:X,renderTracked:de,renderTriggered:he,errorCaptured:z,serverPrefetch:W,expose:ce,inheritAttrs:ve,components:Ce,directives:Ne,filters:At}=e;if(l&&Mu(l,s,null),o)for(const ne in o){const Q=o[ne];H(Q)&&(s[ne]=Q.bind(n))}if(r){const ne=r.call(n,n);ae(ne)&&(t.data=ns(ne))}if(kr=!0,i)for(const ne in i){const Q=i[ne],Ze=H(Q)?Q.bind(n,n):H(Q.get)?Q.get.bind(n,n):Fe,ct=!H(Q)&&H(Q.set)?Q.set.bind(n):Fe,We=xe({get:Ze,set:ct});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>We.value,set:Ie=>We.value=Ie})}if(a)for(const ne in a)Va(a[ne],s,n,ne);if(c){const ne=H(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Q=>{ws(Q,ne[Q])})}u&&Gi(u,t,"c");function Y(ne,Q){$(Q)?Q.forEach(Ze=>ne(Ze.bind(n))):Q&&ne(Q.bind(n))}if(Y(Eu,h),Y(Qs,p),Y(wu,g),Y(Iu,I),Y(vu,P),Y(yu,U),Y(Pu,z),Y(Cu,de),Y(Ru,he),Y(Su,M),Y(Ha,x),Y(Tu,W),$(ce))if(ce.length){const ne=t.exposed||(t.exposed={});ce.forEach(Q=>{Object.defineProperty(ne,Q,{get:()=>n[Q],set:Ze=>n[Q]=Ze})})}else t.exposed||(t.exposed={});X&&t.render===Fe&&(t.render=X),ve!=null&&(t.inheritAttrs=ve),Ce&&(t.components=Ce),Ne&&(t.directives=Ne)}function Mu(t,e,n=Fe){$(t)&&(t=Nr(t));for(const s in t){const r=t[s];let i;ae(r)?"default"in r?i=He(r.from||s,r.default,!0):i=He(r.from||s):i=He(r),ue(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Gi(t,e,n){Be($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Va(t,e,n,s){const r=s.includes(".")?Ua(n,s):()=>n[s];if(pe(t)){const i=e[t];H(i)&&an(r,i)}else if(H(t))an(r,t.bind(n));else if(ae(t))if($(t))t.forEach(i=>Va(i,e,n,s));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&an(r,i,t)}}function di(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ms(c,l,o,!0)),Ms(c,e,o)),ae(e)&&i.set(e,c),c}function Ms(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ms(t,i,n,!0),r&&r.forEach(o=>Ms(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=xu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xu={data:Ji,props:Yi,emits:Yi,methods:Nn,computed:Nn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Nn,directives:Nn,watch:Lu,provide:Ji,inject:Du};function Ji(t,e){return e?t?function(){return _e(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Du(t,e){return Nn(Nr(t),Nr(e))}function Nr(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Nn(t,e){return t?_e(Object.create(null),t,e):e}function Yi(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:_e(Object.create(null),qi(t),qi(e??{})):e}function Lu(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const s in e)n[s]=we(t[s],e[s]);return n}function Wa(){return{app:null,config:{isNativeTag:gl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uu=0;function $u(t,e){return function(s,r=null){H(s)||(s=_e({},s)),r!=null&&!ae(r)&&(r=null);const i=Wa(),o=new WeakSet;let a=!1;const c=i.app={_uid:Uu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ud,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const p=G(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,tr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){zn=c;try{return l()}finally{zn=null}}};return c}}let zn=null;function ws(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function He(t,e,n=!1){const s=me||ke;if(s||zn){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:zn._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function Fu(){return!!(me||ke||zn)}function Bu(t,e,n,s=!1){const r={},i={};As(i,er,1),t.propsDefaults=Object.create(null),Ka(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Sa(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Hu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=J(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Js(t.emitsOptions,p))continue;const g=e[p];if(c)if(q(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const I=Qe(p);r[I]=Mr(c,a,I,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Ka(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!q(e,h)&&((u=vn(h))===h||!q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Mr(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!q(e,h))&&(delete i[h],l=!0)}l&&rt(t,"set","$attrs")}function Ka(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ys(c))continue;const l=e[c];let u;r&&q(r,u=Qe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Js(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=J(n),l=a||oe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Mr(r,c,h,l[h],t,!q(l,h))}}return o}function Mr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(hn(r),s=l[n]=c.call(null,e),$t())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===vn(n))&&(s=!0))}return s}function za(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=h=>{c=!0;const[p,g]=za(h,e,!0);_e(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ae(t)&&s.set(t,sn),sn;if($(i))for(let u=0;u<i.length;u++){const h=Qe(i[u]);Xi(h)&&(o[h]=oe)}else if(i)for(const u in i){const h=Qe(u);if(Xi(h)){const p=i[u],g=o[h]=$(p)||H(p)?{type:p}:_e({},p);if(g){const I=eo(Boolean,g.type),P=eo(String,g.type);g[0]=I>-1,g[1]=P<0||I<P,(I>-1||q(g,"default"))&&a.push(h)}}}const l=[o,a];return ae(t)&&s.set(t,l),l}function Xi(t){return t[0]!=="$"}function Qi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Zi(t,e){return Qi(t)===Qi(e)}function eo(t,e){return $(e)?e.findIndex(n=>Zi(n,t)):H(e)&&Zi(e,t)?0:-1}const qa=t=>t[0]==="_"||t==="$stable",fi=t=>$(t)?t.map(qe):[qe(t)],ju=(t,e,n)=>{if(e._n)return e;const s=Je((...r)=>fi(e(...r)),n);return s._c=!1,s},Ga=(t,e,n)=>{const s=t._ctx;for(const r in t){if(qa(r))continue;const i=t[r];if(H(i))e[r]=ju(r,i,s);else if(i!=null){const o=fi(i);e[r]=()=>o}}},Ja=(t,e)=>{const n=fi(e);t.slots.default=()=>n},Vu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),As(e,"_",n)):Ga(e,t.slots={})}else t.slots={},e&&Ja(t,e);As(t.slots,er,1)},Wu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=oe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_e(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Ga(e,r)),o=e}else e&&(Ja(t,e),o={default:1});if(i)for(const a in r)!qa(a)&&o[a]==null&&delete r[a]};function xr(t,e,n,s,r=!1){if($(t)){t.forEach((p,g)=>xr(p,e&&($(e)?e[g]:e),n,s,r));return}if(Es(s)&&!r)return;const i=s.shapeFlag&4?tr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(pe(l)?(u[l]=null,q(h,l)&&(h[l]=null)):ue(l)&&(l.value=null)),H(c))wt(c,a,12,[o,u]);else{const p=pe(c),g=ue(c);if(p||g){const I=()=>{if(t.f){const P=p?q(h,c)?h[c]:u[c]:c.value;r?$(P)&&Xr(P,i):$(P)?P.includes(i)||P.push(i):p?(u[c]=[i],q(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,q(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,Se(I,n)):I()}}}const Se=gu;function Ku(t){return zu(t)}function zu(t,e){const n=Tr();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:g=Fe,insertStaticContent:I}=t,P=(d,f,m,_=null,y=null,b=null,R=!1,w=null,S=!!f.dynamicChildren)=>{if(d===f)return;d&&!Pn(d,f)&&(_=v(d),Ie(d,y,b,!0),d=null),f.patchFlag===-2&&(S=!1,f.dynamicChildren=null);const{type:E,ref:D,shapeFlag:O}=f;switch(E){case Zs:U(d,f,m,_);break;case Ht:k(d,f,m,_);break;case Is:d==null&&M(f,m,_,R);break;case le:Ce(d,f,m,_,y,b,R,w,S);break;default:O&1?X(d,f,m,_,y,b,R,w,S):O&6?Ne(d,f,m,_,y,b,R,w,S):(O&64||O&128)&&E.process(d,f,m,_,y,b,R,w,S,T)}D!=null&&y&&xr(D,d&&d.ref,b,f||d,!f)},U=(d,f,m,_)=>{if(d==null)s(f.el=a(f.children),m,_);else{const y=f.el=d.el;f.children!==d.children&&l(y,f.children)}},k=(d,f,m,_)=>{d==null?s(f.el=c(f.children||""),m,_):f.el=d.el},M=(d,f,m,_)=>{[d.el,d.anchor]=I(d.children,f,m,_,d.el,d.anchor)},V=({el:d,anchor:f},m,_)=>{let y;for(;d&&d!==f;)y=p(d),s(d,m,_),d=y;s(f,m,_)},x=({el:d,anchor:f})=>{let m;for(;d&&d!==f;)m=p(d),r(d),d=m;r(f)},X=(d,f,m,_,y,b,R,w,S)=>{R=R||f.type==="svg",d==null?de(f,m,_,y,b,R,w,S):W(d,f,y,b,R,w,S)},de=(d,f,m,_,y,b,R,w)=>{let S,E;const{type:D,props:O,shapeFlag:L,transition:B,dirs:K}=d;if(S=d.el=o(d.type,b,O&&O.is,O),L&8?u(S,d.children):L&16&&z(d.children,S,null,_,y,b&&D!=="foreignObject",R,w),K&&Ot(d,null,_,"created"),he(S,d,d.scopeId,R,_),O){for(const te in O)te!=="value"&&!ys(te)&&i(S,te,null,O[te],b,d.children,_,y,ye);"value"in O&&i(S,"value",null,O.value),(E=O.onVnodeBeforeMount)&&ze(E,_,d)}K&&Ot(d,null,_,"beforeMount");const re=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;re&&B.beforeEnter(S),s(S,f,m),((E=O&&O.onVnodeMounted)||re||K)&&Se(()=>{E&&ze(E,_,d),re&&B.enter(S),K&&Ot(d,null,_,"mounted")},y)},he=(d,f,m,_,y)=>{if(m&&g(d,m),_)for(let b=0;b<_.length;b++)g(d,_[b]);if(y){let b=y.subTree;if(f===b){const R=y.vnode;he(d,R,R.scopeId,R.slotScopeIds,y.parent)}}},z=(d,f,m,_,y,b,R,w,S=0)=>{for(let E=S;E<d.length;E++){const D=d[E]=w?ht(d[E]):qe(d[E]);P(null,D,f,m,_,y,b,R,w)}},W=(d,f,m,_,y,b,R)=>{const w=f.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:D}=f;S|=d.patchFlag&16;const O=d.props||oe,L=f.props||oe;let B;m&&kt(m,!1),(B=L.onVnodeBeforeUpdate)&&ze(B,m,f,d),D&&Ot(f,d,m,"beforeUpdate"),m&&kt(m,!0);const K=y&&f.type!=="foreignObject";if(E?ce(d.dynamicChildren,E,w,m,_,K,b):R||Q(d,f,w,null,m,_,K,b,!1),S>0){if(S&16)ve(w,f,O,L,m,_,y);else if(S&2&&O.class!==L.class&&i(w,"class",null,L.class,y),S&4&&i(w,"style",O.style,L.style,y),S&8){const re=f.dynamicProps;for(let te=0;te<re.length;te++){const fe=re[te],Le=O[fe],Xt=L[fe];(Xt!==Le||fe==="value")&&i(w,fe,Le,Xt,y,d.children,m,_,ye)}}S&1&&d.children!==f.children&&u(w,f.children)}else!R&&E==null&&ve(w,f,O,L,m,_,y);((B=L.onVnodeUpdated)||D)&&Se(()=>{B&&ze(B,m,f,d),D&&Ot(f,d,m,"updated")},_)},ce=(d,f,m,_,y,b,R)=>{for(let w=0;w<f.length;w++){const S=d[w],E=f[w],D=S.el&&(S.type===le||!Pn(S,E)||S.shapeFlag&70)?h(S.el):m;P(S,E,D,null,_,y,b,R,!0)}},ve=(d,f,m,_,y,b,R)=>{if(m!==_){if(m!==oe)for(const w in m)!ys(w)&&!(w in _)&&i(d,w,m[w],null,R,f.children,y,b,ye);for(const w in _){if(ys(w))continue;const S=_[w],E=m[w];S!==E&&w!=="value"&&i(d,w,E,S,R,f.children,y,b,ye)}"value"in _&&i(d,"value",m.value,_.value)}},Ce=(d,f,m,_,y,b,R,w,S)=>{const E=f.el=d?d.el:a(""),D=f.anchor=d?d.anchor:a("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:B}=f;B&&(w=w?w.concat(B):B),d==null?(s(E,m,_),s(D,m,_),z(f.children,m,D,y,b,R,w,S)):O>0&&O&64&&L&&d.dynamicChildren?(ce(d.dynamicChildren,L,m,y,b,R,w),(f.key!=null||y&&f===y.subTree)&&Ya(d,f,!0)):Q(d,f,m,D,y,b,R,w,S)},Ne=(d,f,m,_,y,b,R,w,S)=>{f.slotScopeIds=w,d==null?f.shapeFlag&512?y.ctx.activate(f,m,_,R,S):At(f,m,_,y,b,R,S):Me(d,f,S)},At=(d,f,m,_,y,b,R)=>{const w=d.component=td(d,_,y);if(Fa(d)&&(w.ctx.renderer=T),nd(w),w.asyncDep){if(y&&y.registerDep(w,Y),!d.el){const S=w.subTree=G(Ht);k(null,S,f,m)}return}Y(w,d,f,m,y,b,R)},Me=(d,f,m)=>{const _=f.component=d.component;if(hu(d,f,m))if(_.asyncDep&&!_.asyncResolved){ne(_,f,m);return}else _.next=f,au(_.update),_.update();else f.el=d.el,_.vnode=f},Y=(d,f,m,_,y,b,R)=>{const w=()=>{if(d.isMounted){let{next:D,bu:O,u:L,parent:B,vnode:K}=d,re=D,te;kt(d,!1),D?(D.el=K.el,ne(d,D,R)):D=K,O&&bs(O),(te=D.props&&D.props.onVnodeBeforeUpdate)&&ze(te,B,D,K),kt(d,!0);const fe=lr(d),Le=d.subTree;d.subTree=fe,P(Le,fe,h(Le.el),v(Le),d,y,b),D.el=fe.el,re===null&&pu(d,fe.el),L&&Se(L,y),(te=D.props&&D.props.onVnodeUpdated)&&Se(()=>ze(te,B,D,K),y)}else{let D;const{el:O,props:L}=f,{bm:B,m:K,parent:re}=d,te=Es(f);if(kt(d,!1),B&&bs(B),!te&&(D=L&&L.onVnodeBeforeMount)&&ze(D,re,f),kt(d,!0),O&&Z){const fe=()=>{d.subTree=lr(d),Z(O,d.subTree,d,y,null)};te?f.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=lr(d);P(null,fe,m,_,d,y,b),f.el=fe.el}if(K&&Se(K,y),!te&&(D=L&&L.onVnodeMounted)){const fe=f;Se(()=>ze(D,re,fe),y)}(f.shapeFlag&256||re&&Es(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Se(d.a,y),d.isMounted=!0,f=m=_=null}},S=d.effect=new si(w,()=>ui(E),d.scope),E=d.update=()=>S.run();E.id=d.uid,kt(d,!0),E()},ne=(d,f,m)=>{f.component=d;const _=d.vnode.props;d.vnode=f,d.next=null,Hu(d,f.props,_,m),Wu(d,f.children,m),yn(),Wi(),bn()},Q=(d,f,m,_,y,b,R,w,S=!1)=>{const E=d&&d.children,D=d?d.shapeFlag:0,O=f.children,{patchFlag:L,shapeFlag:B}=f;if(L>0){if(L&128){ct(E,O,m,_,y,b,R,w,S);return}else if(L&256){Ze(E,O,m,_,y,b,R,w,S);return}}B&8?(D&16&&ye(E,y,b),O!==E&&u(m,O)):D&16?B&16?ct(E,O,m,_,y,b,R,w,S):ye(E,y,b,!0):(D&8&&u(m,""),B&16&&z(O,m,_,y,b,R,w,S))},Ze=(d,f,m,_,y,b,R,w,S)=>{d=d||sn,f=f||sn;const E=d.length,D=f.length,O=Math.min(E,D);let L;for(L=0;L<O;L++){const B=f[L]=S?ht(f[L]):qe(f[L]);P(d[L],B,m,null,y,b,R,w,S)}E>D?ye(d,y,b,!0,!1,O):z(f,m,_,y,b,R,w,S,O)},ct=(d,f,m,_,y,b,R,w,S)=>{let E=0;const D=f.length;let O=d.length-1,L=D-1;for(;E<=O&&E<=L;){const B=d[E],K=f[E]=S?ht(f[E]):qe(f[E]);if(Pn(B,K))P(B,K,m,null,y,b,R,w,S);else break;E++}for(;E<=O&&E<=L;){const B=d[O],K=f[L]=S?ht(f[L]):qe(f[L]);if(Pn(B,K))P(B,K,m,null,y,b,R,w,S);else break;O--,L--}if(E>O){if(E<=L){const B=L+1,K=B<D?f[B].el:_;for(;E<=L;)P(null,f[E]=S?ht(f[E]):qe(f[E]),m,K,y,b,R,w,S),E++}}else if(E>L)for(;E<=O;)Ie(d[E],y,b,!0),E++;else{const B=E,K=E,re=new Map;for(E=K;E<=L;E++){const Pe=f[E]=S?ht(f[E]):qe(f[E]);Pe.key!=null&&re.set(Pe.key,E)}let te,fe=0;const Le=L-K+1;let Xt=!1,Mi=0;const Cn=new Array(Le);for(E=0;E<Le;E++)Cn[E]=0;for(E=B;E<=O;E++){const Pe=d[E];if(fe>=Le){Ie(Pe,y,b,!0);continue}let Ke;if(Pe.key!=null)Ke=re.get(Pe.key);else for(te=K;te<=L;te++)if(Cn[te-K]===0&&Pn(Pe,f[te])){Ke=te;break}Ke===void 0?Ie(Pe,y,b,!0):(Cn[Ke-K]=E+1,Ke>=Mi?Mi=Ke:Xt=!0,P(Pe,f[Ke],m,null,y,b,R,w,S),fe++)}const xi=Xt?qu(Cn):sn;for(te=xi.length-1,E=Le-1;E>=0;E--){const Pe=K+E,Ke=f[Pe],Di=Pe+1<D?f[Pe+1].el:_;Cn[E]===0?P(null,Ke,m,Di,y,b,R,w,S):Xt&&(te<0||E!==xi[te]?We(Ke,m,Di,2):te--)}}},We=(d,f,m,_,y=null)=>{const{el:b,type:R,transition:w,children:S,shapeFlag:E}=d;if(E&6){We(d.component.subTree,f,m,_);return}if(E&128){d.suspense.move(f,m,_);return}if(E&64){R.move(d,f,m,T);return}if(R===le){s(b,f,m);for(let O=0;O<S.length;O++)We(S[O],f,m,_);s(d.anchor,f,m);return}if(R===Is){V(d,f,m);return}if(_!==2&&E&1&&w)if(_===0)w.beforeEnter(b),s(b,f,m),Se(()=>w.enter(b),y);else{const{leave:O,delayLeave:L,afterLeave:B}=w,K=()=>s(b,f,m),re=()=>{O(b,()=>{K(),B&&B()})};L?L(b,K,re):re()}else s(b,f,m)},Ie=(d,f,m,_=!1,y=!1)=>{const{type:b,props:R,ref:w,children:S,dynamicChildren:E,shapeFlag:D,patchFlag:O,dirs:L}=d;if(w!=null&&xr(w,null,m,d,!0),D&256){f.ctx.deactivate(d);return}const B=D&1&&L,K=!Es(d);let re;if(K&&(re=R&&R.onVnodeBeforeUnmount)&&ze(re,f,d),D&6)ds(d.component,m,_);else{if(D&128){d.suspense.unmount(m,_);return}B&&Ot(d,null,f,"beforeUnmount"),D&64?d.type.remove(d,f,m,y,T,_):E&&(b!==le||O>0&&O&64)?ye(E,f,m,!1,!0):(b===le&&O&384||!y&&D&16)&&ye(S,f,m),_&&Jt(d)}(K&&(re=R&&R.onVnodeUnmounted)||B)&&Se(()=>{re&&ze(re,f,d),B&&Ot(d,null,f,"unmounted")},m)},Jt=d=>{const{type:f,el:m,anchor:_,transition:y}=d;if(f===le){Yt(m,_);return}if(f===Is){x(d);return}const b=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:w}=y,S=()=>R(m,b);w?w(d.el,b,S):S()}else b()},Yt=(d,f)=>{let m;for(;d!==f;)m=p(d),r(d),d=m;r(f)},ds=(d,f,m)=>{const{bum:_,scope:y,update:b,subTree:R,um:w}=d;_&&bs(_),y.stop(),b&&(b.active=!1,Ie(R,d,f,m)),w&&Se(w,f),Se(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ye=(d,f,m,_=!1,y=!1,b=0)=>{for(let R=b;R<d.length;R++)Ie(d[R],f,m,_,y)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),A=(d,f,m)=>{d==null?f._vnode&&Ie(f._vnode,null,null,!0):P(f._vnode||null,d,f,null,null,null,m),Wi(),Ma(),f._vnode=d},T={p:P,um:Ie,m:We,r:Jt,mt:At,mc:z,pc:Q,pbc:ce,n:v,o:t};let N,Z;return e&&([N,Z]=e(T)),{render:A,hydrate:N,createApp:$u(A,N)}}function kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ya(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ht(r[i]),a.el=o.el),n||Ya(o,a)),a.type===Zs&&(a.el=o.el)}}function qu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Gu=t=>t.__isTeleport,le=Symbol.for("v-fgt"),Zs=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),Is=Symbol.for("v-stc"),Ln=[];let $e=null;function j(t=!1){Ln.push($e=t?null:[])}function Ju(){Ln.pop(),$e=Ln[Ln.length-1]||null}let qn=1;function to(t){qn+=t}function Xa(t){return t.dynamicChildren=qn>0?$e||sn:null,Ju(),qn>0&&$e&&$e.push(t),t}function ie(t,e,n,s,r,i){return Xa(C(t,e,n,s,r,i,!0))}function Te(t,e,n,s,r){return Xa(G(t,e,n,s,r,!0))}function Dr(t){return t?t.__v_isVNode===!0:!1}function Pn(t,e){return t.type===e.type&&t.key===e.key}const er="__vInternal",Qa=({key:t})=>t??null,Ss=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pe(t)||ue(t)||H(t)?{i:ke,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,s=0,r=null,i=t===le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qa(e),ref:e&&Ss(e),scopeId:Ys,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ke};return a?(hi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),qn>0&&!o&&$e&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$e.push(c),c}const G=Yu;function Yu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Au)&&(t=Ht),Dr(t)){const a=fn(t,e,!0);return n&&hi(a,n),qn>0&&!i&&$e&&(a.shapeFlag&6?$e[$e.indexOf(t)]=a:$e.push(a)),a.patchFlag|=-2,a}if(ad(t)&&(t=t.__vccOpts),e){e=Xu(e);let{class:a,style:c}=e;a&&!pe(a)&&(e.class=ti(a)),ae(c)&&(Ra(c)&&!$(c)&&(c=_e({},c)),e.style=ei(c))}const o=pe(t)?1:mu(t)?128:Gu(t)?64:ae(t)?4:H(t)?2:0;return C(t,e,n,s,r,o,i,!0)}function Xu(t){return t?Ra(t)||er in t?_e({},t):t:null}function fn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Qu(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qa(a),ref:e&&e.ref?n&&r?$(r)?r.concat(Ss(e)):[r,Ss(e)]:Ss(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fn(t.ssContent),ssFallback:t.ssFallback&&fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function De(t=" ",e=0){return G(Zs,null,t,e)}function Za(t,e){const n=G(Is,null,t);return n.staticCount=e,n}function Ut(t="",e=!1){return e?(j(),Te(Ht,null,t)):G(Ht,null,t)}function qe(t){return t==null||typeof t=="boolean"?G(Ht):$(t)?G(le,null,t.slice()):typeof t=="object"?ht(t):G(Zs,null,String(t))}function ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fn(t)}function hi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(er in e)?e._ctx=ke:r===3&&ke&&(ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:ke},n=32):(e=String(e),s&64?(n=16,e=[De(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ti([e.class,s.class]));else if(r==="style")e.style=ei([e.style,s.style]);else if(js(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function ze(t,e,n,s=null){Be(t,e,7,[n,s])}const Zu=Wa();let ed=0;function td(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Zu,i={uid:ed++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new da(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:za(s,r),emitsOptions:Da(s,r),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uu.bind(null,i),t.ce&&t.ce(i),i}let me=null,pi,Qt,no="__VUE_INSTANCE_SETTERS__";(Qt=Tr()[no])||(Qt=Tr()[no]=[]),Qt.push(t=>me=t),pi=t=>{Qt.length>1?Qt.forEach(e=>e(t)):Qt[0](t)};const hn=t=>{pi(t),t.scope.on()},$t=()=>{me&&me.scope.off(),pi(null)};function ec(t){return t.vnode.shapeFlag&4}let Gn=!1;function nd(t,e=!1){Gn=e;const{props:n,children:s}=t.vnode,r=ec(t);Bu(t,n,r,e),Vu(t,s);const i=r?sd(t,e):void 0;return Gn=!1,i}function sd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qs(new Proxy(t.ctx,ku));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?id(t):null;hn(t),yn();const i=wt(s,t,0,[t.props,r]);if(bn(),$t(),oa(i)){if(i.then($t,$t),e)return i.then(o=>{so(t,o,e)}).catch(o=>{Gs(o,t,0)});t.asyncDep=i}else so(t,i,e)}else tc(t,e)}function so(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Oa(e)),tc(t,n)}let ro;function tc(t,e,n){const s=t.type;if(!t.render){if(!e&&ro&&!s.render){const r=s.template||di(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=_e(_e({isCustomElement:i,delimiters:a},o),c);s.render=ro(r,l)}}t.render=s.render||Fe}{hn(t),yn();try{Nu(t)}finally{bn(),$t()}}}function rd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Re(t,"get","$attrs"),e[n]}}))}function id(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rd(t)},slots:t.slots,emit:t.emit,expose:e}}function tr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Oa(qs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Dn)return Dn[n](t)},has(e,n){return n in e||n in Dn}}))}function od(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function ad(t){return H(t)&&"__vccOpts"in t}const xe=(t,e)=>ru(t,e,Gn);function nc(t,e,n){const s=arguments.length;return s===2?ae(e)&&!$(e)?Dr(e)?G(t,null,[e]):G(t,e):G(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Dr(n)&&(n=[n]),G(t,e,n))}const cd=Symbol.for("v-scx"),ld=()=>He(cd),ud="3.3.6",dd="http://www.w3.org/2000/svg",xt=typeof document<"u"?document:null,io=xt&&xt.createElement("template"),fd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?xt.createElementNS(dd,t):xt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{io.innerHTML=s?`<svg>${t}</svg>`:t;const a=io.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hd=Symbol("_vtc");function pd(t,e,n){const s=t[hd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const md=Symbol("_vod");function gd(t,e,n){const s=t.style,r=pe(n);if(n&&!r){if(e&&!pe(e))for(const i in e)n[i]==null&&Lr(s,i,"");for(const i in n)Lr(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),md in t&&(s.display=i)}}const oo=/\s*!important$/;function Lr(t,e,n){if($(n))n.forEach(s=>Lr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_d(t,e);oo.test(n)?t.setProperty(vn(s),n.replace(oo,""),"important"):t[s]=n}}const ao=["Webkit","Moz","ms"],dr={};function _d(t,e){const n=dr[e];if(n)return n;let s=Qe(e);if(s!=="filter"&&s in t)return dr[e]=s;s=Ks(s);for(let r=0;r<ao.length;r++){const i=ao[r]+s;if(i in t)return dr[e]=i}return e}const co="http://www.w3.org/1999/xlink";function vd(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(co,e.slice(6,e.length)):t.setAttributeNS(co,e,n);else{const i=Cl(e);n==null||i&&!la(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function yd(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=la(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function en(t,e,n,s){t.addEventListener(e,n,s)}function bd(t,e,n,s){t.removeEventListener(e,n,s)}const lo=Symbol("_vei");function Ed(t,e,n,s,r=null){const i=t[lo]||(t[lo]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=wd(e);if(s){const l=i[e]=Td(s,r);en(t,a,l,c)}else o&&(bd(t,a,o,c),i[e]=void 0)}}const uo=/(?:Once|Passive|Capture)$/;function wd(t){let e;if(uo.test(t)){e={};let s;for(;s=t.match(uo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vn(t.slice(2)),e]}let fr=0;const Id=Promise.resolve(),Sd=()=>fr||(Id.then(()=>fr=0),fr=Date.now());function Td(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Be(Rd(s,n.value),e,5,[s])};return n.value=t,n.attached=Sd(),n}function Rd(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const fo=/^on[a-z]/,Cd=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?pd(t,s,r):e==="style"?gd(t,n,s):js(e)?Yr(e)||Ed(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pd(t,e,s,r))?yd(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),vd(t,e,s,r))};function Pd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&fo.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fo.test(e)&&pe(n)?!1:e in t}const ho=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>bs(e,n):e};function Ad(t){t.target.composing=!0}function po(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hr=Symbol("_assign"),Jn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[hr]=ho(r);const i=s||r.props&&r.props.type==="number";en(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Sr(a)),t[hr](a)}),n&&en(t,"change",()=>{t.value=t.value.trim()}),e||(en(t,"compositionstart",Ad),en(t,"compositionend",po),en(t,"change",po))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[hr]=ho(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Sr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Od=["ctrl","shift","alt","meta"],kd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Od.some(n=>t[`${n}Key`]&&!e.includes(n))},mi=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=kd[e[r]];if(i&&i(n,e))return}return t(n,...s)},Nd=_e({patchProp:Cd},fd);let mo;function Md(){return mo||(mo=Ku(Nd))}const xd=(...t)=>{const e=Md().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Dd(s);if(!r)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Dd(t){return pe(t)?document.querySelector(t):t}var Ld=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let sc;const nr=t=>sc=t,rc=Symbol();function Ur(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Un;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Un||(Un={}));function Ud(){const t=fa(!0),e=t.run(()=>Oe({}));let n=[],s=[];const r=qs({install(i){nr(r),r._a=i,i.provide(rc,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Ld?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const ic=()=>{};function go(t,e,n,s=ic){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&ha()&&Al(r),r}function Zt(t,...e){t.slice().forEach(n=>{n(...e)})}const $d=t=>t();function $r(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Ur(r)&&Ur(s)&&t.hasOwnProperty(n)&&!ue(s)&&!Et(s)?t[n]=$r(r,s):t[n]=s}return t}const Fd=Symbol();function Bd(t){return!Ur(t)||!t.hasOwnProperty(Fd)}const{assign:ft}=Object;function Hd(t){return!!(ue(t)&&t.effect)}function jd(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=eu(n.state.value[t]);return ft(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=qs(xe(()=>{nr(n);const g=n._s.get(t);return o[p].call(g,g)})),h),{}))}return c=oc(t,l,e,n,s,!0),c}function oc(t,e,n={},s,r,i){let o;const a=ft({actions:{}},n),c={deep:!0};let l,u,h=[],p=[],g;const I=s.state.value[t];!i&&!I&&(s.state.value[t]={}),Oe({});let P;function U(z){let W;l=u=!1,typeof z=="function"?(z(s.state.value[t]),W={type:Un.patchFunction,storeId:t,events:g}):($r(s.state.value[t],z),W={type:Un.patchObject,payload:z,storeId:t,events:g});const ce=P=Symbol();li().then(()=>{P===ce&&(l=!0)}),u=!0,Zt(h,W,s.state.value[t])}const k=i?function(){const{state:W}=n,ce=W?W():{};this.$patch(ve=>{ft(ve,ce)})}:ic;function M(){o.stop(),h=[],p=[],s._s.delete(t)}function V(z,W){return function(){nr(s);const ce=Array.from(arguments),ve=[],Ce=[];function Ne(Y){ve.push(Y)}function At(Y){Ce.push(Y)}Zt(p,{args:ce,name:z,store:X,after:Ne,onError:At});let Me;try{Me=W.apply(this&&this.$id===t?this:X,ce)}catch(Y){throw Zt(Ce,Y),Y}return Me instanceof Promise?Me.then(Y=>(Zt(ve,Y),Y)).catch(Y=>(Zt(Ce,Y),Promise.reject(Y))):(Zt(ve,Me),Me)}}const x={_p:s,$id:t,$onAction:go.bind(null,p),$patch:U,$reset:k,$subscribe(z,W={}){const ce=go(h,z,W.detached,()=>ve()),ve=o.run(()=>an(()=>s.state.value[t],Ce=>{(W.flush==="sync"?u:l)&&z({storeId:t,type:Un.direct,events:g},Ce)},ft({},c,W)));return ce},$dispose:M},X=ns(x);s._s.set(t,X);const he=(s._a&&s._a.runWithContext||$d)(()=>s._e.run(()=>(o=fa()).run(e)));for(const z in he){const W=he[z];if(ue(W)&&!Hd(W)||Et(W))i||(I&&Bd(W)&&(ue(W)?W.value=I[z]:$r(W,I[z])),s.state.value[t][z]=W);else if(typeof W=="function"){const ce=V(z,W);he[z]=ce,a.actions[z]=W}}return ft(X,he),ft(J(X),he),Object.defineProperty(X,"$state",{get:()=>s.state.value[t],set:z=>{U(W=>{ft(W,z)})}}),s._p.forEach(z=>{ft(X,o.run(()=>z({store:X,app:s._a,pinia:s,options:a})))}),I&&i&&n.hydrate&&n.hydrate(X.$state,I),l=!0,u=!0,X}function ac(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Fu();return a=a||(l?He(rc,null):null),a&&nr(a),a=sc,a._s.has(s)||(i?oc(s,e,r,a):jd(s,r,a)),a._s.get(s)}return o.$id=s,o}const at=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Vd={};function Wd(t,e){const n=Kt("router-view");return j(),Te(n)}const Kd=at(Vd,[["render",Wd]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof window<"u";function zd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function pr(t,e){const n={};for(const s in e){const r=e[s];n[s]=je(r)?r.map(t):t(r)}return n}const $n=()=>{},je=Array.isArray,qd=/\/$/,Gd=t=>t.replace(qd,"");function mr(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Qd(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Jd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _o(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Yd(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&pn(e.matched[s],n.matched[r])&&cc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Xd(t[n],e[n]))return!1;return!0}function Xd(t,e){return je(t)?vo(t,e):je(e)?vo(e,t):t===e}function vo(t,e){return je(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Qd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Yn;(function(t){t.pop="pop",t.push="push"})(Yn||(Yn={}));var Fn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fn||(Fn={}));function Zd(t){if(!t)if(tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gd(t)}const ef=/^[^#]+#/;function tf(t,e){return t.replace(ef,"#")+e}function nf(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function sf(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=nf(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function yo(t,e){return(history.state?history.state.position-e:-1)+t}const Fr=new Map;function rf(t,e){Fr.set(t,e)}function of(t){const e=Fr.get(t);return Fr.delete(t),e}let af=()=>location.protocol+"//"+location.host;function lc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),_o(c,"")}return _o(n,t)+s+r}function cf(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const g=lc(t,location),I=n.value,P=e.value;let U=0;if(p){if(n.value=g,e.value=p,o&&o===I){o=null;return}U=P?p.position-P.position:0}else s(g);r.forEach(k=>{k(n.value,I,{delta:U,type:Yn.pop,direction:U?U>0?Fn.forward:Fn.back:Fn.unknown})})};function c(){o=n.value}function l(p){r.push(p);const g=()=>{const I=r.indexOf(p);I>-1&&r.splice(I,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:sr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function bo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?sr():null}}function lf(t){const{history:e,location:n}=window,s={value:lc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:af()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=ee({},e.state,bo(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ee({},r.value,e.state,{forward:c,scroll:sr()});i(u.current,u,!0);const h=ee({},bo(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function uf(t){t=Zd(t);const e=lf(t),n=cf(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ee({location:"",base:t,go:s,createHref:tf.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function df(t){return typeof t=="string"||t&&typeof t=="object"}function uc(t){return typeof t=="string"||typeof t=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dc=Symbol("");var Eo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Eo||(Eo={}));function mn(t,e){return ee(new Error,{type:t,[dc]:!0},e)}function et(t,e){return t instanceof Error&&dc in t&&(e==null||!!(t.type&e))}const wo="[^/]+?",ff={sensitive:!1,strict:!1,start:!0,end:!0},hf=/[.+*?^${}()[\]/\\]/g;function pf(t,e){const n=ee({},ff,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const p=l[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(hf,"\\$&"),g+=40;else if(p.type===1){const{value:I,repeatable:P,optional:U,regexp:k}=p;i.push({name:I,repeatable:P,optional:U});const M=k||wo;if(M!==wo){g+=10;try{new RegExp(`(${M})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${I}" (${M}): `+x.message)}}let V=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(V=U&&l.length<2?`(?:/${V})`:"/"+V),U&&(V+="?"),r+=V,g+=20,U&&(g+=-8),P&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",I=i[p-1];h[I.name]=g&&I.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:I,repeatable:P,optional:U}=g,k=I in l?l[I]:"";if(je(k)&&!P)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const M=je(k)?k.join("/"):k;if(!M)if(U)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${I}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function mf(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gf(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=mf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Io(s))return 1;if(Io(r))return-1}return r.length-s.length}function Io(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _f={type:0,value:""},vf=/[a-zA-Z0-9_]/;function yf(t){if(!t)return[[]];if(t==="/")return[[_f]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:vf.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function bf(t,e,n){const s=pf(yf(t.path),n),r=ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ef(t,e){const n=[],s=new Map;e=Ro({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,p){const g=!p,I=wf(u);I.aliasOf=p&&p.record;const P=Ro(e,u),U=[I];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of V)U.push(ee({},I,{components:p?p.record.components:I.components,path:x,aliasOf:p?p.record:I}))}let k,M;for(const V of U){const{path:x}=V;if(h&&x[0]!=="/"){const X=h.record.path,de=X[X.length-1]==="/"?"":"/";V.path=h.record.path+(x&&de+x)}if(k=bf(V,h,P),p?p.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),g&&u.name&&!To(k)&&o(u.name)),I.children){const X=I.children;for(let de=0;de<X.length;de++)i(X[de],k,p&&p.children[de])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return M?()=>{o(M)}:$n}function o(u){if(uc(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&gf(u,n[h])>=0&&(u.record.path!==n[h].record.path||!fc(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!To(u)&&s.set(u.record.name,u)}function l(u,h){let p,g={},I,P;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw mn(1,{location:u});P=p.record.name,g=ee(So(h.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&So(u.params,p.keys.map(M=>M.name))),I=p.stringify(g)}else if("path"in u)I=u.path,p=n.find(M=>M.re.test(I)),p&&(g=p.parse(I),P=p.record.name);else{if(p=h.name?s.get(h.name):n.find(M=>M.re.test(h.path)),!p)throw mn(1,{location:u,currentLocation:h});P=p.record.name,g=ee({},h.params,u.params),I=p.stringify(g)}const U=[];let k=p;for(;k;)U.unshift(k.record),k=k.parent;return{name:P,path:I,params:g,matched:U,meta:Sf(U)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function So(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function wf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:If(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function If(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function To(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Sf(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function Ro(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function fc(t,e){return e.children.some(n=>n===t||fc(t,n))}const hc=/#/g,Tf=/&/g,Rf=/\//g,Cf=/=/g,Pf=/\?/g,pc=/\+/g,Af=/%5B/g,Of=/%5D/g,mc=/%5E/g,kf=/%60/g,gc=/%7B/g,Nf=/%7C/g,_c=/%7D/g,Mf=/%20/g;function gi(t){return encodeURI(""+t).replace(Nf,"|").replace(Af,"[").replace(Of,"]")}function xf(t){return gi(t).replace(gc,"{").replace(_c,"}").replace(mc,"^")}function Br(t){return gi(t).replace(pc,"%2B").replace(Mf,"+").replace(hc,"%23").replace(Tf,"%26").replace(kf,"`").replace(gc,"{").replace(_c,"}").replace(mc,"^")}function Df(t){return Br(t).replace(Cf,"%3D")}function Lf(t){return gi(t).replace(hc,"%23").replace(Pf,"%3F")}function Uf(t){return t==null?"":Lf(t).replace(Rf,"%2F")}function xs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $f(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(pc," "),o=i.indexOf("="),a=xs(o<0?i:i.slice(0,o)),c=o<0?null:xs(i.slice(o+1));if(a in e){let l=e[a];je(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Co(t){let e="";for(let n in t){const s=t[n];if(n=Df(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(je(s)?s.map(i=>i&&Br(i)):[s&&Br(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ff(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=je(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Bf=Symbol(""),Po=Symbol(""),_i=Symbol(""),vi=Symbol(""),Hr=Symbol("");function An(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(mn(4,{from:n,to:e})):h instanceof Error?a(h):df(h)?a(mn(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function gr(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Hf(a)){const l=(a.__vccOpts||a)[e];l&&r.push(pt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=zd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&pt(p,n,s,i,o)()}))}}return r}function Hf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ao(t){const e=He(_i),n=He(vi),s=xe(()=>e.resolve(ge(t.to))),r=xe(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(pn.bind(null,u));if(p>-1)return p;const g=Oo(c[l-2]);return l>1&&Oo(u)===g&&h[h.length-1].path!==g?h.findIndex(pn.bind(null,c[l-2])):p}),i=xe(()=>r.value>-1&&Kf(n.params,s.value.params)),o=xe(()=>r.value>-1&&r.value===n.matched.length-1&&cc(n.params,s.value.params));function a(c={}){return Wf(c)?e[ge(t.replace)?"replace":"push"](ge(t.to)).catch($n):Promise.resolve()}return{route:s,href:xe(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const jf=$a({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ao,setup(t,{slots:e}){const n=ns(Ao(t)),{options:s}=He(_i),r=xe(()=>({[ko(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ko(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:nc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Vf=jf;function Wf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kf(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!je(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Oo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ko=(t,e,n)=>t??e??n,zf=$a({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=He(Hr),r=xe(()=>t.route||s.value),i=He(Po,0),o=xe(()=>{let l=ge(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=xe(()=>r.value.matched[o.value]);ws(Po,xe(()=>o.value+1)),ws(Bf,a),ws(Hr,r);const c=Oe();return an(()=>[c.value,a.value,t.name],([l,u,h],[p,g,I])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!pn(u,g)||!p)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return No(n.default,{Component:p,route:l});const g=h.props[u],I=g?g===!0?l.params:typeof g=="function"?g(l):g:null,U=nc(p,ee({},I,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return No(n.default,{Component:U,route:l})||U}}});function No(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qf=zf;function Gf(t){const e=Ef(t.routes,t),n=t.parseQuery||$f,s=t.stringifyQuery||Co,r=t.history,i=An(),o=An(),a=An(),c=Xl(ut);let l=ut;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pr.bind(null,v=>""+v),h=pr.bind(null,Uf),p=pr.bind(null,xs);function g(v,A){let T,N;return uc(v)?(T=e.getRecordMatcher(v),N=A):N=v,e.addRoute(N,T)}function I(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function U(v){return!!e.getRecordMatcher(v)}function k(v,A){if(A=ee({},A||c.value),typeof v=="string"){const m=mr(n,v,A.path),_=e.resolve({path:m.path},A),y=r.createHref(m.fullPath);return ee(m,_,{params:p(_.params),hash:xs(m.hash),redirectedFrom:void 0,href:y})}let T;if("path"in v)T=ee({},v,{path:mr(n,v.path,A.path).path});else{const m=ee({},v.params);for(const _ in m)m[_]==null&&delete m[_];T=ee({},v,{params:h(m)}),A.params=h(A.params)}const N=e.resolve(T,A),Z=v.hash||"";N.params=u(p(N.params));const d=Jd(s,ee({},v,{hash:xf(Z),path:N.path})),f=r.createHref(d);return ee({fullPath:d,hash:Z,query:s===Co?Ff(v.query):v.query||{}},N,{redirectedFrom:void 0,href:f})}function M(v){return typeof v=="string"?mr(n,v,c.value.path):ee({},v)}function V(v,A){if(l!==v)return mn(8,{from:A,to:v})}function x(v){return he(v)}function X(v){return x(ee(M(v),{replace:!0}))}function de(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let N=typeof T=="function"?T(v):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=M(N):{path:N},N.params={}),ee({query:v.query,hash:v.hash,params:"path"in N?{}:v.params},N)}}function he(v,A){const T=l=k(v),N=c.value,Z=v.state,d=v.force,f=v.replace===!0,m=de(T);if(m)return he(ee(M(m),{state:typeof m=="object"?ee({},Z,m.state):Z,force:d,replace:f}),A||T);const _=T;_.redirectedFrom=A;let y;return!d&&Yd(s,N,T)&&(y=mn(16,{to:_,from:N}),We(N,N,!0,!1)),(y?Promise.resolve(y):ce(_,N)).catch(b=>et(b)?et(b,2)?b:ct(b):Q(b,_,N)).then(b=>{if(b){if(et(b,2))return he(ee({replace:f},M(b.to),{state:typeof b.to=="object"?ee({},Z,b.to.state):Z,force:d}),A||_)}else b=Ce(_,N,!0,f,Z);return ve(_,N,b),b})}function z(v,A){const T=V(v,A);return T?Promise.reject(T):Promise.resolve()}function W(v){const A=Yt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function ce(v,A){let T;const[N,Z,d]=Jf(v,A);T=gr(N.reverse(),"beforeRouteLeave",v,A);for(const m of N)m.leaveGuards.forEach(_=>{T.push(pt(_,v,A))});const f=z.bind(null,v,A);return T.push(f),ye(T).then(()=>{T=[];for(const m of i.list())T.push(pt(m,v,A));return T.push(f),ye(T)}).then(()=>{T=gr(Z,"beforeRouteUpdate",v,A);for(const m of Z)m.updateGuards.forEach(_=>{T.push(pt(_,v,A))});return T.push(f),ye(T)}).then(()=>{T=[];for(const m of d)if(m.beforeEnter)if(je(m.beforeEnter))for(const _ of m.beforeEnter)T.push(pt(_,v,A));else T.push(pt(m.beforeEnter,v,A));return T.push(f),ye(T)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),T=gr(d,"beforeRouteEnter",v,A),T.push(f),ye(T))).then(()=>{T=[];for(const m of o.list())T.push(pt(m,v,A));return T.push(f),ye(T)}).catch(m=>et(m,8)?m:Promise.reject(m))}function ve(v,A,T){a.list().forEach(N=>W(()=>N(v,A,T)))}function Ce(v,A,T,N,Z){const d=V(v,A);if(d)return d;const f=A===ut,m=tn?history.state:{};T&&(N||f?r.replace(v.fullPath,ee({scroll:f&&m&&m.scroll},Z)):r.push(v.fullPath,Z)),c.value=v,We(v,A,T,f),ct()}let Ne;function At(){Ne||(Ne=r.listen((v,A,T)=>{if(!ds.listening)return;const N=k(v),Z=de(N);if(Z){he(ee(Z,{replace:!0}),N).catch($n);return}l=N;const d=c.value;tn&&rf(yo(d.fullPath,T.delta),sr()),ce(N,d).catch(f=>et(f,12)?f:et(f,2)?(he(f.to,N).then(m=>{et(m,20)&&!T.delta&&T.type===Yn.pop&&r.go(-1,!1)}).catch($n),Promise.reject()):(T.delta&&r.go(-T.delta,!1),Q(f,N,d))).then(f=>{f=f||Ce(N,d,!1),f&&(T.delta&&!et(f,8)?r.go(-T.delta,!1):T.type===Yn.pop&&et(f,20)&&r.go(-1,!1)),ve(N,d,f)}).catch($n)}))}let Me=An(),Y=An(),ne;function Q(v,A,T){ct(v);const N=Y.list();return N.length?N.forEach(Z=>Z(v,A,T)):console.error(v),Promise.reject(v)}function Ze(){return ne&&c.value!==ut?Promise.resolve():new Promise((v,A)=>{Me.add([v,A])})}function ct(v){return ne||(ne=!v,At(),Me.list().forEach(([A,T])=>v?T(v):A()),Me.reset()),v}function We(v,A,T,N){const{scrollBehavior:Z}=t;if(!tn||!Z)return Promise.resolve();const d=!T&&of(yo(v.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return li().then(()=>Z(v,A,d)).then(f=>f&&sf(f)).catch(f=>Q(f,v,A))}const Ie=v=>r.go(v);let Jt;const Yt=new Set,ds={currentRoute:c,listening:!0,addRoute:g,removeRoute:I,hasRoute:U,getRoutes:P,resolve:k,options:t,push:x,replace:X,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:Ze,install(v){const A=this;v.component("RouterLink",Vf),v.component("RouterView",qf),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(c)}),tn&&!Jt&&c.value===ut&&(Jt=!0,x(r.location).catch(Z=>{}));const T={};for(const Z in ut)Object.defineProperty(T,Z,{get:()=>c.value[Z],enumerable:!0});v.provide(_i,A),v.provide(vi,Sa(T)),v.provide(Hr,c);const N=v.unmount;Yt.add(v),v.unmount=function(){Yt.delete(v),Yt.size<1&&(l=ut,Ne&&Ne(),Ne=null,c.value=ut,Jt=!1,ne=!1),N()}}};function ye(v){return v.reduce((A,T)=>A.then(()=>W(T)),Promise.resolve())}return ds}function Jf(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>pn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>pn(l,c))||r.push(c))}return[n,s,r]}function Yf(){return He(vi)}const yi="/movie/svg/logo.svg",Xf="/movie/svg/film.svg",Qf="/movie/svg/heart.svg",Zf="/movie/svg/trending-up.svg",eh="/movie/svg/calendar.svg",th="/movie/svg/users.svg",nh="/movie/svg/message-circle.svg",sh="/movie/svg/sliders.svg",rh="/movie/svg/log-out.svg";const ss=t=>(En("data-v-035a5e97"),t=t(),wn(),t),ih={class:"container"},oh={class:"sidebar"},ah=ss(()=>C("a",{href:"/"},[C("img",{src:yi,alt:"logo",class:"sidebar-logo"})],-1)),ch={class:"sidebar-navigation"},lh=ss(()=>C("a",{href:"/",class:"sidebar-navigation__item"},[C("img",{src:Xf,alt:"film"}),De("Home")],-1)),uh=ss(()=>C("img",{src:Qf,alt:"heart"},null,-1)),dh=ss(()=>C("img",{src:Zf,alt:"trending"},null,-1)),fh=ss(()=>C("img",{src:eh,alt:"calendar"},null,-1)),hh=Za('<div class="sidebar-navigation" data-v-035a5e97><a href="/" class="sidebar-navigation__item" data-v-035a5e97><img src="'+th+'" alt="community" data-v-035a5e97>Community</a><a href="/" class="sidebar-navigation__item" data-v-035a5e97><img src="'+nh+'" alt="message" data-v-035a5e97>Social</a></div><div class="sidebar-navigation" data-v-035a5e97><a href="/" class="sidebar-navigation__item" data-v-035a5e97><img src="'+sh+'" alt="settings" data-v-035a5e97>Settings</a><a href="/login" class="sidebar-navigation__item" data-v-035a5e97><img src="'+rh+'" alt="logout" data-v-035a5e97>Logout</a></div>',2),ph={__name:"SideBar",setup(t){return(e,n)=>{const s=Kt("router-link");return j(),ie("div",ih,[C("div",oh,[ah,C("div",ch,[lh,G(s,{to:"/favourites",class:"sidebar-navigation__item"},{default:Je(()=>[uh,De("Favourites")]),_:1}),G(s,{to:"/trending",class:"sidebar-navigation__item"},{default:Je(()=>[dh,De("Trending")]),_:1}),G(s,{to:"/upcoming",class:"sidebar-navigation__item"},{default:Je(()=>[fh,De("Coming soon")]),_:1})]),hh])])}}},In=at(ph,[["__scopeId","data-v-035a5e97"]]),mh="/movie/svg/search.svg",gh="/movie/svg/bell.svg",_h="/movie/svg/user-img.svg";const vh=t=>(En("data-v-6d16d85f"),t=t(),wn(),t),yh={class:"header",id:"header"},bh={class:"header-top"},Eh={class:"header-menu"},wh=["href"],Ih={class:"header-menu__right"},Sh=vh(()=>C("img",{src:mh,alt:"search"},null,-1)),Th=Za('<a href="/" data-v-6d16d85f><img src="'+gh+'" alt="bell" data-v-6d16d85f></a><a href="/" data-v-6d16d85f><img src="'+_h+'" alt="user" data-v-6d16d85f></a><a href="/" class="header-menu__item" data-v-6d16d85f>Anna</a>',3),Rh={__name:"Header",setup(t){const e=[{name:"Movies",path:"/movies"},{name:"Series",path:"/series"},{name:"Documentaries",path:"/documentaries"}];return(n,s)=>{const r=Kt("router-link");return j(),ie("header",yh,[C("div",bh,[C("div",Eh,[(j(),ie(le,null,Rt(e,(i,o)=>C("a",{href:i.path,key:o,class:"header-menu__item"},mt(i.name),9,wh)),64))]),C("div",Ih,[G(r,{to:"/search"},{default:Je(()=>[Sh]),_:1}),Th])])])}}},Sn=at(Rh,[["__scopeId","data-v-6d16d85f"]]);const Ch={},bi=t=>(En("data-v-80115769"),t=t(),wn(),t),Ph={class:"about-movie"},Ah=bi(()=>C("h1",{class:"about-movie__title"},"Insider",-1)),Oh=bi(()=>C("span",{class:"about-movie__description"},"2022 | Comedy horror | 1 Season",-1)),kh=bi(()=>C("div",{class:"about-movie__buttons"},[C("button",{class:"about-movie__button"},"Watch now")],-1)),Nh=[Ah,Oh,kh];function Mh(t,e){return j(),ie("div",Ph,Nh)}const xh=at(Ch,[["render",Mh],["__scopeId","data-v-80115769"]]),vc="/movie/svg/btn-heart.svg",yc="/movie/svg/btn-heart-full.svg",Dh="https://api.themoviedb.org/3/movie/popular?api_key=87517495a6a57f4bb982e8eda1cea504",Lh="https://api.themoviedb.org/3/movie/upcoming?api_key=87517495a6a57f4bb982e8eda1cea504",Uh="https://api.themoviedb.org/3/search/movie?api_key=87517495a6a57f4bb982e8eda1cea504&query=",Tn=ac("movieStore",()=>{const t=Oe([]),e=Oe([]),n=Oe([]),s=Oe([]),r=localStorage.getItem("movies");r&&(n.value=JSON.parse(r)._value);const i=(p,g)=>p.map(I=>(I.isLiked=g.includes(I.id),I)),o=async()=>{const g=await(await fetch(Dh)).json(),I=n.value.map(P=>P.id);t.value=i(g.results,I)},a=async()=>{const g=await(await fetch(Lh)).json(),I=n.value.map(P=>P.id);e.value=i(g.results,I)},c=async p=>{const I=await(await fetch(`${Uh}${p}`)).json(),P=n.value.map(U=>U.id);s.value=i(I.results,P)},l=async p=>await(await fetch(`https://api.themoviedb.org/3/movie/${p}?api_key=87517495a6a57f4bb982e8eda1cea504`)).json(),u=p=>{n.value.push(p),p.isLiked=!0},h=p=>{p.isLiked=!1,n.value=n.value.filter(g=>g.isLiked)};return an(()=>n,p=>{localStorage.setItem("movies",JSON.stringify(p))},{deep:!0}),{movies:t,upcomingMovies:e,favouriteMovies:n,searchMovies:s,getMovies:o,getUpcomingMovies:a,addToFavourites:u,removeFromFavourites:h,getSearchMovies:c,getMovieById:l}});const bc=t=>(En("data-v-9bf99452"),t=t(),wn(),t),$h={class:"movie"},Fh=["src","alt"],Bh=bc(()=>C("img",{src:vc,alt:"btn-heart"},null,-1)),Hh=[Bh],jh=bc(()=>C("img",{src:yc,alt:"btn-heart-full"},null,-1)),Vh=[jh],Wh={class:"movie-info"},Kh={class:"movie-name"},zh={class:"movie-release"},qh={__name:"Movie",props:{movie:{type:Object,required:!0,default:()=>{}}},setup(t){const e=Tn();return(n,s)=>{const r=Kt("router-link");return j(),ie("div",$h,[C("img",{src:`https://image.tmdb.org/t/p/w300_and_h450_bestv2${t.movie.poster_path}`,alt:t.movie.original_title,class:"movie-img"},null,8,Fh),t.movie.isLiked?(j(),ie("button",{key:1,class:"movie-btn",onClick:s[1]||(s[1]=i=>ge(e).removeFromFavourites(t.movie))},Vh)):(j(),ie("button",{key:0,class:"movie-btn",onClick:s[0]||(s[0]=i=>ge(e).addToFavourites(t.movie))},Hh)),C("div",Wh,[C("h3",Kh,mt(t.movie.original_title),1),C("span",zh,mt(t.movie.release_date),1),G(r,{to:"/movie/"+t.movie.id,class:"movie-link"},{default:Je(()=>[De("View more info")]),_:1},8,["to"])])])}}},gn=at(qh,[["__scopeId","data-v-9bf99452"]]),Gh={class:"movies",isHome:!1},Jh=C("h2",{class:"movies__title"},"Trending",-1),Yh={class:"movies__items"},Ec={__name:"TrendingMovies",props:{isHome:{type:Boolean,default:!1,required:!0}},setup(t){const e=Tn();return Qs(()=>e.getMovies()),(n,s)=>(j(),ie(le,null,[t.isHome?Ut("",!0):(j(),Te(In,{key:0})),t.isHome?Ut("",!0):(j(),Te(Sn,{key:1})),C("div",Gh,[Jh,C("div",Yh,[t.isHome?(j(!0),ie(le,{key:0},Rt(ge(e).movies.slice(0,4),r=>(j(),Te(gn,{key:r.id,movie:r},null,8,["movie"]))),128)):(j(!0),ie(le,{key:1},Rt(ge(e).movies,r=>(j(),Te(gn,{movie:r},null,8,["movie"]))),256))])])],64))}},Xh={class:"movies",isHome:!1},Qh=C("h2",{class:"movies__title"},"Comming soon",-1),Zh={class:"movies__items"},wc={__name:"UpcomingMovies",props:{isHome:{type:Boolean,default:!1,required:!0}},setup(t){const e=Tn();return Qs(()=>e.getUpcomingMovies()),(n,s)=>(j(),ie(le,null,[t.isHome?Ut("",!0):(j(),Te(In,{key:0})),t.isHome?Ut("",!0):(j(),Te(Sn,{key:1})),C("div",Xh,[Qh,C("div",Zh,[t.isHome?(j(!0),ie(le,{key:0},Rt(ge(e).upcomingMovies.slice(0,4),r=>(j(),Te(gn,{key:r.id,movie:r},null,8,["movie"]))),128)):(j(!0),ie(le,{key:1},Rt(ge(e).upcomingMovies,r=>(j(),Te(gn,{movie:r},null,8,["movie"]))),256))])])],64))}};const ep=t=>(En("data-v-2487d58e"),t=t(),wn(),t),tp={class:"movies"},np=ep(()=>C("h2",{class:"movies__title"},"My favourites",-1)),sp={key:0,class:"movies__text"},rp={class:"movies__items"},ip={__name:"Favourites",props:{isHome:{type:Boolean,default:!1,required:!0}},setup(t){const e=Tn();return(n,s)=>(j(),ie(le,null,[t.isHome?Ut("",!0):(j(),Te(In,{key:0})),t.isHome?Ut("",!0):(j(),Te(Sn,{key:1})),C("div",tp,[np,ge(e).favouriteMovies.length==0?(j(),ie("span",sp," This list is empty, add the movie to your favorites ")):Ut("",!0),C("div",rp,[(j(!0),ie(le,null,Rt(ge(e).favouriteMovies,r=>(j(),Te(gn,{key:r.id,movie:r},null,8,["movie"]))),128))])])],64))}},Ic=at(ip,[["__scopeId","data-v-2487d58e"]]);const op={__name:"Home",setup(t){return(e,n)=>{const s=Kt("router-link");return j(),ie(le,null,[G(In),G(Sn),G(xh),G(Ec,{"is-home":!0}),G(s,{to:"/trending",class:"home-link"},{default:Je(()=>[De("See more")]),_:1}),G(wc,{"is-home":!0}),G(s,{to:"/upcoming",class:"home-link"},{default:Je(()=>[De("See more")]),_:1}),G(Ic,{"is-home":!0})],64)}}},ap=at(op,[["__scopeId","data-v-e69ca940"]]);const cp={class:"search"},lp={class:"movies__items"},up={__name:"SearchMovies",setup(t){const e=Tn(),n=Oe("");return(s,r)=>(j(),ie(le,null,[G(In),G(Sn),C("div",cp,[C("form",{onSubmit:r[2]||(r[2]=mi(()=>{},["prevent"]))},[Kn(C("input",{type:"text",class:"search-input",placeholder:"Type a movie","onUpdate:modelValue":r[0]||(r[0]=i=>n.value=i),onInput:r[1]||(r[1]=i=>ge(e).getSearchMovies(n.value))},null,544),[[Jn,n.value]])],32),C("div",lp,[(j(!0),ie(le,null,Rt(ge(e).searchMovies,i=>(j(),Te(gn,{key:i.id,movie:i},null,8,["movie"]))),128))])])],64))}},dp=at(up,[["__scopeId","data-v-72513f96"]]),fp="/movie/svg/vote.svg";const rr=t=>(En("data-v-67624129"),t=t(),wn(),t),hp={class:"movie-about"},pp=["src","alt"],mp={class:"movie-about__info"},gp={class:"movie-about__name"},_p={class:"movie-about__description"},vp={class:"movie-about__release"},yp={class:"movie-about__genres"},bp={class:"movie-about__rate"},Ep=rr(()=>C("img",{src:fp,alt:"vote"},null,-1)),wp={class:"movie-about__vote"},Ip={class:"movie-about__overview"},Sp={class:"movie-about__buttons"},Tp=rr(()=>C("button",{class:"movie-about__button"},"Watch now",-1)),Rp=rr(()=>C("img",{src:vc,alt:"btn-heart"},null,-1)),Cp=[Rp],Pp=rr(()=>C("img",{src:yc,alt:"btn-heart-full"},null,-1)),Ap=[Pp],Op={__name:"MovieAbout",setup(t){const e=Yf(),n=Oe(""),s=Tn(),r=Oe({});return Qs(async()=>{n.value=e.params.id,r.value=await s.getMovieById(n.value)}),(i,o)=>(j(),ie(le,null,[G(In),G(Sn),C("div",hp,[C("img",{src:`https://image.tmdb.org/t/p/w500/${r.value.poster_path}`,alt:r.value.original_title,class:"movie-about__img"},null,8,pp),C("div",mp,[C("h3",gp,mt(r.value.original_title),1),C("div",_p,[C("span",vp,mt(r.value.release_date),1),C("div",null,[(j(!0),ie(le,null,Rt(r.value.genres,a=>(j(),ie("span",yp,mt(a.name),1))),256))]),C("div",bp,[Ep,C("span",wp,mt(Math.round(r.value.vote_average))+"/10",1)])]),C("div",Ip,[C("span",null,mt(r.value.overview),1)]),C("div",Sp,[Tp,r.value.isLiked?(j(),ie("button",{key:1,class:"movie-about__btn",onClick:o[1]||(o[1]=a=>ge(s).removeFromFavourites(r.value))},Ap)):(j(),ie("button",{key:0,class:"movie-about__btn",onClick:o[0]||(o[0]=a=>ge(s).addToFavourites(r.value))},Cp))])])])],64))}},kp=at(Op,[["__scopeId","data-v-67624129"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Np=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[h],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Np(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new Mp;const p=i<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const I=l<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xp=function(t){const e=Sc(t);return Tc.encodeByteArray(e,!0)},Rc=function(t){return xp(t).replace(/\./g,"")},Cc=function(t){try{return Tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=()=>Dp().__FIREBASE_DEFAULTS__,Up=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$p=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cc(t[1]);return e&&JSON.parse(e)},Ei=()=>{try{return Lp()||Up()||$p()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fp=t=>{var e,n;return(n=(e=Ei())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pc=()=>{var t;return(t=Ei())===null||t===void 0?void 0:t.config},Ac=t=>{var e;return(e=Ei())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function jp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wp(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kp(){try{return typeof indexedDB=="object"}catch{return!1}}function zp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="FirebaseError";class Ct extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qp,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Gp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ct(r,a,s)}}function Gp(t,e){return t.replace(Jp,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Jp=/\{\$([^}]+)}/g;function Yp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ds(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Mo(i)&&Mo(o)){if(!Ds(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Mo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xp(t,e){const n=new Qp(t,e);return n.subscribe.bind(n)}class Qp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Zp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=_r),r.error===void 0&&(r.error=_r),r.complete===void 0&&(r.complete=_r);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _r(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bp;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nm(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tm(t){return t===Nt?void 0:t}function nm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new em(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const rm={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},im=se.INFO,om={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},am=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=om[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oc{constructor(e){this.name=e,this._logLevel=im,this._logHandler=am,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const cm=(t,e)=>e.some(n=>t instanceof n);let xo,Do;function lm(){return xo||(xo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function um(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kc=new WeakMap,jr=new WeakMap,Nc=new WeakMap,vr=new WeakMap,wi=new WeakMap;function dm(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kc.set(n,t)}).catch(()=>{}),wi.set(e,t),e}function fm(t){if(jr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hm(t){Vr=t(Vr)}function pm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(yr(this),e,...n);return Nc.set(s,e.sort?e.sort():[e]),It(s)}:um().includes(t)?function(...e){return t.apply(yr(this),e),It(kc.get(this))}:function(...e){return It(t.apply(yr(this),e))}}function mm(t){return typeof t=="function"?pm(t):(t instanceof IDBTransaction&&fm(t),cm(t,lm())?new Proxy(t,Vr):t)}function It(t){if(t instanceof IDBRequest)return dm(t);if(vr.has(t))return vr.get(t);const e=mm(t);return e!==t&&(vr.set(t,e),wi.set(e,t)),e}const yr=t=>wi.get(t);function gm(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=It(o);return s&&o.addEventListener("upgradeneeded",c=>{s(It(o.result),c.oldVersion,c.newVersion,It(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const _m=["get","getKey","getAll","getAllKeys","count"],vm=["put","add","delete","clear"],br=new Map;function Lo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=vm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_m.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return br.set(e,i),i}hm(t=>({...t,get:(e,n,s)=>Lo(e,n)||t.get(e,n,s),has:(e,n)=>!!Lo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",Uo="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Oc("@firebase/app"),Em="@firebase/app-compat",wm="@firebase/analytics-compat",Im="@firebase/analytics",Sm="@firebase/app-check-compat",Tm="@firebase/app-check",Rm="@firebase/auth",Cm="@firebase/auth-compat",Pm="@firebase/database",Am="@firebase/database-compat",Om="@firebase/functions",km="@firebase/functions-compat",Nm="@firebase/installations",Mm="@firebase/installations-compat",xm="@firebase/messaging",Dm="@firebase/messaging-compat",Lm="@firebase/performance",Um="@firebase/performance-compat",$m="@firebase/remote-config",Fm="@firebase/remote-config-compat",Bm="@firebase/storage",Hm="@firebase/storage-compat",jm="@firebase/firestore",Vm="@firebase/firestore-compat",Wm="firebase",Km="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]",zm={[Wr]:"fire-core",[Em]:"fire-core-compat",[Im]:"fire-analytics",[wm]:"fire-analytics-compat",[Tm]:"fire-app-check",[Sm]:"fire-app-check-compat",[Rm]:"fire-auth",[Cm]:"fire-auth-compat",[Pm]:"fire-rtdb",[Am]:"fire-rtdb-compat",[Om]:"fire-fn",[km]:"fire-fn-compat",[Nm]:"fire-iid",[Mm]:"fire-iid-compat",[xm]:"fire-fcm",[Dm]:"fire-fcm-compat",[Lm]:"fire-perf",[Um]:"fire-perf-compat",[$m]:"fire-rc",[Fm]:"fire-rc-compat",[Bm]:"fire-gcs",[Hm]:"fire-gcs-compat",[jm]:"fire-fst",[Vm]:"fire-fst-compat","fire-js":"fire-js",[Wm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Map,zr=new Map;function qm(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(zr.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,t);for(const n of Ls.values())qm(n,t);return!0}function Mc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new rs("app","Firebase",Gm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=Km;function xc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw St.create("bad-app-name",{appName:String(r)});if(n||(n=Pc()),!n)throw St.create("no-options");const i=Ls.get(r);if(i){if(Ds(n,i.options)&&Ds(s,i.config))return i;throw St.create("duplicate-app",{appName:r})}const o=new sm(r);for(const c of zr.values())o.addComponent(c);const a=new Jm(n,s,o);return Ls.set(r,a),a}function Ym(t=Kr){const e=Ls.get(t);if(!e&&t===Kr&&Pc())return xc();if(!e)throw St.create("no-app",{appName:t});return e}function cn(t,e,n){var s;let r=(s=zm[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(a.join(" "));return}Xn(new _n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="firebase-heartbeat-database",Qm=1,Qn="firebase-heartbeat-store";let Er=null;function Dc(){return Er||(Er=gm(Xm,Qm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qn)}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),Er}async function Zm(t){try{return await(await Dc()).transaction(Qn).objectStore(Qn).get(Lc(t))}catch(e){if(e instanceof Ct)jt.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function $o(t,e){try{const s=(await Dc()).transaction(Qn,"readwrite");await s.objectStore(Qn).put(e,Lc(t)),await s.done}catch(n){if(n instanceof Ct)jt.warn(n.message);else{const s=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(s.message)}}}function Lc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=1024,tg=30*24*60*60*1e3;class ng{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=tg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fo(),{heartbeatsToSend:n,unsentEntries:s}=sg(this._heartbeatsCache.heartbeats),r=Rc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fo(){return new Date().toISOString().substring(0,10)}function sg(t,e=eg){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Bo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Bo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kp()?zp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bo(t){return Rc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t){Xn(new _n("platform-logger",e=>new ym(e),"PRIVATE")),Xn(new _n("heartbeat",e=>new ng(e),"PRIVATE")),cn(Wr,Uo,t),cn(Wr,Uo,"esm2017"),cn("fire-js","")}ig("");var og="firebase",ag="10.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(og,ag,"app");function Ii(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Uc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cg=Uc,$c=new rs("auth","Firebase",Uc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Oc("@firebase/auth");function lg(t,...e){Us.logLevel<=se.WARN&&Us.warn(`Auth (${os}): ${t}`,...e)}function Ts(t,...e){Us.logLevel<=se.ERROR&&Us.error(`Auth (${os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw Si(t,...e)}function Ye(t,...e){return Si(t,...e)}function ug(t,e,n){const s=Object.assign(Object.assign({},cg()),{[e]:n});return new rs("auth","Firebase",s).create(e,{appName:t.name})}function Si(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return $c.create(t,...e)}function F(t,e,...n){if(!t)throw Si(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ts(e),new Error(e)}function it(t,e){t||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dg(){return Ho()==="http:"||Ho()==="https:"}function Ho(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dg()||jp()||"connection"in navigator)?navigator.onLine:!0}function hg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=Hp()||Vp()}get(){return fg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new as(3e4,6e4);function zt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qt(t,e,n,s,r={}){return Bc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=is(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Fc.fetch()(Hc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},pg),e);try{const r=new _g(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ug(t,u,l);Ve(t,u)}}catch(r){if(r instanceof Ct)throw r;Ve(t,"network-request-failed",{message:String(r)})}}async function cs(t,e,n,s,r={}){const i=await qt(t,e,n,s,r);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Hc(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ti(t.config,r):`${t.config.apiScheme}://${r}`}function gg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _g{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ye(this.auth,"network-request-failed")),mg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ye(t,e,s);return r.customData._tokenResponse=n,r}function jo(t){return t!==void 0&&t.enterprise!==void 0}class vg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yg(t,e){return qt(t,"GET","/v2/recaptchaConfig",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(t,e){return qt(t,"POST","/v1/accounts:delete",e)}async function Eg(t,e){return qt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wg(t,e=!1){const n=Pt(t),s=await n.getIdToken(e),r=Ri(s);F(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Bn(wr(r.auth_time)),issuedAtTime:Bn(wr(r.iat)),expirationTime:Bn(wr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wr(t){return Number(t)*1e3}function Ri(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cc(n);return r?JSON.parse(r):(Ts("Failed to decode base64 JWT payload"),null)}catch(r){return Ts("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ig(t){const e=Ri(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ct&&Sg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Sg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Zn(t,Eg(n,{idToken:s}));F(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pg(i.providerUserInfo):[],a=Cg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Rg(t){const e=Pt(t);await $s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Pg(t){return t.map(e=>{var{providerId:n}=e,s=Ii(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e){const n=await Bc(t,{},async()=>{const s=is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Hc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ag(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new es;return s&&(F(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(F(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wg(this,e)}reload(){return Rg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $s(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zn(this,bg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:x,isAnonymous:X,providerData:de,stsTokenManager:he}=n;F(V&&he,e,"internal-error");const z=es.fromJSON(this.name,he);F(typeof V=="string",e,"internal-error"),dt(h,e.name),dt(p,e.name),F(typeof x=="boolean",e,"internal-error"),F(typeof X=="boolean",e,"internal-error"),dt(g,e.name),dt(I,e.name),dt(P,e.name),dt(U,e.name),dt(k,e.name),dt(M,e.name);const W=new Ft({uid:V,auth:e,email:p,emailVerified:x,displayName:h,isAnonymous:X,photoURL:I,phoneNumber:g,tenantId:P,stsTokenManager:z,createdAt:k,lastLoginAt:M});return de&&Array.isArray(de)&&(W.providerData=de.map(ce=>Object.assign({},ce))),U&&(W._redirectEventId=U),W}static async _fromIdTokenResponse(e,n,s=!1){const r=new es;r.updateFromServerResponse(n);const i=new Ft({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $s(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map;function st(t){it(t instanceof Function,"Expected a class definition");let e=Vo.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vc.type="NONE";const Wo=Vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t,e,n){return`firebase:${t}:${e}:${n}`}class ln{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Rs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Rs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ln(st(Wo),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||st(Wo);const o=Rs(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ft._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ln(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ln(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gc(e))return"Blackberry";if(Jc(e))return"Webos";if(Ci(e))return"Safari";if((e.includes("chrome/")||Kc(e))&&!e.includes("edge/"))return"Chrome";if(qc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wc(t=Ee()){return/firefox\//i.test(t)}function Ci(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kc(t=Ee()){return/crios\//i.test(t)}function zc(t=Ee()){return/iemobile/i.test(t)}function qc(t=Ee()){return/android/i.test(t)}function Gc(t=Ee()){return/blackberry/i.test(t)}function Jc(t=Ee()){return/webos/i.test(t)}function ir(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Og(t=Ee()){var e;return ir(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kg(){return Wp()&&document.documentMode===10}function Yc(t=Ee()){return ir(t)||qc(t)||Jc(t)||Gc(t)||/windows phone/i.test(t)||zc(t)}function Ng(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t,e=[]){let n;switch(t){case"Browser":n=Ko(Ee());break;case"Worker":n=`${Ko(Ee())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t,e={}){return qt(t,"GET","/v2/passwordPolicy",zt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=6;class Lg{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Dg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zo(this),this.idTokenSubscription=new zo(this),this.beforeStateQueue=new Mg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ln.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $s(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xg(this),n=new Lg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gt(t){return Pt(t)}class zo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xp(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qc(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ye("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",$g().appendChild(s)})}function Fg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Bg="https://www.google.com/recaptcha/enterprise.js?render=",Hg="recaptcha-enterprise",jg="NO_RECAPTCHA";class Vg{constructor(e){this.type=Hg,this.auth=Gt(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{yg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new vg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;jo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(jg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&jo(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Qc(Bg+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function qo(t,e,n,s=!1){const r=new Vg(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zc(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qo(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qo(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e){const n=Mc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ds(i,e??{}))return r;Ve(r,"already-initialized")}return n.initialize({options:e})}function Kg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function zg(t,e,n){const s=Gt(t);F(s._canInitEmulator,s,"emulator-config-failed"),F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=el(e),{host:o,port:a}=qg(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Gg()}function el(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qg(t){const e=el(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Go(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Go(o)}}}function Go(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function Jg(t,e){return qt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t,e){return cs(t,"POST","/v1/accounts:signInWithPassword",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(t,e){return cs(t,"POST","/v1/accounts:signInWithEmailLink",zt(t,e))}async function Qg(t,e){return cs(t,"POST","/v1/accounts:signInWithEmailLink",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Pi{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ts(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ts(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,n,"signInWithPassword",Yg);case"emailLink":return Xg(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Jg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(t,e){return cs(t,"POST","/v1/accounts:signInWithIdp",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="http://localhost";class Vt extends Pi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ii(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Vt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return un(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,un(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,un(e,n)}buildRequest(){const e={requestUri:Zg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=is(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t_(t){const e=Mn(xn(t)).link,n=e?Mn(xn(e)).deep_link_id:null,s=Mn(xn(t)).deep_link_id;return(s?Mn(xn(s)).link:null)||s||n||e||t}class Ai{constructor(e){var n,s,r,i,o,a;const c=Mn(xn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=e_((r=c.mode)!==null&&r!==void 0?r:null);F(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=t_(e);try{return new Ai(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,n){return ts._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ai.parseLink(n);return F(s,"argument-error"),ts._fromEmailAndCode(e,s.code,s.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends tl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends ls{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return _t.credential(n,s)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ls{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends ls{constructor(){super("twitter.com")}static credential(e,n){return Vt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yt.credential(n,s)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e){return cs(t,"POST","/v1/accounts:signUp",zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ft._fromIdTokenResponse(e,s,r),o=Jo(s);return new Wt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Jo(s);return new Wt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Jo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Ct{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Fs(e,n,s,r)}}function nl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(t,i,e,s):i})}async function s_(t,e,n=!1){const s=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Zn(t,nl(s,r,e,t),n);F(i.idToken,s,"internal-error");const o=Ri(i.idToken);F(o,s,"internal-error");const{sub:a}=o;return F(t.uid===a,s,"user-mismatch"),Wt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t,e,n=!1){const s="signIn",r=await nl(t,s,e),i=await Wt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function i_(t,e){return sl(Gt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t){const e=Gt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function o_(t,e,n){const s=Gt(t),o=await Zc(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",n_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&rl(t),c}),a=await Wt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function a_(t,e,n){return i_(Pt(t),Rn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&rl(t),s})}function c_(t,e,n,s){return Pt(t).onIdTokenChanged(e,n,s)}function l_(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function u_(t){return Pt(t).signOut()}const Bs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(){const t=Ee();return Ci(t)||ir(t)}const f_=1e3,h_=10;class ol extends il{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=d_()&&Ng(),this.fallbackToPolling=Yc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);kg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,h_):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},f_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ol.type="LOCAL";const p_=ol;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends il{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}al.type="SESSION";const cl=al;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new or(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await m_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}or.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Oi("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function __(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function v_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function b_(){return ll()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="firebaseLocalStorageDb",E_=1,Hs="firebaseLocalStorage",dl="fbase_key";class us{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ar(t,e){return t.transaction([Hs],e?"readwrite":"readonly").objectStore(Hs)}function w_(){const t=indexedDB.deleteDatabase(ul);return new us(t).toPromise()}function Gr(){const t=indexedDB.open(ul,E_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Hs,{keyPath:dl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Hs)?e(s):(s.close(),await w_(),e(await Gr()))})})}async function Yo(t,e,n){const s=ar(t,!0).put({[dl]:e,value:n});return new us(s).toPromise()}async function I_(t,e){const n=ar(t,!1).get(e),s=await new us(n).toPromise();return s===void 0?null:s.value}function Xo(t,e){const n=ar(t,!0).delete(e);return new us(n).toPromise()}const S_=800,T_=3;class fl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>T_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=or._getInstance(b_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await v_(),!this.activeServiceWorker)return;this.sender=new g_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||y_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gr();return await Yo(e,Bs,"1"),await Xo(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>I_(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ar(r,!1).getAll();return new us(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fl.type="LOCAL";const R_=fl;new as(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t,e){return e?st(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Pi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function P_(t){return sl(t.auth,new ki(t),t.bypassAuthState)}function A_(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),r_(n,new ki(t),t.bypassAuthState)}async function O_(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),s_(n,new ki(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P_;case"linkViaPopup":case"linkViaRedirect":return O_;case"reauthViaPopup":case"reauthViaRedirect":return A_;default:Ve(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new as(2e3,1e4);class nn extends hl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=Oi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k_.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="pendingRedirect",Cs=new Map;class M_ extends hl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Cs.get(this.auth._key());if(!e){try{const s=await x_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Cs.set(this.auth._key(),e)}return this.bypassAuthState||Cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x_(t,e){const n=U_(e),s=L_(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function D_(t,e){Cs.set(t._key(),e)}function L_(t){return st(t._redirectPersistence)}function U_(t){return Rs(N_,t.config.apiKey,t.name)}async function $_(t,e,n=!1){const s=Gt(t),r=C_(s,e),o=await new M_(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=10*60*1e3;class B_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!pl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qo(e))}saveEventToCache(e){this.cachedEventUids.add(Qo(e)),this.lastProcessedEventTime=Date.now()}}function Qo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t,e={}){return qt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W_=/^https?/;async function K_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await j_(t);for(const n of e)try{if(z_(n))return}catch{}Ve(t,"unauthorized-domain")}function z_(t){const e=qr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!W_.test(n))return!1;if(V_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new as(3e4,6e4);function Zo(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function G_(t){return new Promise((e,n)=>{var s,r,i;function o(){Zo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zo(),n(Ye(t,"network-request-failed"))},timeout:q_.get()})}if(!((r=(s=Xe().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const a=Fg("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},Qc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ps=null,e})}let Ps=null;function J_(t){return Ps=Ps||G_(t),Ps}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new as(5e3,15e3),X_="__/auth/iframe",Q_="emulator/auth/iframe",Z_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tv(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ti(e,Q_):`https://${t.config.authDomain}/${X_}`,s={apiKey:e.apiKey,appName:t.name,v:os},r=ev.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${is(s).slice(1)}`}async function nv(t){const e=await J_(t),n=Xe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:tv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Xe().setTimeout(()=>{i(o)},Y_.get());function c(){Xe().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rv=500,iv=600,ov="_blank",av="http://localhost";class ea{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cv(t,e,n,s=rv,r=iv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},sv),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=Kc(l)?ov:n),Wc(l)&&(e=e||av,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(Og(l)&&a!=="_self")return lv(e||"",a),new ea(null);const h=window.open(e||"",a,u);F(h,t,"popup-blocked");try{h.focus()}catch{}return new ea(h)}function lv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="__/auth/handler",dv="emulator/auth/handler",fv=encodeURIComponent("fac");async function ta(t,e,n,s,r,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:os,eventId:r};if(e instanceof tl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ls){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${fv}=${encodeURIComponent(c)}`:"";return`${hv(t)}?${is(a).slice(1)}${l}`}function hv({config:t}){return t.emulator?Ti(t,dv):`https://${t.authDomain}/${uv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="webStorageSupport";class pv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cl,this._completeRedirectFn=$_,this._overrideRedirectResult=D_}async _openPopup(e,n,s,r){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ta(e,n,s,qr(),r);return cv(e,o,Oi())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ta(e,n,s,qr(),r);return __(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(it(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await nv(e),s=new B_(e);return n.register("authEvent",r=>(F(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ir,{type:Ir},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ir];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=K_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yc()||Ci()||ir()}}const mv=pv;var na="@firebase/auth",sa="1.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vv(t){Xn(new _n("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xc(t)},l=new Ug(s,r,i,c);return Kg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xn(new _n("auth-internal",e=>{const n=Gt(e.getProvider("auth").getImmediate());return(s=>new gv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(na,sa,_v(t)),cn(na,sa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=5*60,bv=Ac("authIdTokenMaxAge")||yv;let ra=null;const Ev=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>bv)return;const r=n==null?void 0:n.token;ra!==r&&(ra=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function wv(t=Ym()){const e=Mc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wg(t,{popupRedirectResolver:mv,persistence:[R_,p_,cl]}),s=Ac("authTokenSyncURL");if(s){const i=Ev(s);l_(n,i,()=>i(n.currentUser)),c_(n,o=>i(o))}const r=Fp("auth");return r&&zg(n,`http://${r}`),n}vv("Browser");const Iv={apiKey:"AIzaSyBfiRlTvA-3TXJuyKO0dNkUK_h-_4zBwTc",authDomain:"vue-movies-5dfb2.firebaseapp.com",projectId:"vue-movies-5dfb2",storageBucket:"vue-movies-5dfb2.appspot.com",messagingSenderId:"767241819322",appId:"1:767241819322:web:5f4305ca5b469c56c1de83"},Sv=xc(Iv),On=wv(Sv),ml=ac("userStore",()=>{const t=Oe(null),e=o=>{o.value=o},n=()=>{t.value=null};return{user:t,login:async o=>{const{email:a,password:c}=o;try{await a_(On,a,c)}catch(l){alert(l.message);return}e(On.currentUser),Hn.push("/")},signup:async o=>{const{email:a,password:c}=o;try{await o_(On,a,c)}catch(l){alert(l.message);return}e(On.currentUser),Hn.push("/login")},logout:async()=>{await u_(On),n(),Hn.push("/login")}}});const Tv={class:"login"},Rv=C("a",{href:"#"},[C("img",{src:yi,alt:"logo",class:"login-logo"})],-1),Cv=C("span",{class:"login-txt"},"Enjoy the newest movies",-1),Pv=["onSubmit"],Av=C("input",{type:"submit",class:"login-button",value:"Log in"},null,-1),Ov={class:"login-txt"},kv={__name:"LogIn",setup(t){const e=Oe({}),n=ml(),s=()=>{n.login(e.value)};return(r,i)=>{const o=Kt("router-link");return j(),ie("div",Tv,[Rv,Cv,C("form",{onSubmit:mi(s,["prevent"])},[Kn(C("input",{type:"email",placeholder:"Email","onUpdate:modelValue":i[0]||(i[0]=a=>e.value.email=a),class:"login-input"},null,512),[[Jn,e.value.email]]),Kn(C("input",{type:"password",placeholder:"Password","onUpdate:modelValue":i[1]||(i[1]=a=>e.value.password=a),class:"login-input"},null,512),[[Jn,e.value.password]]),Av],40,Pv),C("span",Ov,[De("No account? "),G(o,{to:"/signup",class:"login-link"},{default:Je(()=>[De("Sign up")]),_:1})])])}}};const Nv={class:"signup"},Mv=C("a",{href:"#"},[C("img",{src:yi,alt:"logo",class:"signup-logo"})],-1),xv=["onSubmit"],Dv=C("input",{type:"submit",class:"signup-button",value:"Sign up"},null,-1),Lv={class:"signup-txt"},Uv={__name:"SignUp",setup(t){const e=Oe({}),n=ml(),s=()=>{n.signup(e.value)};return(r,i)=>{const o=Kt("router-link");return j(),ie("div",Nv,[Mv,C("form",{onSubmit:mi(s,["prevent"])},[Kn(C("input",{type:"email",placeholder:"Email","onUpdate:modelValue":i[0]||(i[0]=a=>e.value.email=a),class:"signup-input"},null,512),[[Jn,e.value.email]]),Kn(C("input",{type:"password",placeholder:"Password","onUpdate:modelValue":i[1]||(i[1]=a=>e.value.password=a),class:"signup-input"},null,512),[[Jn,e.value.password]]),Dv],40,xv),C("span",Lv,[De("Already have an account? "),G(o,{to:"/login",class:"signup-link"},{default:Je(()=>[De("Log in")]),_:1})])])}}},Hn=Gf({history:uf("/movie/"),routes:[{path:"/",name:"Home",component:ap},{path:"/favourites",name:"Favourites",component:Ic},{path:"/trending",name:"Trending",component:Ec},{path:"/upcoming",name:"UpcomingMovies",component:wc},{path:"/search",name:"Search",component:dp},{path:"/movie/:id",name:"MovieAbout",component:kp},{path:"/login",name:"LogIn",component:kv},{path:"/signup",name:"SignUp",component:Uv}]});Hn.beforeEach((t,e,n)=>{window.scrollTo(0,0),n()});const Ni=xd(Kd);Ni.use(Ud());Ni.use(Hn);Ni.mount("#app");
