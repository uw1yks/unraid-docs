"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8882],{8240:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=s(5893),r=s(1151);const o={},t=void 0,l={id:"unraid-os/release-notes/6.11.3",title:"6.11.3",description:"Version 6.11.3 2022-11-08",source:"@site/docs/unraid-os/release-notes/6.11.3.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.11.3",permalink:"/unraid-docs/zh/unraid-os/release-notes/6.11.3",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.11.3.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.11.2",permalink:"/unraid-docs/zh/unraid-os/release-notes/6.11.2"},next:{title:"6.11.4",permalink:"/unraid-docs/zh/unraid-os/release-notes/6.11.4"}},d={},a=[{value:"Version 6.11.3 2022-11-08",id:"version-6113-2022-11-08",level:2},{value:"Management",id:"management",level:3},{value:"VM Manager",id:"vm-manager",level:3},{value:"Base Distro",id:"base-distro",level:3}];function c(e){const n={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"version-6113-2022-11-08",children:"Version 6.11.3 2022-11-08"}),"\n",(0,i.jsx)(n.p,{children:"This release is focused on bug fixes and minor improvements. In particular, we need to revert a base library due to a bug which\nprevents formatting devices >2TB in size."}),"\n",(0,i.jsx)(n.h3,{id:"management",children:"Management"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reverted 'libpopt.so.0.0.1' to workaround 'sgdisk' bug used to format devices larger than 2TB."}),"\n",(0,i.jsx)(n.li,{children:"Fixed issue where description setting for 'root' user was not preserved across reboots."}),"\n",(0,i.jsx)(n.li,{children:"Fix issue that sometimes information window opens empty."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"vm-manager",children:"VM Manager"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set correct values when edit for USB Boot and correct Share Selection."}),"\n",(0,i.jsx)(n.li,{children:"Add Nic boot order."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"base-distro",children:"Base Distro"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"gptfdisk: version 1.0.8 (revert from version 1.0.9)"}),"\n",(0,i.jsx)(n.li,{children:"libXext: version 1.3.5"}),"\n",(0,i.jsx)(n.li,{children:"libXinerama: version 1.1.5"}),"\n",(0,i.jsx)(n.li,{children:"libdrm: version 2.4.114"}),"\n",(0,i.jsx)(n.li,{children:"libedit: version 20221030_3.1"}),"\n",(0,i.jsx)(n.li,{children:"mcelog: version 190"}),"\n",(0,i.jsx)(n.li,{children:"ntfs-3g: version 2022.10.3"}),"\n",(0,i.jsx)(n.li,{children:"openssl: version 1.1.1s"}),"\n",(0,i.jsx)(n.li,{children:"openssl-solibs: version 1.1.1s"}),"\n",(0,i.jsx)(n.li,{children:"pixman: version 0.42.2"}),"\n",(0,i.jsx)(n.li,{children:"sessreg: version 1.1.3"}),"\n",(0,i.jsx)(n.li,{children:"sudo: version 1.9.12p1"}),"\n",(0,i.jsx)(n.li,{children:"xsetroot: version 1.1.3"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var i=s(7294);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);