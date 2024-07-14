"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9114],{8058:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=r(5893),s=r(1151);const d={},i="Check Harddrive Speed",a={id:"legacy/FAQ/check-harddrive-speed",title:"Check Harddrive Speed",description:"The native Linux command hdparm (Hard Disk Parameters) can be used",source:"@site/docs/legacy/FAQ/check-harddrive-speed.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/check-harddrive-speed",permalink:"/unraid-docs/es/legacy/FAQ/check-harddrive-speed",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/check-harddrive-speed.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Checking and fixing file systems",permalink:"/unraid-docs/es/legacy/FAQ/check-disk-filesystems"},next:{title:"Console",permalink:"/unraid-docs/es/legacy/FAQ/console"}},o={},c=[];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"check-harddrive-speed",children:"Check Harddrive Speed"}),"\n",(0,t.jsxs)(n.p,{children:["The native Linux command ",(0,t.jsx)(n.strong,{children:"hdparm"})," (Hard Disk Parameters) can be used\nto determine your hard disk drive read speed."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of the command:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"hdparm\xa0-tT\xa0/dev/hda"})}),"\n",(0,t.jsxs)(n.p,{children:["You will need to change ",(0,t.jsx)(n.em,{children:"hda"})," to match the disk you want to check. You\nwill see a two line report with various numbers and timings, but the\nonly one you are interested in is the very last number, in MB/sec."]}),"\n",(0,t.jsx)(n.p,{children:"However, you should probably perform this test at least 5 times and look\nat the average. The following one-liner will conduct the test 12 times:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"for\xa0((i=0;i<12;i++))\xa0do\xa0hdparm\xa0-tT\xa0/dev/hda;\xa0done"})}),"\n",(0,t.jsxs)(n.p,{children:["Convenient way of testing all drives read performance is provided by\nscript ",(0,t.jsx)(n.strong,{children:"diskspeed.sh"}),", listed on this ",(0,t.jsx)(n.a,{href:"http://lime-technology.com/wiki/index.php?title=UnRAID_Add_Ons#Disk_Speed",children:"Wiki\npage"}),"\nand downloadable from this ",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=31073",children:"forum\nthread"}),". The\nscript creates reports and graphs of drive read speeds, at multiple\npoints across the surface of each drive."]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var t=r(7294);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);