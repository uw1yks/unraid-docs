"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1317],{7438:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(5893),i=s(1151);const r={},a="Additional Settings",o={id:"unraid-os/manual/additional-settings",title:"Additional Settings",description:"While Unraid is configured to work automatically, you may want to further refine your setup by customizing your IP address, hostname, disk tunables, and other settings. This section goes over the various settings you can configure from the Unraid WebGUI. All settings controls can be found under the Settings tab on the Unraid navigation bar, unless otherwise specified.",source:"@site/docs/unraid-os/manual/additional-settings.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/additional-settings",permalink:"/unraid-docs/unraid-os/manual/additional-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/additional-settings.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Multi-language support",permalink:"/unraid-docs/unraid-os/manual/multi-language"},next:{title:"Changing the flash device",permalink:"/unraid-docs/unraid-os/manual/changing-the-flash-device"}},d={},l=[{value:"System Settings",id:"system-settings",level:2},{value:"CPU Pinning",id:"cpu-pinning",level:3},{value:"Date &amp; Time",id:"date--time",level:3},{value:"Disk Settings",id:"disk-settings",level:3},{value:"Docker",id:"docker",level:3},{value:"Identification",id:"identification",level:3},{value:"Management Access",id:"management-access",level:3},{value:"Network Settings",id:"network-settings",level:3},{value:"Global Share Settings",id:"global-share-settings",level:3},{value:"UPS Settings",id:"ups-settings",level:3},{value:"VM Manager",id:"vm-manager",level:3},{value:"Network Services",id:"network-services",level:2},{value:"NFS (Network File System)",id:"nfs-network-file-system",level:3},{value:"SMB (Server Message Block)",id:"smb-server-message-block",level:3},{value:"FTP (File Transfer Protocol)",id:"ftp-file-transfer-protocol",level:3},{value:"Syslog Server",id:"syslog-server",level:3},{value:"VPN Manager",id:"vpn-manager",level:3},{value:"User Preferences",id:"user-preferences",level:2},{value:"Confirmations",id:"confirmations",level:3},{value:"Display Settings",id:"display-settings",level:3},{value:"Notifications Settings",id:"notifications-settings",level:3},{value:"Scheduler",id:"scheduler",level:3},{value:"User Utilities",id:"user-utilities",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"additional-settings",children:"Additional Settings"}),"\n",(0,t.jsxs)(n.p,{children:["While Unraid is configured to work automatically, you may want to further refine your setup by customizing your IP address, hostname, disk tunables, and other settings. This section goes over the various settings you can configure from the Unraid WebGUI. All settings controls can be found under the ",(0,t.jsx)("navpath",{children:"Settings"})," tab on the Unraid navigation bar, unless otherwise specified."]}),"\n",(0,t.jsxs)(n.p,{children:["The Unraid WebGUI has extensive online help built-in that can help with choosing appropriate values for the settings that are available. This help can be displayed for specific fields by clicking on the prompt for that field. It can also be toggled on/off for all fields on a page by clicking on the ",(0,t.jsx)(n.strong,{children:"Help"})," icon at the top right of each page."]}),"\n",(0,t.jsx)(n.h2,{id:"system-settings",children:"System Settings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"System Settings"})," enable you to configure key Unraid functionality, such as network, share, VM, and disk settings."]}),"\n",(0,t.jsx)(n.h3,{id:"cpu-pinning",children:"CPU Pinning"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CPU Pinning"})," allows the user to specify CPU cores that are to be explicitly reserved for assignment to VMs or Docker containers. This is incredibly important for gaming VMs to run smoothly because even if you manually pin your Docker containers to not overlap with your gaming VM, the host OS can still utilize those same cores as the guest VM needs for things like returning responses for the WebGUI, running a parity check, btrfs operations, etc..."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When you pin a core to a VM or Docker, that core is allocated to the VM/Docker, but the unRAID OS may still access it and use it for various tasks."}),"\n",(0,t.jsx)(n.li,{children:"When you isolate a core, it is no longer accessible even by Unraid for routine tasks and should therefore be 100% dedicated to wherever it's pinned."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can pin cores without requiring a system restart. However, you must restart your Unraid server to apply any CPU isolation changes."}),"\n",(0,t.jsx)(n.h3,{id:"date--time",children:"Date & Time"}),"\n",(0,t.jsx)(n.p,{children:"From this page, you can set your time zone and toggle the use of up to 3 NTP servers. It is recommended that you adjust Unraid to your time zone for accurate timekeeping."}),"\n",(0,t.jsx)(n.h3,{id:"disk-settings",children:"Disk Settings"}),"\n",(0,t.jsx)(n.p,{children:"You can configure additional settings for your disk devices from this page. Enable your array to auto-start on boot, adjust disk spin-down timers, and even adjust advanced driver settings such as SMART polling frequency."}),"\n",(0,t.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,t.jsxs)(n.p,{children:["Docker containers allow users to add a variety of pre-configured Linux applications to their systems. See the ",(0,t.jsx)(n.a,{href:"/unraid-docs/unraid-os/manual/docker-management",children:"Docker Management"})," page for more information on setting up applications using Docker."]}),"\n",(0,t.jsx)(n.h3,{id:"identification",children:"Identification"}),"\n",(0,t.jsxs)(n.p,{children:["Unraid automatically uses the hostname of ",(0,t.jsx)(n.code,{children:"tower"}),", but you can adjust that from this page. You can also give your system a description / model number (useful for system builders). In addition, this page also allows you to enable or disable SSL support, change what port the WebGUI uses, and even provision an SSL certificate for your server."]}),"\n",(0,t.jsx)(n.h3,{id:"management-access",children:"Management Access"}),"\n",(0,t.jsx)(n.p,{children:"You can configure different access settings for your Unraid server, including enabling Telnet or SSH, setting ports for SSL/TLS, HTTP, and HTTPS. You can also set the default landing for Unraid."}),"\n",(0,t.jsx)(n.h3,{id:"network-settings",children:"Network Settings"}),"\n",(0,t.jsx)(n.p,{children:"By default, Unraid will attempt to get an IP address from a DHCP server present on your local network (typically by your router). From this page, you can configure a static IP address, set up bonding, bridging, or other options. Setting a static IP is recommended, but not required to use Unraid."}),"\n",(0,t.jsx)(n.h3,{id:"global-share-settings",children:"Global Share Settings"}),"\n",(0,t.jsx)(n.p,{children:"As described earlier, user shares can vastly simplify how content can be organized and accessed across multiple disks in the array. You can specify what disks are allowed to participate in user shares (global inclusion/exclusion) and if a cache device/pool is present, you can configure its use with user shares from here."}),"\n",(0,t.jsx)(n.h3,{id:"ups-settings",children:"UPS Settings"}),"\n",(0,t.jsxs)(n.p,{children:["Unraid can be connected to an APC UPS (uninterruptable power supply) so that in the event of a power loss, the system can be commanded to shut down while being supplied power through a battery. From this page, you can configure the connection to your specific UPS and define policies for when the shutdown command should be issued. For a complete manual, visit: ",(0,t.jsx)(n.a,{href:"http://apcupsd.org/manual/manual.html",children:"APCupsd Manual"})]}),"\n",(0,t.jsx)(n.h3,{id:"vm-manager",children:"VM Manager"}),"\n",(0,t.jsxs)(n.p,{children:["Virtual machines can be used to turn your server into a desktop, a media player, or just to run applications that weren't designed for Linux. See ",(0,t.jsx)(n.a,{href:"/unraid-docs/unraid-os/manual/vm/vm-management",children:"VM Management"})," and ",(0,t.jsx)(n.a,{href:"/unraid-docs/unraid-os/manual/vm/vm-support",children:"VM Guest Support"})," for more information on creating and managing VMs on Unraid."]}),"\n",(0,t.jsx)(n.h2,{id:"network-services",children:"Network Services"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Network Services"})," enable you to configure the network communication protocols on your Unraid server. Different OSes will default to different communication protocols, so these are important for your user and disk shares. You can also enable an FTP server or a logging server, and configure a VPN for an added layer of security when accessing your server remotely."]}),"\n",(0,t.jsx)(n.h3,{id:"nfs-network-file-system",children:"NFS (Network File System)"}),"\n",(0,t.jsxs)(n.p,{children:["NFSv4 support has been included in Unraid 6. You can enable or disable its use with user shares from this page, as well as adjust the ",(0,t.jsx)(n.code,{children:"fuse_remember"})," tunable which can help with resolving ",(0,t.jsx)(n.em,{children:"NFS Stale File Handles"})," error messages."]}),"\n",(0,t.jsx)(n.h3,{id:"smb-server-message-block",children:"SMB (Server Message Block)"}),"\n",(0,t.jsx)(n.p,{children:"The SMB protocol is the standard used by Microsoft Windows-based clients. From this page, you can enable its use, define a Windows workgroup, or even join an active directory domain."}),"\n",(0,t.jsx)(n.h3,{id:"ftp-file-transfer-protocol",children:"FTP (File Transfer Protocol)"}),"\n",(0,t.jsxs)(n.p,{children:["Users can connect via FTP if they are added to the ",(0,t.jsx)(n.strong,{children:"FTP user(s)"})," field on this page. If no users are added, the FTP service will not be started."]}),"\n",(0,t.jsx)(n.h3,{id:"syslog-server",children:"Syslog Server"}),"\n",(0,t.jsx)(n.p,{children:"The Syslog server records your system log to a permanent storage location. This is particularly useful when trying to troubleshoot issues with your server because, at every reboot, Unraid clears the system log."}),"\n",(0,t.jsx)(n.h3,{id:"vpn-manager",children:"VPN Manager"}),"\n",(0,t.jsxs)(n.p,{children:["You can set up a VPN connection to your Unraid server using ",(0,t.jsx)(n.a,{href:"/unraid-docs/unraid-os/manual/security/vpn#wireguard",children:"WireGuard"})," for secure connections to/from the internet."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.wireguard.com/",children:'"WireGuard" and the "WireGuard" logo are registered trademarks of Jason A. Donenfeld.'})}),"\n",(0,t.jsx)(n.h2,{id:"user-preferences",children:"User Preferences"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"User Preferences"})," are just that. This enables you to configure aspects of your interactions with Unraid OS: notifications, display settings, UI customization, and even the Mover schedule."]}),"\n",(0,t.jsx)(n.h3,{id:"confirmations",children:"Confirmations"}),"\n",(0,t.jsx)(n.p,{children:"From here, you can disable the need for confirmations to perform various tasks."}),"\n",(0,t.jsx)(n.h3,{id:"display-settings",children:"Display Settings"}),"\n",(0,t.jsx)(n.p,{children:"Customize the appearance of the Unraid WebGUI from this page. This includes adjusting the date and time format, number format, toggles for tabbed/non-tabbed view modes, temperature unit, and much more. You can also toggle between various themes for how the UI itself is presented."}),"\n",(0,t.jsx)(n.h3,{id:"notifications-settings",children:"Notifications Settings"}),"\n",(0,t.jsx)(n.p,{children:"Browser and e-mail-based system notifications can be configured from this page. You can subscribe to different types of notifications for each method and even add custom alerts for SMART values attribute monitoring."}),"\n",(0,t.jsx)(n.h3,{id:"scheduler",children:"Scheduler"}),"\n",(0,t.jsx)(n.p,{children:"The scheduler settings page presents a standard view to configure the frequency for two types of automated system tasks: parity checks and the cache mover."}),"\n",(0,t.jsx)(n.h2,{id:"user-utilities",children:"User Utilities"}),"\n",(0,t.jsxs)(n.p,{children:["Plugins offered by 3rd parties appear here. These plugins extend the functionality of Unraid and give you greater control over your server. For example, as a plugin, Community Applications displays here. Other plugins may provide system monitoring, maintenance, tweaks to system behavior, better management of storage resources, or simple backup functions for your ",(0,t.jsx)(n.code,{children:"appdata"})," folder."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(7294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);