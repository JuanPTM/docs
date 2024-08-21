"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9657],{20812:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(74848),o=s(28453);const i={},a="Release Notes for SCS Release 1",r={id:"releases/Release1",title:"Release Notes for SCS Release 1",description:"(Release Date: 2021-09-29)",source:"@site/docs/06-releases/Release1.md",sourceDirName:"06-releases",slug:"/releases/Release1",permalink:"/docs/releases/Release1",draft:!1,unlisted:!1,editUrl:"https://github.com/SovereignCloudStack/docs/tree/main/docs/06-releases/Release1.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Release Notes for SCS Release 0",permalink:"/docs/releases/Release0"},next:{title:"Release Notes for SCS Release 2",permalink:"/docs/releases/Release2"}},l={},d=[{value:"Scope",id:"scope",level:2},{value:"CI framework",id:"ci-framework",level:2},{value:"Zuul-CI",id:"zuul-ci",level:3},{value:"Metrics collection and dashboards",id:"metrics-collection-and-dashboards",level:2},{value:"Prometheus exporters and Grafana dashboards",id:"prometheus-exporters-and-grafana-dashboards",level:3},{value:"openstack-health-monitor",id:"openstack-health-monitor",level:3},{value:"Logging",id:"logging",level:2},{value:"Central logging",id:"central-logging",level:3},{value:"Federation",id:"federation",level:2},{value:"OIDC support via keycloak",id:"oidc-support-via-keycloak",level:3},{value:"non-TLS restrictions (testbed)",id:"non-tls-restrictions-testbed",level:3},{value:"Known Issue with OIDC Logout",id:"known-issue-with-oidc-logout",level:3},{value:"Bare Metal Service",id:"bare-metal-service",level:2},{value:"Container Layer",id:"container-layer",level:2},{value:"Overview and Goals for R1",id:"overview-and-goals-for-r1",level:3},{value:"Beyond CAPI",id:"beyond-capi",level:3},{value:"Standardization",id:"standardization",level:2},{value:"SBOM and Links",id:"sbom-and-links",level:2},{value:"Release tagging",id:"release-tagging",level:2},{value:"List of known issues &amp; restrictions in R1",id:"list-of-known-issues--restrictions-in-r1",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"release-notes-for-scs-release-1",children:"Release Notes for SCS Release 1"}),"\n",(0,t.jsx)(n.p,{children:"(Release Date: 2021-09-29)"}),"\n",(0,t.jsx)(n.h2,{id:"scope",children:"Scope"}),"\n",(0,t.jsx)(n.p,{children:"Main goals for Release 1 (R1) was the strengthening of our CI test coverage and\nintegration, the operational tooling (metrics collection, dashboards, logging),\nlatest versions of upstream software (OpenStack Wallaby, Kubernetes-1.21.5),\nsupport for Bare Metal service, progress on user federation for clouds, and\nprogress on the integration of the container layer with k8s Cluster API (now in\nversion 0.4.x)."}),"\n",(0,t.jsx)(n.h2,{id:"ci-framework",children:"CI framework"}),"\n",(0,t.jsx)(n.h3,{id:"zuul-ci",children:"Zuul-CI"}),"\n",(0,t.jsxs)(n.p,{children:["For our internal development workflows we are planning to switch from GitHub\nActions to Zuul-CI (mostly). The infrastructure itself is already available,\nyet most of the repositories in the SovereignCloudStack organisation have not\nswitched over. Reasons for switching include cross-dependencies, scalability\nand costs. Reasons for using Zuul-CI include the close connection to the\nOpenStack project and the enormous flexibility in comparison to other similar\ntools. On top of that you have also gating instead of only CI. A quick example\nfor a Zuul-CI operated repository can be found here:\n",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/zuul-sandbox",children:"https://github.com/SovereignCloudStack/zuul-sandbox"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"metrics-collection-and-dashboards",children:"Metrics collection and dashboards"}),"\n",(0,t.jsx)(n.h3,{id:"prometheus-exporters-and-grafana-dashboards",children:"Prometheus exporters and Grafana dashboards"}),"\n",(0,t.jsxs)(n.p,{children:["We provide generic configuration examples and blueprints for prometheus rules\nand grafana dashboards. The examples need to be understood and adapted to the\nparticular needs of your environment. You can find the examples at\n",(0,t.jsx)(n.a,{href:"https://github.com/osism/kolla-operations",children:"https://github.com/osism/kolla-operations"}),"]."]}),"\n",(0,t.jsx)(n.p,{children:"With R2 we plan to implement a basic set of these alerts and dashboards in the\ntestbed deployment in order to make them even easier consumable for new users.\nFeel free to give feedback on the examples and contribute your own generic\nexamples."}),"\n",(0,t.jsx)(n.p,{children:"We're working on bringing a basic set of prometheus exporters to the\nOpenStack-kolla upstream community."}),"\n",(0,t.jsxs)(n.p,{children:["As part of our effort to add more monitoring tooling, we're integrating further\nprometheus exporters such as\n",(0,t.jsx)(n.a,{href:"https://review.opendev.org/c/openstack/kolla-ansible/+/643568",children:"libvirt"})," and\n",(0,t.jsx)(n.a,{href:"https://review.opendev.org/c/openstack/kolla/+/762986",children:"ovn"}),". Integration is\ntargeted for R2."]}),"\n",(0,t.jsxs)(n.p,{children:["More detailed information on monitoring topics will be continously provided in\nthe ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/monitoring.md",children:"corresponding design document"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"openstack-health-monitor",children:"openstack-health-monitor"}),"\n",(0,t.jsx)(n.p,{children:"We have made some progress with openstack-health-monitor since R0, but we have\nnot yet created ready-to-be-used influx data collection and the grafana\ndashboard.  While the black box monitoring is perceived as very useful, the\nscript certainly has reached a complexity that is not handled well with bash\nscripting and makes it a difficult to maintain and even to use tool, so the\nusefulness of shipping it with SCS to make it available for Ops teams to\nmonitor has been questioned. Instead an expectation has been expressed that the\nSCS uses this to monitor all SCS partner clouds and provides some transparency\nthis way to the public -- and detailed statistics via e.g. a prometheus\nexporter to the respective cloud provider. This is currently under consideration."}),"\n",(0,t.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,t.jsx)(n.h3,{id:"central-logging",children:"Central logging"}),"\n",(0,t.jsx)(n.p,{children:"OSISM now enables kolla-ansible centralized logging by default. The default\nrules need to be further refined to suit your needs. We plan to implement a\nmore generic set of rules for R2."}),"\n",(0,t.jsx)(n.h2,{id:"federation",children:"Federation"}),"\n",(0,t.jsx)(n.h3,{id:"oidc-support-via-keycloak",children:"OIDC support via keycloak"}),"\n",(0,t.jsxs)(n.p,{children:["Logging in to Horizon by authenticating with OIDC via Keycloak is now possible.\nFor details see the ",(0,t.jsx)(n.a,{href:"https://github.com/osism/testbed/blob/8430afdd36307acc1bf5ebd930ecbd3dd4b1dd22/docs/source/usage.rst#authentication-with-openid-connect",children:"testbed documentation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"non-tls-restrictions-testbed",children:"non-TLS restrictions (testbed)"}),"\n",(0,t.jsxs)(n.p,{children:["Only TLS secured deployments get full support.\nWithout TLS, certain browsers won't be able to log in.\nFor deatils see the ",(0,t.jsx)(n.a,{href:"https://github.com/osism/testbed/blob/8430afdd36307acc1bf5ebd930ecbd3dd4b1dd22/docs/source/usage.rst#ssl-tls-connection-to-keycloak-openid-connect-provider",children:"testbed documentation"})]}),"\n",(0,t.jsx)(n.h3,{id:"known-issue-with-oidc-logout",children:"Known Issue with OIDC Logout"}),"\n",(0,t.jsxs)(n.p,{children:["Clicking ",(0,t.jsx)(n.code,{children:"Sign Out"})," on the Horizon dashboard doesn't perform\na proper OIDC logout. This is documented in ",(0,t.jsx)(n.a,{href:"https://github.com/osism/testbed/blob/8430afdd36307acc1bf5ebd930ecbd3dd4b1dd22/docs/source/usage.rst#openstack-web-dashboard-horizon-logout",children:"osism testbed"}),",\nwith some Keycloak settings that can be relevant for alleviating the issue,\nbut in Release 1 there is no solution for this yet."]}),"\n",(0,t.jsx)(n.h2,{id:"bare-metal-service",children:"Bare Metal Service"}),"\n",(0,t.jsx)(n.p,{children:"The ironic Bare Metal service can be deployed with the SCS (OSISM)\ninstallation. For it to get full test coverage, a virtual BMC\nsolution has been created, so bare metal can be validated in our testbed\nsetup just as nicely as the other components. While most pieces\nare ready, the final integration steps are still work-in-progress\nand will happen after R1."}),"\n",(0,t.jsx)(n.h2,{id:"container-layer",children:"Container Layer"}),"\n",(0,t.jsx)(n.h3,{id:"overview-and-goals-for-r1",children:"Overview and Goals for R1"}),"\n",(0,t.jsxs)(n.p,{children:["The container layer on SCS is implemented as a Self-Service,\nleveraging the ",(0,t.jsx)(n.a,{href:"https://cluster-api.sigs.k8s.io/",children:"Kubernetes cluster API"}),"\ntechnology. This was provided as a technical preview from the\n",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider",children:"SCS k8s-cluster-api-provider"}),"\nrepository for R0 back in July."]}),"\n",(0,t.jsx)(n.p,{children:"The focus for R1 was to make it ready for production, so DevOps teams can\nuse this to create and manage their k8s clusters in self-service for\ndevelopment, testing, deployment and production."}),"\n",(0,t.jsx)(n.p,{children:"To achieve this, a lot of work has been invested, updating the\ncluster API to 0.4 along the way, fixing snapshot classes, enabling\noptional metrics and ingress services, using application credentials\nand much improved management scripts. The sonobuoy test automation has\nbeen included and successfully used to validate the created clusters.\nReal-world testing has happened though the Gaia-X Hackathon #1, where\nclusters were provided on the fly for the various work streams."}),"\n",(0,t.jsxs)(n.p,{children:["The detailed list of changes for R1 is covered in the\n",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/k8s-cluster-api-provider/blob/master/Release-Notes-R1.md",children:"k8s capi provider Release Notes"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Still in technical preview, but very promising are the helm charts\nbased k8s cluster management templates also documented there."}),"\n",(0,t.jsx)(n.h3,{id:"beyond-capi",children:"Beyond CAPI"}),"\n",(0,t.jsxs)(n.p,{children:["Some of our partners are using ",(0,t.jsx)(n.a,{href:"https://gardener.cloud",children:"Gardener"})," as a layer to manage\nlarge fleets of (optionally cross-cloud) k8s clusters. While there is a bit of\noverlap in functionality, they do happily coexist and our partner is actually\nusing k8s capi to bootstrap clusters on SCS clouds for Gardener management."]}),"\n",(0,t.jsx)(n.h2,{id:"standardization",children:"Standardization"}),"\n",(0,t.jsx)(n.p,{children:"As of this writing, the list of SCS defined standards still comprises\ntwo standards:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/flavor-naming.md",children:"SCS Flavor naming and standard flavors standard"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/Image-Properties-Spec.md",children:"SCS Image naming and metadata standard"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As before, we continue to rely on OpenStack and CNCF defined standards\nin addition to this -- the k8s clusters need to pass the conformance\ntests with sonobuoy and the OpenStack environment the OpenStack powered\nguidelines (with refstack)."}),"\n",(0,t.jsx)(n.p,{children:"There is a discussion on a glossary, detailing what we expect from regions,\navailability zones etc. Some major parts of it still need to be agreed\nbefore a useful doc can be published -- this will happen in due time and\nis expected before R2."}),"\n",(0,t.jsx)(n.h2,{id:"sbom-and-links",children:"SBOM and Links"}),"\n",(0,t.jsx)(n.p,{children:"We stand on the shoulders of giants:\nWithout all the great work from many open source communities, we would\nnot get anywhere."}),"\n",(0,t.jsx)(n.p,{children:"We are working on automation to create a complete list for all the software\nthat is used and deployed with SCS, so we have a complete Software Bill\nof Materials (SBoM). The reason this is non-trivial is that we are not\naggregating it all ourselves, but rely on pre-integrated pieces, such\nas Linux distributions, OpenStack, CNCF projects etc. The good news is\nthat these projects are diligent in their work, making sure we don't need\nto be too worried about security risks or legal risks introduced this way.\nNevertheless, the goal of creating a complete graph remains."}),"\n",(0,t.jsx)(n.p,{children:"We have started to put SPDX license identifiers into the SCS produced\ncode, so we make it easier for downstream consumers of our software to\nautomate the license compliance checks when assembling an SBoM."}),"\n",(0,t.jsx)(n.p,{children:"For R1, some of the major projects we build on have had releases that we\nincorporated and whose release notes we want to link here for convenience:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/releases",children:"Kubernetes v1.21.x"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api/releases",children:"Kubernetes Cluster API v0.4"}),"\nand ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api-provider-openstack/releases",children:"k8s cluster-api-provider openstack v0.4"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://releases.openstack.org/wallaby/",children:"OpenStack Wallaby"})," ",(0,t.jsx)(n.a,{href:"https://releases.openstack.org/wallaby/highlights.html",children:"Release Highlights"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"release-tagging",children:"Release tagging"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Design-Docs/Release-Numbering-Scheme.md",children:"Release Numbering scheme"})," -- unchanged from R0.\nWe have added the tag ",(0,t.jsx)(n.code,{children:"v2.0.0"})," to the relevant repositories to designate the ",(0,t.jsx)(n.code,{children:"SCS_RELEASE_R1"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"list-of-known-issues--restrictions-in-r1",children:"List of known issues & restrictions in R1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#Known-Issue-with-OIDC-Logout",children:"OIDC Logout doesn't work properly"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["OIDC Login is meant to be used with TLS, on\n",(0,t.jsx)(n.a,{href:"#non-TLS-restrictions-testbed",children:"non-TLS setups it only works with restrictions"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);