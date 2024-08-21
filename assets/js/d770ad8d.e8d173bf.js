"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3934],{38436:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(74848),n=t(28453);const i={},l="Migration to ClusterClass",o={id:"container/components/k8s-cluster-api-provider/doc/usage/migrate-to-cluster-class",title:"Migration to ClusterClass",description:"From #600, this repository uses CAPI",source:"@site/docs/03-container/components/k8s-cluster-api-provider/doc/usage/migrate-to-cluster-class.md",sourceDirName:"03-container/components/k8s-cluster-api-provider/doc/usage",slug:"/container/components/k8s-cluster-api-provider/doc/usage/migrate-to-cluster-class",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/migrate-to-cluster-class",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/03-container/components/k8s-cluster-api-provider/doc/usage/migrate-to-cluster-class.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Harbor",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/harbor"},next:{title:"Cluster Stacks",permalink:"/docs/category/cluster-stacks"}},a={},c=[{value:"Migration",id:"migration",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"migration-to-clusterclass",children:"Migration to ClusterClass"}),"\n",(0,r.jsxs)(s.p,{children:["From ",(0,r.jsx)(s.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/pull/600",children:"#600"}),", this repository uses CAPI\n",(0,r.jsx)(s.a,{href:"https://cluster-api.sigs.k8s.io/tasks/experimental-features/cluster-class/",children:"ClusterClass"})," feature for the creation of\nnew clusters, additionally see k8s ",(0,r.jsx)(s.a,{href:"https://kubernetes.io/blog/2021/10/08/capi-clusterclass-and-managed-topologies/",children:"blog"}),".\nThis feature is also used e.g. in the SCS ",(0,r.jsx)(s.a,{href:"https://github.com/SovereignCloudStack/cluster-stacks",children:"cluster-stacks"})," repository."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Note: For now, ClusterClass is created per Cluster, which is not optimal and most likely it can be improved."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Therefore, existing clusters must be migrated from 'old' cluster templates to 'new' cluster class based templates.\nBased on ClusterClass ",(0,r.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20210526-cluster-class-and-managed-topologies.md#upgrade-strategy",children:"proposal"}),"\nof update strategy, we shouldn't be able to migrate, but in CAPI PR ",(0,r.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/cluster-api/pull/6292",children:"#6292"}),"\nthe validation webhook was relaxed (via special Cluster annotation\n",(0,r.jsx)(s.strong,{children:"unsafe.topology.cluster.x-k8s.io/disable-update-class-name-check"}),") and manual migration is now possible."]}),"\n",(0,r.jsxs)(s.p,{children:["The script ",(0,r.jsx)(s.code,{children:"migrate-to-cluster-class.sh"})," uses that special annotation for migration. In the beginning, it patches\nCAPI and KCP deployments with the ",(0,r.jsx)(s.strong,{children:"ClusterTopology=true"})," container argument. Then creates new resources\n(",(0,r.jsx)(s.em,{children:"KubeadmControlPlaneTemplate"}),", ",(0,r.jsx)(s.em,{children:"OpenStackClusterTemplate"}),", ",(0,r.jsx)(s.em,{children:"ClusterClass"}),"). After that, annotates, labels and\npatches existing cluster resources. In the end, it patches the ",(0,r.jsx)(s.strong,{children:"Cluster"})," object with ",(0,r.jsx)(s.strong,{children:".spec.topology"})," and it's done."]}),"\n",(0,r.jsx)(s.h2,{id:"migration",children:"Migration"}),"\n",(0,r.jsx)(s.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["CAPI >= v1.5.2 due to ",(0,r.jsx)(s.a,{href:"https://cluster-api.sigs.k8s.io/tasks/experimental-features/cluster-class/write-clusterclass#clusterclass-with-custom-naming-strategies",children:"NamingStrategy"})," feature","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["upgrade can be performed as stated in upgrade ",(0,r.jsx)(s.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/blob/main/doc/Upgrade-Guide.md#updating-cluster-api-and-openstack-cluster-api-provider",children:"guide"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Git pull/checkout new changes into the ",(0,r.jsx)(s.code,{children:"~/k8s-cluster-api-provider"})," directory"]}),"\n",(0,r.jsxs)(s.li,{children:["Run ",(0,r.jsx)(s.code,{children:"migrate-to-cluster-class.sh <CLUSTER_NAME>"})," (verify machines were not recreated)"]}),"\n",(0,r.jsxs)(s.li,{children:["Copy new templates for existing and new clusters (consider backup)","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"cp ~/k8s-cluster-api-provider/terraform/files/template/cluster-template.yaml ~/<CLUSTER_NAME>/cluster-template.yaml\ncp ~/k8s-cluster-api-provider/terraform/files/template/cluster-template.yaml ~/cluster-defaults/cluster-template.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Add the newly introduced generation counter for the OpenStackClusterTemplate to the settings in ",(0,r.jsx)(s.code,{children:"clusterctl.yaml"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'echo "OPENSTACK_CLUSTER_GEN: geno01" >> ~/<CLUSTER_NAME>/clusterctl.yaml\necho "OPENSTACK_CLUSTER_GEN: geno01" >> ~/cluster-defaults/clusterctl.yaml\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Next run of ",(0,r.jsx)(s.code,{children:"create_cluster.sh <CLUSTER_NAME>"})," should be idempotent"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>o});var r=t(96540);const n={},i=r.createContext(n);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);