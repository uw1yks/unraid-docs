"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5275],{2241:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var r=i(5893),s=i(1151);const l={},o=void 0,t={id:"unraid-os/release-notes/6.11.2",title:"6.11.2",description:"Version 6.11.2 2022-11-04",source:"@site/docs/unraid-os/release-notes/6.11.2.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.11.2",permalink:"/unraid-docs/zh/unraid-os/release-notes/6.11.2",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.11.2.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.11.1",permalink:"/unraid-docs/zh/unraid-os/release-notes/6.11.1"},next:{title:"6.11.3",permalink:"/unraid-docs/zh/unraid-os/release-notes/6.11.3"}},d={},a=[{value:"Version 6.11.2 2022-11-04",id:"version-6112-2022-11-04",level:2},{value:"VM Manager",id:"vm-manager",level:3},{value:"WireGuard",id:"wireguard",level:3},{value:"Plugin manager",id:"plugin-manager",level:3},{value:"Scheduler",id:"scheduler",level:3},{value:"Misc. WebGUI",id:"misc-webgui",level:3},{value:"Linux kernel",id:"linux-kernel",level:3},{value:"Base Distro",id:"base-distro",level:3}];function c(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"version-6112-2022-11-04",children:"Version 6.11.2 2022-11-04"}),"\n",(0,r.jsx)(n.p,{children:"This release is focused on bug fixes and minor improvements. Please note there are important\nsecurity mitigations in Samba, all uses are encouraged to update."}),"\n",(0,r.jsx)(n.h3,{id:"vm-manager",children:"VM Manager"}),"\n",(0,r.jsxs)(n.p,{children:["If you boot a VM from a passed physical USB device there is a new setting called ",(0,r.jsx)(n.strong,{children:"Enable USB boot"})," which\nmust be set to ",(0,r.jsx)(n.strong,{children:"Yes"}),". This is due to feature change in the latest OVMF component."]}),"\n",(0,r.jsx)(n.p,{children:"Changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Add boot order for USB and USB Boot option. Using 'boot order' field VM can boot from\na passed-through NVMe controller/device."}),"\n",(0,r.jsx)(n.li,{children:"Add virtiofs/9p Unraid share mapping."}),"\n",(0,r.jsx)(n.li,{children:"CD Hotplug bug fix."}),"\n",(0,r.jsx)(n.li,{children:"Fix Hotplug within Templates."}),"\n",(0,r.jsx)(n.li,{children:"Fix changing from passthru to custom CPU."}),"\n",(0,r.jsx)(n.li,{children:"Test for guest agent to suppress error message in libvirt log, and\nshow text for guest not running or guest agent is not installed."}),"\n",(0,r.jsx)(n.li,{children:"Fix unable to change HyperV settings."}),"\n",(0,r.jsx)(n.li,{children:"Add 'start with console' option."}),"\n",(0,r.jsx)(n.li,{children:"OVMF for QEMU: version edk2-stable202208"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"wireguard",children:"WireGuard"}),"\n",(0,r.jsx)(n.p,{children:"Changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed problem setting up tunnels if using default network.cfg settings."}),"\n",(0,r.jsx)(n.li,{children:"Fix typo setting up routes."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"plugin-manager",children:"Plugin manager"}),"\n",(0,r.jsx)(n.p,{children:"Changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If plugin files cannot be read from CDN URL, fall back to non-CDN URL."}),"\n",(0,r.jsx)(n.li,{children:"Enforce plugin files must end in '.plg'."}),"\n",(0,r.jsx)(n.li,{children:"Fix post hook failing when plugin download fails."}),"\n",(0,r.jsx)(n.li,{children:"Adjust the wget parameters to keep it from indefinitely hanging."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"scheduler",children:"Scheduler"}),"\n",(0,r.jsx)(n.p,{children:"For scheduled Parity Checks, change default mode to Non-correcting. In case there are disk\nissues during a parity check it would be safer to have the default be non-correct. If sync errors\nare detected then the user can analyze the log and act accordingly."}),"\n",(0,r.jsx)(n.h3,{id:"misc-webgui",children:"Misc. WebGUI"}),"\n",(0,r.jsx)(n.p,{children:"Changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DashStats: The inbound networkstats is out of place when numeric value is xxx.x."}),"\n",(0,r.jsx)(n.li,{children:"Docker: Add/clarify Help to Docker Custom Network settings."}),"\n",(0,r.jsx)(n.li,{children:"Docker: Fix display aberration on orphan images"}),"\n",(0,r.jsx)(n.li,{children:'SMART attributes: clarify message: "Can not read attributes" to "Attributes not available"'}),"\n",(0,r.jsx)(n.li,{children:"ShareEdit/ShareList: show pool not defined when share pool is not a defined pool"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"version 5.19.17"}),"\n",(0,r.jsx)(n.li,{children:"patch: additional NVMe BOGUS_NID quirks for non-compliant devices reported by users"}),"\n",(0,r.jsxs)(n.li,{children:["sound support:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CONFIG_SOUND: Sound card support"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_SND: Advanced Linux Sound Architecture"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_SND_OSSEMUL: Enable OSS Emulation"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_SND_PCM_OSS: OSS PCM (digital audio) API"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_SND_HRTIMER: HR-timer backend support"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_SND_SUPPORT_OLD_API: Support old ALSA API"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_SND_PROC_FS: Sound Proc FS Support"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_IPV6: The IPv6 protocol (change from module to built-in)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"base-distro",children:"Base Distro"}),"\n",(0,r.jsx)(n.p,{children:"Package updates including CVE mitigations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"bash: version 5.2.002"}),"\n",(0,r.jsx)(n.li,{children:"bind: version 9.18.8 (CVE-2022-38178 CVE-2022-38178 CVE-2022-3080 CVE-2022-2795)"}),"\n",(0,r.jsx)(n.li,{children:"btrfs-progs: version 6.0"}),"\n",(0,r.jsx)(n.li,{children:"curl: version 7.86.0"}),"\n",(0,r.jsx)(n.li,{children:"dbus: version 1.14.4"}),"\n",(0,r.jsx)(n.li,{children:"freeglut: version 3.4.0"}),"\n",(0,r.jsx)(n.li,{children:"git: version 2.38.1 (CVE-2022-39253 CVE-2022-39260)"}),"\n",(0,r.jsx)(n.li,{children:"glibc-zoneinfo: version 2022e"}),"\n",(0,r.jsx)(n.li,{children:"harfbuzz: version 5.3.1"}),"\n",(0,r.jsx)(n.li,{children:"icu4c: version 72.1"}),"\n",(0,r.jsx)(n.li,{children:"iproute2: version 6.0.0"}),"\n",(0,r.jsx)(n.li,{children:"kernel-firmware: version 20221017_48407ff"}),"\n",(0,r.jsx)(n.li,{children:"less: version 608"}),"\n",(0,r.jsx)(n.li,{children:"libXmu: version 1.1.4"}),"\n",(0,r.jsx)(n.li,{children:"libXrender: version 0.9.11"}),"\n",(0,r.jsx)(n.li,{children:"libedit: version 20221009_3.1"}),"\n",(0,r.jsx)(n.li,{children:"libffi: version 3.4.4"}),"\n",(0,r.jsx)(n.li,{children:"libgpg-error: version 1.46"}),"\n",(0,r.jsx)(n.li,{children:"libpciaccess: version 0.17"}),"\n",(0,r.jsx)(n.li,{children:"libunistring: version 1.1"}),"\n",(0,r.jsx)(n.li,{children:"libxkbfile: version 1.1.1"}),"\n",(0,r.jsx)(n.li,{children:"libxshmfence: version 1.3.1"}),"\n",(0,r.jsx)(n.li,{children:"lsof: version 4.96.4"}),"\n",(0,r.jsx)(n.li,{children:"nginx: version 1.22.1"}),"\n",(0,r.jsx)(n.li,{children:"openssh: version 9.1p1"}),"\n",(0,r.jsx)(n.li,{children:"php: version 7.4.32"}),"\n",(0,r.jsx)(n.li,{children:"pixman: version 0.42.0"}),"\n",(0,r.jsx)(n.li,{children:"rsync: version 3.2.7"}),"\n",(0,r.jsx)(n.li,{children:"samba: version 4.17.2 (CVE-2021-20251 CVE-2022-3437 CVE-2022-3592)"}),"\n",(0,r.jsx)(n.li,{children:"sudo: version 1.9.12"}),"\n",(0,r.jsx)(n.li,{children:"tree: version 2.0.4"}),"\n",(0,r.jsx)(n.li,{children:"xkeyboard-config: version 2.37"}),"\n",(0,r.jsx)(n.li,{children:"xterm: version 375"}),"\n",(0,r.jsx)(n.li,{children:"zlib: version 1.2.13 (CVE-2022-37434)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.wireguard.com/",children:'"WireGuard" and the "WireGuard" logo are registered trademarks of Jason A. Donenfeld.'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>o});var r=i(7294);const s={},l=r.createContext(s);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);