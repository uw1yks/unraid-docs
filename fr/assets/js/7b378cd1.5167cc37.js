"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1367],{1181:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=n(5893),s=n(1151);const a={sidebar_position:7},r="Community Applications",o={id:"unraid-os/manual/applications",title:"Community Applications",description:"This section discusses running applications on an Unraid server or extending the base capabilities.",source:"@site/docs/unraid-os/manual/applications.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/applications",permalink:"/fr/unraid-os/manual/applications",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/applications.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"unraidSidebar",previous:{title:"VM support",permalink:"/fr/unraid-os/manual/vm/vm-support"},next:{title:"Security",permalink:"/fr/unraid-os/manual/security/"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Installing the Community Applications plugin",id:"installing-the-community-applications-plugin",level:2},{value:"Navigating Community Applications",id:"navigating-community-applications",level:3},{value:"Installing applications",id:"installing-applications",level:3},{value:"Removing applications",id:"removing-applications",level:3},{value:"Reinstalling Applications",id:"reinstalling-applications",level:3},{value:"Support for applications",id:"support-for-applications",level:3},{value:"Action center",id:"action-center",level:3},{value:"Plugins",id:"plugins",level:2},{value:"Pros and cons",id:"pros-and-cons",level:3},{value:"Docker containers",id:"docker-containers",level:2},{value:"Technology stack",id:"technology-stack",level:3},{value:"KVM",id:"kvm",level:4},{value:"QEMU",id:"qemu",level:4},{value:"HVM",id:"hvm",level:4},{value:"VFIO",id:"vfio",level:4},{value:"VirtIO",id:"virtio",level:4},{value:"VirtFS",id:"virtfs",level:4},{value:"Libvirt",id:"libvirt",level:4},{value:"VNC",id:"vnc",level:4},{value:"Contributing your own applications",id:"contributing-your-own-applications",level:2}];function d(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"community-applications",children:"Community Applications"}),"\n",(0,t.jsx)(i.p,{children:"This section discusses running applications on an Unraid server or extending the base capabilities."}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.p,{children:"One of the greatest strengths of Unraid is the ability to expand its functionality and operate as more than a simple NAS system."}),"\n",(0,t.jsx)(i.p,{children:"Community Applications (CA) provides two mechanisms to extend the functionality of the Unraid server:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Plugins - these software components extend the base functionality of Unraid OS."}),"\n",(0,t.jsx)(i.li,{children:"Docker containers - these lightweight, standalone, executable packages of software include everything needed to run an application, in addition to the base OS functionality, for example, an email server, or a Dynamic DNS client app."}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsx)(i.p,{children:"Limetech does not supply the applications or functionality that can be implemented using these mechanisms. it is up to the end-user to satisfy themselves to the suitability of any particular application."})}),"\n",(0,t.jsx)(i.p,{children:"There are currently more than 2000 containers and plugins for Unraid, all of which are free to install and use by the community."}),"\n",(0,t.jsx)(i.h2,{id:"installing-the-community-applications-plugin",children:"Installing the Community Applications plugin"}),"\n",(0,t.jsx)(i.p,{children:"Although it is not part of the standard Unraid distribution the CA plugin is the recommended way for installing applications on an Unraid server whenever the application is implemented via a plugin or as a docker container. This does not stop users from installing applications that are not handled by CA, but using CA provides a useful level of curation that is of particular value to new Unraid users."}),"\n",(0,t.jsxs)(i.p,{children:["Once you have installed Unraid and started up an array, you can install Community Applications directly from ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.strong,{children:"Apps"})}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"navigating-community-applications",children:"Navigating Community Applications"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Community Applications",src:n(3305).Z+"",width:"1920",height:"1080"})}),"\n",(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.strong,{children:"Apps"})})," tab you can find a large catalog of applications to install and use on your Unraid server. By default, the system will display the most recent apps in the catalog but you can use the quick filters on the left hand side or use the search box to find what you are looking for."]}),"\n",(0,t.jsx)(i.p,{children:"Search results display in a grid of tiles, where each tile represents a plugin - marked by two puzzle pieces - or a container - marked by Docker's Moby Dock. You can use the tile to see more info on the app, see what support options the author has enabled, or install the app."}),"\n",(0,t.jsx)(i.p,{children:"Each app may also be tagged with a label to highlight its status:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Beta - The application is a work in progress, and while it may contain most of its functionality, bugs and other issues may show up. We recommend you provide feedback and bug reports to the developer, if they appear. See ",(0,t.jsx)(i.a,{href:"#support-for-applications",children:"Support for applications"}),", below."]}),"\n",(0,t.jsx)(i.li,{children:"Installed - The application in question is installed on your Unraid server."}),"\n",(0,t.jsx)(i.li,{children:"Updated - This application has a newer version available and you can update it."}),"\n",(0,t.jsx)(i.li,{children:"Monthly CA Spotlight - This means the CA moderators have singled out this app due to its usefulness, quality, or popularity."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Selecting a tile displays detailed information for that application and allows additional actions."}),"\n",(0,t.jsx)(i.h3,{id:"installing-applications",children:"Installing applications"}),"\n",(0,t.jsxs)(i.p,{children:["From any given application's tile or information panel, select the ",(0,t.jsx)(i.strong,{children:"install"})," button. This will trigger an installation script for the application. Do not close the installation window until it is complete.",(0,t.jsx)(i.br,{}),"\n",(0,t.jsx)(i.img,{src:n(7085).Z+"",width:"446",height:"321"})]}),"\n",(0,t.jsx)(i.h3,{id:"removing-applications",children:"Removing applications"}),"\n",(0,t.jsxs)(i.p,{children:["Use the ",(0,t.jsx)(i.strong,{children:"Installed Applications"})," filter to see all Docker containers and plugins installed on your Unraid server. These are displayed in grid of tiles. To remove an application, select ",(0,t.jsx)(i.strong,{children:"Actions"}),", then ",(0,t.jsx)(i.strong,{children:"Uninstall"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"reinstalling-applications",children:"Reinstalling Applications"}),"\n",(0,t.jsx)(i.p,{children:"If you ever need to re-install any plugins or docker container then this can be easily achieved via Community Applications."}),"\n",(0,t.jsxs)(i.p,{children:["A common reason for wanting to reinstall applications is when the ",(0,t.jsx)(i.code,{children:"docker.img"})," file has been corrupted for some reason. In such a case the docker containers can be reinstalled with all their settings intact in just a few minutes."]}),"\n",(0,t.jsxs)(i.p,{children:["CA stores an XML template for each application that it installs at ",(0,t.jsx)(i.code,{children:"/boot/config/plugins/dockerMan/templates-user"}),". If you go to the ",(0,t.jsx)(i.strong,{children:"Apps"})," tab in the Unraid WebGUI then there is a ",(0,t.jsx)(i.strong,{children:"Previous Apps"})," filter. This can be used to reinstall applications using their saved settings. These are retrieved automatically from the saved XML templates so it is a\nrelatively painless process."]}),"\n",(0,t.jsx)(i.h3,{id:"support-for-applications",children:"Support for applications"}),"\n",(0,t.jsx)(i.p,{children:"Usually, each plugin or docker container has a forum thread that is dedicated to providing support and answering questions from end users. It is also common for the developer responsible for each of these types of applications to create a forum thread that they monitor. There are a number of easy ways to get to the appropriate support thread from the Unraid WebGUI:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["On the ",(0,t.jsx)(i.strong,{children:"Apps"})," tab - use the ",(0,t.jsx)(i.strong,{children:"Installed Applications"})," filter to find an application, then select ",(0,t.jsx)(i.strong,{children:"Actions"})," and ",(0,t.jsx)(i.strong,{children:"Support"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["On the ",(0,t.jsx)(i.strong,{children:"Dashboard"})," and ",(0,t.jsx)(i.strong,{children:"Docker"})," tabs - select the icon for the docker container, then select the ",(0,t.jsx)(i.strong,{children:"Support"})," option."]}),"\n",(0,t.jsxs)(i.li,{children:["On the ",(0,t.jsx)(i.strong,{children:"Plugins"})," tab - each plugin will have a short summary and beneath it, a hyperlink to the ",(0,t.jsx)(i.strong,{children:"Support Thread"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Virtual Machines do not have the same level of targeted support as they can be running almost any OS, and then within that OS any application supported by the OS. Having said that there are several areas within the forums that are dedicated places for asking questions about VMs and it is likely that you will find appropriate threads for the most common OSes."}),"\n",(0,t.jsx)(i.h3,{id:"action-center",children:"Action center"}),"\n",(0,t.jsx)(i.p,{children:"Applications are regularly updated by their authors. While most of the time these updates improve performance, stability, and overall functionality of the plugin or docker container, some milestone updates to Unraid OS may require the author to update their app."}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.strong,{children:"Action center"})," displays currently installed apps that require updates. Select the ",(0,t.jsx)(i.strong,{children:"Actions"})," button to show a list of possible actions, then ",(0,t.jsx)(i.strong,{children:"Update"})," the app, to run an update script."]}),"\n",(0,t.jsx)(i.h2,{id:"plugins",children:"Plugins"}),"\n",(0,t.jsx)(i.p,{children:"This mechanism allows code to be loaded into the core Unraid OS and run at that level. Before Unraid 6, it was the only way to extend Unraid functionality."}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsx)(i.p,{children:"Limetech does not supply the applications or functionality that can be implemented through plugins. it is up to the end user to determine the suitability of any particular application for their Unraid OS setup."})}),"\n",(0,t.jsx)(i.h3,{id:"pros-and-cons",children:"Pros and cons"}),"\n",(0,t.jsx)(i.p,{children:"Here are some of the benefits of plugins:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The plugin developer can access any part of the Unraid system without restriction."}),"\n",(0,t.jsx)(i.li,{children:"The plugin can load new code modules into the core Unraid OS."}),"\n",(0,t.jsx)(i.li,{children:"The plugin can add/amend the Unraid WebGUI."}),"\n",(0,t.jsx)(i.li,{children:"The plugin can add functionality that many deem important to allowing Unraid to function as a NAS."}),"\n",(0,t.jsx)(i.li,{children:"Plugins are normally published as Open Source so end users can check that they do not attempt to do anything malicious. However, the plugin mechanism does not enforce this."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Here are some of the disadvantages of plugins:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Plugins can make an Unraid system unstable"}),".","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Plugins can load code modules that overwrite the versions supplied as part of a standard Unraid release. Any new Unraid release can include many upgraded/added modules. This means that it is important that if the plugin installs new code modules that the plugin author keeps the plugin up-to-date and aware of the release of Unraid on which it is being installed."}),"\n",(0,t.jsx)(i.li,{children:"Unraid has the ability to boot a system in Safe Mode that suppresses plugins loading to help with diagnosing problems caused by plugins. This should be one of the first things to\ntry if a system becomes unstable after installing a new Unraid release."}),"\n",(0,t.jsx)(i.li,{children:"If there is a choice between a plugin and a docker container-based solution to add a feature to an Unraid system the docker container approach is always the recommended way to\ngo as it does not introduce the same risk of causing instability."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Plugins will have full access to all the data on the Unraid system."}),"\n",(0,t.jsx)(i.li,{children:"If a plugin is not maintained by the developer or the Unraid user does not keep the plugin up-to-date then when a new Unraid release is installed the plugin may make that release misbehave in unexpected ways."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Plugins are installed as part of the Unraid boot process after loading Linux completes and before the GUI and/or array is started."}),"\n",(0,t.jsx)(i.p,{children:"The current recommendation is that plugins should only be used for functionality that cannot be added using a Docker container. This helps maintain system stability across Unraid releases. Plugins should therefore be adding system-level services and not end-user applications."}),"\n",(0,t.jsxs)(i.p,{children:["The Unraid WebGUI has a ",(0,t.jsx)(i.strong,{children:"Plugins"})," tab that can show what plugins are installed and provides capabilities for upgrading the installed plugins to new releases. It also provides the ability to install plugins from this tab, but it is recommended that if the plugin is known to Community Applications that plugins are instead installed from the ",(0,t.jsx)(i.strong,{children:"Apps"})," tab."]}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsxs)(i.p,{children:["As part of the evolving nature of Unraid OS, a plugin's functionality may sometimes be incorporated into a new Unraid release, making its installation unnecessary (and possibly even harmful to system stability). ",(0,t.jsx)(i.strong,{children:"Community Applications"})," will only offer to install plugins that are believed to be compatible with that release. It will not, however, remove plugins that are already installed but no longer known to be compatible with the current release."]})}),"\n",(0,t.jsx)(i.h2,{id:"docker-containers",children:"Docker containers"}),"\n",(0,t.jsxs)(i.p,{children:["Unraid includes support for the technology known as ",(0,t.jsx)(i.a,{href:"https://www.docker.com/resources/what-container/",children:"Docker"})," for allowing Linux-based applications. Docker provides a mechanism for running Linux applications in a manner that allows them to be isolated both from the host system (Unraid) and also from each other. This means that docker applications are independent of the release of Unraid that is hosting them. The user can also configure which resources on the host system any particular Docker container can access."]}),"\n",(0,t.jsx)(i.p,{children:"Key points of the Unraid implementation are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The files that make up a Docker container are stored within a virtual disk image (i.e. a single file at the Unraid level).","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The average user does not need to understand this type of detail but it can help with troubleshooting and making sense of log messages."}),"\n",(0,t.jsxs)(i.li,{children:["The default name of the virtual disk images is ",(0,t.jsx)(i.code,{children:"docker.img"}),". Users can over-ride this but it is rarely done as no advantage.\nis gained by doing this."]}),"\n",(0,t.jsxs)(i.li,{children:["Internally the ",(0,t.jsx)(i.code,{children:"docker.img"})," file is formatted using the ",(0,t.jsx)(i.strong,{children:"BTRFS"})," file system and is mounted at the Unraid level as ",(0,t.jsx)(i.strong,{children:"/dev/loop2"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.code,{children:"docker.img"})," file will internally contain the binaries.\nassociated with each installed docker container."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Unraid provides a GUI-based method for easy installation and configuration of Docker containers. This acts as a front-end to the ",(0,t.jsx)(i.strong,{children:"docker run"})," command-line tool.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"When a docker container is installed the parameters provided by the user (which are then used to build up the docker run command for a container) are stored on the flash drive as an XML file so it is easy to re-install a container without having to re-create its settings from scratch."}),"\n",(0,t.jsx)(i.li,{children:"Unraid users can provide prepopulated templates for common applications that minimize (or even completely eliminate) the amount of configuration the average user will have to do to get any particular container running."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["The default location for the ",(0,t.jsx)(i.code,{children:"docker.img"})," file is within the ",(0,t.jsx)(i.code,{children:"system"})," share. The ",(0,t.jsx)(i.code,{children:"system"})," share is set up with the ",(0,t.jsx)(i.strong,{children:"Use Cache"})," set to ",(0,t.jsx)(i.em,{children:"Prefer"})," as having the ",(0,t.jsx)(i.code,{children:"docker.img"})," file on the cache (if the user has one) helps maximize the performance of Docker containers."]}),"\n",(0,t.jsxs)(i.li,{children:["Unraid does not have built-in support for the ",(0,t.jsx)(i.strong,{children:"Docker compose"})," command line utility."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"technology-stack",children:"Technology stack"}),"\n",(0,t.jsx)(i.p,{children:"Unraid OS features a number of key technologies to simplify the creation and management of localized VMs running on an Unraid host:"}),"\n",(0,t.jsx)(i.h4,{id:"kvm",children:"KVM"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://www.linux-kvm.org/page/Main_Page",children:"KVM"})," is a hypervisor responsible for monitoring and managing the resources allocated to virtual machines.",(0,t.jsx)(i.br,{}),"\n","KVM is a component in the Linux kernel that allows it to act as a hypervisor. Simply put, hypervisors are responsible for monitoring and managing the resources allocated to virtual machines. Virtual machines are emulated computers that run on top of a physical computer. Ever wanted to run three operating systems on one computer all at the same time? Hypervisors make this possible.",(0,t.jsx)(i.br,{}),"\n","Examples of other hypervisors include Xen, VMWare (ESX/ESXi), VirtualBox, and Microsoft Hyper-V.\nUnlike other hypervisors, KVM is the only one that is built directly into and supported by the Linux kernel itself.",(0,t.jsx)(i.br,{}),"\n","All other type-1 hypervisors out there will load before Linux does, and then Linux runs in an underprivileged state to that hypervisor.",(0,t.jsx)(i.br,{}),"\n","By leveraging a hypervisor that is part of the Linux kernel itself, it means better support, less complexity, and more room for optimization improvements."]}),"\n",(0,t.jsx)(i.h4,{id:"qemu",children:"QEMU"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://www.qemu.org/",children:"QEMU"})," is the component in the kernel that manages / monitors resources allocated to virtual machines. QEMU is responsible for the emulation of hardware components such as a motherboard, CPU, and various controllers that make up a virtual machine.",(0,t.jsx)(i.br,{}),"\n","KVM can't work without QEMU, so you'll often times see KVM referred to as KVM/QEMU."]}),"\n",(0,t.jsx)(i.h4,{id:"hvm",children:"HVM"}),"\n",(0,t.jsxs)(i.p,{children:["When virtual machine technology was first starting to grow in adoption, it wasn't directly supported by the chipset manufacturers directly. As such, there was a significant amount of overhead associated with virtual machines due to software emulation. Later, Intel and AMD built support for virtualization directly into their hardware (Intel VT-x and AMD-v), reducing overhead for emulation, monitoring, and security. These technologies allow for the creation of hardware-assisted virtual machines (referred to as HVMs).",(0,t.jsx)(i.br,{}),"\n","While Xen offers a way to eliminate the overhead associated with traditional emulation without the need for VT-x, this paravirtualization method only works with Linux-based guests, and for that, Docker Containers are a better solution anyway. As such, HVMs are best suited for virtual machines where more than just basic Linux applications are needed.",(0,t.jsx)(i.br,{}),"\n","HVM is required to be able to run a VM on Unraid. Most modern systems will have HVM support. You can see if your Unraid server has HVM support by clicking on the ",(0,t.jsx)(i.strong,{children:"Info"})," button at the top right of the Unraid GUI. If it shows as disabled then you might want to check your motherboard's BIOS to see if it needs to be enabled there."]}),"\n",(0,t.jsx)(i.h4,{id:"vfio",children:"VFIO"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://www.linux-kvm.org/images/b/b4/2012-forum-VFIO.pdf",children:"VFIO"})," (",(0,t.jsx)(i.strong,{children:"V"}),"irtual ",(0,t.jsx)(i.strong,{children:"F"}),"unction ",(0,t.jsx)(i.strong,{children:"IO"}),") allows us to assign a physical device, such as a graphics card, directly to a virtual machine that in turn will provide driver support for the device directly.",(0,t.jsx)(i.br,{}),"\n","We can also prevent the device from accessing spaces in memory that are outside of that VM. This means that if something goes wrong with the device or its driver, the impact of such an event is limited to the virtual machine and not the host.",(0,t.jsx)(i.br,{}),"\n","VFIO prevents assigned devices from accessing spaces in memory that are outside of the VM to which they are assigned. This limits the impact of issues pertaining to device drivers and memory space, shielding Unraid OS from being exposed to unnecessary risk."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["VFIO usage requires ",(0,t.jsx)(i.strong,{children:"IOMMU"})," capable hardware (your CPU must have ",(0,t.jsx)(i.a,{href:"https://www.kernel.org/doc/Documentation/vfio.txt",children:"Intel VT-d or AMD-Vi support"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["IOMMU is required to be able to pass through hardware to a VM on Unraid. You can see if your Unraid server has IOMMU support by clicking on the ",(0,t.jsx)(i.strong,{children:"Info"})," button at the top right of the Unraid GUI. If it shows as disabled then you might want to check your motherboard's BIOS to see if it needs to be enabled there."]}),"\n",(0,t.jsxs)(i.li,{children:["IOMMU support requires support in the CPU, motherboard, and BIOS to all be present.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["IOMMU is often referred to as ",(0,t.jsx)(i.em,{children:"hardware pass-through"})," in the context of a VM."]}),"\n",(0,t.jsx)(i.li,{children:"IOMMU allows a VM to get direct access to hardware and thus tends to give better performance in using that hardware and also may allow capabilities of the hardware to be accessed by the VM that is not possible in the host OS."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"virtio",children:"VirtIO"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://www.linux-kvm.org/page/Virtio",children:"VirtIO"}),' is a virtualization standard for network and disk device drivers where just the guest\'s device driver "knows" it is running in a virtual environment and cooperates with the hypervisor. This enables guests to get high-performance network and disk operations, and gives most of the performance benefits of ',(0,t.jsx)(i.a,{href:"http://wiki.libvirt.org/page/Virtio",children:"paravirtualization"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Using VirtIO in a guest OS requires that the guest OS have virtIO drivers installed for the devices specified to use VirtIO in the VM definition. If the guest does not have VirtIO drivers then the VM will have to be specified to emulate a device for which the guest OS ",(0,t.jsx)(i.strong,{children:"does"})," have drivers. This will be less efficient but does allow OS that are not VirtIO aware to be run in a VM. Examples might be to emulate SCSI or SATA for disk drives and e1000 for network adapters."]}),"\n",(0,t.jsx)(i.h4,{id:"virtfs",children:"VirtFS"}),"\n",(0,t.jsxs)(i.p,{children:["Also referred to as the 9p filesystem, ",(0,t.jsx)(i.a,{href:"https://www.kernel.org/doc/ols/2010/ols2010-pages-109-120.pdf",children:"VirtFS"})," allows us to easily pass through file system access from a virtualization host to a guest. VirtFS is the equivalent of Docker Volumes for KVM, but requires a mount command to be issued from within the ",(0,t.jsx)(i.a,{href:"http://wiki.qemu.org/Documentation/9psetup",children:"guest"}),". VirtFS\nonly works with Linux-based virtual machines."]}),"\n",(0,t.jsx)(i.h4,{id:"libvirt",children:"Libvirt"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://libvirt.org/",children:"Libvirt"})," is a collection of software that provides a convenient way to manage virtual machines and other virtualization functionality, such as storage and network interface management. These software pieces include an API library, a daemon (",(0,t.jsx)(i.code,{children:"libvirtd"}),"), and a command-line utility (",(0,t.jsx)(i.a,{href:"http://wiki.libvirt.org/page/FAQ#What_is_libvirt.3F",children:"virsh"}),")."]}),"\n",(0,t.jsx)(i.h4,{id:"vnc",children:"VNC"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Virtual_Network_Computing",children:"VNC"})," is a method that allows the screen/mouse/keyboard of a VM to be visible across the network from another device."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"VNC clients are available for most OSes."}),"\n",(0,t.jsx)(i.li,{children:"VNC can be used to view emulated GPUs."}),"\n",(0,t.jsx)(i.li,{children:"VNC does not support sound emulation."}),"\n",(0,t.jsx)(i.li,{children:"You can get better performance emulating a GPU by having appropriate software installed directly into a guest OS. Such software also often provides sound emulation as well."}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"It is worth understanding which technologies are being used for virtualization by Unraid, as documentation on these technologies will not be Unraid-specific. Also, many issues relating to these technology components can be common across all Linux systems using a particular technology component, so answers can often be found in places other than the Unraid forums."})}),"\n",(0,t.jsx)(i.p,{children:"Particulars of the Unraid implementation of VM support are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"KVM"}),": Unraid makes use of the Linux\n",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine",children:"KVM"})," (",(0,t.jsx)(i.strong,{children:"K"}),"ernel ",(0,t.jsx)(i.strong,{children:"V"}),"irtual ",(0,t.jsx)(i.strong,{children:"M"}),"achine) facility to allow other operating system to run as guests on an Unraid system.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"QEMU"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Unraid provides GUI support for managing VMs."}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Libvirt:"})," The XML definitions needed by libvirt are stored as a disk image file (typically called ",(0,t.jsx)(i.em,{children:"libvirt.img"})," although the user can change this name)"]}),"\n",(0,t.jsxs)(i.li,{children:["Unraid sets up some standard shares to provide a level of consistency to users:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"domains"}),": This the default location for storing VM vDisk images associated with a VM."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"isos"}),": This is the default location for storing iso images for use with VMs."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"system"}),": This is the default location for storing the libvirt.img file (that contains the XML definitions for VMs."]}),"\n",(0,t.jsx)(i.li,{children:"Users can override any of these settings if they desire, when creating individual VMs. However, for most users the defaults are a good option."}),"\n",(0,t.jsxs)(i.li,{children:["All these shares have a default ",(0,t.jsx)(i.strong,{children:"Use Cache"})," setting of ",(0,t.jsx)(i.em,{children:"prefer"}),". Having VM files (particularly disk images) on the cache will give much better performance than having them on an array drive."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"VNC"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Unraid has the NoVNC web-based client built into its GUI and it can be used to access all VMs without the need to install specialist software into the guest OS."}),"\n",(0,t.jsx)(i.li,{children:"Alternative VNC clients can be used to access the VMs hosted by Unraid. The port to be used for such clients is displayed in the Unraid GUI on the VM tab when a VM is running. Using such an alternative client can work in cases where the NoVNC client does not work correctly for some reason."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"contributing-your-own-applications",children:"Contributing your own applications"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Community Applications"})," was built around a community of dedicated enthusiasts and developers whose interest in Unraid has led them to contribute their own plugins and containers for all users to use and enjoy."]}),"\n",(0,t.jsxs)(i.p,{children:["If you are interested in developing your own applications, we have laid out guidance for submitting your containers or plugins in an ",(0,t.jsx)(i.a,{href:"https://forums.unraid.net/topic/87144-ca-application-policies-notes/",children:"Unraid forum post"}),"."]})]})}function c(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7085:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/CA_Tile1-a97ac1274c35f1c175b82daa23095ff9.png"},3305:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/ca-24dd297edaec56a2cce603463dc57eb9.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>r});var t=n(7294);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);