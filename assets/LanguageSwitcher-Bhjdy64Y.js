import{c as r}from"./createLucideIcon-CI9fqIqV.js";import{u as f,n as i,c as h,i as _,e as a,w as t,b as n,d,t as v,I as w,f as p}from"./index-DBj0bk-v.js";import{_ as M}from"./_plugin-vue_export-helper-tGYcrXWe.js";import{G as C}from"./globe-Cstfjnuf.js";import{C as z}from"./chevron-down-DTbha4Ho.js";/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=r("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=r("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=r("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),N={class:"language-switcher"},x={class:"lang-text"},L={__name:"LanguageSwitcher",setup(j){const{locale:o}=f(),c={"zh-CN":"简中","zh-TW":"繁中",en:"EN",ja:"日本",ko:"한국",vi:"VN"},u=i(()=>o.value),m=i(()=>c[o.value]||"简中"),k=({key:l})=>{o.value=l,localStorage.setItem("locale",l)};return(l,e)=>{const s=p("a-menu-item"),g=p("a-menu"),y=p("a-dropdown");return _(),h("div",N,[a(y,{trigger:["click"]},{overlay:t(()=>[a(g,{onClick:k,"selected-keys":[u.value]},{default:t(()=>[a(s,{key:"zh-CN"},{default:t(()=>[...e[1]||(e[1]=[n("span",{class:"lang-option"},"🇨🇳 简体中文",-1)])]),_:1}),a(s,{key:"zh-TW"},{default:t(()=>[...e[2]||(e[2]=[n("span",{class:"lang-option"},"🇹🇼 繁體中文",-1)])]),_:1}),a(s,{key:"en"},{default:t(()=>[...e[3]||(e[3]=[n("span",{class:"lang-option"},"🇺🇸 English",-1)])]),_:1}),a(s,{key:"ja"},{default:t(()=>[...e[4]||(e[4]=[n("span",{class:"lang-option"},"🇯🇵 日本語",-1)])]),_:1}),a(s,{key:"ko"},{default:t(()=>[...e[5]||(e[5]=[n("span",{class:"lang-option"},"🇰🇷 한국어",-1)])]),_:1}),a(s,{key:"vi"},{default:t(()=>[...e[6]||(e[6]=[n("span",{class:"lang-option"},"🇻🇳 Tiếng Việt",-1)])]),_:1})]),_:1},8,["selected-keys"])]),default:t(()=>[n("a",{class:"lang-btn",onClick:e[0]||(e[0]=w(()=>{},["prevent"]))},[a(d(C),{size:18}),n("span",x,v(m.value),1),a(d(z),{size:14})])]),_:1})])}}},G=M(L,[["__scopeId","data-v-8e212f38"]]);export{G as L,E as M,D as S,T as a};
