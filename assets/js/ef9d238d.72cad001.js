"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9864],{9221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=t(74848),s=t(28453),l=t(11470),i=t(19365);const a={},o="Installation",u={id:"contribute/local-docusaurus-development-guide",title:"Installation",description:"This Guide shows you how to setup docusaurus on your local machine to run this docs in your local development enviroment.",source:"@site/community/contribute/local-docusaurus-development-guide.mdx",sourceDirName:"contribute",slug:"/contribute/local-docusaurus-development-guide",permalink:"/community/contribute/local-docusaurus-development-guide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"community",previous:{title:"Linting Guide",permalink:"/community/contribute/linting-guide"},next:{title:"Styleguide",permalink:"/community/contribute/styleguide"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installation Guide",id:"installation-guide",level:2},{value:"Step 1 \u2013 Installing Node.js via nvm",id:"step-1--installing-nodejs-via-nvm",level:3},{value:"Step 2 \u2013\xa0Cloning the repository",id:"step-2-cloning-the-repository",level:3},{value:"Step 3 \u2013 Installing dependencies",id:"step-3--installing-dependencies",level:3},{value:"Step 4 \u2013 Starting the development server",id:"step-4--starting-the-development-server",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"This Guide shows you how to setup docusaurus on your local machine to run this docs in your local development enviroment."}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"git"}),"\n",(0,r.jsx)(n.li,{children:"Node.js v16"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,r.jsx)(n.h3,{id:"step-1--installing-nodejs-via-nvm",children:"Step 1 \u2013 Installing Node.js via nvm"}),"\n",(0,r.jsx)(n.p,{children:"It is recommended to install Node.js via nvm \u2013 a node version manager \u2013 to have the possibility to switch between different node.js versions."}),"\n",(0,r.jsxs)(l.A,{groupId:"operating-systems",children:[(0,r.jsxs)(i.A,{value:"mac",label:"macOS",children:[(0,r.jsx)(n.p,{children:"You must have macOS desktop access with administrator privileges."}),(0,r.jsxs)(n.p,{children:["Login to the macOS desktop system and ",(0,r.jsx)(n.a,{href:"https://brew.sh/",children:"install Homebrew"})," on your system (if not already installed)."]}),(0,r.jsx)(n.p,{children:"Install nvm via homebrew:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"brew install nvm\n"})})]}),(0,r.jsx)(i.A,{value:"linux",label:"Linux",children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm#installing-and-updating",children:"this"})," installation guide on GitHub by nvm-sh for installing nvm."]})}),(0,r.jsx)(i.A,{value:"win",label:"Windows",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/coreybutler/nvm-windows",children:"NVM for Windows"}),"\nruns in an Admin shell. You'll need to start powershell or Command Prompt as Administrator to use nvm-windows. Install NVM for Windows with an Installer provided by nvm-sh on their ",(0,r.jsx)(n.a,{href:"https://github.com/coreybutler/nvm-windows/releases",children:"release page"}),"."]})})]}),"\n",(0,r.jsx)(n.p,{children:"Once installed you can check the available versions with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nvm list\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you have no other projects, where you need a different version, it is recommended to install the latest stable LTS version of node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"nvm install lts\n"})}),"\n",(0,r.jsx)(n.p,{children:"nvm has now installed the latest node.js version with its package manager npm. Check if the installation has been successfull by checking it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"node --version\n"})}),"\n",(0,r.jsx)(n.h3,{id:"step-2-cloning-the-repository",children:"Step 2 \u2013\xa0Cloning the repository"}),"\n",(0,r.jsxs)(n.p,{children:["Clone the ",(0,r.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/docs",children:"docs"})," repository via your favourite method:"]}),"\n",(0,r.jsxs)(l.A,{groupId:"cloning-",children:[(0,r.jsx)(i.A,{value:"https",label:"HTTPS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",metastring:'title="HTTPS"',children:"git clone https://github.com/SovereignCloudStack/docs.git\n"})})}),(0,r.jsx)(i.A,{value:"ssh",label:"SSH",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",metastring:'title="SSH"',children:"git clone git@github.com:SovereignCloudStack/docs.git\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"step-3--installing-dependencies",children:"Step 3 \u2013 Installing dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["Change your working directory within your terminal to the root of the cloned repository ",(0,r.jsx)(n.code,{children:"/docs"})," and install all dependencies:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"npm install\n"})}),"\n",(0,r.jsx)(n.h3,{id:"step-4--starting-the-development-server",children:"Step 4 \u2013 Starting the development server"}),"\n",(0,r.jsx)(n.p,{children:"You can now run the local development server from your terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"npm start\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the server is up and running, your terminal will show you the local URL which you can open with your browser to see the page."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(18215),l=t(23104),i=t(56347),a=t(205),o=t(57485),u=t(31682),c=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:t,groupId:s}),[v,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),b=(()=>{const e=u??v;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=a[t].value;s!==r&&(u(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,s.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=v(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);