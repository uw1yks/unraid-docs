"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1698],{2475:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=i(5893),r=i(1151);const t={},o=void 0,d={id:"unraid-os/release-notes/6.9.1",title:"6.9.1",description:"Version 6.9.1 2021-03-08",source:"@site/docs/unraid-os/release-notes/6.9.1.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.9.1",permalink:"/unraid-os/release-notes/6.9.1",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.9.1.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.9.0",permalink:"/unraid-os/release-notes/6.9.0"},next:{title:"6.9.2",permalink:"/unraid-os/release-notes/6.9.2"}},l={},a=[{value:"Version 6.9.1 2021-03-08",id:"version-691-2021-03-08",level:2},{value:"Notable Bug Fixes and Improvements",id:"notable-bug-fixes-and-improvements",level:2},{value:"Driver Updates",id:"driver-updates",level:3},{value:"Change Log vs. Unraid OS 6.9.0",id:"change-log-vs-unraid-os-690",level:2},{value:"Base distro",id:"base-distro",level:4},{value:"Linux kernel",id:"linux-kernel",level:4},{value:"Management",id:"management",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"version-691-2021-03-08",children:"Version 6.9.1 2021-03-08"}),"\n",(0,s.jsx)(n.h2,{id:"notable-bug-fixes-and-improvements",children:"Notable Bug Fixes and Improvements"}),"\n",(0,s.jsxs)(n.p,{children:["Fixed issue where code outside the Unraid OS Management Utility calling\n",(0,s.jsx)(n.code,{children:"smartctl"})," would set up conditions where devices would never spin down.\nNote: you still need\n",(0,s.jsx)(n.a,{href:"https://forums.unraid.net/profile/8006-doron/",children:"@doron"}),"'s ",(0,s.jsx)(n.a,{href:"https://forums.unraid.net/topic/97351-plugin-spin-down-sas-drives/",children:"SAS\nSpindown\nplugin"}),"\nto properly support SAS device spindown."]}),"\n",(0,s.jsxs)(n.p,{children:["For Docker: if an in-tree GPU driver is loaded which results in creating\n",(0,s.jsx)(n.code,{children:"/dev/dri/*"})," device nodes, we set permissions for these nodes to ",(0,s.jsx)(n.code,{children:"0777"}),"\nin order to ease integration of containers using GPU for transcoding."]}),"\n",(0,s.jsx)(n.p,{children:"Typing 'exit' in a Terminal window will now close the window (yay!)."}),"\n",(0,s.jsx)(n.p,{children:"We added a 'no-cache' header to NoVNC web access so that future Unraid\nOS releases will no longer have stale web components."}),"\n",(0,s.jsx)(n.p,{children:"Updated the openssl package to version 1.1.1j which has security\nupdates."}),"\n",(0,s.jsx)(n.p,{children:"Updated the Linux kernel to 5.10.21, a patch release to 5.10 LTS kernel."}),"\n",(0,s.jsx)(n.p,{children:"Included kernel config settings necessary to include certain hardware\nmonitoring devices and added support for new devices."}),"\n",(0,s.jsx)(n.h3,{id:"driver-updates",children:"Driver Updates"}),"\n",(0,s.jsxs)(n.p,{children:["The Nvidia GPU driver has been updated to 460.56 and should work with\nthis kernel 5.10.21. Please install\n",(0,s.jsx)(n.a,{href:"https://forums.unraid.net/profile/72388-ich777/",children:"@ich777"}),"'s\n",(0,s.jsx)(n.a,{href:"https://forums.unraid.net/topic/98978-plugin-nvidia-driver/",children:"Nvidia-Driver\nplugin"})," to\ndownload and install this driver."]}),"\n",(0,s.jsx)(n.h2,{id:"change-log-vs-unraid-os-690",children:"Change Log vs. Unraid OS 6.9.0"}),"\n",(0,s.jsx)(n.h4,{id:"base-distro",children:"Base distro"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"openssl: version 1.1.1j (CVE-2021-23841 CVE-2021-23840)"}),"\n",(0,s.jsx)(n.li,{children:"openssl-solibs: version 1.1.1j"}),"\n",(0,s.jsx)(n.li,{children:"ttyd: version 1.6.3"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"version 5.10.21"}),"\n",(0,s.jsx)(n.li,{children:"CONFIG_WATCHDOG: Watchdog Timer Support"}),"\n",(0,s.jsx)(n.li,{children:"added several new hwmon drivers"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"management",children:"Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"emhttp: monitor partition statistics instead of device statistics in\nspindown/spinup logic"}),"\n",(0,s.jsx)(n.li,{children:"rc.local: ensure required directories exist on USB flash boot device"}),"\n",(0,s.jsx)(n.li,{children:"rc.local: for Docker containers: grant access to graphics device\nnodes /dev/dri/*"}),"\n",(0,s.jsxs)(n.li,{children:["rc.nginx: add Cache-Control",":nocache"," header to novnc"]}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: Increase syslog buffer from 1000 to 3000 lines"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: SysDevs fix display aberration"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: Diagnostics: include modprobe.d files"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: Diagnostics: include go as go.txt"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: Update share security helptext"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: Deprecate donation links in templates in lieu of links in CA\nprofiles"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: Protect GUI from invalid .page files"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: Suppress ipv6 multicast entries in route table display"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: synchronize helptext.txt with lang-en_US repo"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: user management - disable password autocomplete"}),"\n",(0,s.jsx)(n.li,{children:"WebGUI: Dashboard: Fix color for utilization of disk"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var s=i(7294);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);