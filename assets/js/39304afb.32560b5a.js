"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8298],{5053:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(5893),i=r(1151);const o={},s="Upgrading to Unraid 6",a={id:"legacy/Articles/upgrading-to-unraid-6",title:"Upgrading to Unraid 6",description:"Before upgrading, we highly recommend making a complete back up of your",source:"@site/docs/legacy/Articles/upgrading-to-unraid-6.md",sourceDirName:"legacy/Articles",slug:"/legacy/Articles/upgrading-to-unraid-6",permalink:"/unraid-docs/legacy/Articles/upgrading-to-unraid-6",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/Articles/upgrading-to-unraid-6.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Expanding Windows VM VDisk Partitions",permalink:"/unraid-docs/legacy/Articles/expanding-windows-vm-vdisk-partitions"},next:{title:"Parity",permalink:"/unraid-docs/legacy/FAQ/Parity"}},l={},d=[{value:"Possible upgrade issues",id:"possible-upgrade-issues",level:2},{value:"The new release does not show up after clicking <em>Check for Updates</em> button",id:"the-new-release-does-not-show-up-after-clicking-check-for-updates-button",level:3},{value:"My array / docker apps are taking a really long time to start after the upgrade",id:"my-array--docker-apps-are-taking-a-really-long-time-to-start-after-the-upgrade",level:3},{value:"My containers aren&#39;t working right after the upgrade",id:"my-containers-arent-working-right-after-the-upgrade",level:3},{value:"My VMs get an error of &quot;cannot get interface MTU...&quot;",id:"my-vms-get-an-error-of-cannot-get-interface-mtu",level:3},{value:"VNC access to my VMs is not working or performing poorly",id:"vnc-access-to-my-vms-is-not-working-or-performing-poorly",level:3},{value:"My OVMF VM doesn&#39;t boot correctly",id:"my-ovmf-vm-doesnt-boot-correctly",level:3},{value:"Trying to start my VM gives a &quot;Invalid Machine Type&quot; error",id:"trying-to-start-my-vm-gives-a-invalid-machine-type-error",level:3},{value:"Poor VM performance after upgrading",id:"poor-vm-performance-after-upgrading",level:3},{value:"Poor VNC performance after upgrading",id:"poor-vnc-performance-after-upgrading",level:3},{value:"Checking your existing version",id:"checking-your-existing-version",level:2},{value:"Checking for sufficient free space",id:"checking-for-sufficient-free-space",level:2},{value:"Checking your network bridge name",id:"checking-your-network-bridge-name",level:2},{value:"Checking your VM network bridge settings",id:"checking-your-vm-network-bridge-settings",level:2},{value:"Post installation procedures",id:"post-installation-procedures",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upgrading-to-unraid-6",children:"Upgrading to Unraid 6"}),"\n",(0,t.jsx)(n.h1,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:'Before upgrading, we highly recommend making a complete back up of your\nUSB flash device. You can do this by copying the entire contents of the\n"flash" share to a separate computer.'}),"\n",(0,t.jsx)(n.h1,{id:"from-version-63",children:"From version 6.3"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Boot your server up and login to the web interface"}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.em,{children:"Plugins"})," tab"]}),"\n",(0,t.jsx)(n.li,{children:'Click the "Update" button next to Unraid Server OS'}),"\n",(0,t.jsx)(n.li,{children:"Once the upgrade is complete, reboot your server for it to take\naffect"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"from-version-62",children:"From version 6.2"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Boot your server up and login to the web interface"}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.em,{children:"Plugins"})," tab"]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.em,{children:"Check for Updates"})," button"]}),"\n",(0,t.jsx)(n.li,{children:'Click the "Update" button next to Unraid Server OS'}),"\n",(0,t.jsx)(n.li,{children:"Once the upgrade is complete, reboot your server for it to take\naffect"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note: if ",(0,t.jsx)(n.em,{children:"Check for Updates"})," shows no update, see below."]}),"\n",(0,t.jsx)(n.h2,{id:"possible-upgrade-issues",children:"Possible upgrade issues"}),"\n",(0,t.jsx)(n.p,{children:"Having problems after the update? See below for common issues and\nsolutions."}),"\n",(0,t.jsxs)(n.h3,{id:"the-new-release-does-not-show-up-after-clicking-check-for-updates-button",children:["The new release does not show up after clicking ",(0,t.jsx)(n.em,{children:"Check for Updates"})," button"]}),"\n",(0,t.jsx)(n.p,{children:"In this case, manually install the update as follows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Navigate to Plugins/Install Plugin tab"}),"\n",(0,t.jsxs)(n.li,{children:["Select/copy this text\n",(0,t.jsx)(n.a,{href:"https://raw.githubusercontent.com/limetech/unRAIDServer/master/unRAIDServer.plg",children:(0,t.jsx)(n.code,{children:"https://raw.githubusercontent.com/limetech/unRAIDServer/master/unRAIDServer.plg"})})]}),"\n",(0,t.jsx)(n.li,{children:"Paste into URL field and click Install"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"my-array--docker-apps-are-taking-a-really-long-time-to-start-after-the-upgrade",children:"My array / docker apps are taking a really long time to start after the upgrade"}),"\n",(0,t.jsx)(n.p,{children:"There is a one-time update procedure that each container will need to go\nthrough in order to point it towards the new Docker Hub API going\nforward, even if the container itself truly isn't in need of an update.\nThis process will happen automatically the first time your containers\nare started after upgrading. The Docker change log describes it like\nthis:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Docker 1.10 uses a new content-addressable storage for images and\nlayers. A migration is performed the first time docker is run, and can\ntake a significant amount of time depending on the number of images\npresent."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/docker/docker/releases/tag/v1.10.0",children:"here"})," for\nmore information from Docker on this."]}),"\n",(0,t.jsx)(n.h3,{id:"my-containers-arent-working-right-after-the-upgrade",children:"My containers aren't working right after the upgrade"}),"\n",(0,t.jsx)(n.p,{children:'If you run into any issues with your containers after this procedure\ncompletes (such as the "layers from manifest don\'t match image\nconfiguration" error), you will need to rebuild your docker image file.\nTo do this:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Stop Docker from the ",(0,t.jsx)(n.em,{children:"Settings"})," \u2192 ",(0,t.jsx)(n.em,{children:"Docker"})," page"]}),"\n",(0,t.jsx)(n.li,{children:"Click the checkbox and then click the button to delete the image"}),"\n",(0,t.jsx)(n.li,{children:"Start Docker again and the image will be recreated"}),"\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.em,{children:"Docker"})," tab and click ",(0,t.jsx)(n.em,{children:"Add Container"})]}),"\n",(0,t.jsxs)(n.li,{children:["From the ",(0,t.jsx)(n.em,{children:"Template"}),' drop down, select one of your previous templates\n(prefixed with "my-") and then click ',(0,t.jsx)(n.em,{children:"Apply"})]}),"\n",(0,t.jsx)(n.li,{children:"Repeat the previous step for each of your containers"}),"\n",(0,t.jsxs)(n.li,{children:["You will ",(0,t.jsx)(n.strong,{children:"not"})," need to reconfigure your apps after this is\ncomplete"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"my-vms-get-an-error-of-cannot-get-interface-mtu",children:'My VMs get an error of "cannot get interface MTU..."'}),"\n",(0,t.jsx)(n.p,{children:"A change that was made in version 6.2 eliminated the customization of\nthe bridge name used for virtual machines. Users that have a custom\nbridge name set will need to fix their VMs to point to the new default\nof 'br0'. To fix this, perform the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Navigate to the VMs tab."}),"\n",(0,t.jsxs)(n.li,{children:["Edit each VM and turn on ",(0,t.jsx)(n.em,{children:"Advanced View"})," mode."]}),"\n",(0,t.jsx)(n.li,{children:"Locate the network section and from the dropdown, select br0 and\nthen click apply."}),"\n",(0,t.jsxs)(n.li,{children:["Once all VMs are set to use the 'br0' bridge, go to the ",(0,t.jsx)(n.em,{children:"Settings"}),"\n\u2192 ",(0,t.jsx)(n.em,{children:"VM Manager"})," page, turn on ",(0,t.jsx)(n.em,{children:"Advanced View"}),", and set the default\nnetwork bridge on this page to also be 'br0' and click apply."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"vnc-access-to-my-vms-is-not-working-or-performing-poorly",children:"VNC access to my VMs is not working or performing poorly"}),"\n",(0,t.jsx)(n.p,{children:"VMs created in earlier releases of Unraid Server OS may be set to use an\noutdated graphics device driver for VNC access. To fix this, perform the\nfollowing steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"For each affected VM, go to the VMs tab, click the VM's icon, and\nselect the Edit option"}),"\n",(0,t.jsx)(n.li,{children:'Turn on "Advanced View" in the top right of the Edit VM page'}),"\n",(0,t.jsx)(n.li,{children:"If you are using VNC for the primary graphics card, adjust the VNC\nVideo Driver field to QXL"}),"\n",(0,t.jsx)(n.li,{children:"Click Apply"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"my-ovmf-vm-doesnt-boot-correctly",children:"My OVMF VM doesn't boot correctly"}),"\n",(0,t.jsx)(n.p,{children:"OVMF-based virtual machines that were created under version 6.1 or\nearlier will most likely require a one-time process to boot up properly\non the new release. If you are presented with an EFI shell instead of\nyour OS booting appropriately, type the following commands in order to\nboot your VM:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"fs0:"}),"\n",(0,t.jsx)(n.li,{children:"cd efi/boot"}),"\n",(0,t.jsx)(n.li,{children:"bootx64.efi"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If this doesn't work, try changing the first command from fs0: to fs1:.\nIf that doesn't work, please post in the\n",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/",children:"forums"})," for further assistance. This\nprocedure should only need to be performed the first time you boot OVMF\nVMs that were previously created using Unraid 6.1 or earlier."]}),"\n",(0,t.jsx)(n.h3,{id:"trying-to-start-my-vm-gives-a-invalid-machine-type-error",children:'Trying to start my VM gives a "Invalid Machine Type" error'}),"\n",(0,t.jsx)(n.p,{children:'If you receive this error, simply edit your VM in the WebGUI and without\nmaking any changes, click "Apply". This will update the VM\'s machine\ntype to the latest version and your VM should start without the error.'}),"\n",(0,t.jsx)(n.h3,{id:"poor-vm-performance-after-upgrading",children:"Poor VM performance after upgrading"}),"\n",(0,t.jsxs)(n.p,{children:['Some users have replied that their VMs perform poorly after updating to\n6.3. One possible solution could be to update the machine type version\nfor your VM. To do this, edit your VM from the VMs tab in the WebGUI.\nTurn on "Advanced View" in the top right and look for the ',(0,t.jsx)(n.strong,{children:"Machine"}),"\noption. Toggle the version to the latest revision and then hit apply (do\nnot change the prefix selected, only the version; e.g. if previously you\nwere on i440fx-2.5, try changing to i440fx-2.7, but don't change to\nQ35-2.7). Try starting your VM and see if performance improves."]}),"\n",(0,t.jsx)(n.h3,{id:"poor-vnc-performance-after-upgrading",children:"Poor VNC performance after upgrading"}),"\n",(0,t.jsx)(n.p,{children:"If your VM has poor VNC performance after upgrading, please try changing\nthe VNC Video Driver. You can do this from the Edit VM page. It is\nrecommended to first try Cirrus, then vmvga (if available for your VM\ntype)."}),"\n",(0,t.jsx)(n.h1,{id:"from-version-61-or-earlier",children:"From version 6.1 or earlier"}),"\n",(0,t.jsx)(n.p,{children:"Please ensure your system meets these requirements before upgrading:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Your server must be running version 6.1 or later."}),"\n",(0,t.jsx)(n.li,{children:"Your USB flash device must have at least 128MB of free space."}),"\n",(0,t.jsx)(n.li,{children:"If you have customized your network bridge name previously, it must\nbe changed back to the default of 'br0' before upgrading."}),"\n",(0,t.jsx)(n.li,{children:"VMs set to use a custom-named bridge will also need to be edited to\npoint to the 'br0' prior to the upgrade."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"checking-your-existing-version",children:"Checking your existing version"}),"\n",(0,t.jsx)(n.p,{children:"To check which version of Unraid is presently running on your server,\nsimply log into the web interface and look in the top right corner of\nthe browser."}),"\n",(0,t.jsx)(n.h2,{id:"checking-for-sufficient-free-space",children:"Checking for sufficient free space"}),"\n",(0,t.jsxs)(n.p,{children:["The upgrade process will check for this automatically, but if you wish\nto be proactive, you can review your boot device's free space under the\nFlash section on the ",(0,t.jsx)(n.em,{children:"Main"})," tab of the web interface."]}),"\n",(0,t.jsx)(n.h2,{id:"checking-your-network-bridge-name",children:"Checking your network bridge name"}),"\n",(0,t.jsxs)(n.p,{children:["To see if you have a customized network bridge, open the ",(0,t.jsx)(n.em,{children:"Settings"})," \u2192\n",(0,t.jsx)(n.em,{children:"Network Settings"})," page of the web interface. If the bridge name is\nanything other than 'br0', change it back to 'br0' and click apply."]}),"\n",(0,t.jsx)(n.h2,{id:"checking-your-vm-network-bridge-settings",children:"Checking your VM network bridge settings"}),"\n",(0,t.jsx)(n.p,{children:"If you found you have a custom-name for your network bridge and you also\nhave VMs on the system, it is very likely that these VMs are also set to\nuse the custom-named bridge and therefore they must be updated as well.\nTo do this, you will need to perform the following steps after you have\nrestored the default network bridge name:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Shutdown all VMs running on the system."}),"\n",(0,t.jsxs)(n.li,{children:["Edit each VM and turn on ",(0,t.jsx)(n.em,{children:"Advanced View"})," mode."]}),"\n",(0,t.jsx)(n.li,{children:"Locate the network section and from the dropdown, select br0 and\nthen click apply."}),"\n",(0,t.jsxs)(n.li,{children:["Once all VMs are set to use the 'br0' bridge, go to the ",(0,t.jsx)(n.em,{children:"Settings"}),"\n\u2192 ",(0,t.jsx)(n.em,{children:"Network Settings"})," page, turn on ",(0,t.jsx)(n.em,{children:"Advanced View"}),", and set the\ndefault network bridge on this page to also be 'br0' and click\napply."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Your VMs should now be ready for use under the latest version."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Boot your server up and login to the web interface"}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.em,{children:"Plugins"})," tab"]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.em,{children:"Install Plugin"})," tab"]}),"\n",(0,t.jsx)(n.li,{children:"Copy and paste the below link into the field and click install"}),"\n",(0,t.jsx)(n.li,{children:"Once the upgrade plugin has been installed, reboot your server"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"post-installation-procedures",children:"Post installation procedures"}),"\n",(0,t.jsx)(n.p,{children:"Once rebooted under version 6.2 for the first time, it may take several\nminutes (potentially longer) to start the array if Docker containers\nhave been previously configured. This is due to a one-time upgrade\nprocedure that will be applied to the containers in your Docker image\nfile. This procedure is automatically performed for you and does not\nhave to be manually enabled."}),"\n",(0,t.jsx)(n.p,{children:"In addition, OVMF-based virtual machines that were created under version\n6.1 or earlier will most likely require a one-time process to boot up\nproperly under version 6.2. Upon booting an OVMF-based VM under 6.2, if\nyou are presented with an EFI shell instead of your OS booting\nappropriately, type the following commands in order to boot your VM:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"fs0:"}),"\n",(0,t.jsx)(n.li,{children:"cd efi/boot"}),"\n",(0,t.jsx)(n.li,{children:"bootx64.efi"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If this doesn't work, try changing the first command from fs0: to fs1:.\nIf that doesn't work, please post in the\n",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/",children:"forums"})," for further assistance. This\nprocedure should only need to be performed the first time you boot OVMF\nVMs under version 6.2 that were previously created using Unraid 6.1 or\nearlier."]}),"\n",(0,t.jsx)(n.h1,{id:"from-version-5x-or-earlier",children:"From version 5.x or earlier"}),"\n",(0,t.jsxs)(n.p,{children:["Please see ",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=41061.0",children:"this forum\npost"})," for\ninformation on upgrading."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(7294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);