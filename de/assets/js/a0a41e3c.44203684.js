"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[903],{7738:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var o=s(5893),i=s(1151);const n={sidebar_position:2},r="Capturing diagnostic information",a={id:"unraid-os/troubleshooting/diagnostics-information",title:"Capturing diagnostic information",description:"When you encounter any sort of problem it is always recommended that you attempt to capture as much information as possible to help with pinpointing the cause. If you want to ask questions in the forum such information will typically be requested as it will speed up the process of getting meaningful and accurate feedback.",source:"@site/docs/unraid-os/troubleshooting/diagnostics-information.md",sourceDirName:"unraid-os/troubleshooting",slug:"/unraid-os/troubleshooting/diagnostics-information",permalink:"/de/unraid-os/troubleshooting/diagnostics-information",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/troubleshooting/diagnostics-information.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"unraidSidebar",previous:{title:"Troubleshooting",permalink:"/de/unraid-os/troubleshooting/"},next:{title:"Boot Issues",permalink:"/de/unraid-os/troubleshooting/boot-issues"}},l={},h=[{value:"System diagnostics",id:"system-diagnostics",level:2},{value:"Anonymization of diagnostic data",id:"anonymization-of-diagnostic-data",level:3},{value:"Persistent logs (Syslog server)",id:"persistent-logs-syslog-server",level:2},{value:"Enabling the syslog server",id:"enabling-the-syslog-server",level:3},{value:"Logging to file local to Unraid server Using a bit of trickery",id:"logging-to-file-local-to-unraid-server-using-a-bit-of-trickery",level:3},{value:"Docker containers and virtual machines",id:"docker-containers-and-virtual-machines",level:2}];function d(e){const t={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"capturing-diagnostic-information",children:"Capturing diagnostic information"}),"\n",(0,o.jsx)(t.p,{children:"When you encounter any sort of problem it is always recommended that you attempt to capture as much information as possible to help with pinpointing the cause. If you want to ask questions in the forum such information will typically be requested as it will speed up the process of getting meaningful and accurate feedback."}),"\n",(0,o.jsx)(t.h2,{id:"system-diagnostics",children:"System diagnostics"}),"\n",(0,o.jsxs)(t.p,{children:["Unraid has a GUI option under ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Tools > Diagnostics"})})," to capture detailed information about the state of your system. This can be helpful when trying to diagnose any issues. Using this tool will result in a zip file being produced that can be downloaded and then attached to forum posts."]}),"\n",(0,o.jsxs)(t.p,{children:["If the WebGUI becomes unresponsive, then use SSH, telnet, or a keyboard/monitor attached to the server to login and type ",(0,o.jsx)(t.code,{children:"diagnostics"}),".  This will save the ",(0,o.jsx)(t.code,{children:"diagnostics.zip"})," file to the ",(0,o.jsx)(t.code,{children:"/boot/logs"})," folder on your flash drive."]}),"\n",(0,o.jsx)(t.p,{children:"The Diagnostics should, if possible, cover the period when the problem occurred and be captured BEFORE you reboot (logs are reset on a reboot) so that the logs show what happened leading up to the problem occurring. You can then attach the diagnostics zip file to a forum post when asking for help on a problem in the Unraid forums. It is preferred that you attach them to a new post if you have already started a thread on your issue so that other forum users are notified that there has been something added to the thread."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Diagnostics",src:s(118).Z+"",width:"1679",height:"847"})}),"\n",(0,o.jsx)(t.p,{children:"These system diagnostics include configuration information, state information, and key system logs. When creating the diagnostics from the GUI then details of the sort of information that will be included are listed. There is an option (set by default) to say that the diagnostics should be anonymized to try and avoid including any information that might be deemed sensitive."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"All the files in the diagnostics are text files so a user is free to examine them to check for themselves exactly what information is present."})}),"\n",(0,o.jsx)(t.p,{children:"In most cases it is preferable that the diagnostics are captured after the array has been started in Normal mode as this gives the maximum information about the state of your Unraid system, in particular if any drives are having any problems. There will be times, however, when this is not possible, or you will be advised to capture the diagnostics in a different state as a result of feedback in a forum thread. It is still better to have some level of diagnostics rather than nothing."}),"\n",(0,o.jsx)(t.admonition,{type:"important",children:(0,o.jsx)(t.p,{children:"The diagnostics are a single zip file containing multiple files. If it seems to you that the diagnostics is a lot of files and folders, it is because your computer automatically opens zip files. Do not upload all those files individually to a forum post but instead find that single diagnostics zip file in your downloads and attach that single diagnostics zip file to your NEXT post in the relevant forum thread."})}),"\n",(0,o.jsx)(t.h3,{id:"anonymization-of-diagnostic-data",children:"Anonymization of diagnostic data"}),"\n",(0,o.jsxs)(t.p,{children:["While diagnostic data is anonymized, if you enable mover logging under ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Settings > Mover Settings"})}),", the syslog will give details of files that mover is operating on."]}),"\n",(0,o.jsx)(t.p,{children:"In this particular scenario, you have intentionally enabled mover logging to investigate a problem where it is beneficial to gather as much detail as possible, in order to resolve an issue."}),"\n",(0,o.jsx)(t.p,{children:"However, since mover logging is disabled by default, and the recommended practice is to only enable it when investigating why it is not giving the expected results, this is understood to be the exception and not the rule to normal Unraid privacy practice."}),"\n",(0,o.jsx)(t.h2,{id:"persistent-logs-syslog-server",children:"Persistent logs (Syslog server)"}),"\n",(0,o.jsx)(t.p,{children:"If you are investigating a system crash you can use the built-in syslog server support."}),"\n",(0,o.jsxs)(t.p,{children:["Logs are only written to RAM and are wiped when the system is rebooted. The main system log is the syslog file. The contents of this file display when you select the log ",(0,o.jsx)(t.img,{alt:"Log",src:s(4627).Z+"",width:"16",height:"16"})," icon at the top-right of the navigation bar."]}),"\n",(0,o.jsx)(t.admonition,{type:"important",children:(0,o.jsx)(t.p,{children:"When posting to the Unraid forums, avoid posting fragments of the syslog, as these do not provide the full picture of what led up to a problem."})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Syslog server screen",src:s(3444).Z+"",width:"1100",height:"285"})}),"\n",(0,o.jsx)(t.h3,{id:"enabling-the-syslog-server",children:"Enabling the syslog server"}),"\n",(0,o.jsxs)(t.p,{children:["To configure and enable the Syslog server go to ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Settings > Network Services > Syslog Server"})})," and set the ",(0,o.jsx)(t.strong,{children:"Local syslog server"})," to ",(0,o.jsx)(t.em,{children:"enabled"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Use the Help icon on the system toolbar to get comprehensive guidance on all the options."})}),"\n",(0,o.jsx)(t.p,{children:"You can configure the Syslog server operations in different ways:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Mirror to flash"}),". Select ",(0,o.jsx)(t.em,{children:"Yes"})," from the dropdown to mirror the syslog file to the ",(0,o.jsx)(t.code,{children:"/boot/logs"})," folder of the flash device. There is one main disadvantage to this method: If the condition you are trying to troubleshoot takes days to weeks to occur, it can cause a lot of writes to the flash device and may shorten its lifespan."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The advantage of this approach is that it captures everything from the start of the boot process which can be important if trying to diagnose boot problems."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Remote syslog server"}),(0,o.jsx)(t.br,{}),"\n","This is used when you have another machine on your network that is acting as a syslog server. This can be another Unraid server. You can also use virtually any other computer. You find the necessary software by googling for the syslog server of that computer's operating system. After you have set up the computer/server, you fill in the computer/server name or the IP address. (I prefer to use the IP address as there is never any confusion about what it is.) Then click on the 'Apply' button and your syslog will be mirrored to the other computer."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The other computer has to be left on continuously until the problem occurs.\nThe events captured will only start with the point at which the syslog daemon is started during the boot process thus missing the very start of the boot process."}),"\n",(0,o.jsxs)(t.p,{children:["If you select ",(0,o.jsx)(t.strong,{children:"Apply"})," at this point, you will have this server setup to serve as a Remote Syslog Server. It can now capture syslogs from several computers if the need should arise."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Syslog server",src:s(5367).Z+"",width:"867",height:"275"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Local Syslog Server"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Set this to ",(0,o.jsx)(t.strong,{children:"Enabled"})," to setup this Unraid server to act as a network syslog server. When this is enabled then some extra options are offered. The built-in Help gives guidance /n suitable settings."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Local syslog folder"}),": This will be a share on your server but chose it with care. Ideally, it will be a 'cache only' or a 'cache preferred' share. This will minimize the spinning up of disks due to the continuous writing of new lines to the syslog. A cache SSD drive would be the ideal choice here using a 'cache preferred' share. The syslog will be in the root of that folder/share."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Local syslog rotation"}),": These settings allow you to control how much space the syslog is allowed to use.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Local syslog maximum file size"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Local syslog number of files"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.strong,{children:"Apply"})," to complete the server setup."]}),"\n",(0,o.jsx)(t.h3,{id:"logging-to-file-local-to-unraid-server-using-a-bit-of-trickery",children:"Logging to file local to Unraid server Using a bit of trickery"}),"\n",(0,o.jsx)(t.p,{children:"we can use the Unraid server with the problem as the Local syslog server. This is appropriate if you want to continue to keep a permanent copy of the syslog but the file will not be as easy to access if the Unraid system is crashing. It also has the advantage of avoiding lots of writes to the flash drive. To achieve this you now add the IP address of this server as the Remote syslog server (Remember the mention of trickery). So basically, you send data out-of-the-server and it comes-right-back-in."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The standard system diagnostics include the RAM copy of the ",(0,o.jsx)(t.code,{children:"syslog"})," so there is no need to provide this separately. You will need to do so to provide the logs captured by the syslog server as these are not included in the standard system diagnostics."]})}),"\n",(0,o.jsx)(t.h2,{id:"docker-containers-and-virtual-machines",children:"Docker containers and virtual machines"}),"\n",(0,o.jsx)(t.p,{children:"The standard system diagnostics do not contain much that will help with diagnosing issues with docker containers and VMs. These may have their own system logging feature and you must refer to their own documentation for information on how to access them."})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},118:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/Diagnostics-63dbf449f2b45a4c69d509099b31dfb2.jpg"},4627:(e,t,s)=>{s.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEX///+Hh4eHh4eHh4eHh4eMjIyWlpalpaWnp6esrKyzs7O2trbIyMjR2uXS2+bS3OfU3ujV3+nW3+rg4ODr6+vu7u7w8PDz8/P29vb4+Pj6+vr7+/v9/f3+/v7///+81dMvAAAABHRSTlMAUM/vo/h8QgAAAFtJREFUGNOdykcSgCAQAMFVMWIAxUBw//9M0YXCgyf7ODUAwF9a8DgeaAwa9EoKCfsOc/L/kFE4ThedFKSIJAWrI0tBTME4UNAbWRdFwdmH2VVf3KFralKxPIML/KAP+VIW23YAAAAASUVORK5CYII="},3444:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/Syslog-server-setup-a80b97d7a9b4847daa8323687f570e30.jpg"},5367:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/Syslog-server-b166cf9ccef13716f0535c491ff164f2.jpg"},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var o=s(7294);const i={},n=o.createContext(i);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);