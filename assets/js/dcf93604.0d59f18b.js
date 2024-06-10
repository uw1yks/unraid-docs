"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5934],{5878:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(5893),s=i(1151);const o={sidebar_position:3},r="Boot Issues",a={id:"unraid-os/troubleshooting/boot-issues",title:"Boot Issues",description:"Preparing the flash device",source:"@site/docs/unraid-os/troubleshooting/boot-issues.md",sourceDirName:"unraid-os/troubleshooting",slug:"/unraid-os/troubleshooting/boot-issues",permalink:"/unraid-os/troubleshooting/boot-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/troubleshooting/boot-issues.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"unraidSidebar",previous:{title:"Capturing diagnostic information",permalink:"/unraid-os/troubleshooting/diagnostics-information"},next:{title:"Unclean shutdowns",permalink:"/unraid-os/troubleshooting/unclean-shutdowns"}},l={},d=[{value:"Preparing the flash device",id:"preparing-the-flash-device",level:2},{value:"Enabling UEFI boot",id:"enabling-uefi-boot",level:2},{value:"Boot Process",id:"boot-process",level:2},{value:"Boot failure",id:"boot-failure",level:2},{value:"Lost root Passwords",id:"lost-root-passwords",level:2},{value:"Lost boot drive and do not know which are the parity drives",id:"lost-boot-drive-and-do-not-know-which-are-the-parity-drives",level:2},{value:"Identifying the parity Drives",id:"identifying-the-parity-drives",level:3},{value:"Using the Unassigned Devices plugin",id:"using-the-unassigned-devices-plugin",level:4},{value:"Using Unraid&#39;s built-in capability",id:"using-unraids-built-in-capability",level:4},{value:"Backing up the boot drive",id:"backing-up-the-boot-drive",level:2},{value:"Manually upgrading (or downgrading) an Unraid release",id:"manually-upgrading-or-downgrading-an-unraid-release",level:2},{value:"Bzimage checksum error/failure reading flash device",id:"bzimage-checksum-errorfailure-reading-flash-device",level:2}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"boot-issues",children:"Boot Issues"}),"\n",(0,t.jsx)(n.h2,{id:"preparing-the-flash-device",children:"Preparing the flash device"}),"\n",(0,t.jsxs)(n.p,{children:["This is covered under the ",(0,t.jsx)(n.a,{href:"/unraid-os/getting-started/",children:"Getting Started"})," section of the documentation."]}),"\n",(0,t.jsxs)(n.p,{children:["If for any reason you decide that you need to redo the flash device then it is a good idea to make sure you first backup the current flash device (or have a recent backup) as all user specific settings (including the license key) are held in the ",(0,t.jsx)(n.strong,{children:"config"})," folder on the flash device. Copying the ",(0,t.jsx)(n.strong,{children:"config"})," folder (and all its contents) back to the flash\ndrive after redoing it will preserve all current settings."]}),"\n",(0,t.jsx)(n.h2,{id:"enabling-uefi-boot",children:"Enabling UEFI boot"}),"\n",(0,t.jsxs)(n.p,{children:["When you create the Unraid boot device, you are asked if you want UEFI mode boot support. However, it is always possible to enable UEFI mode booting at a later time, by renaming the folder on the flash device called ",(0,t.jsx)(n.code,{children:"efi\\~"})," to ",(0,t.jsx)(n.code,{children:"efi"})," (i.e. removing the trailing ",(0,t.jsx)(n.code,{children:"\\~"})," character)."]}),"\n",(0,t.jsx)(n.h2,{id:"boot-process",children:"Boot Process"}),"\n",(0,t.jsx)(n.p,{children:"Most of the time the Unraid boot process runs seamlessly and the user needs no awareness of the various stages involved. However, when things go wrong it can be useful to know how far the boot process managed to get as this will be of use in knowing what remedial action to take."}),"\n",(0,t.jsx)(n.p,{children:"Resolving boot issues will typically need either a locally attached monitor and keyboard or, if the motherboard supports it, an IPMI connection to carry out equivalent functionality. This can then be used to set any required BIOS stings and to monitor the booting process."}),"\n",(0,t.jsx)(n.p,{children:"The boot sequence for Unraid proceeds through a number of stages:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"BIOS boot"}),": This is the stage at which the motherboard BIOS recognizes the presence of the Unraid bootable flash device.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The way that the Unraid flash device is set as the default boot device is BIOS dependent so you may need to consult your motherboard's User Manual to determine the correct way to do this."}),"\n",(0,t.jsx)(n.li,{children:"The Unraid flash device supports booting in Legacy mode (also sometimes known as CSM mode) for older BiOS's and UEFI for more recent ones. Many recent BIOS's support both modes."}),"\n",(0,t.jsx)(n.li,{children:"If you want UEFI boot mode to be used then the EFI folder on the flash device must not have trailing tilde (~) character."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Syslinux loader"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"Boot Menu",src:i(5405).Z+"",width:"479",height:"288"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The entries that appear on the boot menu are specified by the ",(0,t.jsx)(n.code,{children:"syslinux/syslinux.cfg"})," file on the flash device. Although in theory this file can be edited manually as it a text file it is recommended that it is done via the WebGUI by selecting the flash device on the ",(0,t.jsx)(n.strong,{children:"Main"})," tab and going to the ",(0,t.jsx)(n.strong,{children:"Syslinux configuration"})," section."]}),"\n",(0,t.jsxs)(n.li,{children:["The Memtest86+ option only works if booting in Legacy mode. If booting in UEFI mode it will typically simply cause a reboot. If you want a version that will work in UEFI boot mode then you need to download it for yourself from either ",(0,t.jsx)(n.a,{href:"https://www.memtest.org/",children:"www.memtest.org"})," or ",(0,t.jsx)(n.a,{href:"https://www.memtest86.com/",children:"www.memtest86.com"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"If the user does not select a specific option then after a timeout period the default option will be used. If Unraid is running in headless mode this is the option that will be run."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Linux core"}),": This is the stage at which the Syslinux boot loader takes over from the BIOS and starts loading the files specified in the ",(0,t.jsx)(n.code,{children:"syslinux.cfg"})," file.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This is when the core Linux system is loaded from the flash device and unpacked into RAM."}),"\n",(0,t.jsx)(n.li,{children:"There will be messages on the console about the various bz* types being loaded into RAM."}),"\n",(0,t.jsx)(n.li,{children:"If there are any error messages displayed while loading these files then it normally indicates a problem with the flash device."}),"\n",(0,t.jsx)(n.li,{children:"There will then be messages displayed as Linux starts up and detects the hardware environment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Flash dependent services"}),": At this stage, the flash device is mounted at ",(0,t.jsx)(n.code,{children:"/boot"})," so that the process can continue.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the mount of the flash fails it is still possible to get the login prompt displayed. However, this does not necessarily mean the whole boot process completed correctly."}),"\n",(0,t.jsx)(n.li,{children:"If this stage of the boot process has not completed then typical symptoms are that the WebGUI and network are not started."}),"\n",(0,t.jsxs)(n.li,{children:["One way to see if this has happened is to login and use the ",(0,t.jsx)(n.code,{children:"df"})," command. If the flash device was mounted successfully then you will see it as ",(0,t.jsx)(n.code,{children:"/boot"})," in the resulting list of mount points.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The output should have something like following mount points:"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/dev/sdb1 15413232 826976 14586256 6% /boot"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"/dev/loop0 9344 9344 0 100% /lib/modules"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"/dev/loop1 7424 7424 0 100% /lib/firmware"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["One reason the flash device may fail to mount is that it is not labelled as ",(0,t.jsx)(n.strong,{children:"UNRAID"})," (all capitals)."]}),"\n",(0,t.jsx)(n.li,{children:"Additional drivers and firmware are now available on the above mount points."}),"\n",(0,t.jsx)(n.li,{children:"Configuration information is read into RAM from the flash device."}),"\n",(0,t.jsx)(n.li,{children:"Standard Linux services are started. Examples would be networking and (if enabled) WireGuard VPN."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Plugins"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the user has installed plugins then they are normally loaded at this stage."}),"\n",(0,t.jsx)(n.li,{children:"If one of the Safe Boot options was selected from the Unraid Boot menu then the loading of plugins is suppressed."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"WebGUI"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Unraid WebGUI is started."}),"\n",(0,t.jsxs)(n.li,{children:["The WebGUI is actually done via an entry in the ",(0,t.jsx)(n.code,{children:"config/go"})," file on the flash device so it is possible for user-supplied commands to also be run from there either before starting the WebGUI or just after doing so."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Array"}),"\nIf the user has set the array to be auto-mounted then the following will start. If array auto-start is not set then they happen when the user elects to start the array.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Drives mounted"}),(0,t.jsx)(n.br,{}),"\n","Mount points will now be created in the form ",(0,t.jsx)(n.code,{children:"/dev/diskX"})," and ",(0,t.jsx)(n.code,{children:"/mnt/cache"})," (if you have a cache)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"File Share Services"}),(0,t.jsx)(n.br,{}),"\n","Shares will now become available on the network. At the Linux level the shares will now appear as paths like ",(0,t.jsx)(n.code,{children:"/mnt/user/sharename"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Docker Containers"}),(0,t.jsx)(n.br,{}),"\n","If the user has enabled the docker services then the Docker containers will be started using the order on the Docker tab. The order of the containers and delays between starting the containers can be set on the Docker tab."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"VMs"}),(0,t.jsx)(n.br,{}),"\n","Any VMs the user has set to auto-start will now be started."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By this stage, the Unraid server will be fully operational."}),"\n",(0,t.jsx)(n.h2,{id:"boot-failure",children:"Boot failure"}),"\n",(0,t.jsx)(n.p,{children:"The following are some actions that can be taken to try and identify the cause of a boot failure:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["If possible use a USB 2.0 port in preference to a USB 3.0 one as they seem to be more reliable for booting purposes. In addition USB 2.0 drives also seem less prone to failure than USB 3.0 ones. Many modern motherboards no longer have USB 2.0 ports directly exposed but there is normally a USB 2.0 header on the motherboard that can be used via an appropriate adapter.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["USB 3.0 ",(0,t.jsx)(n.strong,{children:"does"})," work with no problems for many people"]}),"\n",(0,t.jsx)(n.li,{children:"After initial load Unraid runs from RAM so gains no significant performance advantage from using USB 3.0."}),"\n",(0,t.jsx)(n.li,{children:"USB 2.0 drives tend to run cooler than USB 3.0 ones which probably explains why they tend to last longer."}),"\n",(0,t.jsx)(n.li,{children:"USB 2.0 drives are typically cheaper than USB 3.0 ones- so why pay more if not needed"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Check that the BIOS on the Unraid server still has the flash device set as the boot device. It has been known to get reset for no obvious reason."}),"\n",(0,t.jsxs)(n.li,{children:["On a windows 10 PC or a Mac run a check on the flash device.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This will determine if something is wrong physically or logically with the flash device."}),"\n",(0,t.jsx)(n.li,{children:"If you do not already have one make sure you have a copy of the config folder of the flash device as this contains all your current configuration information."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Download the zip version of the release from Limetech and extract all the bz* type files over-writing those on the flash device.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This will determine if these files were not written correctly for some reason or are corrupt."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Rewrite the flash device with a clean copy of Unraid and copy across just the key file from your backup to the config folder","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This can determine if the flash device itself is OK"}),"\n",(0,t.jsxs)(n.li,{children:["Copy across the remaining contents of the config folder to the flash device","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If this goes well you are back up and running with your previous configuration intact."}),"\n",(0,t.jsx)(n.li,{children:"If this fails then try booting in Safe Mode. If this works then a plugin is causing problems"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If the original flash device cannot be made to boot try a brand new flash device and clean copy of Unraid (with the default configurations).","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This can determine if something is wrong with the server's hardware (motherboard, CPU, RAM, USB port, etc.)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Install a clean/new copy of Unraid on a new flash device and then copy the ",(0,t.jsx)(n.code,{children:"config"})," folder over from the old one.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If this works then the license will need to be transferred to this new flash device."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lost-root-passwords",children:"Lost root Passwords"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/unraid-os/manual/users/reset-password",children:"Resetting your Unraid password"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"lost-boot-drive-and-do-not-know-which-are-the-parity-drives",children:"Lost boot drive and do not know which are the parity drives"}),"\n",(0,t.jsx)(n.p,{children:"Occasionally users get the scenario where they have the following combination of circumstances:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Unraid boot drive has failed."}),"\n",(0,t.jsx)(n.li,{children:"There is no recent backup of the boot drive that can be used to restore the drive configuration."}),"\n",(0,t.jsx)(n.li,{children:"There is uncertainty about which drives are the parity drives."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The issue is how to get the Unraid system operational again on a new boot drive without data loss. You can exploit the fact that Unraid will recognise any data disk previously used by Unraid as containing a valid file system compatible with Unraid, and that the parity drives do not contain a valid file system."}),"\n",(0,t.jsx)(n.p,{children:"The basic approach is:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new Unraid boot drive."}),"\n",(0,t.jsx)(n.li,{children:"Boot the Unraid server off this new drive. At this point no drives will be assigned."}),"\n",(0,t.jsx)(n.li,{children:"Get the new drive licensed. This can be using either a trial license or by following the procedure for transferring an existing license\nto a new boot drive."}),"\n",(0,t.jsx)(n.li,{children:"Identify which drives are the parity drives. There are 2 ways to do this as shown below."}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Tools > New Config"})})," to reset the array. It is normally easiest to use the option to retain previous assignments but this is not mandatory."]}),"\n",(0,t.jsx)(n.li,{children:"Return to the main tab and now that you know which are the array disks and which are the parity disk(s) correct the assignments to reflect this. You can (optionally) re-order the data drives at this point but be aware this will always invalidate parity2"}),"\n",(0,t.jsxs)(n.li,{children:['Start the array to commit the drive assignments. If you have used an approach that has not invalidated parity you can now tick the "Parity is Already Valid" checkbox to avoid rebuilding parity. If in doubt do ',(0,t.jsx)(n.strong,{children:"not"})," tick this checkbox."]}),"\n",(0,t.jsx)(n.li,{children:"Make any corrections that assume a specific array drive order. For instance If you had any includes/excludes set for a User Share you may want to check them against the current  assignments and correct if needed."}),"\n",(0,t.jsxs)(n.li,{children:["If you did not rebuild parity you may well want to run a parity check at this point to ensure that parity really was valid. If you used method 2) below to identify the parity drives then there ",(0,t.jsx)(n.strong,{children:"will"})," be at least a small number of parity errors so you should run a correcting check as soon as possible."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"identifying-the-parity-drives",children:"Identifying the parity Drives"}),"\n",(0,t.jsx)(n.p,{children:"There are two slightly different approaches that can be used to identify the parity drives. If you get unexpected results then you should ask for help in the forums before proceeding."}),"\n",(0,t.jsx)(n.h4,{id:"using-the-unassigned-devices-plugin",children:"Using the Unassigned Devices plugin"}),"\n",(0,t.jsx)(n.p,{children:"This approach uses a 3rd party plugin. It has the advantage that it will not automatically invalidate parity drives. The process is:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Install the ",(0,t.jsx)(n.strong,{children:"Unassigned Devices"})," plugin via the ",(0,t.jsx)(n.strong,{children:"Apps"})," tab if you have not already done so."]}),"\n",(0,t.jsx)(n.li,{children:"Mount all the disks read-only in turn. You need to use the Read-only mode to avoid any changes to the drive that will invalidate parity."}),"\n",(0,t.jsx)(n.li,{children:"Any disk that will not mount should be a parity drive (although you cannot tell if it is parity1 or parity2 if you have dual parity)."}),"\n",(0,t.jsx)(n.li,{children:"While the drive is mounted you might want to look quickly at the contents if the order of the data drives matters to you to see if you can identify the order for the data drives"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"using-unraids-built-in-capability",children:"Using Unraid's built-in capability"}),"\n",(0,t.jsx)(n.p,{children:"This approach does not need to use a 3rd party plugin and will invalidate parity so that it need so be rebuilt."}),"\n",(0,t.jsx)(n.p,{children:"The process is:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Assign ",(0,t.jsx)(n.strong,{children:"ALL"})," data drives to the array and start the array. Unraid will recognize any drives that have previously been used by Unraid and leave their contents intact"]}),"\n",(0,t.jsxs)(n.li,{children:["At this point any parity drives will show as ",(0,t.jsx)(n.strong,{children:"unmountable"})," since the parity drives contain no file system. You should have the same number of unmountable drives as you had parity drives and as long as this is the case make a note of their serial numbers. If this is not the case ask for help in the Unraid forums on the best way to proceed."]}),"\n",(0,t.jsx)(n.li,{children:"While the drives are mounted you might want to look quickly at the contents if the order of the data drives matters to you to see if you can identify the order for the data drives."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"backing-up-the-boot-drive",children:"Backing up the boot drive"}),"\n",(0,t.jsx)(n.p,{children:"Since the Unraid boot drive contains all user specific settings in the 'config' folder You should ideally always make a backup of the Unraid boot drive any time you make any significant configuration changes."}),"\n",(0,t.jsx)(n.p,{children:"There are various ways of achieving this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["From the Unraid WebGUI via ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Main > Boot > Device > Flash > Flash Backup"})}),". This will create a zip file that you then download."]}),"\n",(0,t.jsxs)(n.li,{children:["By Installing ",(0,t.jsx)(n.a,{href:"/connect/about",children:"Unraid Connect"}),", which provides for automated backups to cloud servers managed by Limetech."]}),"\n",(0,t.jsx)(n.li,{children:"By plugging the flash device into a PC/Mac and copying the full contents to a local folder on the PC/Mac."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"manually-upgrading-or-downgrading-an-unraid-release",children:"Manually upgrading (or downgrading) an Unraid release"}),"\n",(0,t.jsxs)(n.p,{children:["This procedure is identical to carrying out an ",(0,t.jsx)(n.a,{href:"/unraid-os/manual/upgrade-instructions#manual-upgrade-or-downgrade",children:"upgrade or downgrade of the Unraid OS"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"bzimage-checksum-errorfailure-reading-flash-device",children:"Bzimage checksum error/failure reading flash device"}),"\n",(0,t.jsxs)(n.p,{children:["This procedure is identical to carrying out an ",(0,t.jsx)(n.a,{href:"/unraid-os/manual/upgrade-instructions#manual-upgrade-or-downgrade",children:"upgrade or downgrade of the Unraid OS"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If the above does not help then it is advisable to post in the Unraid forums stating what you have tried and what are your current symptoms."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5405:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/BootMenu-105fcf5bc771c0123d8f690d108dc260.jpg"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);