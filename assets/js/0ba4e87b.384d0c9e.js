"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8868],{5852:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=i(5893),r=i(1151);const l={},t="Version 6.12.2 2023-06-29",d={id:"unraid-os/release-notes/6.12.2",title:"Version 6.12.2 2023-06-29",description:"Changes vs. 6.12.1",source:"@site/docs/unraid-os/release-notes/6.12.2.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.2",permalink:"/unraid-docs/unraid-os/release-notes/6.12.2",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.2.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.12.1",permalink:"/unraid-docs/unraid-os/release-notes/6.12.1"},next:{title:"6.12.3",permalink:"/unraid-docs/unraid-os/release-notes/6.12.3"}},o={},a=[{value:"Upgrade notes",id:"upgrade-notes",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Rolling back",id:"rolling-back",level:3},{value:"Highlights",id:"highlights",level:2},{value:"Bug fixes and improvements",id:"bug-fixes-and-improvements",level:2},{value:"Linux kernel",id:"linux-kernel",level:2},{value:"Base Distro",id:"base-distro",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"version-6122-2023-06-29",children:"Version 6.12.2 2023-06-29"}),"\n",(0,s.jsxs)(n.p,{children:["Changes vs. ",(0,s.jsx)(n.a,{href:"/unraid-docs/unraid-os/release-notes/6.12.1",children:"6.12.1"})]}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-notes",children:"Upgrade notes"}),"\n",(0,s.jsx)(n.h3,{id:"known-issues",children:"Known issues"}),"\n",(0,s.jsxs)(n.p,{children:["Please see the ",(0,s.jsx)(n.a,{href:"/unraid-docs/unraid-os/release-notes/6.12.0#known-issues",children:"6.12.0 release notes"})," for general known issues."]}),"\n",(0,s.jsx)(n.h3,{id:"rolling-back",children:"Rolling back"}),"\n",(0,s.jsxs)(n.p,{children:["If rolling back earlier than 6.12.0, also see the ",(0,s.jsx)(n.a,{href:"/unraid-docs/unraid-os/release-notes/6.12.0#rolling-back",children:"6.12.0 release notes"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsx)(n.p,{children:"This is mainly a bug fix release, including also a minor security update.  Other highlights:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We reverted ",(0,s.jsx)(n.strong,{children:"docker"})," from v23.0.6, introduced during Unraid OS 6.12 development, to v20.10.24, which is the latest patch\nrelease of ",(0,s.jsx)(n.strong,{children:"docker"})," used in Unraid OS 6.11.  This to address increased memory usage and other issues\ndiscovered with ",(0,s.jsx)(n.strong,{children:"docker"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"A small necessary change to invoke our 'update_services' script whenever a WireGuard tunnel starts or stops\nis automatically applied to all 'config/wireguard/*.conf' files when you update via Update OS page.  For\nmanual update or if you downgrade, it is necessary to make a \"dummy change\" in a setting on the Settings/VPN Manager page and\nthen click Apply."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"bug-fixes-and-improvements",children:"Bug fixes and improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"email notifications: add line in /etc/php.ini: 'mail.mixed_lf_and_crlf=On' to workaround change in PHP8 CRLF handling"}),"\n",(0,s.jsx)(n.li,{children:"emhttpd: Fix regression: emulated ZFS volumes not recognized"}),"\n",(0,s.jsx)(n.li,{children:"emhttpd: Fix regression: format fails if diskFsType==auto and defaultFsType specifies encryption"}),"\n",(0,s.jsx)(n.li,{children:"emhtptd: Fix regression: mount fails if diskFsType==auto"}),"\n",(0,s.jsx)(n.li,{children:"htop: remove predefined /root/.config/htop/htoprc file"}),"\n",(0,s.jsxs)(n.li,{children:["network: RC services update:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NFS - fix service reload"}),"\n",(0,s.jsx)(n.li,{children:"RPC - fix service reload"}),"\n",(0,s.jsx)(n.li,{children:"NGINX - remove HTTPS port in FQDN redirect when default 443"}),"\n",(0,s.jsx)(n.li,{children:"All services - register IPv4 Link local assignment (169.254.xxx.xxx)"}),"\n",(0,s.jsx)(n.li,{children:"All services - make lock file programmable"}),"\n",(0,s.jsx)(n.li,{children:"WireGuard: delayed service update to avoid race condition"}),"\n",(0,s.jsx)(n.li,{children:"rc.library: do not allow duplicates in bind list"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["WebGUI: Dashboard updates:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Re-introduce show/hide tile content"}),"\n",(0,s.jsx)(n.li,{children:"Add new icon function to show/hide all content at once"}),"\n",(0,s.jsx)(n.li,{children:"Reduce gap between columns"}),"\n",(0,s.jsx)(n.li,{children:"description -> model"}),"\n",(0,s.jsx)(n.li,{children:"ZFS: fix percentage value to max 100%"}),"\n",(0,s.jsx)(n.li,{children:"Use prototype function: This makes it easier for 3rd party developers to automatically hide dynamic content"}),"\n",(0,s.jsx)(n.li,{children:"Handle duplicate IP assignments and give warning"}),"\n",(0,s.jsx)(n.li,{children:"change header MEMORY to SYSTEM"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: OS Update: add checkbox to confirm reading release notes before upgrading"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: diagnostics: include list of duplicate assignments"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: NFS: for Security/Private increase Rule field from 256 to 512 characters."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"version 6.1.36"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"base-distro",children:"Base Distro"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"bind: version -9.16.42 (CVE-2023-2911)"}),"\n",(0,s.jsx)(n.li,{children:"docker: 20.10.24 (revert from v23.0.6)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>t});var s=i(7294);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);