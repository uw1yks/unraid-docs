"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1377],{9481:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(5893),r=i(1151);const s={},a="Set up Wake-on-LAN (WOL)",o={id:"unraid-os/guides/wol-setup-for-unraid",title:"Set up Wake-on-LAN (WOL)",description:"You can set up the Unraid server to wake up from a shutdown or sleep state by sending what is known as a magic packet over the network. A magic packet is a special data packet that contains the target computer's media access control (MAC) address and network broadcast address along with the WoL configurations. You can send the packet from any computer, usually in the same network, or even from a smartphone if you have the right software.",source:"@site/docs/unraid-os/guides/wol-setup-for-unraid.md",sourceDirName:"unraid-os/guides",slug:"/unraid-os/guides/wol-setup-for-unraid",permalink:"/unraid-docs/es/unraid-os/guides/wol-setup-for-unraid",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/guides/wol-setup-for-unraid.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Using a physical disk in a VM",permalink:"/unraid-docs/es/unraid-os/guides/physical-to-virtual"},next:{title:"Xen to KVM migration",permalink:"/unraid-docs/es/unraid-os/guides/xen-to-kvm"}},d={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Put an Unraid server to sleep",id:"put-an-unraid-server-to-sleep",level:2},{value:"Wake up an Unraid server in MacOS / Linux / Windows",id:"wake-up-an-unraid-server-in-macos--linux--windows",level:2},{value:"Alternative method (Windows)",id:"alternative-method-windows",level:3},{value:"Alternative method (Linux)",id:"alternative-method-linux",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set-up-wake-on-lan-wol",children:"Set up Wake-on-LAN (WOL)"}),"\n",(0,t.jsx)(n.p,{children:"You can set up the Unraid server to wake up from a shutdown or sleep state by sending what is known as a magic packet over the network. A magic packet is a special data packet that contains the target computer's media access control (MAC) address and network broadcast address along with the WoL configurations. You can send the packet from any computer, usually in the same network, or even from a smartphone if you have the right software."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This guide does not cover advanced management of the Unraid server through IPMI or WOL over the Internet"})}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Some hardware and software requirements must be in place for this to work:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Your network interface controller (NIC), must support WOL"}),"\n",(0,t.jsxs)(n.li,{children:["The chipset and BIOS of your computer must have a setting for WOL, and it must be enabled. The BIOS option varies from BIOS to BIOS, but these are usually located in a power management menu. Here are a few examples of the options listed by different BIOS vendors:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Wake on LAN"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"PME Event wake-up"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Power on by PCI/PCIe devices"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Intel VT-x"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"AMD-V"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The Unraid server must be connected to a power outlet, and to your local area network (LAN) via a network cable"}),"\n",(0,t.jsx)(n.li,{children:"The computer is shut down or in a sleep state."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"put-an-unraid-server-to-sleep",children:"Put an Unraid server to sleep"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Use the web terminal in the WebGUI, or SSH into the server."}),"\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"ifconfig"})," and note the IP address and MAC Address (the ",(0,t.jsx)(n.code,{children:"ether"})," value, that is a 12-character alphanumeric attribute), of the network interface card in use. If you have just one, it is most likely ",(0,t.jsx)(n.code,{children:"eth0"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"ethtool -s eth0 wol g"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"echo -n mem > /sys/power/state"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This will trigger a sleep state on your Unraid server. This suspends your machine's state in RAM and saves power. The Unraid server can be woken by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Pressing a key on the keyboard, if one is attached."}),"\n",(0,t.jsx)(n.li,{children:"Pressing the power button on the machine."}),"\n",(0,t.jsx)(n.li,{children:"Sending the machine a magic packet and triggering a Wake-on-LAN."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"wake-up-an-unraid-server-in-macos--linux--windows",children:"Wake up an Unraid server in MacOS / Linux / Windows"}),"\n",(0,t.jsx)(n.p,{children:"Here is an example for a OS-agnostic app called MiniWOL, which can run under MacOS, Linux, and Windows."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://www.tweaking4all.com/home-theatre/miniwol2/",children:"MiniWOL v.2"})," application and install it."]}),"\n",(0,t.jsx)(n.li,{children:"Run the app. If it's already running, it will display in the system tray."}),"\n",(0,t.jsx)(n.li,{children:"Right-click the app icon in the tray."}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Settings"})," in the app's context menu."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Select Network Device Details"})," enter:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A name for the network device, for example ",(0,t.jsx)(n.em,{children:"Unraid server"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The IPv4 and MAC addresses for the device (you can see this in the Unraid WebGUI, in the ",(0,t.jsx)(n.strong,{children:"Settings"})," menu, under ",(0,t.jsx)(n.strong,{children:"Network Settings"}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Close the window."}),"\n",(0,t.jsx)(n.li,{children:"Right-click the miniWOL icon in the system tray. The newly-created item displays in the menu."}),"\n",(0,t.jsx)(n.li,{children:"Select the name of the device to wake it up."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"alternative-method-windows",children:"Alternative method (Windows)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download ",(0,t.jsx)(n.a,{href:"https://www.depicus.com/wake-on-lan/wake-on-lan-cmd",children:"wolcmd.exe"})," and unpack to a folder of your choosing."]}),"\n",(0,t.jsx)(n.li,{children:"Open the Windows command line."}),"\n",(0,t.jsx)(n.li,{children:"CD to the folder where you extracted the executable."}),"\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"wolcmd.exe <ether> <ip-dest> 255.255.255.255"}),", where ",(0,t.jsx)(n.code,{children:"<ether>"})," is the MAC address for the computer you want to wake up, and ",(0,t.jsx)(n.code,{children:"<ip-dest>"})," is the IPv4 address of the machine."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"alternative-method-linux",children:"Alternative method (Linux)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open the terminal."}),"\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"wakeonlan <MAC-Address>"})," or ",(0,t.jsx)(n.code,{children:"wol <MAC-Address>"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(7294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);