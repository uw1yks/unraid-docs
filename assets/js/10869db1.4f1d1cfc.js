"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3563],{8036:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=n(5893),t=n(1151);const o={sidebar_position:4},r="Flash Drive",a={id:"unraid-os/manual/security/flash-drive",title:"Flash Drive",description:"The flash drive that is used to boot Unraid is important as it contains all the configuration information for your Unraid server. Because of this, you want to consider the security of the information it contains and how it is accessed.",source:"@site/docs/unraid-os/manual/security/flash-drive.md",sourceDirName:"unraid-os/manual/security",slug:"/unraid-os/manual/security/flash-drive",permalink:"/unraid-docs/unraid-os/manual/security/flash-drive",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/security/flash-drive.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"unraidSidebar",previous:{title:"Data Encryption",permalink:"/unraid-docs/unraid-os/manual/security/data-encryption"},next:{title:"VPN",permalink:"/unraid-docs/unraid-os/manual/security/vpn"}},c={},h=[{value:"Backups",id:"backups",level:2},{value:"Network Access",id:"network-access",level:2},{value:"Permissions",id:"permissions",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"flash-drive",children:"Flash Drive"}),"\n",(0,s.jsx)(i.p,{children:"The flash drive that is used to boot Unraid is important as it contains all the configuration information for your Unraid server. Because of this, you want to consider the security of the information it contains and how it is accessed."}),"\n",(0,s.jsx)(i.h2,{id:"backups",children:"Backups"}),"\n",(0,s.jsx)(i.p,{children:"If a flash drive ever fails for any reason, as long as you have a backup, getting the Unraid server back into normal operation is an easy process. We recommend that you make a backup whenever you make a significant configuration change."}),"\n",(0,s.jsx)(i.p,{children:"You can easily achieve this from the Unraid WebGUI:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Select the flash drive on the ",(0,s.jsx)(i.strong,{children:"Main"})," tab."]}),"\n",(0,s.jsxs)(i.li,{children:["In the ",(0,s.jsx)(i.strong,{children:"Flash Device Settings"})," section select the ",(0,s.jsx)(i.strong,{children:"Flash Backup"})," button."]}),"\n",(0,s.jsx)(i.li,{children:"The system will now create a ZIP file that is a backup of the contents of the flash drive."}),"\n",(0,s.jsx)(i.li,{children:"When the ZIP file has been created your browser should prompt you to provide the location where you want the backup saved to. It is recommended that this is a location off the Unraid server so that it is available even when the Unraid server is not operational."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If you later need to recreate your flash drive for any reason, use this backup as input to the ",(0,s.jsx)(i.a,{href:"https://unraid.net/download",children:"Limetech USB Creator tool"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"network-access",children:"Network Access"}),"\n",(0,s.jsxs)(i.p,{children:["The flash drive can have similar settings applied to it to control access over the network as is the case for other shares on an Unraid system. The main difference is that you set this up by selecting the flash device on the ",(0,s.jsx)(i.strong,{children:"Main"})," tab."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["*",(0,s.jsx)(i.strong,{children:"Network visibility"}),": You can specify whether the flash drive should even be accessible via the network, and if it is accessible whether it should be hidden or visible to everyone."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Access rights"}),": If network access is allowed you can specify any access permissions that you want applied."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"permissions",children:"Permissions"}),"\n",(0,s.jsx)(i.p,{children:"As part of improving the security of Unraid systems, starting with Unraid 6.8 files on the flash drive can no longer be given execute permission. The implication of this is that if you have your own custom scripts (or programs) stored on the flash drive, they can no longer be executed from that location."}),"\n",(0,s.jsx)(i.p,{children:"There are a few ways to handle this:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Copy the files to a location from which they can be executed."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The location ",(0,s.jsx)(i.code,{children:"/usr/local/bin"})," is a good choice if you want the files on the default search path."]}),"\n",(0,s.jsxs)(i.li,{children:["You can copy the files into position when booting by adding appropriate commands to the ",(0,s.jsx)(i.code,{children:"config/go"})," file on the flash drive."]}),"\n",(0,s.jsx)(i.li,{children:"Give the files execute permission after copying them."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["For scripts, prefix the script name with the command that runs the script (e.g. ",(0,s.jsx)(i.em,{children:"bash path-to-script"}),")."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>r});var s=n(7294);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);