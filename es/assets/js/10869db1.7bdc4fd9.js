"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3563],{8036:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=i(5893),t=i(1151);const o={sidebar_position:4},r="Flash Drive",a={id:"unraid-os/manual/security/flash-drive",title:"Flash Drive",description:"The flash drive that is used to boot Unraid is important as it contains all the configuration information for your Unraid server. Because of this, you want to consider the security of the information it contains and how it is accessed.",source:"@site/docs/unraid-os/manual/security/flash-drive.md",sourceDirName:"unraid-os/manual/security",slug:"/unraid-os/manual/security/flash-drive",permalink:"/unraid-docs/es/unraid-os/manual/security/flash-drive",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/security/flash-drive.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"unraidSidebar",previous:{title:"Data Encryption",permalink:"/unraid-docs/es/unraid-os/manual/security/data-encryption"},next:{title:"VPN",permalink:"/unraid-docs/es/unraid-os/manual/security/vpn"}},c={},h=[{value:"Backups",id:"backups",level:2},{value:"Network Access",id:"network-access",level:2},{value:"Permissions",id:"permissions",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"flash-drive",children:"Flash Drive"}),"\n",(0,n.jsx)(s.p,{children:"The flash drive that is used to boot Unraid is important as it contains all the configuration information for your Unraid server. Because of this, you want to consider the security of the information it contains and how it is accessed."}),"\n",(0,n.jsx)(s.h2,{id:"backups",children:"Backups"}),"\n",(0,n.jsx)(s.p,{children:"If a flash drive ever fails for any reason, as long as you have a backup, getting the Unraid server back into normal operation is an easy process. We recommend that you make a backup whenever you make a significant configuration change."}),"\n",(0,n.jsx)(s.p,{children:"You can easily achieve this from the Unraid WebGUI:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Select the flash drive on the ",(0,n.jsx)(s.strong,{children:"Main"})," tab."]}),"\n",(0,n.jsxs)(s.li,{children:["In the ",(0,n.jsx)(s.strong,{children:"Flash Device Settings"})," section select the ",(0,n.jsx)(s.strong,{children:"Flash Backup"})," button."]}),"\n",(0,n.jsx)(s.li,{children:"The system will now create a ZIP file that is a backup of the contents of the flash drive."}),"\n",(0,n.jsx)(s.li,{children:"When the ZIP file has been created your browser should prompt you to provide the location where you want the backup saved to. It is recommended that this is a location off the Unraid server so that it is available even when the Unraid server is not operational."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["If you later need to recreate your flash drive for any reason, use this backup as input to the ",(0,n.jsx)(s.a,{href:"https://unraid.net/download",children:"Limetech USB Creator tool"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"network-access",children:"Network Access"}),"\n",(0,n.jsxs)(s.p,{children:["The flash drive can have similar settings applied to it to control access over the network as is the case for other shares on an Unraid system. The main difference is that you set this up by selecting the flash device on the ",(0,n.jsx)(s.strong,{children:"Main"})," tab."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["*",(0,n.jsx)(s.strong,{children:"Network visibility"}),": You can specify whether the flash drive should even be accessible via the network, and if it is accessible whether it should be hidden or visible to everyone."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Access rights"}),": If network access is allowed you can specify any access permissions that you want applied."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsx)(s.p,{children:"As part of improving the security of Unraid systems, starting with Unraid 6.8 files on the flash drive can no longer be given execute permission. The implication of this is that if you have your own custom scripts (or programs) stored on the flash drive, they can no longer be executed from that location."}),"\n",(0,n.jsx)(s.p,{children:"There are a few ways to handle this:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Copy the files to a location from which they can be executed."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The location ",(0,n.jsx)(s.code,{children:"/usr/local/bin"})," is a good choice if you want the files on the default search path."]}),"\n",(0,n.jsxs)(s.li,{children:["You can copy the files into position when booting by adding appropriate commands to the ",(0,n.jsx)(s.code,{children:"config/go"})," file on the flash drive."]}),"\n",(0,n.jsx)(s.li,{children:"Give the files execute permission after copying them."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["For scripts, prefix the script name with the command that runs the script (e.g. ",(0,n.jsx)(s.em,{children:"bash path-to-script"}),")."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>a,a:()=>r});var n=i(7294);const t={},o=n.createContext(t);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);