"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7603],{2976:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=e(5893),o=e(1151);const s={},r="Dual Booting Windows & Unraid",a={id:"legacy/Articles/dual-boot-unraid-and-windows",title:"Dual Booting Windows & Unraid",description:"This procedure is intended to help someone with moderate Linux",source:"@site/docs/legacy/Articles/dual-boot-unraid-and-windows.md",sourceDirName:"legacy/Articles",slug:"/legacy/Articles/dual-boot-unraid-and-windows",permalink:"/es/legacy/Articles/dual-boot-unraid-and-windows",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/Articles/dual-boot-unraid-and-windows.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Legacy Documentation",permalink:"/es/category/legacy-documentation"},next:{title:"Expanding Windows VM VDisk Partitions",permalink:"/es/legacy/Articles/expanding-windows-vm-vdisk-partitions"}},d={},l=[{value:"Why do this?",id:"why-do-this",level:2},{value:"What you need",id:"what-you-need",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Partition Disk",id:"partition-disk",level:2},{value:"Install Windows",id:"install-windows",level:2},{value:"Check Partition Order After Windows Install",id:"check-partition-order-after-windows-install",level:2},{value:"Install Linux",id:"install-linux",level:2},{value:"Finish",id:"finish",level:2}];function h(n){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"dual-booting-windows--unraid",children:"Dual Booting Windows & Unraid"}),"\n",(0,t.jsx)(i.p,{children:"This procedure is intended to help someone with moderate Linux\nexperience set up a dual boot environment for Linux, Windows, and\nUnraid."}),"\n",(0,t.jsx)(i.h2,{id:"why-do-this",children:"Why do this?"}),"\n",(0,t.jsx)(i.p,{children:"Sometimes, you need Windows to do HW maintenance, like updating firmware\non the motherboard."}),"\n",(0,t.jsx)(i.h2,{id:"what-you-need",children:"What you need"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Windows Install disk"}),"\n",(0,t.jsx)(i.li,{children:"Slackware 13.1 install DVD"}),"\n",(0,t.jsx)(i.li,{children:"Windows drivers for your motherboard, NIC, video card, and controllers\nfor any disks that you want to access under Windows. Particularly if\nyou use AHCI mode for your SATA connection for the boot/cache drive."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"preparation",children:"Preparation"}),"\n",(0,t.jsx)(i.p,{children:"The trick to multiboot Windows and Unraid on a cache drive is that\nUnraid requires the cache partition to be the first one in the partition\ntable, but Windows insists on reordering the partitions when Windows is\ninstalled, to put the Windows partition first. This is complicated by\nthe fact that different versions and service packs of Windows have\nlimitations on where it can read the boot files from... i.e., some\nversions of Windows can\u2019t boot if the Windows boot partition starts\nafter 32GB, and some, if it starts after 136GB."}),"\n",(0,t.jsx)(i.p,{children:"Select the drive you want to use for cache. You must then decide:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"how big a partition you want for Cache"}),"\n",(0,t.jsx)(i.li,{children:"how big a partition you want for Windows"}),"\n",(0,t.jsx)(i.li,{children:"how much for Linux"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"So lets say you want 12GB for Windows, and 300GB for cache. With the\nrest of the disk (170GB) for Linux. You must determine the number of\nsectors used by Windows partition."}),"\n",(0,t.jsx)(i.p,{children:"Multiple the number of desired GB for the Windows partition by 2,000,000"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"12\xa0*2,000,000\xa0=\xa024,000,000"})}),"\n",(0,t.jsx)(i.p,{children:"This will be the starting sector for the cache partition."}),"\n",(0,t.jsx)(i.h2,{id:"partition-disk",children:"Partition Disk"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Boot Slackware to partition disk"}),"\n",(0,t.jsx)(i.li,{children:"Run fdisk"}),"\n",(0,t.jsx)(i.li,{children:"Change units to sectors (u command)"}),"\n",(0,t.jsxs)(i.li,{children:["You must create the partitions in this order:","\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Create a new, primary partition, number 1, starting at sector\n24,000,000, size +300G"}),"\n",(0,t.jsx)(i.li,{children:"Create a new, primary partition, number 2, starting at sector 63\n[default] (or 64) size [accept default]"}),"\n",(0,t.jsx)(i.li,{children:"Create a new extended partition, number 3, using the whole rest\nof the disk."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Change the type of partition 2 to type 7 (NTFS)"}),"\n",(0,t.jsx)(i.li,{children:"Write the partition table and shutdown."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"install-windows",children:"Install Windows"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Boot Windows Installation CD."}),"\n",(0,t.jsx)(i.li,{children:"When you boot Windows Installation, and get to the partitions,\npartition 2 should be listed first and have drive letter C, and be\n12GB in size. That will be where you install Windows."}),"\n",(0,t.jsxs)(i.li,{children:["Proceed with a normal Windows install to that partition.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Be sure to also add your mobo, NIC, video cards, and other drivers\nafter getting Windows installed. You should also take care of any\nnecessary service packs and Windows Updates."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"check-partition-order-after-windows-install",children:"Check Partition Order After Windows Install"}),"\n",(0,t.jsx)(i.p,{children:"Many versions of Windows will reorder the partitions you created with\nfdisk in Linux, swapping partitions 1 and 2 so the cache partition is\nchanged to partition 2, and the Windows partition is number 1. Windows\nand Linux will boot fine, but you won\u2019t be able to use it as the cache\ndrive."}),"\n",(0,t.jsx)(i.p,{children:"Before shutting down Windows, open c:\\boot.ini and see if in the\n[operating systems] section it says:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"multi(0)disk(0)rdisk(0)partition(1)\\WINDOWS=......."})}),"\n",(0,t.jsx)(i.p,{children:"That means Windows was installed to partition 1 on the first disk. So\nWindows reordered the partitions to make the Windows partition the first\npartition. (Insert various expletives here)."}),"\n",(0,t.jsx)(i.p,{children:"To fix this brain-dead move by Windows, take these steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"While still in Windows, duplicate the line in the [operating\nsystems] section of boot.ini, and change the second copy so it is\nlike this"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"multi(0)disk(0)rdisk(0)partition(1)\\WINDOWS=.......\nmulti(0)disk(0)rdisk(0)partition(2)\\WINDOWS=.......\n"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Boot Slackware DVD"}),"\n",(0,t.jsx)(i.li,{children:"Run sfdisk -luS and write down the starting and ending sectors for\npartitions 1 and 2."}),"\n",(0,t.jsx)(i.li,{children:"Then run fdisk on the cache drive, change the units to sectors,\ndelete partitions 1 and 2, and recreate them using the exact same\nstarting and ending sectors you captured using sfdisk, but in the\nproper order, with the cache partition first as partition1, and the\nWindows partition second as partition 2."}),"\n",(0,t.jsx)(i.li,{children:"Change the type of the Windows partition back to 7."}),"\n",(0,t.jsx)(i.li,{children:"Reboot Windows and select the SECOND line in the Windows boot menu,\nand make sure it works. Once you have confirmed it works, you can\nremove the first boot option in the boot.ini, and change the\n\u201cdefault\u201d to match the \u201cpartition(2)\\WINDOWS\u201d line."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"install-linux",children:"Install Linux"}),"\n",(0,t.jsx)(i.p,{children:"Now boot Slackware install DVD, create logical partitions for swap,\nroot, and anything else you want in the extended partition."}),"\n",(0,t.jsx)(i.p,{children:"Proceed with a standard Slackware installation. Accept the default of\ninstalling lilo to the MBR."}),"\n",(0,t.jsx)(i.p,{children:"When done, edit /etc/lilo.conf to your liking."}),"\n",(0,t.jsx)(i.p,{children:"Finally, format the cache partition (partition1) with XFS."}),"\n",(0,t.jsx)(i.h2,{id:"finish",children:"Finish"}),"\n",(0,t.jsx)(i.p,{children:"Now start Unraid by booting the flash, and assigning the cache drive."}),"\n",(0,t.jsx)(i.p,{children:"You can boot Windows or Linux by changing the BIOS settings, or using\nthe appropriate key at boot time key to get a boot menu, or you can also\nedit the syslinux config on the flash to give you multi-boot options."})]})}function c(n={}){const{wrapper:i}={...(0,o.a)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},1151:(n,i,e)=>{e.d(i,{Z:()=>a,a:()=>r});var t=e(7294);const o={},s=t.createContext(o);function r(n){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function a(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(s.Provider,{value:i},n.children)}}}]);