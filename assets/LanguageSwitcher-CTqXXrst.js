import{c as p}from"./createLucideIcon-x2htp3p0.js";import{u as i,c as g,a as _,o as y,w as e,k as a,i as f,j as M,t as v,l as o,p as s}from"./index-BHLHUR5A.js";import{_ as w}from"./_plugin-vue_export-helper-CmQR6YpH.js";/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=p("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=p("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=p("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=p("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),b={class:"lang-text"},j={__name:"LanguageSwitcher",setup(N){const{locale:c}=i(),l={"zh-CN":"简体中文","en-US":"English","vi-VN":"Tiếng Việt","ja-JP":"日本語"},m=g(()=>l[c.value]||c.value),u=({key:d})=>{c.value=d,localStorage.setItem("locale",d)};return(d,t)=>{const r=o("a-button"),n=o("a-menu-item"),h=o("a-menu"),k=o("a-dropdown");return y(),_(k,{trigger:["click"],placement:"bottomRight"},{overlay:e(()=>[a(h,{onClick:u},{default:e(()=>[a(n,{key:"zh-CN"},{default:e(()=>[...t[0]||(t[0]=[s("简体中文",-1)])]),_:1}),a(n,{key:"en-US"},{default:e(()=>[...t[1]||(t[1]=[s("English",-1)])]),_:1}),a(n,{key:"vi-VN"},{default:e(()=>[...t[2]||(t[2]=[s("Tiếng Việt",-1)])]),_:1}),a(n,{key:"ja-JP"},{default:e(()=>[...t[3]||(t[3]=[s("日本語",-1)])]),_:1})]),_:1})]),default:e(()=>[a(r,{type:"text",class:"lang-btn"},{default:e(()=>[a(M(x),{size:20}),f("span",b,v(m.value),1)]),_:1})]),_:1})}}},B=w(j,[["__scopeId","data-v-bf0b3c15"]]);export{B as L,C as M,I as S,z as a};
