"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5829],{253:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=n(5893),a=n(1151);const t={sidebar_position:1},o="User management",i={id:"unraid-os/manual/users/users",title:"User management",description:"Even though Unraid, at its core, is based on a Linux distribution, it does not support the standard set of user facilities available on most Linux systems. Instead the users defined in Unraid can be divided into:",source:"@site/docs/unraid-os/manual/users/users.md",sourceDirName:"unraid-os/manual/users",slug:"/unraid-os/manual/users/",permalink:"/de/unraid-os/manual/users/",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/users/users.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"unraidSidebar",previous:{title:"Delete a share",permalink:"/de/unraid-os/manual/shares/delete-a-share"},next:{title:"Creating a user in Unraid",permalink:"/de/unraid-os/manual/users/create-user"}},d={},c=[{value:"Root user",id:"root-user",level:2},{value:"Share users",id:"share-users",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"user-management",children:"User management"}),"\n",(0,r.jsx)(s.p,{children:"Even though Unraid, at its core, is based on a Linux distribution, it does not support the standard set of user facilities available on most Linux systems. Instead the users defined in Unraid can be divided into:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Root user"})," - a single user account which manages every aspect of the Unraid server."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Share users"})," - user accounts that are given access to specific shares on the Unraid server."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"root-user",children:"Root user"}),"\n",(0,r.jsxs)(s.p,{children:["As a NAS appliance and not a general purpose Linux server, Unraid has only one fixed superuser to manage the server, ",(0,r.jsx)(s.code,{children:"root"}),". All other user accounts are share access-level users, which connect to your Unraid server over the network."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"root"})," user, also referred to as the 'Unraid administrator', has full access via the WebGUI, SSH, or Telnet, and administrates all aspects of Unraid, with unlimited access to the server's resources. You can even install SSH authorization keys to enable passwordless authentication by SSH. ",(0,r.jsx)(s.code,{children:"root"})," users are the only ones who can manage user accounts."]}),"\n",(0,r.jsxs)(s.p,{children:["As a matter of security, the ",(0,r.jsx)(s.code,{children:"root"})," account cannot access data on shares via SMB, NFS, or FTP."]}),"\n",(0,r.jsx)(s.admonition,{type:"important",children:(0,r.jsxs)(s.p,{children:["The security of your ",(0,r.jsx)(s.code,{children:"root"})," account is vital. Please read our ",(0,r.jsx)(s.a,{href:"/de/unraid-os/manual/security/good-practices#1-set-a-strong-root-password",children:"guidance"})," on setting a strong password."]})}),"\n",(0,r.jsx)(s.h2,{id:"share-users",children:"Share users"}),"\n",(0,r.jsxs)(s.p,{children:["Users that are given access to shares on the Unraid server are called share users. The ",(0,r.jsx)(s.code,{children:"root"})," user is the only one who can set up user accounts."]}),"\n",(0,r.jsxs)(s.p,{children:["Share users can access ",(0,r.jsx)(s.a,{href:"/de/unraid-os/manual/shares/",children:"disk shares or user shares"})," through a file navigator or FTP (if enabled). They cannot access the Unraid WebGUI or use SSH and Telnet."]})]})}function l(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>o});var r=n(7294);const a={},t=r.createContext(a);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);