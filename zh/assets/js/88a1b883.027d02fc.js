"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1036],{7532:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var t=r(5893),n=r(1151);const s={},i="Cache Disk",o={id:"legacy/FAQ/cache-disk",title:"Cache Disk",description:"Important! This page is a basic introduction to the Unraid Cache",source:"@site/docs/legacy/FAQ/cache-disk.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/cache-disk",permalink:"/zh/legacy/FAQ/cache-disk",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/cache-disk.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Parity",permalink:"/zh/legacy/FAQ/Parity"},next:{title:"Checking and fixing file systems",permalink:"/zh/legacy/FAQ/check-disk-filesystems"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Adding a cache disk to the array",id:"adding-a-cache-disk-to-the-array",level:2},{value:"Cache settings",id:"cache-settings",level:2},{value:"Speed",id:"speed",level:2},{value:"Perceived write speed increases",id:"perceived-write-speed-increases",level:3},{value:"Actual write speed increases",id:"actual-write-speed-increases",level:3},{value:"The Mover",id:"the-mover",level:2},{value:"Other uses for a cache disk",id:"other-uses-for-a-cache-disk",level:2},{value:"Warm spare",id:"warm-spare",level:3},{value:"Running other software on top of Unraid",id:"running-other-software-on-top-of-unraid",level:3},{value:"Scratch space",id:"scratch-space",level:3},{value:"Disadvantages of a cache disk",id:"disadvantages-of-a-cache-disk",level:2},{value:"&#39;Wasted&#39; HDD and HDD slot",id:"wasted-hdd-and-hdd-slot",level:3},{value:"Short-term risk of data loss",id:"short-term-risk-of-data-loss",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Amount of data",id:"amount-of-data",level:3}];function c(e){const a={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"cache-disk",children:"Cache Disk"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Important!"})," This page is a basic introduction to the Unraid Cache\ndrive, but was written for v4 and v5. There is no mention of\nDockers, VM's, or Cache Pools. For v6 users, this page serves as an\nintroduction, but you should also check these resources:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://forums.unraid.net/forum/index.php?topic=48508",children:"FAQ"})," -\nlook for the ",(0,t.jsx)(a.em,{children:"Cache Drive/Pool"})," section, has a number of related\nprocedures"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://forums.unraid.net/forum/index.php?topic=56005",children:"How to add a cache drive, replace a cache drive, and create a\ncache pool"})," -\na nice video guide"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"The cache disk feature of Unraid greatly increases the perceived\nperformance of the system when writing data to a parity-protected array.\nIt is particularly useful for users who write data to the array on a\nregular basis, and can also be used as a scratch disc for certain\napplications. The feature was introduced in version 4.3."}),"\n",(0,t.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(a.p,{children:"A cache disk is a hard drive that is not part of the normal\nparity-protected array. When a cache disk exists in the system, it is\nvisible as a disk share named 'cache' (provided disk shares are being\nexported). You may read data from or write data to the cache share just\nas you would any other disk share. As the cache disk is outside of the\nparity-protected array, writes will be much faster, but of course if\nthis disk fails, all its data may be lost."}),"\n",(0,t.jsx)(a.p,{children:"The real power of a cache disk is realized when User Shares are enabled.\nThe cache disk may be automatically 'included' in every user share.\nHence any object -- a file or directory - created on a user share is\ncreated on the cache disk (provided that enough space is available).\nTherefore, when you browse the files on a user share, the listings will\ntransparently include objects on the cache disk as well as those on the\nother data disks."}),"\n",(0,t.jsx)(a.p,{children:"In order to prevent the cache disk from filling up, a utility called the\n'mover' will move objects from the cache disk to the array proper. You\ncan set a schedule that defines when the mover will 'wake up'. The\ndefault schedule is to wake up at 3:40AM every day."}),"\n",(0,t.jsx)(a.p,{children:"As there is a lag between the time objects are created on the cache\ndisk, and when they are moved to the array, it may be desirable to\ndisable the cache disk for certain shares. Each user share therefore has\nthe option to disable the use of the cache disk for that share."}),"\n",(0,t.jsx)(a.h2,{id:"adding-a-cache-disk-to-the-array",children:"Adding a cache disk to the array"}),"\n",(0,t.jsx)(a.p,{children:"In order to create a cache disk using the GUI:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Stop the array"}),"\n",(0,t.jsx)(a.li,{children:'Click on "Disk" at the top.'}),"\n",(0,t.jsx)(a.li,{children:"Look at the very bottom of the page in the Disk Devices section for\na disk 'slot' labeled Cache (the very last slot)."}),"\n",(0,t.jsx)(a.li,{children:"Select any disk not in the array into that slot."}),"\n",(0,t.jsx)(a.li,{children:"Start the array"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"cache-settings",children:"Cache settings"}),"\n",(0,t.jsx)(a.p,{children:"This section is present on the Share Settings page when user shares are\nenabled, and a cache disk is present and formatted."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Min. free space"})," specifies the minimum amount of free space that must\nexist on the Cache disk in order for the user share file system to\ncreate objects on the Cache disk. If there is less than this amount of\nfree space then the object will be created on the array instead."]}),"\n",(0,t.jsxs)(a.p,{children:[": Main article: ",(0,t.jsx)(a.a,{href:"/zh/unraid-os/manual/storage-management",children:"Storage Management"})]}),"\n",(0,t.jsx)(a.h2,{id:"speed",children:"Speed"}),"\n",(0,t.jsx)(a.h3,{id:"perceived-write-speed-increases",children:"Perceived write speed increases"}),"\n",(0,t.jsx)(a.p,{children:"The emphasis here is on 'perceived'. The real, behind-the-scenes write\nspeed of your Unraid server is unchanged by the addition of a cache\ndrive. A cache drive simply grants you the fastest transfer that your\nhardware will allow by deferring the inevitable parity calculation until\na later time (3:40 am server time, by default)."}),"\n",(0,t.jsx)(a.h3,{id:"actual-write-speed-increases",children:"Actual write speed increases"}),"\n",(0,t.jsx)(a.p,{children:"How much of a write speed improvement can you expect to see from using a\ncache drive? That depends on your hardware. Slower hardware will of\ncourse result in slower transfer speeds. Assuming that you have Gigabit\nLAN (GigE) capable network controllers on both sides of the transfer\n(the client PC and the Unraid server), a Gigabit LAN router or switch,\nappropriate network cables (Cat5e or Cat6), and modern SATA I or better\nhard drives, then you should see write speeds in the following ranges:"}),"\n",(0,t.jsx)(a.p,{children:"These numbers represent average transfer speeds when writing data to\nUnraid:"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Without a cache drive:"})," Unraid 4.5.3 - average 20-30 MB/s, peak\nreported ",(0,t.jsx)(a.a,{href:"https://forums.unraid.net/forum/index.php?topic=5496.msg51190#msg51190",children:"40\nMB/s"}),"*"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"With a cache drive:"})," Unraid 4.5.3 - average 50-60 MB/s, peak reported\n",(0,t.jsx)(a.a,{href:"https://forums.unraid.net/forum/index.php?topic=5754.msg120084#msg120084",children:"101\nMB/s"}),"*"]}),"\n",(0,t.jsxs)(a.p,{children:["So generally speaking, a server with a cache drive has write speeds\n",(0,t.jsx)(a.strong,{children:"2-3x faster"})," than the same server without a cache drive."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Note: These figures (especially the averages) are based upon\npersonal observations by Rajahal and upon reports from other\nreputable sources in these forums."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"the-mover",children:"The Mover"}),"\n",(0,t.jsx)(a.p,{children:"The Mover is a utility that runs periodically to move files off the\ncache disk and onto parity-protected data disk(s). If Mover logging is\nenabled, the mover will record all its activity to the system log."}),"\n",(0,t.jsx)(a.p,{children:"By default the mover is scheduled to run every day at 3:40AM. This may\nbe changed by defining your own Mover schedule string in crontab format."}),"\n",(0,t.jsx)(a.p,{children:"If the mover finds no files to move, and the disks are spun-down, the\ndisks will not spin up. Conversely, file(s) will only be moved if they\nare not open for reading/writing -- they will move the next night, when\nthey are no longer open."}),"\n",(0,t.jsxs)(a.p,{children:[": Main article: ",(0,t.jsx)(a.a,{href:"/zh/unraid-os/manual/storage-management",children:"Storage Management"})]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"The mover will not move any top-level directories which begin with a\n'.' character. Such directories will not exist in normal use, but\nan advanced user may use this knowledge to create directories which\nwon't get moved."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"The mover will not move any files that exist in the root of the\ncache disk. Such files will not exist in normal use, but an advanced\nuser may use this knowledge to create files which won't get moved\n(for example, a swap file)."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"The mover is just a script called '/usr/local/sbin/mover' which\ninvokes 'find' to traverse the cache disk and move files to the\narray using the 'mv' command. Advanced users may edit this script\nto fine-tune the mover. For example, it's possible to set\nconditions such as 'move only files older than N days', or 'only\nmove files greater than N bytes in size', etc. Refer to the script\nitself and the 'man' page of the 'find' command."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"other-uses-for-a-cache-disk",children:"Other uses for a cache disk"}),"\n",(0,t.jsx)(a.h3,{id:"warm-spare",children:"Warm spare"}),"\n",(0,t.jsx)(a.p,{children:"The purpose of a 'warm spare' is to minimize the amount of time that\nyour array is without parity protection after a drive failure. A warm\nspare is a hard drive that you have installed in your server to prepare\nfor the eventuality of one of your other hard drives failing. It\nrequires that the warm spare drive be as large or larger than your\nparity drive and your largest data drive"}),"\n",(0,t.jsx)(a.p,{children:"When a drive does eventually fail, you simply stop the array (via the\nMain page), unassign the dead drive (via the Devices page), assign the\nwarm spare (also on the Devices page), and then start the array (back on\nthe Main page). At this point, your data from the dead drive will be\nautomatically rebuilt onto your warm spare - this will take many hours,\nbut your array and all your data is still available for use during this\ntime (though performance will likely be degraded)."}),"\n",(0,t.jsx)(a.p,{children:"In the classic application, a Warm Spare sits in your server\npre-installed (therefore taking up a SATA/PATA slot and using a small\namount of power), but constantly spun down and unused (as it is not\nassigned to a disk slot in Unraid)."}),"\n",(0,t.jsx)(a.p,{children:"However, why not use a warm spare as a cache drive while you wait around\nfor another drive to fail? This application will of course add a bit of\nwear and tear to your warm spare, but nothing outside the scope of\nordinary use."}),"\n",(0,t.jsx)(a.h3,{id:"running-other-software-on-top-of-unraid",children:"Running other software on top of Unraid"}),"\n",(0,t.jsx)(a.p,{children:"As a cache drive is outside of the parity-protected array, it can be\nused for alternate software and Unraid add-ons that need to read and\nwrite data often."}),"\n",(0,t.jsx)(a.h3,{id:"scratch-space",children:"Scratch space"}),"\n",(0,t.jsx)(a.p,{children:"The cache disk can be used as scratch space for torrent client(s), news\nclients or web servers. The advantage here is that, for most of the day,\nonly the one cache disk in the array needs to be spun up. Otherwise, at\nleast two drives - parity and one data -- will be spun up."}),"\n",(0,t.jsx)(a.h2,{id:"disadvantages-of-a-cache-disk",children:"Disadvantages of a cache disk"}),"\n",(0,t.jsx)(a.h3,{id:"wasted-hdd-and-hdd-slot",children:"'Wasted' HDD and HDD slot"}),"\n",(0,t.jsx)(a.p,{children:"One of your hard drives and SATA/PATA slots is dedicated to your cache\ndrive, instead of long-term data storage"}),"\n",(0,t.jsx)(a.h3,{id:"short-term-risk-of-data-loss",children:"Short-term risk of data loss"}),"\n",(0,t.jsx)(a.p,{children:"If your cache drive dies, it will take all of the data currently\nresiding on it to the grave. While it is possible to run ReiserFS data\nrecovery software on your dead cache drive, there is still a good\npossibility of permanent data loss."}),"\n",(0,t.jsx)(a.p,{children:"By default, the mover script will run once a day at 3:40 am. If you are\nconcerned about data loss, you can edit the script so that it runs more\nfrequently and at different times."}),"\n",(0,t.jsx)(a.h2,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsx)(a.p,{children:"The two key factors to consider to when choosing a hard drive to be your\ncache disk are:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Your intended purpose."}),"\n",(0,t.jsx)(a.li,{children:"Amount of data"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Increased perceived write speed:"})," You will want a drive that is as\nfast as possible. For the fastest possible speed, you'll want an SSD\n(which has the added benefit of being low power) or a 10,000 rpm drive.\nIf you are on a tighter budget, a 7200 rpm drive such as a WD Black will\ndo fine. Unless you write a lot of very small files, the size of the\nhard drive's cache (8, 16, 32, 64 mb etc.) won't matter much. You can\nalso eek a bit more performance out of a slower drive by short stroking\nit (meaning confine it to only the outside sectors, which are higher\ndensity and can therefore be written to and read from faster), but this\nis of course an advanced maneuver."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"As a Warm Spare:"})," you will want a drive that is the same size or\nlarger than your parity disk. This drive can be any speed you choose,\njust remember that in the event of a parity rebuild (if your parity disk\ndies) or a rebuild from parity (if a data disk dies), the process will\nproceed at the speed of your slowest disk."]}),"\n",(0,t.jsx)(a.h3,{id:"amount-of-data",children:"Amount of data"}),"\n",(0,t.jsx)(a.p,{children:"The final consideration in choosing a cache drive is to think about the\namount of data you expect to pass through it. If you write ~10 GBs per\nday, then any drive 10 GB or larger will do (a 30 GB SSD may be a good\nfit in this case). If you write 100 GB in one day every few weeks, then\nyou will want a cache drive that is larger than 100 GB. If you attempt a\ndata transfer that is larger than the size of your cache drive, the\ntransfer will fail."})]})}function l(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,a,r)=>{r.d(a,{Z:()=>o,a:()=>i});var t=r(7294);const n={},s=t.createContext(n);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);