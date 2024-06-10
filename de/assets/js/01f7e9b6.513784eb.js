"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2062],{3997:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=s(5893),i=s(1151);const t={},o="Version 6.12.8 2024-02-15",a={id:"unraid-os/release-notes/6.12.8",title:"Version 6.12.8 2024-02-15",description:"Upgrade notes",source:"@site/docs/unraid-os/release-notes/6.12.8.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.8",permalink:"/unraid-docs/de/unraid-os/release-notes/6.12.8",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.8.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.12.6",permalink:"/unraid-docs/de/unraid-os/release-notes/6.12.6"},next:{title:"6.12.9",permalink:"/unraid-docs/de/unraid-os/release-notes/6.12.9"}},l={},d=[{value:"Upgrade notes",id:"upgrade-notes",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Out of date plugins",id:"out-of-date-plugins",level:4},{value:"Call traces and crashes related to macvlan",id:"call-traces-and-crashes-related-to-macvlan",level:4},{value:"Network problems due to jumbo frames",id:"network-problems-due-to-jumbo-frames",level:4},{value:"Problems due to Realtek network cards",id:"problems-due-to-realtek-network-cards",level:4},{value:"Other issues?",id:"other-issues",level:4},{value:"Rolling back",id:"rolling-back",level:3},{value:"Changes vs. 6.12.7",id:"changes-vs-6127",level:2},{value:"Changes vs. 6.12.6",id:"changes-vs-6126",level:2},{value:"Bug fixes and improvements",id:"bug-fixes-and-improvements",level:3},{value:"Package updates",id:"package-updates",level:3},{value:"Linux kernel",id:"linux-kernel",level:3}];function c(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"version-6128-2024-02-15",children:"Version 6.12.8 2024-02-15"}),"\n",(0,r.jsx)(n.h2,{id:"upgrade-notes",children:"Upgrade notes"}),"\n",(0,r.jsxs)(n.p,{children:["This release has two very important fixes.  First, we updated Docker to incorporate fixes for their\n",(0,r.jsx)(n.a,{href:"https://www.docker.com/blog/docker-security-advisory-multiple-vulnerabilities-in-runc-buildkit-and-moby/",children:"recent security advisory"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Second, we fixed a corner case bug which can lead to data loss if a newly added array drive has a non-standard partition\nlayout. If you add one of these drives, the second time you start the array the drive will show as unformatted. If this happens\nplease contact support and we can help you with data recovery. Even if you have not encountered this issue, we recommend upgrading\nso that you will not be affected when adding drives in the future."}),"\n",(0,r.jsx)(n.p,{children:"This release also includes some nice fixes in networking, Docker containers, Time Machine support, and VMs as well as fix for a\nslowdown some systems were having on the Dashboard. We have also improved the SMART attribute handling for NVME and SSD drives.\nDetails below."}),"\n",(0,r.jsx)(n.h3,{id:"known-issues",children:"Known issues"}),"\n",(0,r.jsx)(n.h4,{id:"out-of-date-plugins",children:"Out of date plugins"}),"\n",(0,r.jsx)(n.p,{children:"Out of date plugins can cause problems, we recommend they be kept current."}),"\n",(0,r.jsx)(n.h4,{id:"call-traces-and-crashes-related-to-macvlan",children:"Call traces and crashes related to macvlan"}),"\n",(0,r.jsxs)(n.p,{children:["If you are getting call traces related to macvlan (or any unexplained crashes, really), as a first step\nwe recommend navigating to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Docker"})}),", switching to ",(0,r.jsx)(n.strong,{children:"advanced"})," view, and changing\nthe ",(0,r.jsx)(n.strong,{children:"Docker custom network type"})," from ",(0,r.jsx)(n.strong,{children:"macvlan"})," to ",(0,r.jsx)(n.strong,{children:"ipvlan"}),". This is the default configuration\nthat Unraid has shipped with since version 6.11.5 and should work for most systems."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that some users have reported issues with port forwarding from certain routers (Fritzbox) and reduced\nfunctionality with advanced network management tools (Ubiquity) when in ipvlan mode. If this affects you,\nsee the alternate solution available since Unraid ",(0,r.jsx)(n.a,{href:"6.12.4.mc#fix-for-macvlan-call-traces",children:"6.12.4"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"network-problems-due-to-jumbo-frames",children:"Network problems due to jumbo frames"}),"\n",(0,r.jsxs)(n.p,{children:["If you are having network issues of any kind, confirm that you have not enabled jumbo frames.\nNavigate to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Network Settings > eth0"})})," and confirm the ",(0,r.jsx)(n.strong,{children:"Desired MTU"})," is 1500.\nFor more information see the ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/topic/120220-fix-common-problems-more-information/page/2/#comment-1167702",children:"Fix Common Problems warning for jumbo frames"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"problems-due-to-realtek-network-cards",children:"Problems due to Realtek network cards"}),"\n",(0,r.jsx)(n.p,{children:"Upgraded kernel fixes the deadlock issue with jumbo frames and the in-tree Realtek 8125 driver. However, we\nstill recommend following the advice above regarding jumbo frames."}),"\n",(0,r.jsxs)(n.p,{children:["If you continue to have network stability issues and ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Tools > System Devices"})})," shows that you have a Realtek ethernet controller,\ngrab the part number shown and search Community Apps to see if there is a Realtek vendor-supplied driver plugin for that device.\nFor more information, see the ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/topic/141349-plugin-realtek-r8125-r8168-and-r81526-drivers/",children:"support page for Realtek driver plugins"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"other-issues",children:"Other issues?"}),"\n",(0,r.jsxs)(n.p,{children:["We highly recommend installing the ",(0,r.jsx)(n.strong,{children:"Fix Common Problems"})," plugin as it will warn you of common configuration problems."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are having other crashes or stability issues, navigate to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Syslog Server"})})," and\nenable ",(0,r.jsx)(n.strong,{children:"Mirror syslog to flash"}),". This will cause additional wear and tear on you USB flash boot device but is\nuseful in the short term for gathering logs after a crash."]}),"\n",(0,r.jsxs)(n.p,{children:["After the next reboot, navigate to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Tools > Diagnostics"})})," and download your anonymized diagnostics (as of 6.12.5,\ndiagnostics automatically include logs that were mirrored to the flash drive)."]}),"\n",(0,r.jsxs)(n.p,{children:["Finally, start a new topic under ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/55-general-support/",children:"General Support"})," and provide all the\ndetails of the issue. Once the issue is resolved, be sure to disable ",(0,r.jsx)(n.strong,{children:"Mirror syslog to flash"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"rolling-back",children:"Rolling back"}),"\n",(0,r.jsxs)(n.p,{children:["Be aware that rolling back to an earlier release will make your system vulnerable to the Docker security issues and potential data loss scenario mentioned in ",(0,r.jsx)(n.a,{href:"#upgrade-notes",children:"Upgrade notes"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If rolling back earlier than 6.12.6, also see the ",(0,r.jsx)(n.a,{href:"/unraid-docs/de/unraid-os/release-notes/6.12.6#rolling-back",children:"6.12.6 release notes"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"changes-vs-6127",children:"Changes vs. 6.12.7"}),"\n",(0,r.jsx)(n.p,{children:"Fixed an issue related to upgrading from rc releases."}),"\n",(0,r.jsxs)(n.h2,{id:"changes-vs-6126",children:["Changes vs. ",(0,r.jsx)(n.a,{href:"/unraid-docs/de/unraid-os/release-notes/6.12.6",children:"6.12.6"})]}),"\n",(0,r.jsx)(n.h3,{id:"bug-fixes-and-improvements",children:"Bug fixes and improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Docker:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fix WG routes added to the correct interface (br0 or eth0 or bond0)"}),"\n",(0,r.jsx)(n.li,{children:'Use "lazy unmount" unmount of docker image to prevent blocking array stop'}),"\n",(0,r.jsx)(n.li,{children:"Updated to address multiple security issues (CVE-2024-21626, CVE-2024-24557)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Networking improvements:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Boot faster by checking for carrier before assigning DHCP addresses"}),"\n",(0,r.jsx)(n.li,{children:"Remove leading zeros from IPv4 and IPv6 addresses"}),"\n",(0,r.jsx)(n.li,{children:"New '/etc/rc.d/rc.inet1 status' and '/etc/rc.d/rc.inet1 status ip' commands to aid with network troubleshooting from the command line"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Notifications: Add ntfy.sh to notification agents"}),"\n",(0,r.jsxs)(n.li,{children:["SMART improvements:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fix NVME Selftest"}),"\n",(0,r.jsxs)(n.li,{children:["Fix display of 'Accumulated power on time, hours",":minutes"," xxxxx",":yy","' SMART attribute"]}),"\n",(0,r.jsx)(n.li,{children:"Display KB/MB/GB/TB written in SMART Attributes for SSDs"}),"\n",(0,r.jsx)(n.li,{children:"Add 'SSD endurance remaining' SMART Attribute"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["System logging:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["By default, syslog is copied to USB boot flash on shutdown, see ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Syslog Server"})})," to disable"]}),"\n",(0,r.jsxs)(n.li,{children:["Logs from the above and ",(0,r.jsx)(n.strong,{children:"Mirror syslog to flash"})," are now available the next boot on ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Tools > Syslog"})})," and in diagnostics"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"VM Manager: Fix for downgrade: if the VM template has been updated to the latest QEMU machine type it will not be\nfound upon downgrade.  This change finds latest current version for a given machine type."}),"\n",(0,r.jsx)(n.li,{children:'ZFS: Use zpool import "-f" flag to permit import of foreign pools'}),"\n",(0,r.jsxs)(n.li,{children:["Other:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enable EFI boot by default for fresh installations"}),"\n",(0,r.jsx)(n.li,{children:"Fix slowdown on Dashboard and Docker pages (and reduces flash device writes)"}),"\n",(0,r.jsx)(n.li,{children:"Formatting: do not initialize device partition layout if already valid."}),"\n",(0,r.jsxs)(n.li,{children:["Update OS: redesigned Update OS and Downgrade OS pages, refer to ",(0,r.jsx)(n.a,{href:"https://unraid.net/blog/new-update-os-tool",children:"blog post"})]}),"\n",(0,r.jsx)(n.li,{children:"Fix MacOS unable to write 'flash' share and restore Time Machine compatibility (fruit changes)"}),"\n",(0,r.jsx)(n.li,{children:"Allow Community Apps (if installed) to automatically start containers when doing a multi-install"}),"\n",(0,r.jsx)(n.li,{children:"Feedback form: change DONE button to CANCEL"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"package-updates",children:"Package updates"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"docker: version 24.0.9"}),"\n",(0,r.jsx)(n.li,{children:"kernel-firmware: version 20231226_abfcad8"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["version 6.1.74","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CONFIG_USB_SERIAL_XR: USB MaxLinear/Exar USB to Serial driver"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_CAN: CAN bus subsystem support"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_CAN_NETLINK: CAN device drivers with Netlink support"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_CAN_GS_USB: Geschwister Schneider UG and candleLight compatible interfaces"}),"\n",(0,r.jsx)(n.li,{children:"CONFIG_SCSI_LPFC: Emulex LightPulse Fibre Channel Support"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(7294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);