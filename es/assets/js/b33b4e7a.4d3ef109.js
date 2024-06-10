"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7218],{2397:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=r(5893),t=r(1151);const s={},o="Xen to KVM migration",d={id:"unraid-os/guides/xen-to-kvm",title:"Xen to KVM migration",description:"Virtual machines that were running in Xen will require different procedures to convert to KVM, depending on whether they were created as paravirtualized or hardware-virtualized guests. Regardless of your conversion scenario, it is highly recommended that you create a copy of your existing Xen virtual disk before proceeding. Use the copy to test your conversion process and, if successful, you can remove your own Xen-based virtual disk should you so desire. In addition, you should ensure your hardware has support for hardware-assisted virtualization (Intel VT-x / AMD-V) as this is a requirement for use with KVM. Xen PV guests do not leverage hardware-virtualization extensions, which makes their process for converting slightly more involved than Xen HVM guests to KVM (it is not documented at the time of this writing).",source:"@site/docs/unraid-os/guides/xen-to-kvm.md",sourceDirName:"unraid-os/guides",slug:"/unraid-os/guides/xen-to-kvm",permalink:"/unraid-docs/es/unraid-os/guides/xen-to-kvm",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/guides/xen-to-kvm.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Set up Wake-on-LAN (WOL)",permalink:"/unraid-docs/es/unraid-os/guides/wol-setup-for-unraid"},next:{title:"Troubleshooting",permalink:"/unraid-docs/es/unraid-os/troubleshooting/"}},l={},a=[{value:"Windows Conversion Procedure",id:"windows-conversion-procedure",level:2},{value:"Step 1: Determine if your VM is using Xen&#39;s GPLPV drivers",id:"step-1-determine-if-your-vm-is-using-xens-gplpv-drivers",level:3},{value:"Step 2: Prepare Windows for GPLPV driver removal",id:"step-2-prepare-windows-for-gplpv-driver-removal",level:3},{value:"Step 3: Download the uninstaller and remove the GPLPV drivers",id:"step-3-download-the-uninstaller-and-remove-the-gplpv-drivers",level:3},{value:"Step 4: Create a new VM with the VM Manager",id:"step-4-create-a-new-vm-with-the-vm-manager",level:3},{value:"Step 5: Starting your new VM and loading the VirtIO drivers",id:"step-5-starting-your-new-vm-and-loading-the-virtio-drivers",level:3},{value:"Step 6: Remove the temporary vDisk and start the VM",id:"step-6-remove-the-temporary-vdisk-and-start-the-vm",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"xen-to-kvm-migration",children:"Xen to KVM migration"}),"\n",(0,i.jsx)(n.p,{children:"Virtual machines that were running in Xen will require different procedures to convert to KVM, depending on whether they were created as paravirtualized or hardware-virtualized guests. Regardless of your conversion scenario, it is highly recommended that you create a copy of your existing Xen virtual disk before proceeding. Use the copy to test your conversion process and, if successful, you can remove your own Xen-based virtual disk should you so desire. In addition, you should ensure your hardware has support for hardware-assisted virtualization (Intel VT-x / AMD-V) as this is a requirement for use with KVM. Xen PV guests do not leverage hardware-virtualization extensions, which makes their process for converting slightly more involved than Xen HVM guests to KVM (it is not documented at the time of this writing)."}),"\n",(0,i.jsx)(n.h2,{id:"windows-conversion-procedure",children:"Windows Conversion Procedure"}),"\n",(0,i.jsxs)(n.p,{children:["To convert a Windows virtual machine from Xen to KVM, the process is fairly simple and takes about 10 minutes to perform. Remove any PCI device pass through that you are doing via your Xen domain ",(0,i.jsx)(n.code,{children:"cfg"})," file before you begin. These devices can be re-added after the conversion process is complete."]}),"\n",(0,i.jsx)(n.h3,{id:"step-1-determine-if-your-vm-is-using-xens-gplpv-drivers",children:"Step 1: Determine if your VM is using Xen's GPLPV drivers"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["From within your Xen VM, open ",(0,i.jsx)(n.strong,{children:"Windows Device Manager"})," by pressing ",(0,i.jsx)(n.em,{children:"Windows key + X"}),", then selecting ",(0,i.jsx)(n.strong,{children:"Device Manager"})]}),"\n",(0,i.jsxs)(n.li,{children:["Expand the node for ",(0,i.jsx)(n.strong,{children:"Network adapters"}),' and note the name. If the name of the network device contains "Xen", then you are using GPLPV drivers. Anything else means you are not.']}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"If you are not using GPLPV drivers, you can skip the next several steps and resume the procedure from rebooting into KVM mode."})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-prepare-windows-for-gplpv-driver-removal",children:"Step 2: Prepare Windows for GPLPV driver removal"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open a command prompt, running it as an administrator. Open the ",(0,i.jsx)(n.strong,{children:"Start menu"})," and type ",(0,i.jsx)(n.code,{children:"cmd"}),". The start menu identifies the program, and lists context options for the command. Select ",(0,i.jsx)(n.strong,{children:"Run as administrator"}),". This will run an elevated command prompt."]}),"\n",(0,i.jsxs)(n.li,{children:["At the prompt, type ",(0,i.jsx)(n.code,{children:"bcdedit -set loadoptions nogplpv"})," and press Enter."]}),"\n",(0,i.jsx)(n.li,{children:"Reboot your VM."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-download-the-uninstaller-and-remove-the-gplpv-drivers",children:"Step 3: Download the uninstaller and remove the GPLPV drivers"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Once rebooted, open a browser and download the following zip file: ",(0,i.jsx)(n.a,{href:"https://drive.google.com/file/d/0BwGv31twDcCeNElTTWFLbXEycWs/view?usp=sharing",children:"gplpv_uninstall_bat.zip"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Extract the ",(0,i.jsx)(n.code,{children:"uninstall_0.10.x.bat"})," file to your desktop."]}),"\n",(0,i.jsxs)(n.li,{children:["Right-click on the file and select ",(0,i.jsx)(n.strong,{children:"Run as administrator"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Reboot your VM."}),"\n",(0,i.jsxs)(n.li,{children:["After rebooting, open up ",(0,i.jsx)(n.strong,{children:"Device Manager"})," again."]}),"\n",(0,i.jsxs)(n.li,{children:["Under the System Devices section, right-click on ",(0,i.jsx)(n.strong,{children:"Xen PCI Device Driver"})," and select ",(0,i.jsx)(n.strong,{children:"Uninstall device"}),". At the confirmation dialog, select the checkbox to ",(0,i.jsx)(n.strong,{children:"Delete the device driver software for this device"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Shut down the VM."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-4-create-a-new-vm-with-the-vm-manager",children:"Step 4: Create a new VM with the VM Manager"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure the Unraid VM Manager is enabled.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"Settings"})," menu and select ",(0,i.jsx)(n.strong,{children:"VM Manager"}),", then ",(0,i.jsx)(n.strong,{children:"Apply"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.strong,{children:"Enable VMs"})," to ",(0,i.jsx)(n.em,{children:"Yes"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Pick a version of the VirtIO drivers and select ",(0,i.jsx)(n.strong,{children:"Download"}),". This enables you preload a default set of drivers for Windows VMs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"VMs"})," tab and select ",(0,i.jsx)(n.strong,{children:"Add VM"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Select the version of Windows that matches your original Xen VM."}),"\n",(0,i.jsxs)(n.li,{children:["Give the VM a name and select a set of VirtIO drivers from the ",(0,i.jsx)(n.strong,{children:"VirtIO Drivers ISO"})," dropdown."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"Primary vDisk Location"}),", browse and select your Xen virtual disk."]}),"\n",(0,i.jsxs)(n.li,{children:["Add a ",(0,i.jsx)(n.strong,{children:"2nd vDisk"})," by selecting the green plus sign, then give it a size of ",(0,i.jsx)(n.em,{children:"1M"})," (you can put this vDisk anywhere, it is only temporary)."]}),"\n",(0,i.jsxs)(n.li,{children:["Leave graphics, sound, and the remaining settings with default values, and select ",(0,i.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Upon creation, immediately shutdown the VM by selecting the VM icon and ",(0,i.jsx)(n.strong,{children:"Force stop"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the VM icon to show the options again, and select ",(0,i.jsx)(n.strong,{children:"Edit"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In edit mode, switch to ",(0,i.jsx)(n.strong,{children:"XML View"})," using the toggle in the top-right corner."]}),"\n",(0,i.jsxs)(n.li,{children:["Locate the ",(0,i.jsx)(n.code,{children:"<disk>"})," section for your primary virtual disk."]}),"\n",(0,i.jsxs)(n.li,{children:["Remove the ",(0,i.jsx)(n.code,{children:"<address>"})," line completely."]}),"\n",(0,i.jsxs)(n.li,{children:["Change the ",(0,i.jsx)(n.code,{children:"bus='virtio'"})," from the ",(0,i.jsx)(n.code,{children:"<target>"})," section to ",(0,i.jsx)(n.code,{children:"bus='ide'"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Update"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-5-starting-your-new-vm-and-loading-the-virtio-drivers",children:"Step 5: Starting your new VM and loading the VirtIO drivers"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["From the VMs page, select the ",(0,i.jsx)(n.strong,{children:"VM icon"}),", and ",(0,i.jsx)(n.strong,{children:"Start"})," the VM."]}),"\n",(0,i.jsxs)(n.li,{children:["Once the VM is started, select the icon again, and then ",(0,i.jsx)(n.strong,{children:"Start with console (VNC)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When the VM boots up, it will install several drivers and prompt a reboot, select ",(0,i.jsx)(n.strong,{children:"Reboot later"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.strong,{children:"Windows Device Manager"})," again and you'll notice several device warnings under ",(0,i.jsx)(n.strong,{children:"Other devices"})," (Ethernet Controller, PCI Device, SCSI Controller, Serial controller)."]}),"\n",(0,i.jsxs)(n.li,{children:["For each device, double click the device, click ",(0,i.jsx)(n.strong,{children:"Update Driver"}),", then select ",(0,i.jsx)(n.strong,{children:"Browse my computer for driver software"}),".","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Specify a path of the VirtIO drivers ISO (e.g. ",(0,i.jsx)(n.code,{children:"d:\\"}),") for the path for each device, and the appropriate drivers will be automatically loaded."]}),"\n",(0,i.jsxs)(n.li,{children:["Select to ",(0,i.jsx)(n.strong,{children:"Always trust Red Hat"})," if prompted."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Open Windows File Explorer and browse to the ",(0,i.jsx)(n.strong,{children:"guest-agent"})," folder on the VirtIO driver disk and double-click the ",(0,i.jsx)(n.code,{children:"qemu-ga-x64.msi"})," file to install the QEMU guest agent."]}),"\n",(0,i.jsx)(n.li,{children:"Shut down your VM."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-6-remove-the-temporary-vdisk-and-start-the-vm",children:"Step 6: Remove the temporary vDisk and start the VM"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Edit the VM using the form-based editor."}),"\n",(0,i.jsx)(n.li,{children:"Remove the secondary vDisk."}),"\n",(0,i.jsx)(n.li,{children:"Ensure the primary vDisk is pointing to your original vDisk file (it may be pointing to the secondary vDisk, and if so, update it to point to your actual vDisk)."}),"\n",(0,i.jsxs)(n.li,{children:["When completed, select ",(0,i.jsx)(n.strong,{children:"Update"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Start your VM."}),"\n",(0,i.jsx)(n.li,{children:"Verify your device manager shows no warnings."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>o});var i=r(7294);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);