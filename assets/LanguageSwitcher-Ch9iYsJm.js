import{c as l}from"./createLucideIcon-BcaHDl5-.js";import{u as h,c as _,a as g,o as y,w as e,k as a,i as f,j as v,t as M,l as o,p as s}from"./index-wd-hZkLN.js";import{_ as x}from"./_plugin-vue_export-helper-_GT-bmI3.js";/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=l("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=l("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=l("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),N={class:"lang-text"},S={__name:"LanguageSwitcher",setup(b){const{locale:p}=h(),d={"zh-CN":"简体中文","en-US":"English","vi-VN":"Tiếng Việt","ja-JP":"日本語"},m=_(()=>d[p.value]||p.value),r=({key:c})=>{p.value=c,localStorage.setItem("locale",c)};return(c,t)=>{const u=o("a-button"),n=o("a-menu-item"),i=o("a-menu"),k=o("a-dropdown");return y(),g(k,{trigger:["click"],placement:"bottomRight"},{overlay:e(()=>[a(i,{onClick:r},{default:e(()=>[a(n,{key:"zh-CN"},{default:e(()=>[...t[0]||(t[0]=[s("简体中文",-1)])]),_:1}),a(n,{key:"en-US"},{default:e(()=>[...t[1]||(t[1]=[s("English",-1)])]),_:1}),a(n,{key:"vi-VN"},{default:e(()=>[...t[2]||(t[2]=[s("Tiếng Việt",-1)])]),_:1}),a(n,{key:"ja-JP"},{default:e(()=>[...t[3]||(t[3]=[s("日本語",-1)])]),_:1})]),_:1})]),default:e(()=>[a(u,{type:"text",class:"lang-btn"},{default:e(()=>[a(v(w),{size:20}),f("span",N,M(m.value),1)]),_:1})]),_:1})}}},I=x(S,[["__scopeId","data-v-bf0b3c15"]]);export{I as L,C as M,z as S};
