"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6617],{7604:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var i=o(5893),n=o(1151);const a={sidebar_position:9},r="OS",s={id:"unraid-os/faq/os-faq",title:"OS",description:"I Need Help with a Build / System Configuration. Where do I go?",source:"@site/docs/unraid-os/faq/os-faq.md",sourceDirName:"unraid-os/faq",slug:"/unraid-os/faq/os-faq",permalink:"/de/unraid-os/faq/os-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/faq/os-faq.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"unraidSidebar",previous:{title:"FAQ",permalink:"/de/category/faq"},next:{title:"Installation",permalink:"/de/unraid-os/faq/installation"}},d={},h=[{value:"I Need Help with a Build / System Configuration. Where do I go?",id:"i-need-help-with-a-build--system-configuration-where-do-i-go",level:2},{value:"Does Unraid Support Hardware-based RAID Controllers?",id:"does-unraid-support-hardware-based-raid-controllers",level:2},{value:"Can I use a HASP Key within a VM on Unraid? How Does that Work with Multiple VMs?",id:"can-i-use-a-hasp-key-within-a-vm-on-unraid-how-does-that-work-with-multiple-vms",level:2},{value:"My USB Flash Has Failed and I Don&#39;t Have a Backup. How do I Restore my Configuration?",id:"my-usb-flash-has-failed-and-i-dont-have-a-backup-how-do-i-restore-my-configuration",level:2},{value:"What Should I do if I have Forgotten my Root Password?",id:"what-should-i-do-if-i-have-forgotten-my-root-password",level:2},{value:"How do I completely start Unraid OS from scratch? How do I wipe my existing configuration / filesystems?",id:"how-do-i-completely-start-unraid-os-from-scratch-how-do-i-wipe-my-existing-configuration--filesystems",level:2},{value:"Whenever I Shutdown my Windows 10 VM with my AMD GPU Assigned, if I try to restart it, it doesn&#39;t work. What do I do?",id:"whenever-i-shutdown-my-windows-10-vm-with-my-amd-gpu-assigned-if-i-try-to-restart-it-it-doesnt-work-what-do-i-do",level:2},{value:"How do I passthrough my primary GPU to a VM when my CPU doesn&#39;t have an integrated graphics device?",id:"how-do-i-passthrough-my-primary-gpu-to-a-vm-when-my-cpu-doesnt-have-an-integrated-graphics-device",level:2},{value:"What&#39;s the best way to add more storage to a system above what the built-in controller supports?",id:"whats-the-best-way-to-add-more-storage-to-a-system-above-what-the-built-in-controller-supports",level:2},{value:"Does Unraid support various RAID types such as RAID1/5/6/10?",id:"does-unraid-support-various-raid-types-such-as-raid15610",level:2},{value:"My system is crashing but my logs don&#39;t contain the event. What do I do to obtain support?",id:"my-system-is-crashing-but-my-logs-dont-contain-the-event-what-do-i-do-to-obtain-support",level:2},{value:"Is there any way to disable the br0 bridge?",id:"is-there-any-way-to-disable-the-br0-bridge",level:2},{value:"How do I enable UEFI boot mode if I configured my flash device using the manual method?",id:"how-do-i-enable-uefi-boot-mode-if-i-configured-my-flash-device-using-the-manual-method",level:2},{value:"I&#39;m having problems passing through my RTX-class GPU to a virtual machine",id:"im-having-problems-passing-through-my-rtx-class-gpu-to-a-virtual-machine",level:2},{value:"Does Unraid have a allocation feature that remembers bad sectors on drives to prevent writes to them?",id:"does-unraid-have-a-allocation-feature-that-remembers-bad-sectors-on-drives-to-prevent-writes-to-them",level:2},{value:"I currently have an array of devices that are formatted with an MBR-style partition table and I want to convert to GPT. How do I do that?",id:"i-currently-have-an-array-of-devices-that-are-formatted-with-an-mbr-style-partition-table-and-i-want-to-convert-to-gpt-how-do-i-do-that",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"os",children:"OS"}),"\n",(0,i.jsx)(t.h2,{id:"i-need-help-with-a-build--system-configuration-where-do-i-go",children:"I Need Help with a Build / System Configuration. Where do I go?"}),"\n",(0,i.jsxs)(t.p,{children:["For assistance with creating a special build for Unraid OS, we highly advise users to check out our ",(0,i.jsx)(t.a,{href:"https://forums.unraid.net/forum/35-unraid-compulsive-design/%7CUnraid",children:"Compulsive Design forum"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Our community is fantastic about helping folks create their ultimate Unraid system."}),"\n",(0,i.jsx)(t.h2,{id:"does-unraid-support-hardware-based-raid-controllers",children:"Does Unraid Support Hardware-based RAID Controllers?"}),"\n",(0,i.jsx)(t.p,{children:"While some users have been able to use RAID controllers to present devices to Unraid OS for use, they definitely complicate things when it comes to features and maintenance. Disk temperatures and even some SMART values may not come through correctly when presented through a hardware RAID controller."}),"\n",(0,i.jsx)(t.p,{children:"Therefore, we only officially support the use of non-RAID controllers for storage devices. Most RAID storage controllers offer a way to flash the firmware to convert the card into a basic HBA for devices (eliminating the RAID entirely), but you'll have to search for your specific controller to see if that is an option."}),"\n",(0,i.jsx)(t.h2,{id:"can-i-use-a-hasp-key-within-a-vm-on-unraid-how-does-that-work-with-multiple-vms",children:"Can I use a HASP Key within a VM on Unraid? How Does that Work with Multiple VMs?"}),"\n",(0,i.jsx)(t.p,{children:"If the HASP key is a USB dongle, then you can assign it to a single virtual machine at a time. Two VMs cannot be running with concurrent access to the same key."}),"\n",(0,i.jsx)(t.p,{children:"In addition, depending on how the device works, you may need to assign an entire USB controller to the VM for which you want to use the key. You'll need to test this with a Trial license of our software before committing to a purchase, because all USB devices can be a bit different in how they work within a VM."}),"\n",(0,i.jsx)(t.h2,{id:"my-usb-flash-has-failed-and-i-dont-have-a-backup-how-do-i-restore-my-configuration",children:"My USB Flash Has Failed and I Don't Have a Backup. How do I Restore my Configuration?"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/de/connect/about",children:"Unraid Connect"})," has support for Flash Backups to help resolve some of the pain points of a broken flash drive."]}),"\n",(0,i.jsx)(t.p,{children:"First, you'll need to get a new flash device. Remember to get a quality device from manufacturers such as Kingston, PNY, Lexar, or Samsung. Second, you'll need to find the e-mail with your registration key for your previous flash device."}),"\n",(0,i.jsx)(t.p,{children:"Last, you'll need to install Unraid on the new flash device, boot it up on your server, and then install the old registration key on the new flash (from the Tools \u2192 Registration page). From there you can request and then install a replacement key."}),"\n",(0,i.jsx)(t.p,{children:"As far as your configuration goes, if you can remember your drive assignments (which disks were assigned to which slots), you should be able to simply re-assign them all and start the array."}),"\n",(0,i.jsx)(t.p,{children:"You may need to reconfigure your shares, users, and other system settings, but your data should be intact."}),"\n",(0,i.jsxs)(t.p,{children:["If you cannot remember your drive assignments, ",(0,i.jsx)(t.a,{href:"https://forums.unraid.net/forum/55-general-support/",children:"please post on the forum for further assistance (under General\nSupport)"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"what-should-i-do-if-i-have-forgotten-my-root-password",children:"What Should I do if I have Forgotten my Root Password?"}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/unraid-os/manual/troubleshooting/#lost-root-password",children:"Lost Root Password"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Important: this process only works for user passwords. If you encrypt your drives and forget this password, unfortunately you are hosed. There is no way for Lime Technology or anyone to recover this password. Please remember it or write it down in a secure, locked place!"})}),"\n",(0,i.jsx)(t.h2,{id:"how-do-i-completely-start-unraid-os-from-scratch-how-do-i-wipe-my-existing-configuration--filesystems",children:"How do I completely start Unraid OS from scratch? How do I wipe my existing configuration / filesystems?"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Ensure there is no data on the system that you want or need."}),"\n",(0,i.jsx)(t.li,{children:"Stop the array and shut down the server."}),"\n",(0,i.jsx)(t.li,{children:"Remove the USB flash device."}),"\n",(0,i.jsx)(t.li,{children:"Using a Windows or Mac computer, reformat the flash using the USB Flash Creator tool from our website."}),"\n",(0,i.jsx)(t.li,{children:"Reinstall the flash in the server and boot it up."}),"\n",(0,i.jsx)(t.li,{children:'Click on the "terminal" icon in the top right corner of the WebGUI.'}),"\n",(0,i.jsx)(t.li,{children:"From the command line, type: lsblk"}),"\n",(0,i.jsx)(t.li,{children:"Note all the devices present excluding your USB flash device."}),"\n",(0,i.jsx)(t.li,{children:"Now for each device in the list (excluding the USB flash device), type the following command: wipefs /dev/sdX (replacing X with the letter of the device from the previous steps). This will remove the filesystem from the device so it can be reformatted by Unraid OS."}),"\n",(0,i.jsx)(t.li,{children:"Now continue reconfiguring Unraid OS per the normal procedure."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"whenever-i-shutdown-my-windows-10-vm-with-my-amd-gpu-assigned-if-i-try-to-restart-it-it-doesnt-work-what-do-i-do",children:"Whenever I Shutdown my Windows 10 VM with my AMD GPU Assigned, if I try to restart it, it doesn't work. What do I do?"}),"\n",(0,i.jsx)(t.p,{children:"This is due to issues with many AMD GPUs not supporting function-level resets. NVIDIA GPUs are recommended as they do not have this problem. A workaround to this issue is to eject the GPU from the VM before shutting it down. You can do this from the bottom right corner in Windows where you would also find any USB devices. Just eject the GPU, then use another machine to shut down the VM from the Unraid WebGUI. Then when you start it again, it shouldn't have any problems."}),"\n",(0,i.jsx)(t.h2,{id:"how-do-i-passthrough-my-primary-gpu-to-a-vm-when-my-cpu-doesnt-have-an-integrated-graphics-device",children:"How do I passthrough my primary GPU to a VM when my CPU doesn't have an integrated graphics device?"}),"\n",(0,i.jsxs)(t.p,{children:["This can be a challenge, but luckily SpaceInvaderOne ",(0,i.jsx)(t.a,{href:"https://forums.unraid.net/topic/51230-video-guidehow-to-pass-through-an-nvidia-gpu-as-primary-or-only-gpu-in-unraid/",children:"has this covered in a video guide on our\nforums!"})]}),"\n",(0,i.jsx)(t.h2,{id:"whats-the-best-way-to-add-more-storage-to-a-system-above-what-the-built-in-controller-supports",children:"What's the best way to add more storage to a system above what the built-in controller supports?"}),"\n",(0,i.jsx)(t.p,{children:"Unraid can easily scale storage across multiple controllers in a system. The controllers must act as standard HBAs and not actual RAID controllers. Most RAID controllers offer an option to either flash their firmware or reconfigure the card into a mode to operate this way."}),"\n",(0,i.jsx)(t.h2,{id:"does-unraid-support-various-raid-types-such-as-raid15610",children:"Does Unraid support various RAID types such as RAID1/5/6/10?"}),"\n",(0,i.jsx)(t.p,{children:"Unraid manages storage in two separate buckets: the array and the cache. The array itself uses dedicated parity device(s) similar to a MAID."}),"\n",(0,i.jsx)(t.p,{children:"The array cannot be configured into traditional RAID methods such as RAID 1/5/6/10."}),"\n",(0,i.jsx)(t.p,{children:'The cache is created using btrfs. When more than one disk is present, the cache is called a "pool" and is by default configured to use btrfs RAID1, which is a slightly different take than a traditional RAID1. The cache can optionally be configured to use btrfs RAID 5/6/10, but RAID 5/6 on btrfs is still considered unstable, so it isn\'t recommended for production use.'}),"\n",(0,i.jsx)(t.h2,{id:"my-system-is-crashing-but-my-logs-dont-contain-the-event-what-do-i-do-to-obtain-support",children:"My system is crashing but my logs don't contain the event. What do I do to obtain support?"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes a hard system crash can prevent you from obtaining vital information in the logs that would help better diagnose the issue. In the event you can't obtain the logs with a remote connection, you'll have to resort to a local one. Attach at least a monitor and keyboard to the server and boot it up into non-GUI mode. Once presented with the login prompt, login as the user 'root' and whatever password you set when you set up the server (if no password was set, leave it blank and press enter again). From the command line now, type the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"tail /var/log/syslog -f\n"})}),"\n",(0,i.jsx)(t.p,{children:"This will begin printing the system log to the monitor directly. Now go about using the server as you normally would. When the crash occurs, take a picture of what's visible on the monitor and post it in the support forums. This will hopefully give us some further insight on the issue."}),"\n",(0,i.jsx)(t.h2,{id:"is-there-any-way-to-disable-the-br0-bridge",children:"Is there any way to disable the br0 bridge?"}),"\n",(0,i.jsx)(t.p,{children:"Absolutely! Simply navigate to the Tools \u2192 Network Settings page to disable network bridging. Note that this will result in differences in behavior for virtual machines (including losing the ability to communicate with the host from a guest)."}),"\n",(0,i.jsx)(t.h2,{id:"how-do-i-enable-uefi-boot-mode-if-i-configured-my-flash-device-using-the-manual-method",children:"How do I enable UEFI boot mode if I configured my flash device using the manual method?"}),"\n",(0,i.jsx)(t.p,{children:"Simply remove the dash symbol from the EFI folder on the root of the flash drive and then make sure your motherboard BIOS is configured to boot UEFI."}),"\n",(0,i.jsx)(t.h2,{id:"im-having-problems-passing-through-my-rtx-class-gpu-to-a-virtual-machine",children:"I'm having problems passing through my RTX-class GPU to a virtual machine"}),"\n",(0,i.jsx)(t.p,{children:"Posting in the forums for assistance is always recommended when troubleshooting a VM / pass through problem, but there is something\nworth noting about these newer devices that is unique compared to previous series cards. These GPUs feature a USB controller built into the GPU. This is quite fortunate as it can be used with a USB hub to then act as a device your Windows VM can interact with more naturally (such as supporting hot plugging USB devices). However, it is recommended that you stub this device to ensure it's driver isn't loaded with Unraid OS. To stub the device, perform the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Locate your IOMMU group containing your GPU and its other devices on the Tools \u2192 System Devices page."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Note the vendor and product IDs indicated in the brackets.\nExample:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"[10de:1f08] 02:00.0 VGA compatible controller: NVIDIA Corporation Device 1f08 (rev a1)\n\n[10de:10f9] 02:00.1 Audio device: NVIDIA Corporation Device 10f9 (rev a1)\n\n**[10de:1ada]** 02.00.2 USB controller: NVIDIA Corporation Device 1ada (rev a1)\n\n**[10de:1adb]** 03:00.3 Serial bus controller [0c80]: NVIDIA Corporation Device 1adb (rev a1)\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Navigate to the flash device settings page (on the Main tab)."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click on the flash device."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Edit the Syslinux configuration by adding the following to the append line on the boot mode selected:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"vfio-pci.ids=[####:####],[####:####]\n"})}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"append vfio-pci.ids=10de:1ada,10de:1adb initrd=/bzroot,/bzroot-gui\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Apply the change and reboot your server."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Edit or create your VM and you will now see these additional PCI devices available to assign to your VM without manually editing your XML."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"does-unraid-have-a-allocation-feature-that-remembers-bad-sectors-on-drives-to-prevent-writes-to-them",children:"Does Unraid have a allocation feature that remembers bad sectors on drives to prevent writes to them?"}),"\n",(0,i.jsx)(t.p,{children:"Hard drives and SSDs use SMART data to keep track of bad sectors and prevent writes. This is native functionality of the underlying hardware. That said, if a device is showing a large amount of bad sectors / reallocated sectors, replacing it soon may be a good idea. If you're not sure, try posting in our General Support forum including the SMART data for the drive in question and our community can help determine what to do."}),"\n",(0,i.jsx)(t.h2,{id:"i-currently-have-an-array-of-devices-that-are-formatted-with-an-mbr-style-partition-table-and-i-want-to-convert-to-gpt-how-do-i-do-that",children:"I currently have an array of devices that are formatted with an MBR-style partition table and I want to convert to GPT. How do I do that?"}),"\n",(0,i.jsx)(t.p,{children:"Any device 2TB or smaller uses MBR-style partition table."}),"\n",(0,i.jsx)(t.p,{children:"Any device larger then 2TB uses GPT-style partition table."}),"\n",(0,i.jsx)(t.p,{children:"For Unraid OS version 6.8.x and earlier:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Starting\xa0position\xa0of\xa0partition\xa01\xa0for\xa0any\xa0storage\xa0device\xa0is\xa032KiB\xa0from\xa0start\xa0of\xa0device\xa0(regardless\xa0of\xa0whether\xa0MBR\xa0or\xa0GPT)."})}),"\n",(0,i.jsx)(t.p,{children:"Starting with Unraid OS 6.9:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Default\xa0starting\xa0position\xa0of\xa0partition\xa01\xa0for\xa0rotational\xa0devices\xa0is\xa032KiB\xa0from\xa0start\xa0of\xa0device\xa0(regardless\xa0of\xa0whether\xa0MBR\xa0or\xa0GPT)."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Default\xa0starting\xa0position\xa0of\xa0partition\xa01\xa0for\xa0non-rotational\xa0devices\xa0is\xa01MiB\xa0from\xa0start\xa0of\xa0device\xa0(regardless\xa0of\xa0whether\xa0MBR\xa0or\xa0GPT)"})}),"\n",(0,i.jsx)(t.p,{children:"Presuming user has valid parity and he wants to preserve data:"}),"\n",(0,i.jsx)(t.p,{children:"Must first swap out and rebuild Parity. Swap out each data device and rebuild one-by-one."}),"\n",(0,i.jsx)(t.p,{children:"For this kind of upgrade, we recommend starting in \u201cMaintenance mode\u201d each time to perform the swap and rebuilds. This will ensure the devices are not written during the process. At the end of the process, the original storage device should be intact."}),"\n",(0,i.jsx)(t.p,{children:"Also highly recommend downloading flash backup: Main/Flash/Flash Backup."})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>r});var i=o(7294);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);