"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4710],{4248:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=r(5893),o=r(1151);const t={},s="Upgrading Unraid",a={id:"unraid-os/manual/upgrade-instructions",title:"Upgrading Unraid",description:"Prerequisites",source:"@site/docs/unraid-os/manual/upgrade-instructions.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/upgrade-instructions",permalink:"/zh/unraid-os/manual/upgrade-instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/upgrade-instructions.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Tools",permalink:"/zh/unraid-os/manual/tools"},next:{title:"ZFS",permalink:"/zh/category/zfs"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Upgrading from version 6.4 or higher",id:"upgrading-from-version-64-or-higher",level:2},{value:"Upgrading from version 6.3",id:"upgrading-from-version-63",level:2},{value:"Upgrading from version 6.2",id:"upgrading-from-version-62",level:2},{value:"Possible upgrade issues",id:"possible-upgrade-issues",level:3},{value:"The new release does not show up after clicking <em>Check for Updates</em> button",id:"the-new-release-does-not-show-up-after-clicking-check-for-updates-button",level:4},{value:"My array/docker apps are taking a really long time to start after the upgrade",id:"my-arraydocker-apps-are-taking-a-really-long-time-to-start-after-the-upgrade",level:4},{value:"My containers aren&#39;t working right after the upgrade",id:"my-containers-arent-working-right-after-the-upgrade",level:4},{value:"My VMs get an error of &quot;cannot get interface MTU...&quot;",id:"my-vms-get-an-error-of-cannot-get-interface-mtu",level:4},{value:"VNC access to my VMs is not working or performing poorly",id:"vnc-access-to-my-vms-is-not-working-or-performing-poorly",level:4},{value:"My OVMF VM doesn&#39;t boot correctly",id:"my-ovmf-vm-doesnt-boot-correctly",level:4},{value:"Trying to start my VM gives a &quot;Invalid Machine Type&quot; error",id:"trying-to-start-my-vm-gives-a-invalid-machine-type-error",level:4},{value:"Poor VM performance after upgrading",id:"poor-vm-performance-after-upgrading",level:4},{value:"Poor VNC performance after upgrading",id:"poor-vnc-performance-after-upgrading",level:4},{value:"Upgrading from version 6.1 or earlier",id:"upgrading-from-version-61-or-earlier",level:2},{value:"Checking for sufficient free space",id:"checking-for-sufficient-free-space",level:3},{value:"Checking your network bridge name",id:"checking-your-network-bridge-name",level:3},{value:"Checking your VM network bridge settings",id:"checking-your-vm-network-bridge-settings",level:3},{value:"Post installation procedures",id:"post-installation-procedures",level:3},{value:"Upgrading from version 5.x or earlier",id:"upgrading-from-version-5x-or-earlier",level:2},{value:"Manual upgrade or downgrade",id:"manual-upgrade-or-downgrade",level:2},{value:"Manual upgrade using a network share or by putting the flash drive in another system",id:"manual-upgrade-using-a-network-share-or-by-putting-the-flash-drive-in-another-system",level:3},{value:"Manual upgrade from the Unraid command line",id:"manual-upgrade-from-the-unraid-command-line",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"upgrading-unraid",children:"Upgrading Unraid"}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before upgrading, we highly recommend making a complete backup of your USB flash device. You can use Unraid Connect to create the backup or you can do it manually via the WebGUI:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Main"})})," tab select the ",(0,i.jsx)(n.strong,{children:"Flash"})," device from the boot device list."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"Flash Device Settings"}),", select the ",(0,i.jsx)(n.strong,{children:"Flash Backup"})," button to download a fully zipped backup of your current flash drive to your Mac or PC.\n",(0,i.jsx)(n.img,{alt:"Flash backup",src:r(2731).Z+"",width:"1618",height:"810"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, if you want, you can use ",(0,i.jsx)(n.a,{href:"/zh/connect/help#restoring-flash-backup",children:"Unraid Connect"})," to back up your Flash boot device."]}),"\n",(0,i.jsx)(n.h2,{id:"upgrading-from-version-64-or-higher",children:"Upgrading from version 6.4 or higher"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Boot your server up and login to the web interface"}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Tools"})," tab"]}),"\n",(0,i.jsxs)(n.li,{children:['Click "Update OS" under the ',(0,i.jsx)(n.strong,{children:"About"})," section"]}),"\n",(0,i.jsx)(n.li,{children:'Click "Check for Updates" to see if a new release is available'}),"\n",(0,i.jsx)(n.li,{children:'Click "Update" to apply the update'}),"\n",(0,i.jsx)(n.li,{children:"Once the upgrade is complete, reboot your server for it to take effect"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'You can optionally install releases from the "Next" branch as well, but those releases are not considered fully "Stable", so only do so at your own risk.'})}),"\n",(0,i.jsx)(n.h2,{id:"upgrading-from-version-63",children:"Upgrading from version 6.3"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Boot your server up and login to the web interface"}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.em,{children:"Plugins"})," tab"]}),"\n",(0,i.jsx)(n.li,{children:'Click the "Update" button next to Unraid Server OS'}),"\n",(0,i.jsx)(n.li,{children:"Once the upgrade is complete, reboot your server for it to take\neffect"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"upgrading-from-version-62",children:"Upgrading from version 6.2"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Boot your server up and login to the web interface"}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.em,{children:"Plugins"})," tab"]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.em,{children:"Check for Updates"})," button"]}),"\n",(0,i.jsx)(n.li,{children:'Click the "Update" button next to Unraid Server OS'}),"\n",(0,i.jsx)(n.li,{children:"Once the upgrade is complete, reboot your server for it to take\neffect"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note: if ",(0,i.jsx)(n.em,{children:"Check for Updates"})," shows no update, see below."]}),"\n",(0,i.jsx)(n.h3,{id:"possible-upgrade-issues",children:"Possible upgrade issues"}),"\n",(0,i.jsx)(n.p,{children:"Having problems after the update? See below for common issues and\nsolutions."}),"\n",(0,i.jsxs)(n.h4,{id:"the-new-release-does-not-show-up-after-clicking-check-for-updates-button",children:["The new release does not show up after clicking ",(0,i.jsx)(n.em,{children:"Check for Updates"})," button"]}),"\n",(0,i.jsx)(n.p,{children:"In this case, manually install the update as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Navigate to Plugins/Install Plugin tab"}),"\n",(0,i.jsxs)(n.li,{children:["Select/copy this text\n",(0,i.jsx)(n.a,{href:"https://s3.amazonaws.com/dnld.lime-technology.com/stable/unRAIDServer.plg",children:"https://s3.amazonaws.com/dnld.lime-technology.com/stable/unRAIDServer.plg"})]}),"\n",(0,i.jsx)(n.li,{children:"Paste into URL field and click Install"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"my-arraydocker-apps-are-taking-a-really-long-time-to-start-after-the-upgrade",children:"My array/docker apps are taking a really long time to start after the upgrade"}),"\n",(0,i.jsx)(n.p,{children:"There is a one-time update procedure that each container will need to go\nthrough in order to point it towards the new Docker Hub API going\nforward, even if the container itself truly isn't in need of an update.\nThis process will happen automatically the first time your containers\nare started after upgrading. The Docker change log describes it like\nthis:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Docker 1.10 uses a new content-addressable storage for images and\nlayers. A migration is performed the first time docker is run and can\ntake a significant amount of time depending on the number of images\npresent."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/docker/docker/releases/tag/v1.10.0",children:"here"})," for\nmore information from Docker on this."]}),"\n",(0,i.jsx)(n.h4,{id:"my-containers-arent-working-right-after-the-upgrade",children:"My containers aren't working right after the upgrade"}),"\n",(0,i.jsx)(n.p,{children:'If you run into any issues with your containers after this procedure\ncompletes (such as the "layers from manifest don\'t match image\nconfiguration" error), you will need to rebuild your Docker image file.\nTo do this:'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Stop the Docker engine from the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings \u2192 Docker"})})," page."]}),"\n",(0,i.jsx)(n.li,{children:"Click the checkbox and then click the button to delete the image"}),"\n",(0,i.jsx)(n.li,{children:"Start Docker again and the image will be recreated"}),"\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.em,{children:"Docker"})," tab and click ",(0,i.jsx)(n.em,{children:"Add Container"})]}),"\n",(0,i.jsxs)(n.li,{children:["From the ",(0,i.jsx)(n.em,{children:"Template"}),' drop-down, select one of your previous templates\n(prefixed with "my-") and then click ',(0,i.jsx)(n.em,{children:"Apply"})]}),"\n",(0,i.jsx)(n.li,{children:"Repeat the previous step for each of your containers"}),"\n",(0,i.jsxs)(n.li,{children:["You will ",(0,i.jsx)(n.strong,{children:"not"})," need to reconfigure your apps after this is\ncomplete"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"my-vms-get-an-error-of-cannot-get-interface-mtu",children:'My VMs get an error of "cannot get interface MTU..."'}),"\n",(0,i.jsx)(n.p,{children:"A change that was made in version 6.2 eliminated the customization of\nthe bridge name used for virtual machines. Users that have a custom\nbridge name set will need to fix their VMs to point to the new default\nof 'br0'. To fix this, perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Navigate to the VMs tab."}),"\n",(0,i.jsxs)(n.li,{children:["Edit each VM and turn on ",(0,i.jsx)(n.em,{children:"Advanced View"})," mode."]}),"\n",(0,i.jsx)(n.li,{children:"Locate the network section and from the dropdown, select br0 and\nthen click apply."}),"\n",(0,i.jsxs)(n.li,{children:["Once all VMs are set to use the 'br0' bridge, go to the ",(0,i.jsx)(n.em,{children:"Settings"}),"\n\u2192 ",(0,i.jsx)(n.em,{children:"VM Manager"})," page, turn on ",(0,i.jsx)(n.em,{children:"Advanced View"}),", and set the default\nnetwork bridge on this page to also be 'br0' and click apply."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"vnc-access-to-my-vms-is-not-working-or-performing-poorly",children:"VNC access to my VMs is not working or performing poorly"}),"\n",(0,i.jsx)(n.p,{children:"VMs created in earlier releases of Unraid Server OS may be set to use an\noutdated graphics device driver for VNC access. To fix this, perform the\nfollowing steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"For each affected VM, go to the VMs tab, click the VM's icon, and\nselect the Edit option"}),"\n",(0,i.jsx)(n.li,{children:'Turn on "Advanced View" in the top right of the Edit VM page'}),"\n",(0,i.jsx)(n.li,{children:"If you are using VNC for the primary graphics card, adjust the VNC\nVideo Driver field to QXL"}),"\n",(0,i.jsx)(n.li,{children:"Click Apply"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"my-ovmf-vm-doesnt-boot-correctly",children:"My OVMF VM doesn't boot correctly"}),"\n",(0,i.jsx)(n.p,{children:"OVMF-based virtual machines that were created under version 6.1 or\nearlier will most likely require a one-time process to boot up properly\non the new release. If you are presented with an EFI shell instead of\nyour OS booting appropriately, type the following commands in order to\nboot your VM:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"fs0:"}),"\n",(0,i.jsx)(n.li,{children:"cd efi/boot"}),"\n",(0,i.jsx)(n.li,{children:"bootx64.efi"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If this doesn't work, try changing the first command from fs0: to fs1:.\nIf that doesn't work, please post in the\n",(0,i.jsx)(n.a,{href:"https://forums.unraid.net/",children:"forums"})," for further assistance. This\nprocedure should only need to be performed the first time you boot OVMF\nVMs that were previously created using Unraid 6.1 or earlier."]}),"\n",(0,i.jsx)(n.h4,{id:"trying-to-start-my-vm-gives-a-invalid-machine-type-error",children:'Trying to start my VM gives a "Invalid Machine Type" error'}),"\n",(0,i.jsx)(n.p,{children:'If you receive this error, simply edit your VM in the webGui, and\nwithout making any changes, click "Apply". This will update the VM\'s\nmachine type to the latest version and your VM should start without the\nerror.'}),"\n",(0,i.jsx)(n.h4,{id:"poor-vm-performance-after-upgrading",children:"Poor VM performance after upgrading"}),"\n",(0,i.jsxs)(n.p,{children:['Some users have replied that their VMs perform poorly after updating to\n6.3. One possible solution could be to update the machine type version\nfor your VM. To do this, edit your VM from the VMs tab in the webGui.\nTurn on "Advanced View" in the top right and look for the ',(0,i.jsx)(n.strong,{children:"Machine"}),"\noption. Toggle the version to the latest revision and then hit apply (do\nnot change the prefix selected, only the version; e.g. if previously you\nwere on i440fx-2.5, try changing to i440fx-2.7, but don't change to\nQ35-2.7). Try starting your VM and see if performance improves."]}),"\n",(0,i.jsx)(n.h4,{id:"poor-vnc-performance-after-upgrading",children:"Poor VNC performance after upgrading"}),"\n",(0,i.jsx)(n.p,{children:"If your VM has poor VNC performance after upgrading, please try changing\nthe VNC Video Driver. You can do this from the Edit VM page. It is\nrecommended to first try Cirrus, then vmvga (if available for your VM\ntype)."}),"\n",(0,i.jsx)(n.h2,{id:"upgrading-from-version-61-or-earlier",children:"Upgrading from version 6.1 or earlier"}),"\n",(0,i.jsx)(n.p,{children:"Please ensure your system meets these requirements before upgrading:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Your USB flash device must have at least 128MB of free space."}),"\n",(0,i.jsx)(n.li,{children:"If you have customized your network bridge name previously, it must\nbe changed back to the default of 'br0' before upgrading."}),"\n",(0,i.jsx)(n.li,{children:"VMs set to use a custom-named bridge will also need to be edited to\npoint to the 'br0' prior to the upgrade."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"checking-for-sufficient-free-space",children:"Checking for sufficient free space"}),"\n",(0,i.jsxs)(n.p,{children:["The upgrade process will check for this automatically, but if you wish\nto be proactive, you can review your boot device's free space under the\nFlash section on the ",(0,i.jsx)(n.em,{children:"Main"})," tab of the web interface."]}),"\n",(0,i.jsx)(n.h3,{id:"checking-your-network-bridge-name",children:"Checking your network bridge name"}),"\n",(0,i.jsxs)(n.p,{children:["To see if you have a customized network bridge, open the ",(0,i.jsx)(n.em,{children:"Settings"})," \u2192\n",(0,i.jsx)(n.em,{children:"Network Settings"})," page of the web interface. If the bridge name is\nanything other than 'br0', change it back to 'br0' and click apply."]}),"\n",(0,i.jsx)(n.h3,{id:"checking-your-vm-network-bridge-settings",children:"Checking your VM network bridge settings"}),"\n",(0,i.jsx)(n.p,{children:"If you found you have a custom-name for your network bridge and you also\nhave VMs on the system, it is very likely that these VMs are also set to\nuse the custom-named bridge and therefore they must be updated as well.\nTo do this, you will need to perform the following steps after you have\nrestored the default network bridge name:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Shutdown all VMs running on the system."}),"\n",(0,i.jsxs)(n.li,{children:["Edit each VM and turn on ",(0,i.jsx)(n.em,{children:"Advanced View"})," mode."]}),"\n",(0,i.jsx)(n.li,{children:"Locate the network section and from the dropdown, select br0 and\nthen click apply."}),"\n",(0,i.jsxs)(n.li,{children:["Once all VMs are set to use the 'br0' bridge, go to the ",(0,i.jsx)(n.em,{children:"Settings"}),"\n\u2192 ",(0,i.jsx)(n.em,{children:"Network Settings"})," page, turn on ",(0,i.jsx)(n.em,{children:"Advanced View"}),", and set the\ndefault network bridge on this page to also be 'br0' and click\napply."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Your VMs should now be ready for use under the latest version."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Boot your server up and login to the web interface"}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.em,{children:"Plugins"})," tab"]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.em,{children:"Install Plugin"})," tab"]}),"\n",(0,i.jsx)(n.li,{children:"Copy and paste the below link into the field and click install"}),"\n",(0,i.jsx)(n.li,{children:"Once the upgrade plugin has been installed, reboot your server"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"post-installation-procedures",children:"Post installation procedures"}),"\n",(0,i.jsx)(n.p,{children:"Once rebooted under version 6.2 for the first time, it may take several\nminutes (potentially longer) to start the array if Docker containers\nhave been previously configured. This is due to a one-time upgrade\nprocedure that will be applied to the containers in your Docker image\nfile. This procedure is automatically performed for you and does not\nhave to be manually enabled."}),"\n",(0,i.jsx)(n.p,{children:"In addition, OVMF-based virtual machines that were created under version\n6.1 or earlier will most likely require a one-time process to boot up\nproperly under version 6.2. Upon booting an OVMF-based VM under 6.2, if\nyou are presented with an EFI shell instead of your OS booting\nappropriately, type the following commands in order to boot your VM:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"fs0:\ncd efi/boot\nbootx64.efi\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If this doesn't work, try changing the first command from fs0: to fs1:.\nIf that doesn't work, please post in the\n",(0,i.jsx)(n.a,{href:"https://forums.unraid.net/",children:"forums"})," for further assistance. This\nprocedure should only need to be performed the first time you boot OVMF\nVMs under version 6.2 that were previously created using Unraid 6.1 or\nearlier."]}),"\n",(0,i.jsx)(n.h2,{id:"upgrading-from-version-5x-or-earlier",children:"Upgrading from version 5.x or earlier"}),"\n",(0,i.jsxs)(n.p,{children:["Please see ",(0,i.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=41061.0",children:"this forum\npost"})," for\ninformation on upgrading."]}),"\n",(0,i.jsx)(n.h2,{id:"manual-upgrade-or-downgrade",children:"Manual upgrade or downgrade"}),"\n",(0,i.jsx)(n.p,{children:"This is useful if you don't have access to the Unraid WebGUi for some reason."}),"\n",(0,i.jsx)(n.p,{children:"Before proceeding, and if you haven't done so already, make a complete backup of your USB flash device. You can use Unraid Connect to create the backup or you can do it manually via the WebGUI:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Main"})})," tab select the ",(0,i.jsx)(n.strong,{children:"Flash"})," device from the boot device list."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"Flash Device Settings"}),", select the ",(0,i.jsx)(n.strong,{children:"Flash Backup"})," button to download a fully zipped backup of your current flash drive to your Mac or PC.\n",(0,i.jsx)(n.img,{alt:"Flash backup",src:r(2731).Z+"",width:"1618",height:"810"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"manual-upgrade-using-a-network-share-or-by-putting-the-flash-drive-in-another-system",children:"Manual upgrade using a network share or by putting the flash drive in another system"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Copy the URL of the ",(0,i.jsx)(n.code,{children:"unRAIDServer-version.zip"})," file that you want from the ",(0,i.jsx)(n.a,{href:"/zh/unraid-os/download_list",children:"Download Archive"})]}),"\n",(0,i.jsx)(n.li,{children:"Unzip that file locally"}),"\n",(0,i.jsx)(n.li,{children:"Access the 'flash' share on the server, or physically put the flash drive in the local computer"}),"\n",(0,i.jsxs)(n.li,{children:["If the ",(0,i.jsx)(n.code,{children:"previous"})," directory does not exist on the flash drive, create it"]}),"\n",(0,i.jsxs)(n.li,{children:["Move (not copy) bz* and changes.txt from the root of the flash drive to the ",(0,i.jsx)(n.code,{children:"previous"})," directory, overwriting files as needed"]}),"\n",(0,i.jsx)(n.li,{children:"Copy bz* and changes.txt from the unzipped file to the root of the flash drive"}),"\n",(0,i.jsx)(n.li,{children:"Reboot the server"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"manual-upgrade-from-the-unraid-command-line",children:"Manual upgrade from the Unraid command line"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Copy the URL of the ",(0,i.jsx)(n.code,{children:"unRAIDServer-version.zip"})," file that you want from ",(0,i.jsx)(n.a,{href:"/zh/unraid-os/download_list",children:"Download Archive"})]}),"\n",(0,i.jsx)(n.li,{children:"Login to the Unraid server using SSH, telnet, or a local keyboard/mouse"}),"\n",(0,i.jsxs)(n.li,{children:["Type these commands ",(0,i.jsx)(n.em,{children:"one line at a time"})," and press enter. If there are errors along the way, stop and ask for help:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'cd /tmp\nrm -f unraid.zip\nrm -rf unraid_install\nwget -O unraid.zip <paste the URL from above>\n[[ -s unraid.zip ]] && echo "OK to continue" || echo "STOP the file was not downloaded"\nunzip -d unraid_install unraid.zip\n[[ -s unraid_install/bzroot ]] && echo "OK to continue" || echo "STOP the file was not extracted properly"\n[[ ! -d /boot/previous ]] && mkdir /boot/previous\nmv /boot/bz* /boot/previous\nmv /boot/changes.txt /boot/previous\ncp unraid_install/bz* /boot\ncp unraid_install/changes.txt /boot\nsync -f /boot\nsleep 5\nreboot\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2731:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/Backup_flash_drive-017807361dffbac915098b60d2a07116.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var i=r(7294);const o={},t=i.createContext(o);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);