"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9725],{7908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(5893),i=t(1151);const s={},o="USB Flash Drive Preparation",l={id:"legacy/FAQ/usb-flash-drive-preparation",title:"USB Flash Drive Preparation",description:"USB Flash Drives",source:"@site/docs/legacy/FAQ/usb-flash-drive-preparation.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/usb-flash-drive-preparation",permalink:"/de/legacy/FAQ/usb-flash-drive-preparation",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/usb-flash-drive-preparation.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Understanding SMART Reports",permalink:"/de/legacy/FAQ/understanding-smart-reports"},next:{title:"Contribute",permalink:"/de/category/contribute"}},a={},d=[{value:"USB Flash Drives",id:"usb-flash-drives",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Windows XP",id:"windows-xp",level:3},{value:"Windows Vista and Windows 7",id:"windows-vista-and-windows-7",level:3},{value:"MacOS X",id:"macos-x",level:3},{value:"Booting Unraid Server",id:"booting-unraid-server",level:2},{value:"If the Flash will not boot, read over the following tips",id:"if-the-flash-will-not-boot-read-over-the-following-tips",level:2}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"usb-flash-drive-preparation",children:"USB Flash Drive Preparation"}),"\n",(0,r.jsx)(n.h2,{id:"usb-flash-drives",children:"USB Flash Drives"}),"\n",(0,r.jsxs)(n.p,{children:["----- There is now an USB Creator tool\nfrom Limetech, for both Windows and macOS that users are encouraged to\nuse. The tool can be found ",(0,r.jsx)(n.a,{href:"https://unraid.net/download",children:"here."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["----- Important version note: This document is no longer for\n",(0,r.jsx)(n.strong,{children:"WINDOWS"})," users. In general, you should use ",(0,r.jsx)(n.a,{href:"https://unraid.net/download",children:"Unraid Server\nInstallation"})," instead. With the advent of\nthe all-in-one releases (as of v4.6 Final), a ",(0,r.jsx)(n.strong,{children:"make_bootable.bat"}),"\nbatch installation file is included, that replaces the use of the\n",(0,r.jsx)(n.strong,{children:"syslinux"})," utility in preparing the flash drives for booting Unraid.\nThe instructions below do still work, and are necessary for installing\nversions of Unraid earlier than v4.6 Final, and for preparing a flash\ndrive on a Mac. And there is still value in the advanced troubleshooting\ntips below."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"The Unraid Server OS is designed to be installed on, and boot from a USB\nFlash storage device, 512MB or larger. Use a high quality Flash drive\nfrom reputable manufacturers such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lexar"}),"\n",(0,r.jsx)(n.li,{children:"PNY"}),"\n",(0,r.jsx)(n.li,{children:"Samsung"}),"\n",(0,r.jsx)(n.li,{children:"Kingston"}),"\n",(0,r.jsx)(n.li,{children:"And many more"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,r.jsx)(n.h3,{id:"windows-xp",children:"Windows XP"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 1"})," Plug the Flash into your PC and re-format it using Windows\n(right-click the Flash under ",(0,r.jsx)(n.strong,{children:"My Computer"})," and select ",(0,r.jsx)(n.strong,{children:"Format"}),"):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.strong,{children:"File system"}),", select ",(0,r.jsx)(n.strong,{children:"FAT32"})]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.strong,{children:"Volume label"}),", enter ",(0,r.jsx)(n.strong,{children:"UNRAID"})," (exactly 6 capital letters)"]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"Quick Format"})," and click ",(0,r.jsx)(n.strong,{children:"Start"})]}),"\n",(0,r.jsxs)(n.li,{children:["For many, the above steps were all that was necessary to format the\ndrive. For others, selecting a file system of ",(0,r.jsx)(n.strong,{children:"FAT"})," or ",(0,r.jsx)(n.strong,{children:"FAT16"}),"\nwas necessary, and others found that formatting it with the ",(0,r.jsx)(n.strong,{children:"HP\nFlash Formatter Tool"})," was required, or even other steps. If you\ndetermine that the Windows formatting did not succeed in creating a\nbootable USB drive, then see the Advanced tips at the bottom."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 2"})," Download the ",(0,r.jsx)(n.strong,{children:"syslinux"})," tool from the ",(0,r.jsx)(n.a,{href:"http://lime-technology.com/download/",children:"Lime Tech\ndownload"})," page, and extract\n",(0,r.jsx)(n.strong,{children:"syslinux.exe"})," to a simple directory, for example, ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"c:\\"})}),", and then\nrun it by clicking on ",(0,r.jsx)(n.strong,{children:"Start"})," / ",(0,r.jsx)(n.strong,{children:"Run"}),". In the dialog box, enter:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"c:\\syslinux.exe\xa0-ma\xa0f:"})}),"\n",(0,r.jsxs)(n.p,{children:["If necessary, change the directory from ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"c:\\"})})," to whatever directory\nyou downloaded ",(0,r.jsx)(n.strong,{children:"syslinux"})," to, and change the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"f:"})})," to use whatever\ndrive letter that Windows mounted your Flash on."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"syslinux"})," tool will create a hidden system file named\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ldlinux.sys"})})," on the Flash and make the drive bootable. The latest\nversion and a complete distribution of ",(0,r.jsx)(n.strong,{children:"syslinux"})," is available\n",(0,r.jsx)(n.a,{href:"http://syslinux.zytor.com/",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 3"})," Download the latest ",(0,r.jsx)(n.a,{href:"http://lime-technology.com/download",children:"Unraid\nServer"}),", and extract the files from\nthe zip archive to your Flash. When extracting the files, make sure that\nthe option to preserve the folder structure is selected. There is a\n",(0,r.jsx)(n.strong,{children:"config"})," folder with initial configuration files, that needs to be\ncorrectly extracted. If done correctly, you should see ",(0,r.jsx)(n.strong,{children:"bzroot"})," and\n",(0,r.jsx)(n.strong,{children:"bzimage"})," on the flash drive, plus a ",(0,r.jsx)(n.strong,{children:"config"})," folder containing\nfiles such as ",(0,r.jsx)(n.strong,{children:"network.cfg"})," and ",(0,r.jsx)(n.strong,{children:"ident.cfg"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 4"})," Click on the ",(0,r.jsx)(n.strong,{children:"Safely Remove Hardware"})," tool tray icon and\nselect your Flash drive to be safely removed."]}),"\n",(0,r.jsx)(n.h3,{id:"windows-vista-and-windows-7",children:"Windows Vista and Windows 7"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 1"})," Plug the Flash into your PC and re-format it using Windows\n(Right-Click the Flash under ",(0,r.jsx)(n.strong,{children:"Computer"})," and select ",(0,r.jsx)(n.strong,{children:"Format"}),"):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.strong,{children:"File system"}),", leave it as ",(0,r.jsx)(n.strong,{children:"Default"})]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.strong,{children:"Volume label"}),", enter ",(0,r.jsx)(n.strong,{children:"UNRAID"})," (exactly 6 capital letters)"]}),"\n",(0,r.jsxs)(n.li,{children:["Check the ",(0,r.jsx)(n.strong,{children:"Quick Format"})," box and click ",(0,r.jsx)(n.strong,{children:"Start"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you determine that the Windows formatting did not succeed in creating\na bootable USB drive, then see the Advanced tips at the bottom."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 2"})," Download the latest ",(0,r.jsx)(n.a,{href:"http://lime-technology.com/download",children:"Unraid\nServer"}),", and extract the files from\nthe zip archive to your Flash."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 3"})," On the Flash drive, Right-Click on ",(0,r.jsx)(n.strong,{children:"make_bootable.bat"})," and\nselect ",(0,r.jsx)(n.strong,{children:"Run as administrator"}),". Press any key to continue."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 4"})," The process takes only a moment to complete. You can then\nclose any open windows and eject the Flash drive."]}),"\n",(0,r.jsx)(n.h3,{id:"macos-x",children:"MacOS X"}),"\n",(0,r.jsx)(n.p,{children:"You'll need to download the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"http://unetbootin.sourceforge.net",children:"unetbootin"})," - installs Unraid on\nyour flash drive for you"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"http://www.kernel.org/pub/linux/utils/boot/syslinux/",children:"syslinux"})," - a\ncollection of linux tools that will allow you to make the drive\nbootable"]}),"\n",(0,r.jsx)(n.li,{children:"Unraid - don't unzip it..."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. Plug in your USB Flash drive and format it using Disk Utility."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Open Disk Utility (Applications \u2192 Utilities \u2192 Disk Utility) and\nchoose your device from the list on the left - note: In recent\nversions of macOS you will need to select View \u2192 Show All Devices.\nPlease make sure to read carefully to know when to select "Device"\nor "Partition"'}),"\n",(0,r.jsx)(n.li,{children:"Select Partition"}),"\n",(0,r.jsx)(n.li,{children:"Choose Partition Layout: 1 Partition"}),"\n",(0,r.jsx)(n.li,{children:"Call it 'UNRAID' (no spaces, all caps)"}),"\n",(0,r.jsx)(n.li,{children:"Click Options and make sure Master Boot Record is selected"}),"\n",(0,r.jsx)(n.li,{children:"Click Apply and your disk will format"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. Verify the new partition"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Choose the UNRAID partition from the list on the left"}),"\n",(0,r.jsx)(n.li,{children:"Select First Aid and Verify Disk"}),"\n",(0,r.jsx)(n.li,{children:'Check the "Show Details" box and get the device path for your\ndisk, ex: /dev/disk2s1'}),"\n",(0,r.jsxs)(n.li,{children:["Unmount the ",(0,r.jsx)(n.strong,{children:"partition"}),' by clicking "Unmount" in the top menu']}),"\n",(0,r.jsx)(n.li,{children:"leave Disk Utility open, you'll need it again"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. Make the partition Bootable"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open Terminal (Applications \u2192 Utilities \u2192 Terminal)"}),"\n",(0,r.jsx)(n.li,{children:"Now you'll need the raw disk device name.. so if your partition\ndevice path was /dev/disk2s1, the raw device name is /dev/rdisk2,\nbasically you drop the s1 off the end (that's the partition number)\nand add in a r before disk"}),"\n",(0,r.jsxs)(n.li,{children:["Type the following command, substituting ",(0,r.jsx)(n.code,{children:"<device>"})," for your\nraw deivce name ex: /dev/rdisk2 and press enter"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"fdisk\xa0-e\xa0<device>"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"At the > prompt type the following and press enter between each"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"f\xa01"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"write"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"exit"})]}),"\n",(0,r.jsx)(n.p,{children:"Note: if you get an error about the device not being available for\nwriting, ensure you have Unmounted the partition in Disk Utility"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Unmount the partition again in Disk Utility (the above command will\ncause it to be remounted)"}),"\n",(0,r.jsx)(n.li,{children:"Unzip/tar your syslinux download (you can leave it in the Downloads\nfolder"}),"\n",(0,r.jsx)(n.li,{children:"cd to that folder in terminal by typing the following (you may need\nto change the version number to match your download)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"cd\xa0~/Downloads/syslinux-4.05/mbr"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Install the bootable MBR on your flash drive with the following\ncommand (again substituting ",(0,r.jsx)(n.code,{children:"<device>"})," for your raw device\nname)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"dd\xa0conv=notrunc\xa0bs=440\xa0count=1\xa0if=mbr.bin\xa0of=<device>"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"4. Install Unraid on your prepared Flash Drive"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Change the extension of your Unraid download from zip to iso"}),"\n",(0,r.jsx)(n.li,{children:"Open unetbootin (it will need your password)"}),"\n",(0,r.jsx)(n.li,{children:"Choose Disk Image at the bottom and browse for your Unraid iso"}),"\n",(0,r.jsx)(n.li,{children:"Choose the device path for your partition (it's probably already\nselected)"}),"\n",(0,r.jsx)(n.li,{children:"Click OK"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Note: if you get an error about overwriting menu.c32, click Yes To All"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When it finishes, you can eject your USB Flash Drive and put it in\nyour Unraid server and power it up"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"I Think this would work with Windows, Linux versions also. So if any one\nhas Windows or Linux can you try this and write here if it works there\nalso."}),"\n",(0,r.jsx)(n.h2,{id:"booting-unraid-server",children:"Booting Unraid Server"}),"\n",(0,r.jsx)(n.p,{children:"Safely remove/eject the Flash from your PC and plug it into your server.\nPower up your server and see if it immediately boots (with some\nmotherboards it will). If it does not boot to the Unraid boot screen\nthat displays a choice of starting Unraid or Memtest, reboot your server\nand enter the BIOS setup. Navigate to the appropriate screen(s) and\nselect your USB Flash device as the boot device. In some BIOS, the flash\ndrive may show up in the list of hard disks, and you may have to select\nit there. Save your BIOS settings and try to boot the Flash. Be aware\nthat some motherboards will change the boot order when you add hard\ndrives, and you will have to return to these same BIOS screens to\nre-select your flash drive."}),"\n",(0,r.jsxs)(n.p,{children:["Note: You may need to check\n",(0,r.jsx)(n.a,{href:"http://www.lime-technology.com/joomla/unraid-os",children:"here"})," for more ",(0,r.jsx)(n.em,{children:"BIOS\nSetup Tips"})," and ",(0,r.jsx)(n.em,{children:"Other BIOS Suggestions"}),". For machines with an AMI BIOS,\ncheck\n",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=2302.msg17664#msg17664",children:"here"}),".\nFor more general BIOS suggestions on getting a machine to boot the USB\nflash drive, check\n",(0,r.jsx)(n.a,{href:"http://www.weethet.nl/english/hardware_bootfromusbstick.php",children:"here"}),",\nnear the bottom of the page. Also see\n",(0,r.jsx)(n.a,{href:"/de/unraid-os/getting-started/",children:"here"})]}),"\n",(0,r.jsx)(n.h2,{id:"if-the-flash-will-not-boot-read-over-the-following-tips",children:"If the Flash will not boot, read over the following tips"}),"\n",(0,r.jsx)(n.p,{children:"Unfortunately, some motherboards and BIOS versions are very picky about\nthe geometry or configuration of the USB flash drive. Some combinations\nof motherboard, BIOS, and flash drive do not work, or only work after\nmore advanced 'modifications'. The following tips are what users have\nfound to work, in different situations. If one does not work for you,\ntry another."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['If your flash drive had pre-installed "U3" software, it will need\nto be removed before you format and install Unraid on it. U3\nUn-Install software is available\n',(0,r.jsx)(n.a,{href:"http://www.u3.com/uninstall/",children:"here"}),". A U3 removal tool specific to\nSanDisk drives can be found\n",(0,r.jsx)(n.a,{href:"http://u3.sandisk.com/launchpadremoval.htm",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Some instructions for loading ",(0,r.jsx)(n.strong,{children:"syslinux"}),' on your flash drive leave\noff the "',(0,r.jsx)(n.strong,{children:"-ma"}),'" options of the command. If your flash drive does\nnot have a preloaded master boot record and a partition marked as\n"active", then it is unlikely to boot unless you use the ',(0,r.jsx)(n.strong,{children:"-ma"}),"\noptions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Try formatting the USB drive as FAT instead of FAT32"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You may need to use the ",(0,r.jsx)(n.strong,{children:"HP formatting tool"})," to make your flash\ndrive bootable on your BIOS. It sets the Cylinders/Heads/Sector\ngeometry of a flash drive to an alternate set of geometry values.\nThe alternate geometry will often will make it possible to use your\nflash drive as a boot disk when your BIOS does not work with the\nexisting geometry. For more info, see\n",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=359.0",children:"here"})," and\n",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=366.0",children:"here"})," and\n",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=2703.0",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Apparently, there is more than one version of the ",(0,r.jsx)(n.strong,{children:"HP format\ntool"}),". The version of the ",(0,r.jsx)(n.strong,{children:"HP USB Format Tool"})," that works best\nhas a file name of ",(0,r.jsx)(n.strong,{children:"SP27213.exe"}),". Some have had problems with the\nversion named ",(0,r.jsx)(n.strong,{children:"SP27608.exe"}),". (eg. Sandisk 16GB Cruzer Contour &\nAmicroe 32GB). HP seems to have removed both from their downloads\nsection of their website, but Google ",(0,r.jsx)(n.strong,{children:"HP SP27213.exe"})," and you\nshould be able to find it easily."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If it appears as if the flash drive tries to boot, but hangs while\ndecompressing the ",(0,r.jsx)(n.strong,{children:"bzroot"})," or ",(0,r.jsx)(n.strong,{children:"bzimage"})," files on the flash, it\nis possible that either the ",(0,r.jsx)(n.strong,{children:"bzroot"})," or ",(0,r.jsx)(n.strong,{children:"bzimage"})," file is\ncorrupt or incomplete. This could happen if you did not safely eject\nthe flash drive, after copying the files to it when it was plugged\ninto your PC. The file would only have been partially written to the\nflash drive."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If it appears as if the flash drive tries to boot, but only gets\npart way before hanging, you may need to add additional options to\nyour ",(0,r.jsx)(n.strong,{children:"syslinux.cfg"})," file on your flash drive to boot your\nmotherboard."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If it appears as if the flash drive gets part way through the boot\nprocess but stops when loading ",(0,r.jsx)(n.strong,{children:"bzroot"}),", you may need to use the\nlatest version of ",(0,r.jsx)(n.strong,{children:"syslinux"})," in the\n",(0,r.jsx)(n.a,{href:"http://lime-technology.com/dnlds",children:"downloads"})," folder at\nLime-Technology. Use of ",(0,r.jsx)(n.strong,{children:"syslinux version 3.63"})," in combination\nwith the ",(0,r.jsx)(n.strong,{children:"-ma"})," option was the solution in ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=1176.msg15666#msg15666",children:"this\nthread"}),".\n(After downloading ",(0,r.jsx)(n.a,{href:"http://download.lime-technology.com/syslinux%203.63.zip",children:"syslinux\n3.63.zip"}),",\nextract ",(0,r.jsx)(n.strong,{children:"syslinux.exe"})," from the zip file.) A number of users\nupgrading from a v4.2 version to a v4.3 version have found that the\nnew ",(0,r.jsx)(n.strong,{children:"syslinux"})," is necessary, even though their flash drive had\nworked fine with v4.2."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If it appears as if the flash drive gets part way through the boot\nprocess but reboots when loading ",(0,r.jsx)(n.strong,{children:"bzroot"}),", one user found that he\nfixed it be replacing his graphics card with an older (possibly more\nbasic) graphics card.\n",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=4769",children:"1"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A user has created another procedure based on the ",(0,r.jsx)(n.strong,{children:"makebootfat"}),"\ntool. This procedure seems especially useful for newer Intel boards,\nsuch as boards based on the P965, P35, and P45 chipsets and their G\nvariants. See\n",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=2407.0",children:"this"}),"\npost. It worked when nothing else would, on his Intel P965-based\nboard."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Also see\n",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=922.0",children:"this"}),"\nthread (uses a Knoppix installation or Live CD), if you have a board\nthat will only boot from a flash drive as a USB-ZIP drive. Similar\ninstructions, using Ubuntu or similar, can be found here:\n",(0,r.jsx)(n.a,{href:"http://www.pendrivelinux.com/booting-linux-from-usb-zip-on-older-systems",children:"http://www.pendrivelinux.com/booting-linux-from-usb-zip-on-older-systems"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"And last of all, try upgrading the BIOS of your motherboard. A later\nBIOS may have better support for booting from USB."}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);