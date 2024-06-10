"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8255],{1330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const r={sidebar_position:8},s="Docker",a={id:"unraid-os/troubleshooting/docker",title:"Docker",description:"THIS SECTION IS STILL UNDER CONSTRUCTION",source:"@site/docs/unraid-os/troubleshooting/docker.md",sourceDirName:"unraid-os/troubleshooting",slug:"/unraid-os/troubleshooting/docker",permalink:"/es/unraid-os/troubleshooting/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/troubleshooting/docker.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"unraidSidebar",previous:{title:"Data Recovery",permalink:"/es/unraid-os/troubleshooting/data-recovery"},next:{title:"UDMA CRC Errors",permalink:"/es/unraid-os/troubleshooting/crc-errors"}},c={},l=[{value:"Docker Image Full",id:"docker-image-full",level:2},{value:"How do I move docker.img?",id:"how-do-i-move-dockerimg",level:2},{value:"How do I recreate docker.img?",id:"how-do-i-recreate-dockerimg",level:2},{value:"Restoring your Docker Applications",id:"restoring-your-docker-applications",level:2},{value:"Further Information",id:"further-information",level:2}];function h(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"docker",children:"Docker"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"THIS SECTION IS STILL UNDER CONSTRUCTION"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"A lot more detail still needs to be added"})}),"\n",(0,i.jsx)(n.h2,{id:"docker-image-full",children:"Docker Image Full"}),"\n",(0,i.jsxs)(n.p,{children:["Unraid expects docker containers to be configured so that only the\nbinaries for the container are held in the ",(0,i.jsx)(n.em,{children:"docker.img"})," file. All\nlocations within the container that write variable data are then\nexpected to be mapped to locations external to the docker.img file."]}),"\n",(0,i.jsxs)(n.p,{children:["The default size of 20GB is enough for all but the most demanding users\nso if you find that your ",(0,i.jsx)(n.em,{children:"docker.img"})," file is running out of space it\ndefinitely sounds as if you have at least one container incorrectly\nconfigured so it is writing internally to the docker image rather than\nto storage external to the image."]}),"\n",(0,i.jsx)(n.p,{children:"Common mistakes are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Leaving off the leading / on the container side of a path mapping so\nit is relative rather than absolute"}),"\n",(0,i.jsx)(n.li,{children:"Case mismatch on either side of a path mapping as Linux pathnames\nare case-significant."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you cannot spot the error then you can try:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Go to the docker tab and click the Container size button. often this\nwill highlight the problem docker container(s) so you now know where\nto look."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If that is not enough to identify the culprit then:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make sure all containers are stopped and not set to auto-start"}),"\n",(0,i.jsx)(n.li,{children:"Stop docker service"}),"\n",(0,i.jsx)(n.li,{children:"delete current docker image and set a more reasonable size (e.g.\n20G)"}),"\n",(0,i.jsx)(n.li,{children:"Start docker service"}),"\n",(0,i.jsx)(n.li,{children:"Use Apps->Previous apps to re-install your containers (with\nall their settings intact)."}),"\n",(0,i.jsx)(n.li,{children:"Go to docker tab and click the Container size button"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:": This will give you a starting point for the space each container is\nusing."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enable one container, let it run for a short while, and then press\nthe Container size button again to see if that particular container\nis consuming space when it runs."}),"\n",(0,i.jsx)(n.li,{children:"Repeat the above step until you track down the rogue container(s)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-do-i-move-dockerimg",children:"How do I move docker.img?"}),"\n",(0,i.jsxs)(n.p,{children:["The normal reason for wanting to move the ",(0,i.jsx)(n.em,{children:"docker.img"})," file is because\nit has ended up on a drive that is not the one you want it to use."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," In many cases it is easier to just recreate the ",(0,i.jsx)(n.em,{children:"docker.img"}),"\nfile from scratch rather than to try and move it."]}),"\n",(0,i.jsxs)(n.p,{children:["The way to move ",(0,i.jsx)(n.em,{children:"docker.img"})," is:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.em,{children:"Settings -> Docker -> Enable Docker"}),", and set to ",(0,i.jsx)(n.strong,{children:"No"}),",\nthen click the ",(0,i.jsx)(n.strong,{children:"Apply"})," button \xa0(this disables Docker support).\nThis is required because othewise the Docker service will keep this\nfile open which stops you from moving it elsewhere."]}),"\n",(0,i.jsx)(n.li,{children:"Using mv or any file manager or the command line, move docker.img to\nthe desired location (/mnt/cache/docker.img is recommended)"}),"\n",(0,i.jsxs)(n.li,{children:["In Settings -> Docker, change the path for ",(0,i.jsx)(n.em,{children:"docker.img"})," to the\nexact location you just copied to"]}),"\n",(0,i.jsx)(n.li,{children:"Set Enable Docker back to Yes, and click the Apply button again\n\xa0(re-enabling Docker support)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-do-i-recreate-dockerimg",children:"How do I recreate docker.img?"}),"\n",(0,i.jsxs)(n.p,{children:["The commonest reason for wanting to recreate the ",(0,i.jsx)(n.em,{children:"docker.img"})," file is\nbecause it has been corrupted. This is typically indicated by seeing\nerror messages in the syslog relating to the ",(0,i.jsx)(n.em,{children:"loop2"})," device (which is\nthe mount point for the ",(0,i.jsx)(n.em,{children:"docker.img"})," file)."]}),"\n",(0,i.jsxs)(n.p,{children:["Other common reasons for recreating the ",(0,i.jsx)(n.em,{children:"docker.img"})," file is because you\nwant to change the amount of space that you have allocated to it or to\nchange its location."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.em,{children:"Settings -> Docker -> Enable Docker"}),", and set to ",(0,i.jsx)(n.strong,{children:"No"}),",\nthen click the ",(0,i.jsx)(n.strong,{children:"Apply"})," button \xa0(this disables Docker support)"]}),"\n",(0,i.jsxs)(n.li,{children:["Switch to Advanced View, then check off the box and press ",(0,i.jsx)(n.strong,{children:"Delete"})]}),"\n",(0,i.jsx)(n.li,{children:"Make sure that the settings for the size and location are what you\nwant them to be."}),"\n",(0,i.jsxs)(n.li,{children:["Now set Enable Docker back to ",(0,i.jsx)(n.strong,{children:"Yes"}),", and click the ",(0,i.jsx)(n.strong,{children:"Apply"}),"\nbutton again \xa0(re-enabling Docker support) and a new empty\n",(0,i.jsx)(n.em,{children:"docker.img"})," file will be created."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"restoring-your-docker-applications",children:"Restoring your Docker Applications"}),"\n",(0,i.jsx)(n.p,{children:"It is very easy to reinstall the binaries for all your Docker containers\nand get back your containers with their settings intact if you have\ninstalled them via Community Applications."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"Apps"})," Tab"]}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Previous Apps"})," Section."]}),"\n",(0,i.jsxs)(n.li,{children:["Check off all of your previous applications that you want to be\nreinstalled and hit ",(0,i.jsx)(n.strong,{children:"Instal"}),"l."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This will download the binaries for all of your Docker containers into\nthe ",(0,i.jsx)(n.em,{children:"docker.img"})," file and reinstate them with their settings intact."]}),"\n",(0,i.jsx)(n.h2,{id:"further-information",children:"Further Information"}),"\n",(0,i.jsxs)(n.p,{children:["A wealth of further information and some common problems with docker\n(and the solutions) can be found in the ",(0,i.jsx)(n.a,{href:"https://forums.unraid.net/topic/57181-docker-faq/",children:"Docker\nFAQ"})," on the forum."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);