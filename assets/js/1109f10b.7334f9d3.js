"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3605],{91128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(74848),s=n(28453);const o={title:"SSD Flavors",type:"Decision Record",status:"Stable",stabilized_at:new Date("2023-06-14T00:00:00.000Z"),track:"IaaS",enhances:"scs-0100-v2-flavor-naming.md"},i=void 0,r={id:"scs-0110-v1-ssd-flavors",title:"SSD Flavors",description:"Introduction",source:"@site/standards/scs-0110-v1-ssd-flavors.md",sourceDirName:".",slug:"/scs-0110-v1-ssd-flavors",permalink:"/standards/scs-0110-v1-ssd-flavors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SSD Flavors",type:"Decision Record",status:"Stable",stabilized_at:"2023-06-14T00:00:00.000Z",track:"IaaS",enhances:"scs-0100-v2-flavor-naming.md"},sidebar:"standards",previous:{title:"scs-0110: SSD Flavors",permalink:"/standards/iaas/scs-0110"},next:{title:"scs-0111: Decisions for the Volume Type Standard",permalink:"/standards/iaas/scs-0111"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Design Considerations",id:"design-considerations",level:2},{value:"Options considered",id:"options-considered",level:3},{value:"One-node etcd (backed by redundant storage)",id:"one-node-etcd-backed-by-redundant-storage",level:4},{value:"RAM (tmpfs) etcd storage",id:"ram-tmpfs-etcd-storage",level:4},{value:"Heartbeat slowdown",id:"heartbeat-slowdown",level:4},{value:"Filesystem tuning",id:"filesystem-tuning",level:4},{value:"Flavors with local storage",id:"flavors-with-local-storage",level:4},{value:"Decision",id:"decision",level:2},{value:"Out of Scope",id:"out-of-scope",level:2},{value:"Implementation note",id:"implementation-note",level:2},{value:"Related Documents",id:"related-documents",level:2},{value:"Conformance Tests",id:"conformance-tests",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"SCS defines an IaaS Flavor Naming standard that mandates a number of standard flavors\nto be available in each SCS-compliant IaaS offering. While offering or exposing\nIaaS is not a requirement for SCS-compliant infrastructure offerings \u2014 SCS allows\nfor platforms only exposing the container layer (plus S3 compatible object storage)\nfor wave 2 (container-based) cloud-native workloads --\nthe SCS reference implementation does include a complete IaaS implementation that\nmany providers want to expose as they have customers desiring access at this layer\nfor wave 1 (VM-based) cloud-native workloads or for the virtualization of more\nclassical (not cloud-native) workloads. The IaaS implementation thus comes with\nstandards."}),"\n",(0,a.jsx)(t.p,{children:"This Decision Record is about adding a few mandatory flavors on the IaaS level\nthat include flavors with local SSD (or better) storage."}),"\n",(0,a.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0100-v2-flavor-naming.md",children:"currently defined standard flavors"}),"\ndo not include\nflavors that use local storage. For certain workloads such as databases or big data\nfilesystems, local storage is highly desirable as replication may be handled at\nthe application layer, making replication/redundancy in a networked storage solution\n(ceph in the SCS reference implementation) an unneeded and undesired property.\nFurthermore, write access to networked and replicated storage typically incurs\na certain latency, as the writes can only be acknowledged once all the replicas\nhave confirmed that the data has hit stable storage. Write latency is critical\nfor e.g. relational database performance."]}),"\n",(0,a.jsx)(t.p,{children:"The main purpose for the IaaS layer in SCS is to perform as a solid foundation\nto provide and manage kubernetes container clusters in a multi-tenant scenario.\nAs such the standards at the IaaS layer should ensure that all the needed\ntypes of resources are available for the container clusters. This is not\ncurrently the case: In a scenario with multiple k8s control-plane nodes set\nup via kubeadm (as part of the k8s cluster-api automation), the control plane\nnodes each run an etcd instance and together form an etcd cluster."}),"\n",(0,a.jsx)(t.p,{children:"etcd is sensitive to scheduling, network and storage latencies. While network\nlatencies and scheduling latencies have not been observed to be an issue in\nclusters within one cloud region, the storage latency is. With remote networked\nstorage as delivered from ceph, the long tail of write latency causes etcd\nto often time out heartbeats, causing a new leader election with a leader\nchange, preventing control plane changes on k8s for a few seconds. Too many\nleader changes can slow down cluster operation and even bring it to a halt."}),"\n",(0,a.jsxs)(t.p,{children:["The etcd requirements ",(0,a.jsx)(t.a,{href:"https://etcd.io/docs/v3.5/op-guide/hardware/#example-hardware-configurations",children:"are well documented"}),".\nIn particular, over a hundred of ",(0,a.jsx)(t.em,{children:"sequential"})," IOPS are recommended. This\nrequires write latencies in the range of a single-digit ms (or better)."]}),"\n",(0,a.jsx)(t.h2,{id:"design-considerations",children:"Design Considerations"}),"\n",(0,a.jsx)(t.h3,{id:"options-considered",children:"Options considered"}),"\n",(0,a.jsx)(t.h4,{id:"one-node-etcd-backed-by-redundant-storage",children:"One-node etcd (backed by redundant storage)"}),"\n",(0,a.jsx)(t.p,{children:"If k8s uses only one control plane node, there will only be one etcd node,\navoiding timed out heartbeats. Single node control planes are typically not\nrecommended for production workloads though. They are limited with respect\nto control plane performance, have a higher chance to fail (as a single node failure\ncan create cluster control-plane downtime) and can not undergo rolling upgrades."}),"\n",(0,a.jsx)(t.p,{children:"Though not the normal setup with kubeadm, it is possible to use a multi-node\ncontrol plane using a single-node etcd. This shares some of the challenges of\nsingle-node control-planes, although recovery may be faster to perform at least\nin scenarios where the etcd backend storage is redundant and not affected by the\nsingle-node outage."}),"\n",(0,a.jsx)(t.p,{children:"Neither scenario fulfills typical requirements for production workloads."}),"\n",(0,a.jsx)(t.h4,{id:"ram-tmpfs-etcd-storage",children:"RAM (tmpfs) etcd storage"}),"\n",(0,a.jsx)(t.p,{children:"etcd could keep its database in volatile memory (e.g. on a tmpfs filesystem).\nFor multi-node etcd clusters, this could actually be made work, as long as at\nleast one cluster member stays alive and proper care is taken to remove shut-down\nnodes from the cluster. A loss of power affecting all nodes or a hardware\nmaintenance operation not tracking etcd needs would result in a complete\nloss of all cluster state. The control plane nodes would require live migration\nto avoid this in the maintenance case. For the power loss scenario, a frequent\nbackup might mitigate the cluster state loss case somewhat."}),"\n",(0,a.jsx)(t.p,{children:"The etcd database is normally limited to 2GiB in size, which is something\nthat is realistic to keep in main memory. (Typical database sizes are\nmuch smaller.)"}),"\n",(0,a.jsx)(t.p,{children:"This option requires additional care and may not be suitable for all\nproduction scenarios, but would seem a possible fallback position for\netcd. It does obviously not address the database scenario."}),"\n",(0,a.jsx)(t.h4,{id:"heartbeat-slowdown",children:"Heartbeat slowdown"}),"\n",(0,a.jsx)(t.p,{children:"To avoid causing too many fail-overs by occasional high latencies, the\nfrequency of heartbeats can be lowered from the default 1/100ms.\nThe reelection timeout should change along with it (typically set to\n10 beats)."}),"\n",(0,a.jsx)(t.p,{children:"This will cause etcd to take a bit more time to notice the loss of a node,\nwhich is not typically critical if done within reasonable limits.\nThis change however does not fully address the issue \u2014 occasional write latencies\nabove 100ms will still cause failed heartbeats, just less often."}),"\n",(0,a.jsxs)(t.p,{children:["This change has been implemented in the\n",(0,a.jsx)(t.a,{href:"https://etcd.io/docs/v3.5/op-guide/hardware/#example-hardware-configurations",children:"k8s-cluster-api-provider"}),"\nreference implementation: The heartbeat has been changed from 1/100ms (10/s)\nto 1/250ms (4/s) and the reelection timeout from 1s to 2.5s."]}),"\n",(0,a.jsx)(t.p,{children:"The etcd process also is afforded a higher CPU priority (lower niceness),\nresulting in a lower scheduling latency, as high-prio processes preempt lower-prio\nones when they get woken up. The etcd process also gets its IO priority\nincreased to get treated preferentially in case the IO scheduler has many\noutstanding requests. This has some positive effects with the CFQ IO scheduler."}),"\n",(0,a.jsx)(t.p,{children:"The slower heartbeat and the priority tweaks do lower the amount of leader\nchanges but are insufficient to completely address the issue on the tests\nperformed against networked ceph-backed storage."}),"\n",(0,a.jsx)(t.h4,{id:"filesystem-tuning",children:"Filesystem tuning"}),"\n",(0,a.jsxs)(t.p,{children:["Databases must ensure that certain data has hit stable storage before acknowledging\nwrites \u2014 this is required in order to live up to the ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ACID",children:"ACID"}),"\nguarantees in situations when disruptions might happen. Databases typically use\n",(0,a.jsx)(t.code,{children:"fsync()"})," calls to ensure that write buffers are written to real persistent storage\nunless they use raw/direct block devices circumventing Linux's page and buffer cache."]}),"\n",(0,a.jsxs)(t.p,{children:["etcd normally uses a write-ahead-log (WOL) file that lives on a Linux filesystem and\nuses ",(0,a.jsx)(t.code,{children:"fsync"})," to ensure the correct write ordering. Trouble with fsync is that it\nalso causes unrelated data to be written out with most existing Linux filesystems,\nadding to the latency."]}),"\n",(0,a.jsxs)(t.p,{children:["It is possible to tell the Linux filesystems to not wait for all data to have hit\nstorage before returning from fsync() calls. This avoids the latency caused by\n",(0,a.jsx)(t.code,{children:"fsync"})," but also subverts the very reason for using ",(0,a.jsx)(t.code,{children:"fsync"}),": In case of a disruption\n(OS crash, power outage, loss of connection to storage, ...), the state is likely\nnot consistent, as the kernel has lied to the application about data having been\nwritten out. Recovery from such a scenario can range from smooth to impossible."]}),"\n",(0,a.jsx)(t.p,{children:"In a multi-node cluster, this may not be as bad as it sounds \u2014 if only one\nnode is affected by a disruption, the crashed node can be recovered by resyncing\nthe data from other nodes. In practice an inconsistent state would be considered\ntoo risky, and it should be preferred to set up a fresh node to join the\nexisting etcd cluster. This would need to be implemented to make this option\nless risky."}),"\n",(0,a.jsx)(t.p,{children:"The reference implementation has an option to use these unsafe filesystem settings.\nHowever, they are not enabled by default for good reasons."}),"\n",(0,a.jsx)(t.h4,{id:"flavors-with-local-storage",children:"Flavors with local storage"}),"\n",(0,a.jsx)(t.p,{children:"Flavors with local storage will have their root filesystem on a local storage\ndevice. To fulfill the need for high IOPS that etcd and especially databases\nhave, the local storage device should be a solid state device \u2014 an SSD or\nNVMe device. While some use cases might even be fulfilled with local\nspinning disks (or raid arrays of local spinning disks)."}),"\n",(0,a.jsx)(t.p,{children:"Local solid state storage avoids any network overhead and offers best latency.\nIt however is not typically redundant, meaning that the loss of the device\nor the complete hardware node will result in data loss. So it is meant to\nbe used with applications such as database clusters, replicating filesystems\nor block devices or etcd which can handle this at the application layer."}),"\n",(0,a.jsx)(t.p,{children:"The flavor naming spec in SCS allows performance to be understated \u2014 a\nflavor with NVMe storage can be advertised under the SSD storage name\n(and of course can be offered under both names)."}),"\n",(0,a.jsx)(t.p,{children:"Note that this addresses the simple case where the root disk with the\nroot filesystem (and possibly additional filesystems that are set up\nwhen first booting) uses the local storage. Scenarios where additional\nlow-latency networked or local storage are made available via cinder\nand attached for database storage are possible and viable options for\nsome scenarios, but not covered here."}),"\n",(0,a.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,a.jsxs)(t.p,{children:["Two new mandatory flavors: ",(0,a.jsx)(t.code,{children:"SCS-2V-4-20s"})," and ",(0,a.jsx)(t.code,{children:"SCS-4V-16-100s"})," are added\nto the SCS flavor naming standard. The first is meant to be a good fit for\nk8s control nodes with etcd while the latter is a solid base for a\nsmall database server. Clouds claiming SCS-compliance for their IaaS\nlayer MUST provide these two additional flavors."]}),"\n",(0,a.jsx)(t.p,{children:"Obviously providers MAY offer many more combinations and e.g. create\nflavors with large local SSDs."}),"\n",(0,a.jsxs)(t.p,{children:["The local storage advertised this way MUST support more than\n1000 ",(0,a.jsx)(t.em,{children:"sequential"})," IOPS per VM of both new mandatory types (which means a\nwrite latency lower than 1ms \u2014 this typically means SSDs/NVMEs that\nsupport at least several 10ks of parallel IOPS, not a challenge for\ncurrent hardware)."]}),"\n",(0,a.jsx)(t.p,{children:"Local disks, SSDs, NVMes MUST have Power-Loss-Protection such that\ndata reported to be written, but in reality being stored in RAM or SLC\ncache of an SSD or NVMe, is guaranteed to not be lost in case of a power\nloss."}),"\n",(0,a.jsx)(t.p,{children:"Like with networked storage, the provider must ensure that data\nfrom previous users is not accessible (e.g. by securely erasing it\nor by using a different encryption key) when local storage gets\nallocated to a new VM."}),"\n",(0,a.jsx)(t.h2,{id:"out-of-scope",children:"Out of Scope"}),"\n",(0,a.jsx)(t.p,{children:"Hardware nodes (hypervisors in OpenStack language) that support flavors\nwith local storage (are part of an appropriate OpenStack host aggregate)\nmay have many VMs competing for bandwidth to the attached local storage\ndevices; the host needs to be configured such that it can sustain VMs\nwriting at full speed without causing the host to be overloaded or\nto cause huge queues for these writes."}),"\n",(0,a.jsx)(t.p,{children:"A more generic approach is to apply storage QoS policies to the VMs to\nmanage bandwidth and IOPS and create the ability to have better\nperformance isolation with certain guarantees. While this is desirable,\nit has not been found a necessity for etcd in our tests.\nDisk IO QoS is not part of this spec but may be considered in another one."}),"\n",(0,a.jsx)(t.p,{children:"Live-migration with local storage is significantly more difficult than with\nnetworked storage: The contents of the local disks also need to be replicated\nover to the new host. Live-migration for these VMs may thus take significantly\nlonger or not be possible at all, depending on the configuration from the provider.\nNot supporting live-migration is OK for flavors with local disks according\nto the flavor naming spec \u2014 a capability to indicate whether\nlive-migration is supported will be subject to a flavor-metadata discoverability\nspec that is planned for the future."}),"\n",(0,a.jsx)(t.h2,{id:"implementation-note",children:"Implementation note"}),"\n",(0,a.jsx)(t.p,{children:"Local storage in OpenStack can be provided directly via nova or via the\ncinder service. While the latter has the advantage of making volumes\nvisible and manageable via most of the normal cinder capabilities, it\nhas the disadvantage of creating an indirection via iSCSI. This\nresults in higher latency. The requirements in the above spec are\nnot meant to mandate or prevent the implementation via either route."}),"\n",(0,a.jsx)(t.h2,{id:"related-documents",children:"Related Documents"}),"\n",(0,a.jsxs)(t.p,{children:["The flavors will be added as mandatory flavors to the\n",(0,a.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Standards/scs-0100-v2-flavor-naming.md",children:"flavor-naming standard"}),",\nwhich will thus have to be released in a v3."]}),"\n",(0,a.jsxs)(t.p,{children:["The IOPS and Power-Loss requirements from this decision should become\npart of the flavor-naming standard for disk type ",(0,a.jsx)(t.code,{children:"s"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"When we standardize storage types in the future, additional possibilities\nto solve the latency requirements for databases and etcd may emerge."}),"\n",(0,a.jsx)(t.p,{children:"When we standardize QoS features there, we may amend this standard with\nQoS recommendations or possibly requirements."}),"\n",(0,a.jsx)(t.p,{children:"A future flavor metadata discoverability standard will indicate whether\nthese flavors can be live-migrated. A future VM metadata standard will allow\nusers to request live-migration and/or cold migration or restart to be or to\nnot be performed."}),"\n",(0,a.jsx)(t.h2,{id:"conformance-tests",children:"Conformance Tests"}),"\n",(0,a.jsxs)(t.p,{children:["The list of mandatory flavors that needs to be present should be added to the\n",(0,a.jsx)(t.a,{href:"https://github.com/SovereignCloudStack/standards/blob/main/Tests/iaas/SCS-Spec.MandatoryFlavors.yaml",children:"SCS-Spec.MandatoryFlavors.yaml"}),"\nspec as soon as this ADR becomes part of the certification requirements."]}),"\n",(0,a.jsx)(t.p,{children:"Checks for conforming with IOPS and purging requirements will require\ntest instances to be launched and might become part of a monitoring\nsolution."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(96540);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);