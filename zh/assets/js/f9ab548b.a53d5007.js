"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4622],{6896:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=i(5893),a=i(1151);const t={},s="Apple Time Machine",o={id:"unraid-os/guides/configuring-time-machine",title:"Apple Time Machine",description:"Guide: Setting up a Time Machine Share on your Unraid Server",source:"@site/docs/unraid-os/guides/configuring-time-machine.md",sourceDirName:"unraid-os/guides",slug:"/unraid-os/guides/configuring-time-machine",permalink:"/unraid-docs/zh/unraid-os/guides/configuring-time-machine",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/guides/configuring-time-machine.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Guides",permalink:"/unraid-docs/zh/category/guides"},next:{title:"Convert a physical install to VM",permalink:"/unraid-docs/zh/unraid-os/guides/convert-windows-to-vm"}},c={},l=[{value:"Guide: Setting up a Time Machine Share on your Unraid Server",id:"guide-setting-up-a-time-machine-share-on-your-unraid-server",level:2},{value:"Create a Time Machine Backup on your Unraid Server",id:"create-a-time-machine-backup-on-your-unraid-server",level:2},{value:"Unraid and Time Machine Setup",id:"unraid-and-time-machine-setup",level:2},{value:"Creating Multiple Time Machine Shares for Different People/Macs",id:"creating-multiple-time-machine-shares-for-different-peoplemacs",level:2}];function h(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"apple-time-machine",children:"Apple Time Machine"}),"\n",(0,r.jsx)(n.h2,{id:"guide-setting-up-a-time-machine-share-on-your-unraid-server",children:"Guide: Setting up a Time Machine Share on your Unraid Server"}),"\n",(0,r.jsx)(n.p,{children:"Apple's Time Machine is a built-in backup feature for your Mac that will\nautomatically backup all of your files, apps, music, photos, emails,\ndocuments, and system files. When you complete a backup, you can even\nrestore files from your backup if the original files are deleted from\nyour Mac or the hard disk (or SSD) in your Mac is erased or replaced.\nWith Unraid, you can now use Time Machine with the SMB protocol and\nstore your Time Machine backups on your Unraid server!"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Note: This guide works with MacOS High Sierra."})}),"\n",(0,r.jsx)(n.h2,{id:"create-a-time-machine-backup-on-your-unraid-server",children:"Create a Time Machine Backup on your Unraid Server"}),"\n",(0,r.jsx)(n.p,{children:"To create backups with Time Machine and store them on your Unraid\nserver, all you'll need to do is connect it to your Unraid server and\nthen Time Machine will automatically make:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Hourly backups for the past 24 hours"}),"\n",(0,r.jsx)(n.li,{children:"Daily backups for the past month"}),"\n",(0,r.jsx)(n.li,{children:"Weekly backups for all previous months"}),"\n",(0,r.jsx)(n.li,{children:"The oldest backups are deleted when your backup disk is full"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to control when backups are completed, we suggest you use a\ntool such as ",(0,r.jsx)(n.a,{href:"https://tclementdev.com/timemachineeditor/",children:"Time Machine\nEditor"})," so you can customize\nwhen backups are made and select a host of other options not available\nin Time Machine itself."]}),"\n",(0,r.jsx)(n.h2,{id:"unraid-and-time-machine-setup",children:"Unraid and Time Machine Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Before you begin, make sure ",(0,r.jsx)(n.strong,{children:"SMB"})," is enabled in the Unraid WebGUI by\ngoing to:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Settings \u2192 SMB under "Network Services"'}),"\n",(0,r.jsx)(n.li,{children:'Set "Enable SMB" to "Yes" and click "Apply" (Array must be stopped\nto change this).'}),"\n",(0,r.jsx)(n.li,{children:'Also, set "Enhanced macOS interoperability" to Yes as well.'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(2009).Z+"",width:"800",height:"337"})}),"\n",(0,r.jsx)(n.p,{children:"Now:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'In the Unraid WebGUI, go to "Shares" and click "Add Share".'}),"\n",(0,r.jsx)(n.li,{children:"Name the share (Ex: Time Machine)."}),"\n",(0,r.jsx)(n.li,{children:"Set your minimum free space or leave default. This is the minimum\nfree space available to allow writing to any disk belonging to the\nshare."}),"\n",(0,r.jsx)(n.li,{children:'Under "Included disk(s)" select the disk in the array that you\'d\nlike to use for your Time Machine share. You can still use this same\ndisk for other shares.'}),"\n",(0,r.jsx)(n.li,{children:'Keep "Enable Copy-on-write" on "Auto".'}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Under SMB Security Settings."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Under "Export" select "Yes (Time Machine)"'}),"\n",(0,r.jsx)(n.li,{children:'Set your "TimeMachine volume size limit". This limits the reported\nvolume size, preventing Time Machine from using the entire real disk\nspace for backup. Example: setting this value to "1024" would\nlimit the reported disk space to 1GB.'}),"\n",(0,r.jsx)(n.li,{children:"Set your Security parameters to what you prefer."}),"\n",(0,r.jsx)(n.li,{children:"Click Apply/Done."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"From here, there are just a few more steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Connect to your Time Machine share by connecting to it through the\nFinder."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Next: go to Time Machine Preferences on your Mac and "Select Disk".'}),"\n",(0,r.jsx)(n.li,{children:'Your newly mounted Time Machine share should show up. Select this\nshare, enable encryption if desired and click "Use Disk".'}),"\n",(0,r.jsxs)(n.li,{children:["Now, Time Machine will say it's trying to connect to your share.\n",(0,r.jsx)(n.em,{children:"Before clicking connect, it's recommended to eject your mounted\nshare from your desktop and then connect."})]}),"\n",(0,r.jsx)(n.li,{children:"Time Machine immediately begins making periodic\nbackups---automatically and without further action by you."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Note: The first backup may take a long time, depending on how many\nfiles you have and the size of your Mac's harddrive."})," Thereafter, Time\nMachine backs up only the files that changed since the previous backup,\nso future backups should be faster."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Reminder: We suggest you use a 3rd party tool such as ",(0,r.jsx)(n.a,{href:"https://tclementdev.com/timemachineeditor/",children:"Time Machine\nEditor"})," so you can customize\nwhen backups are made and select a host of other options not available\nin the Time Machine program itself."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(5299).Z+"",width:"922",height:"506"})}),"\n",(0,r.jsx)(n.p,{children:"That's it. Now, all of your Time Machine backups will be stored on your\nUnraid server and if something bad happens to your Mac, you will be able\nto restore files, settings, and apps from these backups!"}),"\n",(0,r.jsx)(n.h2,{id:"creating-multiple-time-machine-shares-for-different-peoplemacs",children:"Creating Multiple Time Machine Shares for Different People/Macs"}),"\n",(0,r.jsx)(n.p,{children:"So, say you want to create multiple time machine backups for different\npeople/Macs in the house? You will need to create a separate share for\neach Time Machine backup and separate users in Unraid. For example, say\nthe Stooges want to backup their Macs. If the username on each of the\nMacs is larry, curly, and moe, you would create Unraid users larry,\ncurly, and moe. Once the users are set up then you would create the\nindividual Time Machine shares (ex: tm-larry, tm-curly, tm-moe). From\nthere, simply follow the instructions above!"}),"\n",(0,r.jsxs)(n.p,{children:["For more info on Time Machine shares, be sure to also check out Space\nInvader One's excellent video on ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=5J955nNIdo0&feature=youtu.be",children:"Unraid Shares and\nMacOS!"})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2009:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/SMBSettings-5c272afe01a58b9ac4c3a96f70e39092.png"},5299:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/TimeMachineEditor-dba0619f7f1972574e58ca3ddae626dd.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var r=i(7294);const a={},t=r.createContext(a);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);