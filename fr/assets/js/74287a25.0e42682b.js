"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8078],{6354:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var i=r(5893),t=r(1151);const a={},s="Replacing a Data Drive",d={id:"legacy/FAQ/replacing-a-data-drive",title:"Replacing a Data Drive",description:"This page describes how to replace an Unraid array data drive. Why",source:"@site/docs/legacy/FAQ/replacing-a-data-drive.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/replacing-a-data-drive",permalink:"/unraid-docs/fr/legacy/FAQ/replacing-a-data-drive",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/replacing-a-data-drive.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"The Parity Swap Procedure",permalink:"/unraid-docs/fr/legacy/FAQ/parity-swap-procedure"},next:{title:"Replacing Multiple Data Drives with a Single Larger Drive",permalink:"/unraid-docs/fr/legacy/FAQ/replacing-multiple-data-drives"}},l={},o=[{value:"Important Notes",id:"important-notes",level:2},{value:"The procedure",id:"the-procedure",level:2},{value:"The procedure for Unraid v4",id:"the-procedure-for-unraid-v4",level:2}];function c(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"replacing-a-data-drive",children:"Replacing a Data Drive"}),"\n",(0,i.jsx)(n.p,{children:"This page describes how to replace an Unraid array data drive. Why\nwould you want to do that? Any number of reasons..."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"The drive has failed"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"The drive has been acting strange or reporting errors, and you\nthink it might be failing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"The drive is old or past its warranty period"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"The drive is small or full, and you need more storage space"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"The drive has bad sectors and you want to pull it and replace it so\nyou can Preclear/test/fix it"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"You just bought a new monster of a drive, and want it in the array"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Any other reason you can think of"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you have purchased a replacement drive, we always recommend\nPreclearing the replacement drive first, to make sure it's a good\ndrive that won't fail for a few years at least. The Preclearing is\nnot strictly necessary, as replacement drives don't have to be\ncleared, they are going to be completely overwritten. But\nPreclearing new drives one to three times provides a thorough test\nof the drive, eliminates 'infant mortality' failures."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"It's always good to have a prepared and tested replacement drive\nalready on hand!"})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important! You cannot replace a drive with one that is LARGER than\nthe parity drive!"})," If your replacement drive is larger than the\nparity drive, then proceed to ",(0,i.jsx)(n.a,{href:"/unraid-docs/fr/legacy/FAQ/parity-swap-procedure",children:"The parity swap\nprocedure"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unraid does not require the replacement drive to be the same size as\nthe old drive being replaced. It CANNOT be smaller, but it CAN be a\nlarger drive, up to the size of the parity drive. If too large,\nUnraid has a special two-step 'Parity Swap' procedure (often\ncalled the 'swap-disable') that will use a larger than parity\ndrive to first upgrade the parity drive then replace the old drive\nwith the old parity drive."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you are here because you have a disabled drive, and you have\nalready checked the syslog and SMART report (or got instruction from\nthe Unraid forums), and are SURE that the drive is good, then you\ncan use the procedures below to rebuild it onto itself (below,\nconsider the 'old drive' to be the 'new drive'). There is a\nsimilar procedure just for this though \u2192 ",(0,i.jsx)(n.a,{href:"/unraid-docs/fr/unraid-os/manual/storage-management#rebuilding-a-drive-onto-itself",children:"Re-enable the\ndrive"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"the-procedure",children:"The procedure"}),"\n",(0,i.jsxs)(n.p,{children:[": ",(0,i.jsx)(n.em,{children:"If you are running a very old version of Unraid, such as v4.7 or\nolder, skip down to the next section."})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Stop the array"}),"\n",(0,i.jsxs)(n.li,{children:["Unassign the old drive if still assigned ",(0,i.jsxs)(n.em,{children:["(to unassign, set it to\n",(0,i.jsx)(n.strong,{children:"No Device"}),")"]})]}),"\n",(0,i.jsx)(n.li,{children:"Power down"}),"\n",(0,i.jsxs)(n.li,{children:["[ Optional ] Pull the old drive ",(0,i.jsx)(n.em,{children:"(you may want to leave it\ninstalled for Preclearing or testing)"})]}),"\n",(0,i.jsx)(n.li,{children:"Install the new drive"}),"\n",(0,i.jsx)(n.li,{children:"Power on"}),"\n",(0,i.jsx)(n.li,{children:"Assign the new drive in the slot of the old drive"}),"\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"Main"})," \u2192 ",(0,i.jsx)(n.strong,{children:"Array Operation"})," section"]}),"\n",(0,i.jsxs)(n.li,{children:["Put a check in the ",(0,i.jsx)(n.strong,{children:"Yes, I'm sure"})," checkbox (next to the\ninformation indicating the drive will be rebuilt), and click the\n",(0,i.jsx)(n.strong,{children:"Start"})," button"]}),"\n",(0,i.jsx)(n.li,{children:"The rebuild will begin, with hefty disk activity on all drives, lots\nof writes on the new drive and lots of reads on all other drives"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[": ",(0,i.jsx)(n.em,{children:"All of the contents of the old drive will be copied onto the new\ndrive, making it an exact replacement, except possibly with more\ncapacity than the old drive."})]}),"\n",(0,i.jsx)(n.h2,{id:"the-procedure-for-unraid-v4",children:"The procedure for Unraid v4"}),"\n",(0,i.jsxs)(n.p,{children:[": ",(0,i.jsx)(n.em,{children:"This section is only for old versions of Unraid, such as v4.7 or\nolder. If you are running v5 or v6 of Unraid, then go back to the\nprevious section."})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Stop the array"}),"\n",(0,i.jsx)(n.li,{children:"Power down"}),"\n",(0,i.jsx)(n.li,{children:"Replace hard drive with new drive."}),"\n",(0,i.jsx)(n.li,{children:"Turn on"}),"\n",(0,i.jsx)(n.li,{children:"Replaced drive appears with blue dot"}),"\n",(0,i.jsx)(n.li,{children:'Tick the "I\'m sure" checkbox, and press "Start will bring the\narray on-line, start Data-Rebuild, and then expand the file\nsystem."'}),"\n",(0,i.jsx)(n.li,{children:'Hefty disk activity and main page will show lots of reading on "the\nother" disks and writing on new disk as data is being rebuilt.'}),"\n",(0,i.jsx)(n.li,{children:"End"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>s});var i=r(7294);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);