"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9742],{5952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(5893),a=t(1151);const r={sidebar_position:2},s="Quick install guide",o={id:"unraid-os/getting-started/quick-install-guide",title:"Quick install guide",description:"Create your bootable media with Unraid OS",source:"@site/docs/unraid-os/getting-started/quick-install-guide.md",sourceDirName:"unraid-os/getting-started",slug:"/unraid-os/getting-started/quick-install-guide",permalink:"/unraid-docs/es/unraid-os/getting-started/quick-install-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/getting-started/quick-install-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"unraidSidebar",previous:{title:"Getting started",permalink:"/unraid-docs/es/unraid-os/getting-started/"},next:{title:"Manual install method",permalink:"/unraid-docs/es/unraid-os/getting-started/manual-install-method"}},d={},l=[{value:"Create your bootable media with Unraid OS",id:"create-your-bootable-media-with-unraid-os",level:2},{value:"Setting up the Unraid OS",id:"setting-up-the-unraid-os",level:2},{value:"Connecting to the Unraid WebGUI",id:"connecting-to-the-unraid-webgui",level:3},{value:"Setting a root password",id:"setting-a-root-password",level:3},{value:"Registering and installing your license key",id:"registering-and-installing-your-license-key",level:3},{value:"Assigning Devices to the Array and Pool(s)",id:"assigning-devices-to-the-array-and-pools",level:3},{value:"Starting the Array and Formatting Your Devices",id:"starting-the-array-and-formatting-your-devices",level:3},{value:"Stopping the array, shutting down, and rebooting",id:"stopping-the-array-shutting-down-and-rebooting",level:3},{value:"Managing your server with Unraid Connect",id:"managing-your-server-with-unraid-connect",level:3},{value:"Getting help",id:"getting-help",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quick-install-guide",children:"Quick install guide"}),"\n",(0,i.jsx)(n.h2,{id:"create-your-bootable-media-with-unraid-os",children:"Create your bootable media with Unraid OS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Insert a quality USB flash device into your Mac or PC."}),"\n",(0,i.jsxs)(n.li,{children:["Download the ",(0,i.jsx)(n.a,{href:"https://unraid.net/download",children:"USB Flash Creator"})," and use it to install Unraid OS onto your USB flash device, or use the ",(0,i.jsx)(n.a,{href:"/unraid-docs/es/unraid-os/getting-started/manual-install-method",children:"Manual install method"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Remove the flash device from your PC and plug it into your server."}),"\n",(0,i.jsxs)(n.li,{children:["Boot into your server's BIOS settings and make the following changes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Configure the system to boot from the USB flash device."}),"\n",(0,i.jsxs)(n.li,{children:["Enable hardware virtualization-specific features (including IOMMU).",(0,i.jsx)(n.br,{}),"\n","You can find more details on BIOS configuration in the ",(0,i.jsx)(n.a,{href:"/unraid-docs/es/unraid-os/getting-started/advanced-bios-config",children:"Advanced BIOS configuration"})," guide."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Save your BIOS configuration changes and exit to boot Unraid OS."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-the-unraid-os",children:"Setting up the Unraid OS"}),"\n",(0,i.jsx)(n.p,{children:"Once Unraid OS has booted, you can now bring up the browser-based management utility, a.k.a. the WebGUI, and complete your system configuration."}),"\n",(0,i.jsx)(n.h3,{id:"connecting-to-the-unraid-webgui",children:"Connecting to the Unraid WebGUI"}),"\n",(0,i.jsx)(n.p,{children:"There are two methods to connect to the WebGUI in Unraid, and you can always:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Boot Unraid in GUI mode and login (username is ",(0,i.jsx)(n.code,{children:"root"}),", no password by default)."]}),"\n",(0,i.jsxs)(n.li,{children:["Open a web browser from your Mac or PC and navigate to ",(0,i.jsx)(n.code,{children:"http://tower.local"})]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsx)(n.p,{children:"Note that as soon as the Unraid server is booted up, it will be available on your local area network. This means you can simply type  the IP address of the computer hosting the Unraid server in a browser address bar."}),(0,i.jsxs)(n.p,{children:["Also, if you configured a different host name in the USB Flash Creator, use that name instead of ",(0,i.jsx)(n.code,{children:"tower"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"setting-a-root-password",children:"Setting a root password"}),"\n",(0,i.jsxs)(n.p,{children:["Once you are connected to the WebGUI, you will immediately be prompted to set a strong root password.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"Set password",src:t(307).Z+"",width:"518",height:"655"})]}),"\n",(0,i.jsx)(n.p,{children:"Strong passwords are unique (not reused), have at least 8 characters (the more the better), are a combination of alphabetic, numeric, and special characters, and are not common dictionary words. Better yet, use a 3rd party password manager."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you happen to forget your root password, the steps to reset it can be found ",(0,i.jsx)(n.a,{href:"/unraid-docs/es/unraid-os/manual/users/reset-password",children:"here"}),".",(0,i.jsx)(n.br,{}),"\n","If you know your root password, but want to change it to something more secure, you can follow ",(0,i.jsx)(n.a,{href:"/unraid-docs/es/unraid-os/manual/users/manage-user#modify-a-user-account",children:"these steps"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"registering-and-installing-your-license-key",children:"Registering and installing your license key"}),"\n",(0,i.jsx)(n.p,{children:"Once a root password is set, you will be logged into the WebGUI. Now you need to sign in to Unraid.net and obtain a license key."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Sign in"})," or ",(0,i.jsx)(n.strong,{children:"Sign up"}),", in the ",(0,i.jsx)(n.strong,{children:"Get Started"})," section in the top-right of the WebGUI.\n",(0,i.jsx)(n.img,{alt:"UPC getting started",src:t(5149).Z+"",width:"575",height:"322"})]}),"\n",(0,i.jsxs)(n.li,{children:["Upon signing in, a trial key will be downloaded and installed to your system automatically.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"UPC installing a trial key",src:t(2371).Z+"",width:"597",height:"866"}),(0,i.jsx)(n.br,{}),"\n","The purpose of the sign-in is to provide a way for you to manage your license keys for Unraid OS (obtain a trial key, purchase a paid key, recover a lost key, replace your key with a new flash device, or upgrade a key from one edition to another)."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["In Unraid versions 6.9 and earlier, registering for a Trial, installing a key, or purchasing a key is done from ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Tools > Registration"})}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"assigning-devices-to-the-array-and-pools",children:"Assigning Devices to the Array and Pool(s)"}),"\n",(0,i.jsx)(n.p,{children:"After installing a registration key, you are ready to begin assigning devices for Unraid to manage."}),"\n",(0,i.jsxs)(n.p,{children:["You assign devices in the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Main"})})," tab from the Unraid WebGUI. On this page, you can see a list of Array device and Pool device assignments, as well as any unassigned devices and the boot device.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"Configure the array",src:t(9791).Z+"",width:"1648",height:"859"})]}),"\n",(0,i.jsx)(n.p,{children:"Unraid OS uses drives for different functions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Array devices"})," are your general storage in Unraid. They fall in two categories: parity and non-parity. Parity devices provide fault tolerance in case your array suffers data loss. If you need to replace a faulty drive, these are used to rebuild your array. You can have up to two parity drives.  Your non-parity devices contain your custom shares and folders, as well as any files you add to them, like media files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pool Devices"})," are your cache storage, usually a high-performing device which can read and write at speeds far greater than an HDD. Pool devices are used to temporarily store files until they are offloaded to the array."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Boot Device"})," is the USB flash device used to boot Unraid OS from."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Use the dropdowns to select disks for your array (parity and non-parity drives) and pool devices."}),"\n",(0,i.jsx)(n.p,{children:"Follow these recommendations when assigning disks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Always pick the largest storage device available to act as your parity device(s)"}),". When expanding your array in the future (adding more devices to data disk slots), you cannot assign a data disk that is larger than your parity device(s). For this reason, it is highly recommended to purchase the largest HDD available for use as your initial parity device, so future expansions aren\u2019t limited to small device sizes. If assigning dual parity disks, your two parity disks can vary in size, but the same rule holds true that no data disk in the array can be larger than your smallest parity device."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SSD support in the array is experimental"}),". Some SSDs may not be ideal for use in the array due to how TRIM / Discard may be implemented. Using SSDs as data/parity devices may have unexpected/undesirable results. This does not apply to the cache / cache pool."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Using a pool as a cache will improve array performance"}),". It does this by redirecting write operations to a dedicated disk (or pool of disks in Unraid) and moves that data to the array on a schedule that you define (by default, once per day at 3:40 AM). Data written to a cache pool is still presented through your user shares, making use of this function completely transparent. You control at the User Share level which shares should use a pool for cache purposes and which pool that should be."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Creating a multi-device pool adds protection for cached data"}),". If you only assign one device to the cache pool, data residing there before being moved to the array on a schedule is not protected from data loss. To ensure data remains protected at all times (both on data and cache disks), you must assign more than one device to the pool, creating what is typically called a cache-pool. Cache pools can be expanded on demand, similar to the array."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SSD-based pools are ideal for applications and virtual machines"}),". Apps and VMs benefit from SSDs as they can leverage their raw IO potential to perform faster when interacting with them. Use SSDs in a pool for the ultimate combination of functionality, performance, and protection."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["Your array will not start if you have attached more storage devices than your ",(0,i.jsx)(n.a,{href:"https://unraid.net/pricing",children:"license key"})," allows."]})}),"\n",(0,i.jsx)(n.h3,{id:"starting-the-array-and-formatting-your-devices",children:"Starting the Array and Formatting Your Devices"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have all your devices assigned, you can select the ",(0,i.jsx)(n.strong,{children:"Start"})," button under ",(0,i.jsx)(n.strong,{children:"Array Operation"}),". This will mount your devices and start the array."]}),"\n",(0,i.jsxs)(n.p,{children:["New devices added to disk or cache device slots will appear as 'Unformatted' and will be unusable for storing files until you format them. Unraid defaults to using the XFS filesystem for all devices, but if you define a cache pool then BTRFS will automatically be used for those devices. You can change the default file system under ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > System Settings > Disk Settings"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To format your devices for use, you must select the ",(0,i.jsx)(n.strong,{children:"Format"})," check box under ",(0,i.jsx)(n.strong,{children:"Array Operation"}),", acknowledge the resulting prompt (read it carefully), and then select the ",(0,i.jsx)(n.strong,{children:"Format"})," button."]}),"\n",(0,i.jsx)(n.p,{children:"Even before the devices are formatted, a parity sync will be performed in the background to initialize the protection of the array. Until the sync is completed, the array will operate but in an unprotected state. It is recommended to wait until the initial parity sync completes before adding data to the array."}),"\n",(0,i.jsx)(n.h3,{id:"stopping-the-array-shutting-down-and-rebooting",children:"Stopping the array, shutting down, and rebooting"}),"\n",(0,i.jsxs)(n.p,{children:["In order to perform one of these operations, in ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Main"})})," scroll down to the section titled ",(0,i.jsx)(n.strong,{children:"Array Operation"})," and select the button appropriate to the operation you wish to carry out."]}),"\n",(0,i.jsx)(n.h3,{id:"managing-your-server-with-unraid-connect",children:"Managing your server with Unraid Connect"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/unraid-docs/es/connect/about",children:"Unraid Connect"})," is a plugin for Unraid, available through Community applications. Using Unraid Connect you can manage all your server instances through a unified ",(0,i.jsx)(n.a,{href:"https://connect.myunraid.net/",children:"Unraid Connect Dashboard"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Unraid connect uses your Unraid.net credentials for access management, while communicating with our cloud servers through a secure connection. For a better understanding of how we handle this, read the ",(0,i.jsx)(n.a,{href:"/unraid-docs/es/connect/help#privacy",children:"Privacy section"})," in our Unraid Connect documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"getting-help",children:"Getting help"}),"\n",(0,i.jsxs)(n.p,{children:["If you're struggling with some stage of the Unraid installation, check out our ",(0,i.jsx)(n.a,{href:"/unraid-docs/es/unraid-os/faq/installation",children:"Installation FAQ"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},9791:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Configuringarray1-b563b7a09206ee11573eb77ad400c45c.png"},307:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Set_root_password-4ff6b82e5658cb5c8fb377baf3f53a8e.png"},5149:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Upc_get_started-4630213996717795a6d0c89481d61bdd.png"},2371:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Upc_install_trial_key-441ac5223d84cf58dfa291d8814f1c62.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(7294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);