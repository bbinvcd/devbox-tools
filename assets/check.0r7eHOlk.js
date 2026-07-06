import{u as i}from"./runtime-core.esm-bundler.ByuLtU3Q.js";/**
 * @license lucide-vue-next v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,o)=>o?o.toUpperCase():r.toLowerCase()),g=t=>{const e=C(t);return e.charAt(0).toUpperCase()+e.slice(1)},k=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim(),w=t=>t==="";/**
 * @license lucide-vue-next v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=({name:t,iconNode:e,absoluteStrokeWidth:r,"absolute-stroke-width":o,strokeWidth:s,"stroke-width":a,size:n=c.width,color:h=c.stroke,...l},{slots:u})=>i("svg",{...c,...l,width:n,height:n,stroke:h,"stroke-width":w(r)||w(o)||r===!0||o===!0?Number(s||a||c["stroke-width"])*24/Number(n):s||a||c["stroke-width"],class:k("lucide",l.class,...t?[`lucide-${d(g(t))}-icon`,`lucide-${d(t)}`]:["lucide-icon"])},[...e.map(m=>i(...m)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(t,e)=>(r,{slots:o,attrs:s})=>i(p,{...s,...r,iconNode:e,name:t},o);/**
 * @license lucide-vue-next v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=f("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);export{x as C,f as c};
