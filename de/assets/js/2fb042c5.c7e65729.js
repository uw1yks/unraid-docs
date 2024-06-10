"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5067],{2941:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=s(5893),i=s(1151);const t={},o="Version 6.12.10 2024-04-03",a={id:"unraid-os/release-notes/6.12.10",title:"Version 6.12.10 2024-04-03",description:"Upgrade notes",source:"@site/docs/unraid-os/release-notes/6.12.10.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.10",permalink:"/unraid-docs/de/unraid-os/release-notes/6.12.10",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.10.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.12.9",permalink:"/unraid-docs/de/unraid-os/release-notes/6.12.9"},next:{title:"6.11.0",permalink:"/unraid-docs/de/unraid-os/release-notes/6.11.0"}},l={},d=[{value:"Upgrade notes",id:"upgrade-notes",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Out of date plugins",id:"out-of-date-plugins",level:4},{value:"Call traces and crashes related to macvlan",id:"call-traces-and-crashes-related-to-macvlan",level:4},{value:"Network problems due to jumbo frames",id:"network-problems-due-to-jumbo-frames",level:4},{value:"Problems due to Realtek network cards",id:"problems-due-to-realtek-network-cards",level:4},{value:"Other issues?",id:"other-issues",level:4},{value:"Rolling back",id:"rolling-back",level:3},{value:"Changes vs. 6.12.9",id:"changes-vs-6129",level:2},{value:"Bug fixes and improvements",id:"bug-fixes-and-improvements",level:3},{value:"Linux kernel",id:"linux-kernel",level:3},{value:"Base distro",id:"base-distro",level:3}];function c(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"version-61210-2024-04-03",children:"Version 6.12.10 2024-04-03"}),"\n",(0,r.jsx)(n.h2,{id:"upgrade-notes",children:"Upgrade notes"}),"\n",(0,r.jsx)(n.p,{children:"This release reverts to an earlier version of the Linux kernel to resolve two issues being reported\nin 6.12.9. It also includes a 'curl' security update and corner case bug fix."}),"\n",(0,r.jsxs)(n.p,{children:["Note: Unraid OS v6.12.x and all earlier versions are ",(0,r.jsx)(n.strong,{children:"not"})," vulnerable to the xz backdoor ",(0,r.jsx)(n.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2024-3094",children:"CVE-2024-3094"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"known-issues",children:"Known issues"}),"\n",(0,r.jsx)(n.h4,{id:"out-of-date-plugins",children:"Out of date plugins"}),"\n",(0,r.jsx)(n.p,{children:"Out of date plugins can cause problems, we recommend they be kept current."}),"\n",(0,r.jsx)(n.h4,{id:"call-traces-and-crashes-related-to-macvlan",children:"Call traces and crashes related to macvlan"}),"\n",(0,r.jsxs)(n.p,{children:["If you are getting call traces related to macvlan (or any unexplained crashes, really), as a first step\nwe recommend navigating to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Docker"})}),", switching to ",(0,r.jsx)(n.strong,{children:"advanced"})," view, and changing\nthe ",(0,r.jsx)(n.strong,{children:"Docker custom network type"})," from ",(0,r.jsx)(n.strong,{children:"macvlan"})," to ",(0,r.jsx)(n.strong,{children:"ipvlan"}),". This is the default configuration\nthat Unraid has shipped with since version 6.11.5 and should work for most systems."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that some users have reported issues with port forwarding from certain routers (Fritzbox) and reduced\nfunctionality with advanced network management tools (Ubiquity) when in ipvlan mode. If this affects you,\nsee the alternate solution available since Unraid ",(0,r.jsx)(n.a,{href:"/unraid-docs/de/unraid-os/release-notes/6.12.4#fix-for-macvlan-call-traces",children:"6.12.4"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"network-problems-due-to-jumbo-frames",children:"Network problems due to jumbo frames"}),"\n",(0,r.jsxs)(n.p,{children:["If you are having network issues of any kind, confirm that you have not enabled jumbo frames.\nNavigate to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Network Settings > eth0"})})," and confirm the ",(0,r.jsx)(n.strong,{children:"Desired MTU"})," is 1500.\nFor more information see the ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/topic/120220-fix-common-problems-more-information/page/2/#comment-1167702",children:"Fix Common Problems warning for jumbo frames"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"problems-due-to-realtek-network-cards",children:"Problems due to Realtek network cards"}),"\n",(0,r.jsx)(n.p,{children:"Upgraded kernel fixes the deadlock issue with jumbo frames and the in-tree Realtek 8125 driver. However, we\nstill recommend following the advice above regarding jumbo frames."}),"\n",(0,r.jsxs)(n.p,{children:["If you continue to have network stability issues and ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Tools > System Devices"})})," shows that you have a Realtek ethernet controller,\ngrab the part number shown and search Community Apps to see if there is a Realtek vendor-supplied driver plugin for that device.\nFor more information, see the ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/topic/141349-plugin-realtek-r8125-r8168-and-r81526-drivers/",children:"support page for Realtek driver plugins"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"other-issues",children:"Other issues?"}),"\n",(0,r.jsxs)(n.p,{children:["We highly recommend installing the ",(0,r.jsx)(n.strong,{children:"Fix Common Problems"})," plugin as it will warn you of common configuration problems."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are having other crashes or stability issues, navigate to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Syslog Server"})})," and\nenable ",(0,r.jsx)(n.strong,{children:"Mirror syslog to flash"}),". This will cause additional wear and tear on you USB flash boot device but is\nuseful in the short term for gathering logs after a crash."]}),"\n",(0,r.jsxs)(n.p,{children:["After the next reboot, navigate to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Tools > Diagnostics"})})," and download your anonymized diagnostics (as of 6.12.5,\ndiagnostics automatically include logs that were mirrored to the flash drive)."]}),"\n",(0,r.jsxs)(n.p,{children:["Finally, start a new topic under ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/55-general-support/",children:"General Support"})," and provide all the\ndetails of the issue. Once the issue is resolved, be sure to disable ",(0,r.jsx)(n.strong,{children:"Mirror syslog to flash"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"rolling-back",children:"Rolling back"}),"\n",(0,r.jsxs)(n.p,{children:["If rolling back earlier than 6.12.9, also see the ",(0,r.jsx)(n.a,{href:"/unraid-docs/de/unraid-os/release-notes/6.12.9#rolling-back",children:"6.12.9 release notes"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"changes-vs-6129",children:["Changes vs. ",(0,r.jsx)(n.a,{href:"/unraid-docs/de/unraid-os/release-notes/6.12.9",children:"6.12.9"})]}),"\n",(0,r.jsx)(n.h3,{id:"bug-fixes-and-improvements",children:"Bug fixes and improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Resolve issues mounting remote SMB shares via the Unassigned Devices plugin."}),"\n",(0,r.jsx)(n.li,{children:"Resolve issues with certain Asmedia controllers not seeing all the attached devices."}),"\n",(0,r.jsx)(n.li,{children:"nfs: (revert) NFSv4 mounts by default"}),"\n",(0,r.jsx)(n.li,{children:"zfs: Detect if insufficient pools slots are defined for an imported pool with a missing device."}),"\n",(0,r.jsx)(n.li,{children:"Fix translations issue with SystemDrivers"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"version 6.1.79"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"base-distro",children:"Base distro"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"curl: version: 8.7.1 (CVE-2024-2466 CVE-2024-2398 CVE-2024-2379 CVE-2024-2004)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(7294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);