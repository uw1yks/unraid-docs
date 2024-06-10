"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6547],{3584:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(5893),s=n(1151);const r={sidebar_position:4},a="Virtualization host",o={id:"unraid-os/overview/virtualization-host",title:"Virtualization host",description:"Unraid is designed to run as a virtualization host, leveraging a hypervisor to partition resources to virtualized guests in a secure and isolated manner. By supporting the use of virtual machines on Unraid, you can run an even wider array of applications in isolated environments and handle a variety of other tasks, beyond network-attached storage.",source:"@site/docs/unraid-os/overview/virtualization-host.md",sourceDirName:"unraid-os/overview",slug:"/unraid-os/overview/virtualization-host",permalink:"/unraid-docs/fr/unraid-os/overview/virtualization-host",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/overview/virtualization-host.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"unraidSidebar",previous:{title:"Application Server",permalink:"/unraid-docs/fr/unraid-os/overview/application-server"},next:{title:"Simplified Management",permalink:"/unraid-docs/fr/unraid-os/overview/unraid-management"}},l={},c=[{value:"VM benefits",id:"vm-benefits",level:2},{value:"Assignable devices",id:"assignable-devices",level:2}];function d(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"virtualization-host",children:"Virtualization host"}),"\n",(0,t.jsx)(i.p,{children:"Unraid is designed to run as a virtualization host, leveraging a hypervisor to partition resources to virtualized guests in a secure and isolated manner. By supporting the use of virtual machines on Unraid, you can run an even wider array of applications in isolated environments and handle a variety of other tasks, beyond network-attached storage."}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["To use the hardware virtualization feature in Unraid, you need a combination of CPU, chipset, a compatible BIOS, and device drivers, to support functionality. A full account of these requirements can be found ",(0,t.jsx)(i.a,{href:"/unraid-docs/fr/unraid-os/manual/vm/vm-management",children:"here"}),". If your server does not meet these requirements, the VMS menu will be disabled in the Unraid WebGUI."]})}),"\n",(0,t.jsx)(i.h2,{id:"vm-benefits",children:"VM benefits"}),"\n",(0,t.jsxs)(i.p,{children:["While ",(0,t.jsx)(i.a,{href:"/unraid-docs/fr/unraid-os/overview/application-server",children:"Docker containers"})," are the preferred method for running Linux-based headless applications, virtual machines offer unique benefits:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Isolation"})," - hardware virtualization enables you to run multiple operating systems and applications in isolated virtual environments on a single Unraid server. Each VM operates independently, ensuring that if one VM fails or is compromised, it doesn't affect the others."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Consolidation"})," - you can consolidate multiple physical servers into a single Unraid machine, reducing hardware and maintenance costs. This is especially useful for manageability."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Resource allocation"})," - hardware virtualization on Unraid allows you to allocate specific CPU cores, memory, storage, and network resources to each VM. This ensures that critical workloads get the necessary resources without impacting other VMs."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Testing and development"})," - You can use VMs to create and test software in different environments without needing multiple physical machines. This accelerates the development and testing process."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Security"})," - VMs can be isolated from each other, enhancing security. If one VM is compromised, it's more challenging for an attacker or malware to move laterally to other VMs or the host system."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Legacy application support"})," - Hardware virtualization allows you to run legacy applications or operating systems that may not be compatible with newer hardware or software environments."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Resource isolation"})," - Each VM can have its own dedicated resources, ensuring that one VM's activities do not impact the performance of others. This is crucial for applications with strict performance requirements."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Resource overcommitment"})," - In some cases, you can overcommit resources, for example CPU and memory, to VMs. This allows more VMs to run on a physical host than the host's physical resources would typically support. This is done with the understanding that not all VMs will use their allocated resources simultaneously."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"assignable-devices",children:"Assignable devices"}),"\n",(0,t.jsx)(i.p,{children:"The Unraid implementation of KVM includes modern versions of QEMU, libvirt, VFIO*, VirtIO, and VirtFS. It also supports Open Virtual Machine Firmware (OVMF), which enables UEFI support for virtual machines (adding SecureBoot support as well as simplified GPU passthrough support). This allows for a wide array of resources to be assigned to virtual machines ranging from the basics (storage, compute, network, and memory) to the advanced (full PCI / USB devices). We can emulate multiple machine types (i440fx and Q35), support CPU pinning, optimize for SSDs, and much more."}),"\n",(0,t.jsx)(i.p,{children:"Best of all, these virtualization technologies prevent their use from impacting the reliability of the host operating system."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Assignable resources",src:n(7042).Z+"",width:"1000",height:"1090"})})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7042:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/KVM@2x-9d51dccfc0f854d6fe791273e5c01664.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>a});var t=n(7294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);