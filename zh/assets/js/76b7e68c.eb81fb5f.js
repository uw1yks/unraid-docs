"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6909],{7580:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var t=r(5893),s=r(1151),d=r(7294),a=r(1048);function i(e){let{children:n,fallback:r}=e;return(0,a.Z)()?(0,t.jsx)(t.Fragment,{children:n?.()}):r??null}function o(){const[e,n]=(0,d.useState)({featured:{releases:[],title:"Featured",description:"Recommended Releases"},archive:{releases:[],title:"Archive",description:"Older / Non-Recommended Releases"}});return(0,d.useEffect)((()=>{(async()=>{try{const r=await fetch("https://releases.unraid.net/json"),t=(await r.json()).reduce(((e,n)=>(n.tags.includes("featured")?e.featured.push(n):e.archive.push(n),e)),{featured:[],archive:[]});n({...t.featured.length?{featured:{...e.featured,releases:t.featured}}:{},...t.archive.length?{archive:{...e.archive,releases:t.archive}}:{}})}catch(r){console.error(r)}})()}),[]),(0,t.jsx)(t.Fragment,{children:Object.values(e).map((e=>{let{title:n,description:r,releases:s}=e;return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,t.jsx)("h2",{children:n}),(0,t.jsx)("p",{children:r}),(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Version"}),(0,t.jsx)("th",{children:"Created"}),(0,t.jsx)("th",{children:"Download"}),(0,t.jsx)("th",{children:"Changelog"}),(0,t.jsx)("th",{children:"MD5"})]}),(0,t.jsx)("tbody",{children:s.map((e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.version}),(0,t.jsx)("td",{children:e.date}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{download:!0,href:e.url,children:e.basefile})}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:e.changelog_pretty,children:"Changelog"})}),(0,t.jsx)("td",{children:e.md5})]},e.version)))})]})]},n)}))})}function l(e){return(0,t.jsx)(i,{fallback:(0,t.jsx)("div",{children:"Loading..."}),children:()=>(0,t.jsx)(o,{})})}const c={},h="Download Archive",u={id:"unraid-os/download_list",title:"Download Archive",description:"Download the USB Creator:",source:"@site/docs/unraid-os/download_list.mdx",sourceDirName:"unraid-os",slug:"/unraid-os/download_list",permalink:"/unraid-docs/zh/unraid-os/download_list",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/download_list.mdx",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"\u8d2d\u4e70\u5e76\u6536\u5230\u6fc0\u6d3b\u7801\u540e\u5982\u4f55\u5151\u6362\u60a8\u7684\u6fc0\u6d3b\u7801",permalink:"/unraid-docs/zh/unraid-os/faq/redeem-license-activation-code"},next:{title:"Unraid Account",permalink:"/unraid-docs/zh/account/"}},x={},f=[];function j(e){const n={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"download-archive",children:"Download Archive"}),"\n",(0,t.jsx)(n.p,{children:"Download the USB Creator:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://craftassets.unraid.net/uploads/downloads/Unraid.USB.Creator.macOS-2.1.dmg",children:"Mac"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://craftassets.unraid.net/uploads/downloads/Unraid.USB.Creator.Win32-2.1.exe",children:"Windows"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Download Unraid Zip Files:"}),"\n",(0,t.jsx)(l,{})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(7294);const s={},d=t.createContext(s);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);