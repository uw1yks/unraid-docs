"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4941],{8509:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var t=o(5893),i=o(1151);const r={},s="Outgoing Proxy Manager",a={id:"unraid-os/manual/security/outgoing-proxy-manager",title:"Outgoing Proxy Manager",description:"The Outgoing Proxy Manager is new to Unraid 7.0. This allows you to proxy Unraid's outgoing http communications through an http proxy to bypass firewall restrictions.",source:"@site/docs/unraid-os/manual/security/outgoing-proxy-manager.md",sourceDirName:"unraid-os/manual/security",slug:"/unraid-os/manual/security/outgoing-proxy-manager",permalink:"/unraid-docs/es/unraid-os/manual/security/outgoing-proxy-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/security/outgoing-proxy-manager.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"VPN",permalink:"/unraid-docs/es/unraid-os/manual/security/vpn"},next:{title:"Multi-language support",permalink:"/unraid-docs/es/unraid-os/manual/multi-language"}},l={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Choosing an http proxy server",id:"choosing-an-http-proxy-server",level:2},{value:"Automatic import",id:"automatic-import",level:2},{value:"Plugins",id:"plugins",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"outgoing-proxy-manager",children:"Outgoing Proxy Manager"}),"\n",(0,t.jsx)(n.p,{children:"The Outgoing Proxy Manager is new to Unraid 7.0. This allows you to proxy Unraid's outgoing http communications through an http proxy to bypass firewall restrictions.\nThis applies to Unraid itself and not Docker containers or VMs."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Depending on your situation, ",(0,t.jsx)(n.a,{href:"/unraid-docs/es/unraid-os/manual/security/vpn#configuring-vpn-tunneled-access-for-system",children:"VPN tunneled access for system"})," may be the better option as it will tunnel ",(0,t.jsx)(n.em,{children:"all"})," outgoing traffic from the server."]})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The built-in outgoing/forward proxy is very different from a reverse proxy like NPM. Reverse proxies are not officially recommended or supported, but they are available in Community Applications and discussed in the forums."})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Settings \u2192 Outgoing Proxy Manager"})]}),"\n",(0,t.jsx)(n.p,{children:"Add your proxy name/url and optional user/password and Apply. Then select the proxy you just created from the list and Apply."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Outgoing Proxy Manager",src:o(1416).Z+"",width:"1618",height:"586"})}),"\n",(0,t.jsx)(n.p,{children:"The webgui will automatically see the change in proxy. If you have any open webterminal or SSH sessions you will need to close and reopen them for any commands to use the new proxy."}),"\n",(0,t.jsx)(n.p,{children:"Usage is transparent, the only way you can tell it is being used is by watching the logs on the proxy server."}),"\n",(0,t.jsx)(n.h2,{id:"choosing-an-http-proxy-server",children:"Choosing an http proxy server"}),"\n",(0,t.jsx)(n.p,{children:"If your network requires this functionality, use the http proxy server provided by your network administrator."}),"\n",(0,t.jsxs)(n.p,{children:["If you don't already have one, we have tested with the ",(0,t.jsx)(n.strong,{children:"Proxy Server"})," Docker container by ",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/profile/72388-ich777/",children:"@ich777"}),". You can configure it to run through Unraid's ",(0,t.jsx)(n.a,{href:"/unraid-docs/es/unraid-os/manual/security/vpn#outgoing-vpn-connections",children:"WireGuard VPN to a commercial provider"})," or you can connect it to another Docker container that provides VPN services (instructions in the app description)."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"It is best to host the proxy server on a different system than the one you are proxying, so the network will be available during boot."})}),"\n",(0,t.jsxs)(n.p,{children:["To watch the traffic passing through the proxy, navigate to the ",(0,t.jsx)(n.strong,{children:"Docker tab"})," of the system that is hosting the proxy, click on the ",(0,t.jsx)(n.strong,{children:"Proxy Server"})," container and choose ",(0,t.jsx)(n.strong,{children:"Logs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"automatic-import",children:"Automatic import"}),"\n",(0,t.jsxs)(n.p,{children:["If you have the ",(0,t.jsx)(n.strong,{children:"Proxy Editor"})," plugin by ",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/profile/168579-ludoux/",children:"@ludoux"})," installed, it will automatically be removed when booting into a release with built-in support for outgoing proxies.  Big thanks to ",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/profile/168579-ludoux/",children:"@ludoux"})," for writing that plugin to simplify things for users until support was added to the OS."]}),"\n",(0,t.jsx)(n.p,{children:"If the config/go script on your flash drive has a line that sets proxies like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'http_proxy="someurl" https_proxy="someurl" /usr/local/sbin/emhttp &\n'})}),"\n",(0,t.jsx)(n.p,{children:"that will automatically be simplified to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/usr/local/sbin/emhttp\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you previously added proxy support to Community Applications by creating this file on your flash drive:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"config/plugins/community.applications/proxy.cfg\n"})}),"\n",(0,t.jsx)(n.p,{children:"the settings there will automatically be imported and then the file will be renamed."}),"\n",(0,t.jsx)(n.h2,{id:"plugins",children:"Plugins"}),"\n",(0,t.jsxs)(n.p,{children:["Plugins using PHP's ",(0,t.jsx)(n.code,{children:"curl_init()"})," function will automatically use this proxy for outgoing connections. Plugins using PHP's ",(0,t.jsx)(n.code,{children:"file_get_contents()"})," function should switch to ",(0,t.jsx)(n.code,{children:"curl_init()"}),". Processes using ",(0,t.jsx)(n.code,{children:"wget"})," would be better off using ",(0,t.jsx)(n.code,{children:"curl"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1416:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/outgoing-proxy-manager-1a7ca03d23a173265f3b6c716547cd0d.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var t=o(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);