"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5450],{5341:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>h,toc:()=>c});var s=i(5893),r=i(1151),n=i(3992),a=i(425);const o={sidebar_position:0},l="User shares",h={id:"unraid-os/manual/shares/user-shares",title:"User shares",description:"Enable or disable user shares in Settings > Global Share Settings. User shares are enabled by default.",source:"@site/docs/unraid-os/manual/shares/user-shares.md",sourceDirName:"unraid-os/manual/shares",slug:"/unraid-os/manual/shares/user-shares",permalink:"/unraid-docs/unraid-os/manual/shares/user-shares",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/shares/user-shares.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"unraidSidebar",previous:{title:"Shares",permalink:"/unraid-docs/unraid-os/manual/shares/"},next:{title:"Disk shares",permalink:"/unraid-docs/unraid-os/manual/shares/disk-shares"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Share settings",id:"share-settings",level:2},{value:"Minimum free space",id:"minimum-free-space",level:3},{value:"Primary and Secondary storage (Unraid 6.12)",id:"primary-and-secondary-storage-unraid-612",level:3},{value:"Use Cache and mover behavior with user shares (Unraid 6.11 and earlier)",id:"use-cache-and-mover-behavior-with-user-shares-unraid-611-and-earlier",level:3},{value:"Moving Files from a Pool (cache) to the Array",id:"moving-files-from-a-pool-cache-to-the-array",level:3},{value:"Moving Files from the Array to a Pool (cache)",id:"moving-files-from-the-array-to-a-pool-cache",level:3},{value:"Allocation method",id:"allocation-method",level:3},{value:"High-water method",id:"high-water-method",level:4},{value:"Fill-up method",id:"fill-up-method",level:4},{value:"Most-free method",id:"most-free-method",level:4},{value:"Split level",id:"split-level",level:3},{value:"Automatically split any directory as required",id:"automatically-split-any-directory-as-required",level:4},{value:"Automatically split only the top level directory as required",id:"automatically-split-only-the-top-level-directory-as-required",level:4},{value:"Automatically split only the top &quot;N&quot; level directories as required",id:"automatically-split-only-the-top-n-level-directories-as-required",level:4},{value:"Manual - do not automatically split directories",id:"manual---do-not-automatically-split-directories",level:4},{value:"Included or excluded disks",id:"included-or-excluded-disks",level:3},{value:"Included disk(s)",id:"included-disks",level:4},{value:"Excluded disk(s)",id:"excluded-disks",level:4},{value:"Default Shares",id:"default-shares",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"user-shares",children:"User shares"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Enable or disable user shares in ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Settings > Global Share Settings"})}),". User shares are enabled by default."]})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"User shares provide an aggregated view of all top level folders of the same name across the cache and the array drives. The name of this top level folder is used as the share name. From a user perspective this gives a view that can span multiple drives when viewed at the network level. Note that no individual file spans multiple drives - it is just the directory level that is given a unified view."}),"\n",(0,s.jsxs)(t.p,{children:["You manage ",(0,s.jsx)(t.strong,{children:"User Shares"})," from the ",(0,s.jsx)(t.strong,{children:"Shares"})," tab. There, you can see an overview off all shares on your Unraid server, you can create new shares, and edit or delete existing ones. If you manually create a top level folder on any drive, the system will automatically consider this to be a User Share and assign it default attributes."]}),"\n",(0,s.jsxs)(t.p,{children:["When viewed at the Linux level, user shares appear under the path ",(0,s.jsx)(t.code,{children:"/mnt/user"}),". This includes the files on the main array and also any for the share on any pool. A user share is a logical view imposed on top of the underlying physical file system so you can see the same files if you look at the physical level, as described for ",(0,s.jsx)(t.a,{href:"/unraid-docs/unraid-os/manual/shares/disk-shares",children:"Disk Shares"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that current releases of Unraid also include the mount point ",(0,s.jsx)(t.code,{children:"/mnt/user0"})," that shows the files in ",(0,s.jsx)(t.strong,{children:"User Shares"})," omitting any files for a share that are on any pool. This is a different view of the files on your server. However, this mount point is now deprecated and may stop being available in a future Unraid release."]}),"\n",(0,s.jsxs)(t.p,{children:["The physical drive in the main array, used to store a physical file, is controlled by a number of settings for the share, including the ",(0,s.jsx)(t.a,{href:"#allocation-method",children:"allocation method"}),", ",(0,s.jsx)(t.a,{href:"#included-or-excluded-disks",children:"included or excluded disks"}),", and the ",(0,s.jsx)(t.a,{href:"#split-level",children:"split level"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"If you change the settings for an existing share, the changes only affect where new files are put after the new settings are applied. Any files already present in the share are left where they are. To move existing files takes manual action."}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:"There is a quirk of the interaction between Linux and the Unraid user share system that users can encounter if they are working at the disk share level. The Linux command for 'move' is implemented by first trying a rename on the file (which is faster) and only if that fails does it do a copy-and-delete operation."}),(0,s.jsx)(t.p,{children:"This can mean when you try to move files from one user share to another from the command line, Linux will often simply rename the files so they have a different path on the same disk, in violation of any user share settings such as included disks. The workaround for this is to instead explicitly copy from source to destination so that new files get created following the user share settings, then deleting from the source."})]}),"\n",(0,s.jsx)(t.h2,{id:"share-settings",children:"Share settings"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["When you configure the settings for the share, select the ",(0,s.jsx)(t.strong,{children:"Help"})," icon in the top-right of the Unraid WebGUI for detailed information on the individual settings."]})}),"\n",(0,s.jsx)(t.h3,{id:"minimum-free-space",children:"Minimum free space"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Minimum free space"})," setting is used with the ",(0,s.jsx)(t.a,{href:"#allocation-method",children:"allocation method"})," and ",(0,s.jsx)(t.a,{href:"#split-level",children:"split level"}),". This setting controls how much space must be free for a drive to be chosen for a new file. If the condition is met, Unraid stops putting new data onto the disk (as long as the Split Level setting indicates it can be split to a new disk)."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This parameter must be used when the fill-up allocation method is configured, or disk full errors will occur when there isn't enough space to fit a file you are trying to write."})}),"\n",(0,s.jsxs)(t.p,{children:["When Unraid receives a request to store a file, say for example ",(0,s.jsx)(t.code,{children:"file.eg"}),", it has no idea how big the file is. Unraid will pick a spot to place it and begin to store the file data as the data is transferred over the network. Now, this may result in Unraid picking a storage disk with insufficient storage space for the complete file. Unraid is unaware there isn't enough space when it first places the file so it will only find out when the disk is full. At this point, the transfer will fail with a 'disk full' error. So, Unraid will write to a different disk if the minimum free space is set to a value larger than the biggest file size you will ever transfer."]}),"\n",(0,s.jsx)(t.p,{children:"We recommend setting the value to twice the size of the largest file you will ever transfer. For example, if the largest file you have is 8GB in size then set the minimum free space to 16GB. This allows you to transfer files that may vary in size somewhat and not accidentally transfer one too large."}),"\n",(0,s.jsxs)(t.p,{children:["The minimum free space is set in kilobytes (KB), megabytes (MB), gigabytes (GB), or terabytes (TB). Enter the value and units without any spaces. For example, if you want to set the value at 50 Gigabytes, enter ",(0,s.jsx)(t.em,{children:"50GB"}),". Note that new user shares will have a default 10% minimum free space assignment."]}),"\n",(0,s.jsxs)(t.p,{children:["Unraid will still place files on the disk if the ",(0,s.jsx)(t.a,{href:"#split-level",children:"split level"})," does not allow the files to be placed on another disk with more free space. Note that Unraid will typically not move a file onto a new disk if you're overwriting or updating it. For example, a backup file that grows in size over time could end up filling a disk and causing a disk full error."]}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsxs)(t.p,{children:["There is also a ",(0,s.jsx)(t.strong,{children:"Minimum Free Space"})," setting for cache pools. This is used to determine if a new file for a user share, with the ",(0,s.jsx)(t.strong,{children:"Use Cache"})," setting of ",(0,s.jsx)(t.em,{children:"Yes"})," or ",(0,s.jsx)(t.em,{children:"Prefer"}),", should be written to the\ncache or, instead, bypass the cache and go directly to the array."]}),(0,s.jsx)(t.p,{children:"This needs to be set if you want to avoid filling a cache pool which can cause problems. As for this value when used with a User Share it should be larger than the largest file you intend to write, and some people like to make it significantly larger. You get to this setting by clicking on a pool on the Main tab."})]}),"\n",(0,s.jsx)(t.h3,{id:"primary-and-secondary-storage-unraid-612",children:"Primary and Secondary storage (Unraid 6.12)"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Primary storage"})," parameter defines the location - ",(0,s.jsx)(t.em,{children:"Cache"}),", ",(0,s.jsx)(t.em,{children:"Array"}),", or any named pool - to which new files will be written for the selected share. The ",(0,s.jsx)(t.strong,{children:"Secondary storage"})," parameter sets the location where files will be moved to if there is not enough room in primary storage."]}),"\n",(0,s.jsxs)(t.p,{children:["When primary storage is below the ",(0,s.jsx)(t.a,{href:"#minimum-free-space",children:"Minimum Free Space"})," value, new files and folders are created in secondary storage."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If you select an ",(0,s.jsx)(t.em,{children:"array"})," or any named pool for your primary or secondary storage, you must also configure its allocation method, split level, and any included or excluded disks."]})}),"\n",(0,s.jsx)(t.p,{children:"Unraid 6.12 introduces new terminology to make it clearer to users where files are initially placed, and where they will end up. The same functionality is present in earlier releases, but has often been misunderstood by new users."}),"\n",(0,s.jsxs)(t.p,{children:["For the ",(0,s.jsx)(t.strong,{children:"Primary storage"})," drop-down:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["This setting is mandatory. You must select a primary storage device or pool. Primary storage has a default value of ",(0,s.jsx)(t.em,{children:"Cache"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"any named pool can be selected."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"Array"})," can be selected."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For the ",(0,s.jsx)(t.strong,{children:"Secondary storage"})," drop-down:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"None"}),": This means that there is no secondary storage set for this share. Note that secondary storage is optional.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["if Primary storage is a pool name, then the only options are ",(0,s.jsx)(t.em,{children:"None"})," and ",(0,s.jsx)(t.em,{children:"Array"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["if Primary storage is ",(0,s.jsx)(t.em,{children:"Array"}),", then only ",(0,s.jsx)(t.em,{children:"None"})," appears as an option."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"use-cache-and-mover-behavior-with-user-shares-unraid-611-and-earlier",children:"Use Cache and mover behavior with user shares (Unraid 6.11 and earlier)"}),"\n",(0,s.jsx)(t.p,{children:"The following settings are only found in Unraid 6.11 and earlier. They achieve the same functionality as the settings available in 6.12 but are presented differently."}),"\n",(0,s.jsx)(t.admonition,{title:"INFO",type:"note",children:(0,s.jsx)(t.p,{children:"Starting with Unraid 6.9, multiple pools can exist and they can have any name you choose. Any of these pools can act as a cache in the way Unraid uses the term. The word cache therefore is referring to this functionality and not necessarily to the pool name."})}),"\n",(0,s.jsxs)(t.p,{children:["Unraid includes an application called ",(0,s.jsx)(t.strong,{children:"Mover"})," that is used in conjunction with user shares. It's behavior is controlled by the ",(0,s.jsx)(t.strong,{children:"Use Cache for new files"})," setting under each user share. The way these settings operate is as follows:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Yes"}),": Write new files to the cache as long as the free space on the cache is above the ",(0,s.jsx)(t.strong,{children:"Minimum free space"})," value. If the free space is below that then bypass the cache and write the files directly to the main array."]}),"\n",(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.strong,{children:"Mover"})," runs it will attempt to move files to the main array as long as they are not currently open. Which array drive will get the file is controlled by the combination of the ",(0,s.jsx)(t.strong,{children:"Allocation Method"}),", ",(0,s.jsx)(t.strong,{children:"Split Level"}),", and ",(0,s.jsx)(t.strong,{children:"Minimum Free Space"})," setting for the share."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"No"}),": Write new files directly to the array. Which array drive will get the file is controlled by the combination of the ",(0,s.jsx)(t.strong,{children:"Allocation method"}),", ",(0,s.jsx)(t.strong,{children:"Split level"}),", and ",(0,s.jsx)(t.strong,{children:"Minimum Free Space"})," setting for the share."]}),"\n",(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.strong,{children:"Mover"})," runs it will take no action on files for this share even if there are files on the cache that logically belong to this share."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Only"}),": Write new files directly to the cache. If the free space on the cache is below the ",(0,s.jsx)(t.strong,{children:"Minimum free space"})," setting for the cache then the write will fail with an out-of-space error."]}),"\n",(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.strong,{children:"Mover"})," runs it will take no action on files for this share even if there are files on the main array that logically belong to this share."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Prefer"}),": Write new files to the cache if the free space on the cache is above the ",(0,s.jsx)(t.strong,{children:"Minimum free space"})," setting for the share, and if the free space falls below that value then write the files to the main array instead."]}),"\n",(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.strong,{children:"Mover"})," runs it will attempt to move any files for this share that are on the main array back to the cache as long as the free space on the cache is above the ",(0,s.jsx)(t.em,{children:"Minimum free space"})," setting for the cache"]}),"\n",(0,s.jsxs)(t.p,{children:["It is the default setting for the ",(0,s.jsx)(t.code,{children:"appdata"})," and ",(0,s.jsx)(t.code,{children:"system"})," shares that support the Docker and VM subsystems. Generally, you want the files/folders belonging to these shares to reside on the cache as it provides better performance for Docker containers and VMs if their files are not on the main array. This is due to the performance overhead of maintaining parity on the main array which slows down write operations."]}),"\n",(0,s.jsxs)(t.p,{children:["This setting works for a share even if you do not (yet) have a physical cache drive(s) as files will be written directly to the array. If at a later date you add a cache drive, ",(0,s.jsx)(t.strong,{children:"Mover"})," will automatically try and move the files in any share set to ",(0,s.jsx)(t.em,{children:"Prefer"})," to the pool defined as the cache for the share. This is why ",(0,s.jsx)(t.em,{children:"Prefer"})," is the default for shares that are located on the cache rather than ",(0,s.jsx)(t.em,{children:"Only"})," as it caters to those who do not (yet) have a cache drive."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"moving-files-from-a-pool-cache-to-the-array",children:"Moving Files from a Pool (cache) to the Array"}),"\n",(0,s.jsx)(t.p,{children:"This is the more traditional usage of a pool for caching where you want the files for a particular share initially written to a pool that acts as a cache to maximize write speed, but later you want it to be moved to the main array for long term storage."}),"\n",(0,s.jsx)(t.p,{children:"Sometimes, however, you may find that the files seem to be 'stuck' in a pool. In this situation, the way to get the files belonging to a share from a pool onto the main array is:"}),"\n","\n",(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(a.Z,{value:"6.12",label:"Unraid 6.12",default:!0,children:(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["Make sure that ",(0,s.jsx)("b",{children:"Primary Storage"})," is set to ",(0,s.jsx)("i",{children:"Cache"})," and ",(0,s.jsx)("b",{children:"Secondary Storage"})," is set to ",(0,s.jsx)("i",{children:"Array"}),", for any shares you want to move files from."]}),(0,s.jsxs)("li",{children:["Set the ",(0,s.jsx)("b",{children:"Mover action"})," field to ",(0,s.jsx)("i",{children:"Cache -> Array"}),"."]}),(0,s.jsx)("li",{children:"Disable Docker and VM services, if they are enabled, as files open in these services cannot be moved."}),(0,s.jsxs)("li",{children:["Go to ",(0,s.jsx)("b",{children:(0,s.jsx)("i",{children:"Main > Array Operation"})}),", and select ",(0,s.jsx)("b",{children:"Move"})," to manually move files from the pool (cache) to the array."]}),(0,s.jsx)("li",{children:"When mover finishes, you can re-enable the Docker and/or VMs services you use if you disabled them earlier."})]})}),(0,s.jsx)(a.Z,{value:"6.11",label:"Unraid 6.11 or below",children:(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"Disable any Docker and VM services, if they are enabled (as files open in these services cannot be moved)."}),(0,s.jsxs)("li",{children:["Change the Use Cache setting for the share to ",(0,s.jsx)("i",{children:"Yes"}),"."]}),(0,s.jsxs)("li",{children:["Go to ",(0,s.jsx)("b",{children:(0,s.jsx)("i",{children:"Main > Array Operation"})}),", and select ",(0,s.jsx)("b",{children:"Move"})," to manually move files from the pool (cache) to the array."]}),(0,s.jsx)("li",{children:"When mover finishes, you can re-enable the Docker and/or VMs services you use if you disabled them earlier."}),(0,s.jsxs)("li",{children:["Change the ",(0,s.jsx)("b",{children:"Use Cache"})," setting to ",(0,s.jsx)("i",{children:"Only"})," to say files for this share can never be written to the array."]})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"moving-files-from-the-array-to-a-pool-cache",children:"Moving Files from the Array to a Pool (cache)"}),"\n",(0,s.jsxs)(t.p,{children:["You typically want files associated with running Docker containers or VMs on a pool to maximize performance. It is not unusual, for one reason or another, to find that you have files on the main array which you really want to have in a pool. In particular, this is likely to happen for the ",(0,s.jsx)(t.code,{children:"appdata"})," or default system shares."]}),"\n",(0,s.jsx)(t.p,{children:"The way to proceed to get the files belonging to a share from the main array onto a pool is:"}),"\n",(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(a.Z,{value:"6.12",label:"Unraid 6.12",default:!0,children:(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["Make sure that ",(0,s.jsx)("b",{children:"Primary Storage"})," is set to ",(0,s.jsx)("i",{children:"Cache"})," and ",(0,s.jsx)("b",{children:"Secondary Storage"})," is set to ",(0,s.jsx)("i",{children:"Array"}),", for any shares you want to move files from."]}),(0,s.jsxs)("li",{children:["Set the ",(0,s.jsx)("b",{children:"Mover action"})," field to ",(0,s.jsx)("i",{children:"Array -> Cache"}),"."]}),(0,s.jsx)("li",{children:"Disable any Docker and VM services, if they are enabled, as files open in these services cannot be moved."}),(0,s.jsxs)("li",{children:["Go to ",(0,s.jsx)("b",{children:(0,s.jsx)("i",{children:"Main > Array Operation"})}),", and select ",(0,s.jsx)("b",{children:"Move"})," to manually move files from the array to the pool (cache)."]}),(0,s.jsx)("li",{children:"When mover finishes, you can re-enable the Docker and/or VMs services you use if you disabled them earlier."})]})}),(0,s.jsx)(a.Z,{value:"6.11",label:"Unraid 6.11 or below",children:(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"Disable any Docker and VM services if they are enabled (as files open in these services cannot be moved)."}),(0,s.jsxs)("li",{children:["Change the ",(0,s.jsx)("b",{children:"Use Cache"})," setting for the share to ",(0,s.jsx)("i",{children:"Prefer"}),"."]}),(0,s.jsxs)("li",{children:["Go to ",(0,s.jsx)("b",{children:(0,s.jsx)("i",{children:"Main > Array Operation"})}),", and select ",(0,s.jsx)("b",{children:"Move"})," to manually move files from the array to the pool (cache)."]}),(0,s.jsx)("li",{children:"When mover finishes, you can re-enable the Docker and/or VMs services you use if you disabled them earlier."}),(0,s.jsxs)("li",{children:["Change the ",(0,s.jsx)("b",{children:"Use Cache"})," setting to ",(0,s.jsx)("i",{children:"No"})," to say files for this share can never be written to the array."]})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"allocation-method",children:"Allocation method"}),"\n",(0,s.jsx)(t.p,{children:"When you create a new user share, or when any object (file or directory) is created within a user share, the system must determine which data disk the user share or object will be stored on. In general, a new user\nshare, or object within a user share, is created on the data disk with the most free space. However, there are a set of configuration parameters available to fine-tune disk allocation."}),"\n",(0,s.jsxs)(t.p,{children:["The basic allocation strategy for a share is defined by its allocation method configuration parameter. You may select one of three allocation methods for the system to use: ",(0,s.jsx)(t.strong,{children:"High-water"}),", ",(0,s.jsx)(t.strong,{children:"Most-free"}),", or ",(0,s.jsx)(t.strong,{children:"Fill-up"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"high-water-method",children:"High-water method"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"High-water"})," setting works with switch points based on continually halving the size of the largest drive in the array. It does multiple passes to fill each disk so at the end of each step there is equal free space left on each disk. This progressively fills each disk but without constantly going back and forth between disks each time new data is written. Most times, only a single disk will be needed when writing a series of files to the array so the array will only spin-up the needed disk. The high-water level is initially set equal to one-half of the size of the largest disk. A new high water level is again set to one-half of the previous high level once all the disks have less free space than the current high water level."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Example",type:"important",children:[(0,s.jsx)(t.p,{children:"If you have an array that consists of drives of 8 TB, 3 TB and 2 TB, the largest drive is the one that sets the switch points at 4 TB, 2 TB, 1 TB, and so on, halving the amount in each pass."}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"While the 4 TB switch point is active the 8 TB drive one is filled to 4 TB free space left."}),"\n",(0,s.jsx)(t.li,{children:"When the 2 TB switch point becomes active, the 8 TB and 3 TB drives each get used in disk order until they have 2 TB free space"}),"\n",(0,s.jsx)(t.li,{children:"Finally, the 1 TB switch point becomes active, so each drive now gets used in disk order until there is only 1 TB free space."}),"\n"]}),(0,s.jsx)(t.p,{children:"This pattern continues with progressively smaller high-water levels until the disks are full."})]}),"\n",(0,s.jsx)(t.h4,{id:"fill-up-method",children:"Fill-up method"}),"\n",(0,s.jsx)(t.p,{children:"The fill-up allocation method attempts to fill each disk in order from the lowest numbered disk to the highest numbered disk. The fill-up allocation method must be used in conjunction with the minimum free\nspace setting. Otherwise, Unraid will begin to give disk full errors and not allow any more transfers once the first disk gets close to being full."}),"\n",(0,s.jsx)(t.h4,{id:"most-free-method",children:"Most-free method"}),"\n",(0,s.jsx)(t.p,{children:"The most free allocation method picks the disk with the most free space and writes the data to that disk. Each time a file is written Unraid will check the free space on the included disks and pick the one with the\nmost free space."}),"\n",(0,s.jsx)(t.h3,{id:"split-level",children:"Split level"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Split level"})," setting tells Unraid how many folder levels are allowed to be created on multiple disks. The split level can be used to ensure that the contents of a folder are kept on the same disk. The split level\nnumbering starts with the user share being the top level and given the number 1."]}),"\n",(0,s.jsx)(t.h4,{id:"automatically-split-any-directory-as-required",children:"Automatically split any directory as required"}),"\n",(0,s.jsxs)(t.p,{children:["When a new file or subdirectory is created in a share, Unraid OS first chooses which disk it is created on, according to the configured ",(0,s.jsx)(t.a,{href:"#allocation-method",children:"Allocation method"}),". If the parent directory containing the new file or subdirectory does not exist on this disk, then Unraid OS will first create all necessary parent directories, and then create the new file or subdirectory."]}),"\n",(0,s.jsx)(t.h4,{id:"automatically-split-only-the-top-level-directory-as-required",children:"Automatically split only the top level directory as required"}),"\n",(0,s.jsx)(t.p,{children:"When a new file or subdirectory is being created in the first level subdirectory of a share, if that first level subdirectory does not exist on the disk being written, then the subdirectory will be created first. If a new file or subdirectory is being created in the second or lower level subdirectory of a share, the new file or subdirectory is created on the same disk as the new file or subdirectory's parent directory."}),"\n",(0,s.jsx)(t.h4,{id:"automatically-split-only-the-top-n-level-directories-as-required",children:'Automatically split only the top "N" level directories as required'}),"\n",(0,s.jsx)(t.p,{children:'Similar to the previous option. When a new file or subdirectory is being created, if the parent directory is at level "N", and does not exist on the chosen disk, Unraid OS will first create all necessary parent directories. If the parent directory of the new file or subdirectory is beyond level "N", then the new file or subdirectory is created on the same disk where the parent directory exists.'}),"\n",(0,s.jsx)(t.h4,{id:"manual---do-not-automatically-split-directories",children:"Manual - do not automatically split directories"}),"\n",(0,s.jsx)(t.p,{children:"When a new file or subdirectory needs to be created in a share, Unraid OS will only consider disks where the parent directory already exists."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["In the event of there being conflicts between the ",(0,s.jsx)(t.strong,{children:"Minimum free space"}),", ",(0,s.jsx)(t.strong,{children:"Split Level"})," and the ",(0,s.jsx)(t.strong,{children:"Allocation method"})," settings in deciding which would be an appropriate drive to use, the ",(0,s.jsx)(t.strong,{children:"Split level"})," setting always wins. This means that you can get an out-of-space error even though there is plenty of space on other array drives that the share can logically use."]})}),"\n",(0,s.jsx)(t.h3,{id:"included-or-excluded-disks",children:"Included or excluded disks"}),"\n",(0,s.jsxs)(t.p,{children:["These settings allow you to control which array drives can hold files for the share. Never set both values, set only the one that is most convenient for you. If no drives are specified under these settings then all drives allowed under ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Settings > Global Share settings"})})," are allowed."]}),"\n",(0,s.jsx)(t.p,{children:"Unraid will first check the included disks(s) set and then the excluded disk(s) set when deciding which disk to place a file on. Then, it will use the split level and allocation method to pick a disk which is allowed to hold the file."}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsx)(t.p,{children:"The include/exclude settings at the individual share level only control which disks new files can be written to. Files on other disks that are in a folder corresponding to the share name will still show up under that share for read purposes."})}),"\n",(0,s.jsx)(t.h4,{id:"included-disks",children:"Included disk(s)"}),"\n",(0,s.jsx)(t.p,{children:'The included disks(s) parameter defines the set of disks which are candidates for allocation to that share. All disks may be used by the user share when the Included disk(s) parameter is left blank. Specify the disks to include here. For example, set the included disk(s) to "disk1,disk2,disk3" to allow the share to only use disk1, disk2 and disk3.'}),"\n",(0,s.jsx)(t.h4,{id:"excluded-disks",children:"Excluded disk(s)"}),"\n",(0,s.jsx)(t.p,{children:'The excluded disk(s) parameter defines the set of disks which are excluded from use by the user share. No disks are excluded from use by the user share when the excluded disk(s) parameter is left blank. Specify the disks to exclude here. For example, set the excluded disk(s) to "disk1,disk2" to restrict a share from using disk1 and disk2.'}),"\n",(0,s.jsx)(t.h3,{id:"default-shares",children:"Default Shares"}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.a,{href:"/unraid-docs/unraid-os/manual/docker-management",children:"Docker"})," or ",(0,s.jsx)(t.a,{href:"/unraid-docs/unraid-os/manual/vm/vm-support",children:"VMs"})," are enabled then, Unraid automatically sets up a number of default shares to support their use. You are not required to use these shares, and the system will let you remove them if you do not want to use them for their standard purpose. However, we recommend their use, as it makes it easier to support users who encounter problems."]}),"\n",(0,s.jsx)(t.p,{children:"The shares that fall into this category are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"appdata"})," - This is the default location for storing working files associated with docker containers. Typically there will be a sub-folder for each docker container."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"system"})," - This is the default location for storing the docker application binaries, and VM XML templates"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"domains"})," - This is the default location for storing virtual disk images (vdisks) that are used by VMs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"isos"})," - This is the default location for storing CD ISO images for use with VMs."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["We do not recommend changing the permissions on most default shares, as these may impact the functioning of docker containers and VMs. The exception is the ",(0,s.jsx)(t.code,{children:"isos"})," share that can be shared over the network so you can place new ISOs to use in virtual machines."]})})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},425:(e,t,i)=>{i.d(t,{Z:()=>a});i(7294);var s=i(512);const r={tabItem:"tabItem_Ymn6"};var n=i(5893);function a(e){let{children:t,hidden:i,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,a),hidden:i,children:t})}},3992:(e,t,i)=>{i.d(t,{Z:()=>b});var s=i(7294),r=i(512),n=i(2957),a=i(6550),o=i(1270),l=i(5238),h=i(3609),d=i(1027);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:i}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:i,attributes:s,default:r}}=e;return{value:t,label:i,attributes:s,default:r}}))}(i);return function(e){const t=(0,h.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function f(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const r=(0,a.k6)(),n=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l._X)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function p(e){const{defaultValue:t,queryString:i=!1,groupId:r}=e,n=u(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[h,c]=m({queryString:i,groupId:r}),[p,y]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,d.Nk)(i);return[r,(0,s.useCallback)((e=>{i&&n.set(e)}),[i,n])]}({groupId:r}),x=(()=>{const e=h??p;return f({value:e,tabValues:n})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),y(e)}),[c,y,n]),tabValues:n}}var y=i(1048);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(5893);function g(e){let{className:t,block:i,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:h}=(0,n.o5)(),d=e=>{const t=e.currentTarget,i=l.indexOf(t),r=o[i].value;r!==s&&(h(t),a(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},t),children:o.map((e=>{let{value:t,label:i,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...n,className:(0,r.Z)("tabs__item",x.tabItem,n?.className,{"tabs__item--active":s===t}),children:i??t},t)}))})}function j(e){let{lazy:t,children:i,selectedValue:r}=e;const n=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function b(e){const t=(0,y.Z)();return(0,v.jsx)(w,{...e,children:c(e.children)},String(t))}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var s=i(7294);const r={},n=s.createContext(r);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);