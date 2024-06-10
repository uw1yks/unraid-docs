"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8778],{3369:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var s=n(5893),t=n(1151);const r={sidebar_position:6},o="VM management",a={id:"unraid-os/manual/vm/vm-management",title:"VM management",description:"Overview",source:"@site/docs/unraid-os/manual/vm/vm-management.md",sourceDirName:"unraid-os/manual/vm",slug:"/unraid-os/manual/vm/vm-management",permalink:"/unraid-os/manual/vm/vm-management",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/vm/vm-management.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"unraidSidebar",previous:{title:"Docker Management",permalink:"/unraid-os/manual/docker-management"},next:{title:"VM support",permalink:"/unraid-os/manual/vm/vm-support"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Determining HVM/IOMMU Hardware Support",id:"determining-hvmiommu-hardware-support",level:3},{value:"Online Research",id:"online-research",level:4},{value:"Through the Unraid WebGUI",id:"through-the-unraid-webgui",level:4},{value:"Assigning Graphics Devices",id:"assigning-graphics-devices",level:3},{value:"System Preparation",id:"system-preparation",level:2},{value:"Adjust BIOS Settings",id:"adjust-bios-settings",level:3},{value:"Configure a Network Bridge",id:"configure-a-network-bridge",level:3},{value:"User Shares for Virtualization",id:"user-shares-for-virtualization",level:3},{value:"Recommendations for Share Configuration",id:"recommendations-for-share-configuration",level:4},{value:"Setup Virtualization Preferences",id:"setup-virtualization-preferences",level:3},{value:"Creating Your Own VMs",id:"creating-your-own-vms",level:2},{value:"Basic VM Creation",id:"basic-vm-creation",level:3},{value:"Advanced Options",id:"advanced-options",level:3},{value:"Expanding a vDisk",id:"expanding-a-vdisk",level:2},{value:"Troubleshooting Stuck at UEFI Shell",id:"troubleshooting-stuck-at-uefi-shell",level:2},{value:"Assigning Graphics Devices to Virtual Machines (GPU Pass Through)",id:"assigning-graphics-devices-to-virtual-machines-gpu-pass-through",level:2},{value:"Warning: Passing through a GPU to a SeaBIOS-based VM will disable console VGA access",id:"warning-passing-through-a-gpu-to-a-seabios-based-vm-will-disable-console-vga-access",level:3},{value:"Help! Failed to set iommu for container: Operation not permitted",id:"help-failed-to-set-iommu-for-container-operation-not-permitted",level:3},{value:"Help! I can start my VM with a GPU assigned but all I get is a black screen on my monitor!",id:"help-i-can-start-my-vm-with-a-gpu-assigned-but-all-i-get-is-a-black-screen-on-my-monitor",level:3},{value:"Edit XML for VM to supply GPU ROM manually",id:"edit-xml-for-vm-to-supply-gpu-rom-manually",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"vm-management",children:"VM management"}),"\n",(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(i.p,{children:["While ",(0,s.jsx)(i.a,{href:"/unraid-os/manual/docker-management",children:"Docker Containers"})," are the preferred mechanism for running Linux-based applications such as media servers, backup software, and file sharing solutions, virtual machines add support for non-Linux workloads and the ability to utilize devices that the host cannot (think graphics pass through, USB pass through/assignment, etc). ",(0,s.jsx)(i.em,{children:"Localized Virtualization"})," is our method of supporting VMs where all resources assigned to the guest are local to the host."]}),"\n",(0,s.jsxs)(i.p,{children:["For information on what operating systems have been tested for use with Unraid Server OS, please see the ",(0,s.jsx)(i.a,{href:"/unraid-os/manual/vm/vm-support",children:"VM Support"})," page."]}),"\n",(0,s.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(i.p,{children:['To create virtual machines on Unraid, you will need HVM hardware support (Intel VT-x or AMD-V). To assign host-based PCI devices to those VMs, your hardware must also support IOMMU (Intel VT-d or AMD-Vi). Lastly, all virtualization features must be enabled in your motherboard BIOS (typically found in the CPU or System Agent sections). NOTE: Not all hardware that claims support for this has been proven to work effectively, so see the "tested hardware" section for known working component combinations. Virtual machines can also drive a need for much more RAM/CPU cores depending on the type. Here are some general recommendations on how much RAM should be allocated ',(0,s.jsx)(i.strong,{children:"per virtual machine"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Virtual servers (Windows, Arch, etc.): 256MB - 1GB, 1-2 CPU cores"}),"\n",(0,s.jsx)(i.li,{children:"Virtual desktops (Windows, Ubuntu, etc.): 512MB - 8GB, 2-4 CPU cores"}),"\n",(0,s.jsx)(i.li,{children:"Hybrid VMs (GPU assignment, gaming, etc.): 1GB - 12GB, 2-6 CPU cores"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Keep in mind that memory usage for virtual machines only occurs when they are running, so it's just important to think about these\nrequirements in terms of peak concurrent usage on your system."}),"\n",(0,s.jsx)(i.h3,{id:"determining-hvmiommu-hardware-support",children:"Determining HVM/IOMMU Hardware Support"}),"\n",(0,s.jsx)(i.p,{children:"To determine if hardware has support for HVM or IOMMU, there are two primary methods available:"}),"\n",(0,s.jsx)(i.h4,{id:"online-research",children:"Online Research"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["To check if your Intel processor has support for VT-x or VT-d, visit ",(0,s.jsx)(i.a,{href:"http://ark.intel.com/Search/Advanced",children:"http://ark.intel.com/Search/Advanced"}),". \xa0On the left hand filter panel, you can filter by processors that have support for VT-x,  VT-d, or both."]}),"\n",(0,s.jsxs)(i.li,{children:["For guidance with AMD processors, there is not an equivalent to the ARK site, but ",(0,s.jsx)(i.a,{href:"http://en.wikipedia.org/wiki/List_of_IOMMU-supporting_hardware#AMD_based",children:"this Wikipedia article"})," may assist you."]}),"\n",(0,s.jsx)(i.li,{children:"Motherboard support for virtualization is usually available as part of the product documentation or user manual."}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"through-the-unraid-webgui",children:"Through the Unraid WebGUI"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["When accessing your Unraid system through the web interface, you can determine if your system is virtualization compatible by selecting the ",(0,s.jsx)(i.strong,{children:"Info"})," button on the right side of the top menu bar.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"HVM Support"})," refers to Intel VT-x or AMD-V","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Not Available"})," means that your hardware is not HVM capable."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Disabled"})," means that your hardware is HVM capable, but the settings in your motherboard BIOS are not enabled."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Enabled"})," means that your hardware is both HVM capable and the appropriate settings in your motherboard BIOS are also enabled."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"IOMMU Support"})," refers to Intel VT-d or AMD-V","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Not Available"})," only displays if your system is not HVM capable."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Disabled"})," means that either your hardware is not capable of IOMMU or the appropriate settings in your motherboard BIOS are not enabled."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Enabled"})," means that your hardware is both IOMMU capable and the appropriate settings in your motherboard BIOS are also enabled."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"assigning-graphics-devices",children:"Assigning Graphics Devices"}),"\n",(0,s.jsx)(i.p,{children:"Unlike other PCI devices, graphics devices can be more difficult to pass through to a VM for control. With Unraid 6, we've implemented a number of tweaks to maximize success with graphics pass through for our users. Here are the currently known limitations associated with GPU pass through on Unraid 6:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"NVIDIA GTX-series GPUs should work fine as of the 600 series or newer, but not all models have been tested."}),"\n",(0,s.jsx)(i.li,{children:"AMD cards have had some issues depending on the make or model and which guest operating system is attached."}),"\n",(0,s.jsx)(i.li,{children:"Some devices may work better for pass through to specific guest operating systems."}),"\n",(0,s.jsx)(i.li,{children:"With OVMF-based virtual machines, if your GPU has UEFI support, it should work fine, but some users still report card-specific issues."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"system-preparation",children:"System Preparation"}),"\n",(0,s.jsx)(i.p,{children:"Before you can get started with creating virtual machines, there are a few preparatory tasks that must be completed."}),"\n",(0,s.jsx)(i.h3,{id:"adjust-bios-settings",children:"Adjust BIOS Settings"}),"\n",(0,s.jsxs)(i.p,{children:["In order to utilize all the virtualization features of Unraid 6, you must ensure your BIOS is configured properly for hardware-assisted virtualization as well as IO memory mapping (HVM / IOMMU support). In your BIOS settings, look for anything marked with ",(0,s.jsx)(i.strong,{children:"Virtualization"}),", ",(0,s.jsx)(i.strong,{children:"Intel VT-x"}),", ",(0,s.jsx)(i.strong,{children:"Intel VT-d"}),", ",(0,s.jsx)(i.strong,{children:"AMD-V"}),", or ",(0,s.jsx)(i.strong,{children:"AMD-Vi"})," and set it to ",(0,s.jsx)(i.strong,{children:"Enabled"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Here are a few examples of where virtualization settings can be found from various motherboard BIOS screens."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Phoenix BIOS",src:n(3258).Z+"",width:"606",height:"382"}),"\n",(0,s.jsx)(i.img,{alt:"HP BIOS",src:n(275).Z+"",width:"600",height:"365"}),"\n",(0,s.jsx)(i.img,{alt:"American Megatrends BIOS",src:n(7449).Z+"",width:"800",height:"600"}),"\n",(0,s.jsx)(i.img,{alt:"ASUS EFI BIOS",src:n(3223).Z+"",width:"1024",height:"768"})]}),"\n",(0,s.jsx)(i.h3,{id:"configure-a-network-bridge",children:"Configure a Network Bridge"}),"\n",(0,s.jsxs)(i.p,{children:["There are two methods by which your virtual machines can get access to host-based networking: through a private NAT bridge managed by libvirt or through a public bridge managed by Unraid directly. The private bridge (",(0,s.jsx)(i.code,{children:"virbr0"}),") is automatically configured when libvirt starts. The public bridge (br0) can be created through the ",(0,s.jsx)(i.strong,{children:"Network Settings"})," page on the Unraid WebGUI."]}),"\n",(0,s.jsx)(i.p,{children:"The private bridge generates an internal DHCP server/address pool to create IPs for VMs automatically, but the VMs will be on a subnet that cannot be accessed by other devices or even other services on Unraid. This type of bridge is ideal if you want your VM to be completely isolated from all other network services except internet access and the host's network file sharing protocols. VM management can be performed through a VNC session provided by the browser."}),"\n",(0,s.jsxs)(i.p,{children:["The public bridge provides VMs with an IP address from your router, but internally bridges communications between VMs and each other, as well as the host. This type of bridge is ideal if you want your VMs to act just like another device on your network, where you manage its network access at the LAN-router instead of inside the VM. We persist MAC address settings for the virtual interfaces you create, ensuring the VMs should get the same IP address each time they connect, as long as your router-managed DHCP pool doesn't run out of addresses. So if you want to connect to your VM from another PC, laptop, tablet, or another type of device, you should use the public bridge. Enable public bridge in ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.strong,{children:"Network settings > Enable bridging"})}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Whichever bridge you prefer can be defined as the ",(0,s.jsx)(i.strong,{children:"Default Network Bridge"})," on the ",(0,s.jsx)(i.strong,{children:"VM Settings"})," page. You may have to enable the advanced view using the toggle at the top right before this setting is visible."]}),"\n",(0,s.jsx)(i.h3,{id:"user-shares-for-virtualization",children:"User Shares for Virtualization"}),"\n",(0,s.jsx)(i.p,{children:"By default, Unraid will create two user shares for use with virtualization on Unraid. One share to store your installation media files (ISOs) and another to store your virtual machines themselves (domains). If you don't already have a share you use for backups, you might consider adding one as well to use for backing up your virtual machines."}),"\n",(0,s.jsx)(i.h4,{id:"recommendations-for-share-configuration",children:"Recommendations for Share Configuration"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Virtual machines will perform best when their primary vDisk is stored on a cache-only share."}),"\n",(0,s.jsx)(i.li,{children:"While SSDs are not required for virtual machines to function, performance gains are substantial with their use."}),"\n",(0,s.jsx)(i.li,{children:"For your ISO library share (containing your installation media), cache usage is optional."}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"important",children:(0,s.jsxs)(i.p,{children:["Do NOT store your active virtual machines on a share where the ",(0,s.jsx)(i.strong,{children:"Use Cache"})," setting is set to ",(0,s.jsx)(i.strong,{children:"Yes"}),". Doing so will cause your VMs to be moved to the array when the mover is invoked."]})}),"\n",(0,s.jsx)(i.h3,{id:"setup-virtualization-preferences",children:"Setup Virtualization Preferences"}),"\n",(0,s.jsx)(i.p,{children:"Before you can get started creating virtual machines, we need to perform a few configuration steps:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["In the WebGUI, navigate to ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.strong,{children:"Settings > VM Manager"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["For Windows VMs, you will need to download virtual drivers for storage, network, and memory.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:['Download the latest "stable" VirtIO Windows drivers ISO found here: ',(0,s.jsx)(i.a,{href:"https://github.com/virtio-win/virtio-win-pkg-scripts/blob/master/README.md",children:"https://github.com/virtio-win/virtio-win-pkg-scripts/blob/master/README.md"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Copy the VirtIO ISO file for the drivers to the ISO share folder."}),"\n",(0,s.jsxs)(i.li,{children:["Use the file picker for ",(0,s.jsx)(i.strong,{children:"VirtIO Windows Drivers ISO"})," to select the ISO file you copied."]}),"\n",(0,s.jsxs)(i.li,{children:["You can override the default driver ISO on a per-VM basis (under ",(0,s.jsx)(i.strong,{children:"Advanced View"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Select ",(0,s.jsx)(i.strong,{children:"virbr0"})," (default) for a ",(0,s.jsx)(i.em,{children:"private network bridge"})," or select a ",(0,s.jsx)(i.em,{children:"public network bridge"})," that you created on the ",(0,s.jsx)(i.strong,{children:"Network Settings"})," page.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["You can override the default network bridge on a per-VM basis, under ",(0,s.jsx)(i.strong,{children:"Advanced View"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Toggle ",(0,s.jsx)(i.strong,{children:"PCIe ACS Override"})," to ",(0,s.jsx)(i.strong,{children:"On"})," if you wish to assign multiple PCI devices to disparate virtual machines","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The override breaks apart IOMMU groups so that individual devices can be assigned to different virtual machines"}),"\n",(0,s.jsx)(i.li,{children:"Without this setting enabled, you may not be able to pass through devices to multiple virtual machines simultaneously"}),"\n",(0,s.jsxs)(i.li,{children:["WARNING: This setting is experimental! Take caution when using.\n",(0,s.jsx)(i.a,{href:"http://vfio.blogspot.com/2014/08/iommu-groups-inside-and-out.html",children:"1"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Select ",(0,s.jsx)(i.strong,{children:"Apply"})," when done to apply your settings"]}),"\n"]}),"\n",(0,s.jsxs)(i.admonition,{title:"Troubleshooting",type:"tip",children:[(0,s.jsxs)(i.p,{children:["If Unraid reports the VM as stopped, after applying, check ",(0,s.jsx)(i.strong,{children:"/boot/config/domains.cfg"}),", you may need to set fields:"]}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'MEDIADIR="/mnt/user/system/"'})}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'VIRTIOISO="/mnt/user/system"'})," (the share with virtio image)"]}),"\n"]}),(0,s.jsxs)(i.p,{children:["For more information, you can See also ",(0,s.jsx)(i.a,{href:"https://forums.unraid.net/topic/70874-restoring-virtual-machines/?tab=comments#comment-650785",children:"Forum help by Squid"})]})]}),"\n",(0,s.jsx)(i.h2,{id:"creating-your-own-vms",children:"Creating Your Own VMs"}),"\n",(0,s.jsxs)(i.p,{children:["With the preparation steps completed, you can create your first VM by clicking ",(0,s.jsx)(i.strong,{children:"Add VM"})," from the ",(0,s.jsx)(i.strong,{children:"Virtual Machines"})," page."]}),"\n",(0,s.jsx)(i.h3,{id:"basic-vm-creation",children:"Basic VM Creation"}),"\n",(0,s.jsx)(i.p,{children:"The WebGUI will by default present the minimum number of fields required in order for you to create a VM."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Set the ",(0,s.jsx)(i.strong,{children:"Template"})," type to ",(0,s.jsx)(i.strong,{children:"Custom"})]}),"\n",(0,s.jsxs)(i.li,{children:["Give the VM a ",(0,s.jsx)(i.strong,{children:"Name"})," and a ",(0,s.jsx)(i.strong,{children:"Description"})]}),"\n",(0,s.jsxs)(i.li,{children:["Toggle the ",(0,s.jsx)(i.strong,{children:"Autostart"})," setting if you want the VM to start with the array automatically"]}),"\n",(0,s.jsxs)(i.li,{children:["Select the ",(0,s.jsx)(i.strong,{children:"Operating System"})," you wish to use, which will also adjust the icon used for the VM"]}),"\n",(0,s.jsxs)(i.li,{children:["Select which ",(0,s.jsx)(i.strong,{children:"CPUs"})," you wish to assign the VM","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"You can select up to as many physical CPUs that are present on your host"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Specify how much ",(0,s.jsx)(i.strong,{children:"Initial Memory"})," you wish to assign the VM","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"See the documentation for the OS you are installing to determine how much RAM to allocate."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Select an ",(0,s.jsx)(i.strong,{children:"OS Install ISO"})," for your installation media"]}),"\n",(0,s.jsxs)(i.li,{children:["Specify the vDisks you wish to create (or select an existing vDisk)","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.strong,{children:"Primary vDisk"})," is used to store your VM's operating system"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Additional vDisks"})," can be added by selecting the plus sign."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Specify a ",(0,s.jsx)(i.strong,{children:"Graphics Card"})," to use to interact with the VM","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If you are not assigning a physical graphics card, specify ",(0,s.jsx)(i.strong,{children:"VNC"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"If you are assigning a physical graphics card, select it from the list."}),"\n",(0,s.jsx)(i.li,{children:"VNC can only be specified as the primary graphics display or it can't be assigned at all."}),"\n",(0,s.jsx)(i.li,{children:"A password can be optionally specified for the VNC connection."}),"\n",(0,s.jsx)(i.li,{children:"Not all graphics cards will work as a secondary display."}),"\n",(0,s.jsx)(i.li,{children:"If you assign a physical graphics device, be sure to assign a USB keyboard and mouse as well."}),"\n",(0,s.jsx)(i.li,{children:"Additional graphics devices can be assigned by selecting the plus sign."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Assign a ",(0,s.jsx)(i.strong,{children:"Sound Card"})," if you're assigning a graphics card to get audio support in your VM.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Most GPUs have their own built-in sound card as a function of the graphics card for HDMI audio."}),"\n",(0,s.jsx)(i.li,{children:"Additional sound cards can be assigned by selecting the plus sign."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"USB Devices"})," can be assigned to the VM that are plugged into the host.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"USB hot-plugging is not currently supported, so devices must be attached before the VM is started in order for USB pass through to function."}),"\n",(0,s.jsx)(i.li,{children:"Some USB devices may not work properly when passed through to a guest (though most do work fine)."}),"\n",(0,s.jsx)(i.li,{children:"The Unraid USB flash device is not displayed here, to prevent accidental assignment."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.strong,{children:"Create VM"})," to create your virtual disks (if necessary), which will start automatically unless you unchecked the ",(0,s.jsx)(i.strong,{children:"Start VM after creation"})," checkbox."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"advanced-options",children:"Advanced Options"}),"\n",(0,s.jsxs)(i.p,{children:["If you wish to toggle other advanced settings for the VM, you can toggle from ",(0,s.jsx)(i.strong,{children:"Basic"})," to ",(0,s.jsx)(i.strong,{children:"Advanced View"})," (switch located on the ",(0,s.jsx)(i.strong,{children:"Template Settings"})," section bar from the **Add VM page)."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["You can adjust the ",(0,s.jsx)(i.strong,{children:"CPU Mode"})," setting.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Host Passthrough"})," will expose the guest to all the capabilities of the host CPU (this can significantly improve performance)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Emulated"})," will use the QEMU emulated CPU and not expose the guest to all of the host processor's features."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Specifying a ",(0,s.jsx)(i.strong,{children:"Max Memory"})," value will enable memory ballooning, allowing KVM to shrink/expand memory assignments dynamically as needed.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"This feature does not apply to VMs where a physical PCI device has been assigned (GPU, sound, etc.)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.strong,{children:"Machine"})," type presented to your VM can be toggled between QEMU's ",(0,s.jsx)(i.strong,{children:"i440fx"})," or ",(0,s.jsx)(i.strong,{children:"Q35"})," chipsets.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"For Windows-based VMs: i440fx is the default setting and should only be changed if you are having difficulty passing through a PCI-based graphics card (this may prompt Windows to reactivate)."}),"\n",(0,s.jsx)(i.li,{children:"For Linux-based VMs: Q35 is the default setting and should not be changed if passing through a GPU."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.strong,{children:"BIOS"})," can only be adjusted when adding a new VM (existing VMs cannot modify this setting).","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"SeaBIOS is a traditional VGA BIOS for creating most virtual machines."}),"\n",(0,s.jsx)(i.li,{children:"OVMF utilizes a UEFI BIOS interface, eliminating the use of traditional VGA."}),"\n",(0,s.jsx)(i.li,{children:"OVMF requires that the VM's operating system supports UEFI (Windows 8 or newer, most modern Linux distros) and if you wish to assign a physical graphics device, it too must support UEFI."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["If you specify Windows as the guest operating system, you can toggle the exposure of ",(0,s.jsx)(i.strong,{children:"Hyper-V"})," extensions to the VM."]}),"\n",(0,s.jsxs)(i.li,{children:["You can choose to override the default ",(0,s.jsx)(i.strong,{children:"VirtIO Drivers ISO"})," should you so desire."]}),"\n",(0,s.jsxs)(i.li,{children:["You can toggle the ",(0,s.jsx)(i.strong,{children:"vDisk Type"})," between RAW and QCOW2 (RAW is recommended for best performance)"]}),"\n",(0,s.jsxs)(i.li,{children:["With Linux-based VMs, you can add multiple ",(0,s.jsx)(i.strong,{children:"VirtFS"})," mappings to your guest","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["For more information on VirtFS and the 9p file system, visit here: ",(0,s.jsx)(i.a,{href:"http://wiki.qemu.org/Documentation/9psetup",children:"http://wiki.qemu.org/Documentation/9psetup"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["If you desire, you can modify the ",(0,s.jsx)(i.strong,{children:"Network MAC"})," address for the virtual network interface of the VM as well as specify an alternate ",(0,s.jsx)(i.strong,{children:"Network Bridge"}),".","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"You can click the blue refresh symbol to auto-generate a new MAC address for the virtual network interface."}),"\n",(0,s.jsx)(i.li,{children:"Additional virtual network interfaces can be assigned by selecting the plus sign."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"expanding-a-vdisk",children:"Expanding a vDisk"}),"\n",(0,s.jsx)(i.p,{children:"In the event that you need to increase the size of your virtual disk device, you can do so with the following procedure:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Navigate to the VMs tab in the WebGUI."}),"\n",(0,s.jsx)(i.li,{children:"Make sure your VM is stopped."}),"\n",(0,s.jsx)(i.li,{children:"Click on the name of your VM to expand the view to show you the various disk devices attached to the VM."}),"\n",(0,s.jsx)(i.li,{children:"Click on the value in the capacity field for the vDisk to make it editable."}),"\n",(0,s.jsx)(i.li,{children:"Edit a value of how large you want the vDisk to be and press enter (e.g. for 100 gigabytes, enter 100G)"}),"\n",(0,s.jsx)(i.li,{children:"You will now see the new capacity take affect."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["After doing this, you can start your VM and the new storage will be available, though you will need to either create a new partition out of that space or extend an existing partition to make use of it. For instructions on how to expand your Windows partition, please see ",(0,s.jsx)(i.a,{href:"/legacy/Articles/expanding-windows-vm-vdisk-partitions",children:"this article"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"troubleshooting-stuck-at-uefi-shell",children:"Troubleshooting Stuck at UEFI Shell"}),"\n",(0,s.jsx)(i.p,{children:"In the event you are stuck at the UEFI shell after booting your VM, you can enter a few commands to manually trigger the boot sequence:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"fs0:\ncd\xa0efi/boot\nbootx64.efi\n"})}),"\n",(0,s.jsx)(i.p,{children:"This will manually trigger your VM to boot."}),"\n",(0,s.jsx)(i.h2,{id:"assigning-graphics-devices-to-virtual-machines-gpu-pass-through",children:"Assigning Graphics Devices to Virtual Machines (GPU Pass Through)"}),"\n",(0,s.jsx)(i.p,{children:"The ability to assign a GPU to a virtual machine for direct I/O control comes with some additional provisions:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Not all motherboard/GPU combinations will work for GPU assignment."}),"\n",(0,s.jsx)(i.li,{children:"Integrated graphics devices (on-board GPUs) are not assignable to virtual machines at this time."}),"\n",(0,s.jsxs)(i.li,{children:["Additional community-tested configurations can be found in ",(0,s.jsx)(i.a,{href:"https://docs.google.com/spreadsheets/d/1LnGpTrXalwGVNy0PWJDURhyxa3sgqkGXmvNCIvIMenk/edit#gid=0",children:"this spreadsheet"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Lime Technology provides a list of validated and tested hardware combinations within the wiki."}),"\n",(0,s.jsxs)(i.li,{children:["You can also discuss hardware selection in the ",(0,s.jsx)(i.a,{href:"http://lime-technology.com/forum/",children:"Lime Technology community forums"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Additional information regarding virtual function I/O (VFIO) and GPU passthrough can be found in ",(0,s.jsx)(i.a,{href:"http://vfio.blogspot.com/2014/08/vfiovga-faq.html",children:"the following F.A.Q from Alex Williamson"}),", the project's maintainer."]}),"\n",(0,s.jsx)(i.h3,{id:"warning-passing-through-a-gpu-to-a-seabios-based-vm-will-disable-console-vga-access",children:"Warning: Passing through a GPU to a SeaBIOS-based VM will disable console VGA access"}),"\n",(0,s.jsx)(i.p,{children:"If you rely upon a locally-attached monitor and keyboard to interact with the Unraid terminal directly, you will lose this ability once you create a SeaBIOS VM with a GPU assigned. This is due to a bug with VGA arbitration and cannot be solved. This does NOT affect your ability to access the console using a telnet or SSH session, but local console access directly will appear to be frozen (blinking cursor, but no visible response to keyboard input). It does not matter if you are using on-board graphics for the console compared to a discrete GPU for the pass through to a VM or not. With OVMF, however, VGA isn't utilized, therefore arbitration isn't needed and therefore your console graphics\nwill remain intact. Note that not all GPUs support OVMF as OVMF requires UEFI support on your GPU."}),"\n",(0,s.jsx)(i.h3,{id:"help-failed-to-set-iommu-for-container-operation-not-permitted",children:"Help! Failed to set iommu for container: Operation not permitted"}),"\n",(0,s.jsxs)(i.p,{children:["If you are getting the above message when trying to assign a graphics device to a VM, it is most likely that your device is in an IOMMU group along with another active/in-use device on your system. Please see ",(0,s.jsx)(i.a,{href:"http://vfio.blogspot.com/2014/08/iommu-groups-inside-and-out.html",children:"this article"})," written by Alex Williamson on IOMMU groups if you wish to better understand this issue and how it impacts you. Under ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.strong,{children:"Settings > VM Manager"})})," you will find an option to toggle for PCIe ACS Override, which will forcibly break out each device into its own IOMMU group (following a reboot of the system). This setting is experimental, so use with caution."]}),"\n",(0,s.jsxs)(i.p,{children:["Another possibility here is that your system doesn't support interrupt remapping, which is critical for VFIO and GPU pass through. There is a workaround for this, but you will not be protected against MSI-based interrupt injection attacks by guests (",(0,s.jsx)(i.a,{href:"http://invisiblethingslab.com/resources/2011/Software%20Attacks%20on%20Intel%20VT-d.pdf",children:"more info about MSI injection attacks through VT-d"}),"). If you completely trust your VM guests and the drivers inside them,\nenabling this workaround should resolve the issue. The alternative is to purchase hardware that offers interrupt remapping support. To enable the workaround, you will need to modify your syslinux.cfg file, adding the bolded bit below:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"label\xa0Unraid\xa0OS\nmenu\xa0default\nkernel\xa0/bzimage\nappend vfio_iommu_type1.allow_unsafe_interrupts=1 initrd=/bzroot\n"})}),"\n",(0,s.jsx)(i.h3,{id:"help-i-can-start-my-vm-with-a-gpu-assigned-but-all-i-get-is-a-black-screen-on-my-monitor",children:"Help! I can start my VM with a GPU assigned but all I get is a black screen on my monitor!"}),"\n",(0,s.jsx)(i.p,{children:"If you aren't receiving an error message, but the display doesn't \"light up\" when your VM is started, it means that while the device is being assigned properly, you may have an issue with your motherboard or GPU preventing proper VGA arbitration from occurring. There are several things you can do to try to fix this:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Boot into your motherboard BIOS and make sure your primary graphics is NOT set to a card you wish to pass through (the best option is to set it to integrated graphics, aka iGPU; make sure it's not PCI or PCIe)."}),"\n",(0,s.jsx)(i.li,{children:"Ensure your motherboard BIOS and video card BIOS are up to date."}),"\n",(0,s.jsxs)(i.li,{children:["Try adjusting the ",(0,s.jsx)(i.strong,{children:"BIOS"})," under ",(0,s.jsx)(i.strong,{children:"Advanced View"})," when adding a new VM from SeaBIOS to OVMF (existing VMs cannot have this setting changed once created)."]}),"\n",(0,s.jsxs)(i.li,{children:["Try adjusting the ",(0,s.jsx)(i.strong,{children:"Machine Type"})," from ",(0,s.jsx)(i.em,{children:"i440fx"})," to Q35 under ",(0,s.jsx)(i.strong,{children:"Advanced View"})," when editing or adding a VM."]}),"\n",(0,s.jsx)(i.li,{children:"As a last resort, you can attempt to manually provide the ROM file for your video card by editing the XML for your VM (see below procedure)."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"edit-xml-for-vm-to-supply-gpu-rom-manually",children:"Edit XML for VM to supply GPU ROM manually"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["From another PC, navigate to this webpage: ",(0,s.jsx)(i.a,{href:"http://www.techpowerup.com/vgabios/",children:"http://www.techpowerup.com/vgabios/"})]}),"\n",(0,s.jsxs)(i.li,{children:["Use the ",(0,s.jsx)(i.strong,{children:"Refine Search Parameters"})," section to locate your GPU from the database."]}),"\n",(0,s.jsx)(i.li,{children:"Download the appropriate ROM file for your video card and store the file on any user share in Unraid."}),"\n",(0,s.jsxs)(i.li,{children:["With your VM stopped, click the icon for your VM, then select ",(0,s.jsx)(i.strong,{children:"Edit XML"})," from the context menu."]}),"\n",(0,s.jsxs)(i.li,{children:["Scroll to the bottom of the XML and locate this section (the ",(0,s.jsx)(i.code,{children:"<address>"})," parts may look different for you than from the example below):"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<hostdev mode='subsystem' type='pci' managed='yes'>\n  <driver name='vfio'/>\n  <source>\n    <address domain='0x0000' bus='0x02' slot='0x00' function='0x0'/>\n  </source>\n  <address type='pci' domain='0x0000' bus='0x00' slot='0x05' function='0x0'/>\n</hostdev>\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"6",children:["\n",(0,s.jsxs)(i.li,{children:["After the ",(0,s.jsx)(i.code,{children:"</source>"})," tag, add the following code:"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<rom file='/mnt/user/sharename/foldername/rom.bin'/>\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"7",children:["\n",(0,s.jsx)(i.li,{children:"Change the path after /mnt/user/ to the actual user share / sub-folder path to your rom file."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Once done editing the XML, select ",(0,s.jsx)(i.strong,{children:"Update"})," and try starting your VM again to see if the GPU assignment works properly."]})]})}function c(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3258:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/Bios-virtualization1-8c032a63c7faa4306a38ab048f689477.png"},275:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/Bios-virtualization2-3bd48a4a433dc6241b2716f10a877461.jpg"},7449:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/Bios-virtualization3-f24cc6d14dd9aff84916592c300a0e98.JPG"},3223:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/Bios-virtualization4-72a6a8a03a546e90dc8e007574b430c2.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var s=n(7294);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);