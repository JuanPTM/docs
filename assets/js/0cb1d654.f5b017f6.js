"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6182],{54896:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=o(74848),i=o(28453);const s={},r="Overview",c={id:"operating-scs/components/monitoring/docs/overview",title:"Overview",description:"This repository aims to build an Observer monitoring solution intended to offer a global metrics",source:"@site/docs/04-operating-scs/components/monitoring/docs/overview.md",sourceDirName:"04-operating-scs/components/monitoring/docs",slug:"/operating-scs/components/monitoring/docs/overview",permalink:"/docs/operating-scs/components/monitoring/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/04-operating-scs/components/monitoring/docs/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Monitoring",permalink:"/docs/category/monitoring"},next:{title:"Quickstart",permalink:"/docs/operating-scs/components/monitoring/docs/quickstart"}},a={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["This repository aims to build an Observer monitoring solution intended to offer a global ",(0,t.jsx)(n.strong,{children:"metrics"}),"\nview of the CSP infrastructure. It is the platform where CSP infrastructure ",(0,t.jsx)(n.strong,{children:"metrics"}),"\nare fetched, processed, stored, and visualized. Note that this monitoring solution could\nbe extended, and the other two observability signals (logs and traces) from the CSP\ninfrastructure could also be processed here."]}),"\n",(0,t.jsxs)(n.p,{children:["The Observer monitoring solution is developed on the foundation of the ",(0,t.jsx)(n.a,{href:"https://github.com/dNationCloud/kubernetes-monitoring",children:"dNation monitoring solution"}),".\nand it is intended to become an ",(0,t.jsx)(n.strong,{children:"SCS product"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This repository includes the manifest for the stable deployment of the Observer monitoring solution,\nas well as experimental and illustrative examples of how this monitoring solution can be extended and utilized."}),"\n",(0,t.jsxs)(n.p,{children:["The stable version of the Observer monitoring solution empowers its reference SCS installation available\nat ",(0,t.jsx)(n.a,{href:"https://monitoring.scs.community",children:"https://monitoring.scs.community"}),". This deployment covers the monitoring of core SCS infrastructure services,\nsubsequently referred to as 'Monitoring of infrastructure services'. Refer to the details ",(0,t.jsx)(n.a,{href:"/docs/operating-scs/components/monitoring/docs/scs-deployment",children:"here"}),".\nThe high-level architecture could be visualized as follows:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"monitoring_scs_high_level.png",src:o(38552).A+"",width:"970",height:"508"})}),"\n",(0,t.jsxs)(n.p,{children:["Some illustrative and experimental examples of how this monitoring solution can be utilized have been introduced\nwithin the MVP-0 version of this project (refer to the ",(0,t.jsx)(n.code,{children:"mvp-0"})," tag, related comments, and docs sections: ",(0,t.jsx)(n.a,{href:"/docs/operating-scs/components/monitoring/docs/kaas",children:"kaas"}),", ",(0,t.jsx)(n.a,{href:"/docs/operating-scs/components/monitoring/docs/iaas",children:"iaas"}),").\nThese examples include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Monitoring of the KaaS layer"}),"\n",(0,t.jsx)(n.li,{children:"Monitoring of the IaaS layer"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The above experimental components ",(0,t.jsx)(n.strong,{children:"are not part"})," of the reference SCS installation available\nat ",(0,t.jsx)(n.a,{href:"https://monitoring.scs.community",children:"https://monitoring.scs.community"}),".\nThe high-level architecture of these experimental components could be visualized as follows:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"monitoring_scs_experimental.png",src:o(3705).A+"",width:"946",height:"467"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3705:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/monitoring_scs_experimental-3846febea17c1ecf9baaa074ee9b1a10.png"},38552:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/monitoring_scs_high_level-50f86d39d750e803a31513fb32942e41.png"},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);