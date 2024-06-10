"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5069],{3474:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=i(5893),s=i(1151);const a={},o="Tools",r={id:"unraid-os/manual/tools",title:"Tools",description:"THIS SECTION IS STILL UNDER CONSTRUCTION",source:"@site/docs/unraid-os/manual/tools.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/tools",permalink:"/de/unraid-os/manual/tools",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/tools.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Changing the flash device",permalink:"/de/unraid-os/manual/changing-the-flash-device"},next:{title:"Upgrading Unraid",permalink:"/de/unraid-os/manual/upgrade-instructions"}},l={},d=[{value:"Unraid Standard Tools",id:"unraid-standard-tools",level:2},{value:"Unraid OS",id:"unraid-os",level:3},{value:"Diagnostics",id:"diagnostics",level:4},{value:"Hardware Profile",id:"hardware-profile",level:4},{value:"New Config",id:"new-config",level:4},{value:"New Permissions",id:"new-permissions",level:4},{value:"Archived Notifications",id:"archived-notifications",level:4},{value:"Processes",id:"processes",level:4},{value:"System Devices",id:"system-devices",level:4},{value:"System Log",id:"system-log",level:4},{value:"WebGUI",id:"webgui",level:3},{value:"Language",id:"language",level:4},{value:"Page Map",id:"page-map",level:4},{value:"Vars",id:"vars",level:4},{value:"About",id:"about",level:3},{value:"Credits",id:"credits",level:4},{value:"EULA",id:"eula",level:4},{value:"Registration",id:"registration",level:4},{value:"Update OS",id:"update-os",level:4},{value:"3rd Party Tools",id:"3rd-party-tools",level:2},{value:"Unraid OS",id:"unraid-os-1",level:3},{value:"Config File Editor",id:"config-file-editor",level:4},{value:"Docker Safe New Perms",id:"docker-safe-new-perms",level:4},{value:"About",id:"about-1",level:3},{value:"Update Assistant",id:"update-assistant",level:4}];function h(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tools",children:"Tools"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"THIS SECTION IS STILL UNDER CONSTRUCTION"})}),"\n",(0,t.jsx)(n.p,{children:"The Tools section of the Unraid GUI is used to access a number of Tools\nto help with managing an Unraid server on a day-to-day basis. The list\nof tools available is often extended by 3rd party supplied plugins."}),"\n",(0,t.jsx)(n.h2,{id:"unraid-standard-tools",children:"Unraid Standard Tools"}),"\n",(0,t.jsx)(n.p,{children:"This section covers tools that are supplied as standard with an Unraid\ninstallation. They are grouped into a number of sections for ease of\nselection."}),"\n",(0,t.jsx)(n.h3,{id:"unraid-os",children:"Unraid OS"}),"\n",(0,t.jsx)(n.h4,{id:"diagnostics",children:"Diagnostics"}),"\n",(0,t.jsx)(n.h4,{id:"hardware-profile",children:"Hardware Profile"}),"\n",(0,t.jsx)(n.h4,{id:"new-config",children:"New Config"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT:"})," ",(0,t.jsx)(n.em,{children:"This tool is not part of the standard process for\nrecovering from a disk failure. In most cases since the procedure\nnormally invalidates parity it will have the opposite effect and stop\nyou being able to recover the contents of a failed disk intact."})]}),"\n",(0,t.jsx)(n.p,{children:"This option is used to put the array back into a state where disk drives\ncan be assigned as wanted and then parity rebuilt to match the new\nassignments. It exploits the fact that Unraid can recognise drives that\nhave previously been used by Unraid and will leave their contents\nuntouched (as long as the drive is not assigned as a parity drive)."}),"\n",(0,t.jsx)(n.p,{children:"When using this option you are given the option to preserve previous\nassignments at various levels. It is not important which you use but\nusing one can minimise the amount of re-selecting drives to specific\nslots (and thus reduce the chance of you making an error) by selecting\none of them. After you have run this option you can then return to the\nMain tab and make any further adjustments you want. The assignments then\nget committed when you start the array."}),"\n",(0,t.jsx)(n.p,{children:"The basic process is therefore:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select the New Config tool from the Tools tab in the Unraid GUI"}),"\n",(0,t.jsx)(n.li,{children:"Click the Check box that says you want to proceed to use this tool."}),"\n",(0,t.jsx)(n.li,{children:"Set the level of assignments you initially want to keep. In most\ncases selecting the option to keep all assignments is the best\nchoice as it puts you in a state where you just need make any\ndesired changes from your current assignments."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Press the ",(0,t.jsx)(n.strong,{children:"Apply"})," button to run the tool. After doing this there is no\nobvious feedback that anything has been done."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Return to the Main tab and change the drive assignments to how you\nnow want them to be set. This can involve adding new drives,\nremoving drives or changing the slots to which drives are assigned."}),"\n",(0,t.jsx)(n.li,{children:"Make sure you have not accidentally assigned a drive containing data\nto a parity slot as if you do so when you start the array the\ncontents will be destroyed."}),"\n",(0,t.jsxs)(n.li,{children:["There is a checkbox next to the Start button to allow you to say\nthat parity is already valid. You should ",(0,t.jsx)(n.strong,{children:"not"})," check this box\nunless advised to do so by a knowledgeable Unraid user as in most\ncases making changes to the drive assignments will invalidate\nparity. There are special cases where using this option can be\nsensible after something has gone wrong with the array but only the\nmore experienced Unraid users will know what these are."]}),"\n",(0,t.jsx)(n.li,{children:"There is also a checkbox option to start the array in Maintenance\nmode. You probably only need this if you have been advised to use it\nas part of a non-standard data recovery action."}),"\n",(0,t.jsx)(n.li,{children:"Press the Start button to commit the new drive assignments."}),"\n",(0,t.jsx)(n.li,{children:"If you have encrypted file systems the array will not start at this\npoint, but instead change to allow you to enter your encryption\ndetails. Enter these and press Start again to start the array."}),"\n",(0,t.jsx)(n.li,{children:"If you were starting in normal mode (i.e. not Maintenance mode) then\nthe drives will now be mounted."}),"\n",(0,t.jsx)(n.li,{children:"Unraid will now start building new parity based on this current set\nof assignments."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"new-permissions",children:"New Permissions"}),"\n",(0,t.jsx)(n.h4,{id:"archived-notifications",children:"Archived Notifications"}),"\n",(0,t.jsx)(n.h4,{id:"processes",children:"Processes"}),"\n",(0,t.jsx)(n.h4,{id:"system-devices",children:"System Devices"}),"\n",(0,t.jsx)(n.h4,{id:"system-log",children:"System Log"}),"\n",(0,t.jsx)(n.h3,{id:"webgui",children:"WebGUI"}),"\n",(0,t.jsx)(n.h4,{id:"language",children:"Language"}),"\n",(0,t.jsx)(n.h4,{id:"page-map",children:"Page Map"}),"\n",(0,t.jsx)(n.h4,{id:"vars",children:"Vars"}),"\n",(0,t.jsx)(n.h3,{id:"about",children:"About"}),"\n",(0,t.jsx)(n.h4,{id:"credits",children:"Credits"}),"\n",(0,t.jsx)(n.h4,{id:"eula",children:"EULA"}),"\n",(0,t.jsx)(n.h4,{id:"registration",children:"Registration"}),"\n",(0,t.jsx)(n.h4,{id:"update-os",children:"Update OS"}),"\n",(0,t.jsx)(n.h2,{id:"3rd-party-tools",children:"3rd Party Tools"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DISCLAMER"}),": The tools listed here are not provided or supported by\nLimetech. There is always a risk that installing one of these tools can\ncause system instability (although it is unlikely for the more widely\nused ones)"]}),"\n",(0,t.jsx)(n.p,{children:"The Unraid community is very active and has contributed a wide variety\nof additional tools to add extra functionality to an Unraid server. The\nfollowing section covers some of the more commonly installed 3rd party\ntools. It is by no means an exhaustive list but will give an indication\nof the breadth of the tools available"}),"\n",(0,t.jsx)(n.p,{children:"These 3rd party tools would normally be installed by using Community\nApplications (the Apps tab). Such tools will each have a support thread\nin the Plugins Support section of the Unraid GUI and users should use\nthis thread to raise queries, concerns, or suggestions for improvement."}),"\n",(0,t.jsx)(n.h3,{id:"unraid-os-1",children:"Unraid OS"}),"\n",(0,t.jsx)(n.h4,{id:"config-file-editor",children:"Config File Editor"}),"\n",(0,t.jsx)(n.p,{children:"CA Config Editor is a simple file editor for advanced users that will\nallow you to edit within your browser any of the Unraid configuration\nfiles (or any file on your server - useful for easily editing\napplication's appdata config files without utilizing the command\nprompt)"}),"\n",(0,t.jsx)(n.h4,{id:"docker-safe-new-perms",children:"Docker Safe New Perms"}),"\n",(0,t.jsx)(n.p,{children:"This is part of the Fix Common Problems plugin."}),"\n",(0,t.jsx)(n.p,{children:"It differs from the standard Unraid New Permissions tool in that it will\nnever change permissions on the appdata folder/share that is normally\nused to store working files for docker containers."}),"\n",(0,t.jsx)(n.h3,{id:"about-1",children:"About"}),"\n",(0,t.jsx)(n.h4,{id:"update-assistant",children:"Update Assistant"})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(7294);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);