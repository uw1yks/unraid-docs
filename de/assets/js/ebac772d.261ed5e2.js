"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8919],{9295:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(5893),a=i(1151);const o={sidebar_position:3},r="Application Server",s={id:"unraid-os/overview/application-server",title:"Application Server",description:"When it comes to application support, traditional NAS solutions come with three primary limitations:",source:"@site/docs/unraid-os/overview/application-server.md",sourceDirName:"unraid-os/overview",slug:"/unraid-os/overview/application-server",permalink:"/unraid-docs/de/unraid-os/overview/application-server",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/overview/application-server.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"unraidSidebar",previous:{title:"Network-attached storage",permalink:"/unraid-docs/de/unraid-os/overview/nas"},next:{title:"Virtualization host",permalink:"/unraid-docs/de/unraid-os/overview/virtualization-host"}},c={},l=[{value:"The Engine",id:"the-engine",level:2},{value:"The Hub",id:"the-hub",level:2},{value:"Containers",id:"containers",level:2}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"application-server",children:"Application Server"}),"\n",(0,n.jsx)(t.p,{children:"When it comes to application support, traditional NAS solutions come with three primary limitations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"They cannot support applications written for other operating systems."}),"\n",(0,n.jsx)(t.li,{children:"They can be cumbersome to install and even more difficult to remove."}),"\n",(0,n.jsx)(t.li,{children:'They don\'t always "play nice" with other applications in the same OS.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Docker addresses these problems in a number of key ways:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Allows for the use of any Linux operating system to empower a given application (no longer limited by the operating system of the host itself)."}),"\n",(0,n.jsx)(t.li,{children:'Removes the "installation" process that applications have to go through by providing pre-installed images that ensure a consistent run-time experience for you and makes them easier to remove when you are done with them.'}),"\n",(0,n.jsx)(t.li,{children:"Enables applications that would normally have issues with coexistence to operate in harmony in the same environment."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Docker is made up of three primary components: the Engine, the Hub, and Containers."}),"\n",(0,n.jsx)(t.h2,{id:"the-engine",children:"The Engine"}),"\n",(0,n.jsx)(t.p,{children:"The Docker Engine represents the management component that is built into Unraid 6. Using the engine, we can control application access to vital system resources, interact with the Docker Hub, and isolate applications from conflicts."}),"\n",(0,n.jsx)(t.p,{children:"From a storage perspective, the engine leverages the copy-on-write capabilities of the BTRFS filesystem combined with Docker images\nprovided through the hub. The images are essentially tar files with a  hierarchy so that other images which depend upon a common layer don't need to replicate storage for the layer they share. The shared layers are put in a read-only state, while changes made to them are reflected only in the instance for the application that changed it. In simpler terms, this means that applications can be efficient in their use of both system performance and storage capacity."}),"\n",(0,n.jsx)(t.p,{children:"This differs from virtual machines where the entirety of the guest operating system is emulated. The overhead required to support a virtual machine is therefore much higher than the equivalent overhead for a container. Docker containers that feature common libraries and binaries do not replicate those shared resources and instead, leverage the efficiency of Linux and a copy-on-write filesystem to minimize the overhead."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(5427).Z+"",width:"1000",height:"898"})}),"\n",(0,n.jsx)(t.h2,{id:"the-hub",children:"The Hub"}),"\n",(0,n.jsxs)(t.p,{children:["One of biggest advantages Docker provides over both traditional Linux containers (LXCs) and virtual machines (VMs) is in its application repository: the Docker Hub. Many traditional Linux operating systems nowadays come with a component in their framework known as a ",(0,n.jsx)(t.em,{children:"package manager"}),". The job of the package manager is to let people easily install applications written for a particular operating system from catalogs that are known as ",(0,n.jsx)(t.em,{children:"repositories"}),". While package managers do their job fairly well, they come with all the limitations mentioned earlier. Linux containers and virtual machines, while competent at providing a way to control resources allocated to an application, still rely on traditional package managers for software retrieval and installation into their\nrun-time environments."]}),"\n",(0,n.jsx)(t.p,{children:"In contrast, the Docker Hub provides all the benefits without the limitations of a traditional package manager. Using the Docker engine, pre-built applications can be downloaded automatically and, thanks to the copy-on-write benefits we've already covered, the only data that is actually downloaded is data not already present on your system. The hub contains over 14,000 Dockerized apps, so finding what you're looking for shouldn't be a problem. In addition, thanks to some of our loyal community members, users can quickly add many of the most popular containers through the use of templates in Unraid 6. These forum members have taken it upon themselves to build and maintain these templates and the list of available templates continues to grow."}),"\n",(0,n.jsxs)(t.p,{children:["The Docker Hub can be accessed at ",(0,n.jsx)(t.a,{href:"http://registry.hub.docker.com",children:"http://registry.hub.docker.com"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"containers",children:"Containers"}),"\n",(0,n.jsx)(t.p,{children:"The cornerstone of Docker is in its ability to use Linux control groups, namespace isolation, and images to create isolated execution\nenvironments in the form of Docker containers. Docker controls the resources allocated to the Containers and isolates them from conflicting with other applications on the same system. This provides all the benefits of traditional virtual machines, but with none of the overhead associated with emulating hardware, making containers ridiculously efficient and in some studies, barely distinguishable from bare-metal equivalents."}),"\n",(0,n.jsx)(t.p,{children:"Docker works by allowing applications access to the system resources of the host operating system, such as CPU, memory, disk, and network, but isolates them into their own run-time environments. Unlike virtual machines, containers do not require hardware emulation, which eliminates overhead, hardware requirements, and provides near bare-metal performance."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(9638).Z+"",width:"1000",height:"858"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5427:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Docker-vs-VM@2x-4e0f358c796fdcd3872d42484b0a4a97.png"},9638:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Docker@2x-30576a2c4ecfce878461685931e0cdf0.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var n=i(7294);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);