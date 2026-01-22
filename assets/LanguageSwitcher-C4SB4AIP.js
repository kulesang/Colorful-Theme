import{z as c,b as h,u as k,c as g,a as _,o as x,w as t,l as a,j as f,k as v,t as w,m as o,q as s}from"./index-CUYkGM1Q.js";/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=c("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=c("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=c("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=c("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),S={class:"lang-text"},b={__name:"LanguageSwitcher",setup(z){const{locale:r}=k(),d={"zh-CN":"简体中文","en-US":"English","vi-VN":"Tiếng Việt","ja-JP":"日本語"},p=g(()=>d[r.value]||r.value),y=({key:l})=>{r.value=l,localStorage.setItem("locale",l)};return(l,e)=>{const u=o("a-button"),n=o("a-menu-item"),i=o("a-menu"),m=o("a-dropdown");return x(),_(m,{trigger:["click"],placement:"bottomRight"},{overlay:t(()=>[a(i,{onClick:y},{default:t(()=>[a(n,{key:"zh-CN"},{default:t(()=>[...e[0]||(e[0]=[s("简体中文",-1)])]),_:1}),a(n,{key:"en-US"},{default:t(()=>[...e[1]||(e[1]=[s("English",-1)])]),_:1}),a(n,{key:"vi-VN"},{default:t(()=>[...e[2]||(e[2]=[s("Tiếng Việt",-1)])]),_:1}),a(n,{key:"ja-JP"},{default:t(()=>[...e[3]||(e[3]=[s("日本語",-1)])]),_:1})]),_:1})]),default:t(()=>[a(u,{type:"text",class:"lang-btn"},{default:t(()=>[a(v(M),{size:20}),f("span",S,w(p.value),1)]),_:1})]),_:1})}}},C=h(b,[["__scopeId","data-v-bf0b3c15"]]);export{C as L,j as M,L as S,V as a};
