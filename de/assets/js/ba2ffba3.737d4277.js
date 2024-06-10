"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4321],{7996:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=s(5893),r=s(1151);const o={},c="Remote Access",i={id:"connect/remote-access",title:"Remote Access",description:"The Remote Access feature",source:"@site/docs/connect/remote-access.md",sourceDirName:"connect",slug:"/connect/remote-access",permalink:"/de/connect/remote-access",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/connect/remote-access.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Unraid Connect Help",permalink:"/de/connect/help"},next:{title:"Legacy Documentation",permalink:"/de/category/legacy-documentation"}},a={},l=[{value:"Remote Access - <strong>Initial Setup</strong>",id:"remote-access---initial-setup",level:2},{value:"Remote Access - <strong>Choose Remote Access Type</strong>",id:"remote-access---choose-remote-access-type",level:3},{value:"<strong>Dynamic Remote Access</strong>",id:"dynamic-remote-access",level:2},{value:"Dynamic Remote Access Usage",id:"dynamic-remote-access-usage",level:4},{value:"Configuring <strong>UPNP</strong> (Applies to Dynamic - UPNP / Always On - UPNP)",id:"configuring-upnp-applies-to-dynamic---upnp--always-on---upnp",level:3},{value:"Configuring <strong>Manual Port Forwarding</strong> (Applies to Dynamic - Manual Port Forward / Always On - Manual Port Forward)",id:"configuring-manual-port-forwarding-applies-to-dynamic---manual-port-forward--always-on---manual-port-forward",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"remote-access",children:"Remote Access"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2463).Z+"",width:"812",height:"283"})}),"\n",(0,t.jsxs)(n.p,{children:["The Remote Access feature\nallows you to access your Unraid WebGUI from the Internet. If you need\naccess to Docker containers, network drives, or other devices on your\nnetwork, you'll want to ",(0,t.jsx)(n.a,{href:"/de/unraid-os/manual/security/vpn",children:"setup a\nVPN"})," instead."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note: Before enabling remote access, consider your root password. Is\nit sufficiently complex? Update your root password on the Users page."})}),"\n",(0,t.jsxs)(n.p,{children:["Also note: ",(0,t.jsx)(n.strong,{children:"Remote Access is an optional feature"}),", and is not required\nto use the rest of Unraid Connect."]}),"\n",(0,t.jsxs)(n.h2,{id:"remote-access---initial-setup",children:["Remote Access - ",(0,t.jsx)(n.strong,{children:"Initial Setup"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["From Unraid WebGUI Navigate to ",(0,t.jsx)(n.strong,{children:"Settings"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Management Access"})]}),"\n",(0,t.jsxs)(n.li,{children:["Note the ",(0,t.jsx)(n.strong,{children:"HTTPS port"}),", it defaults to port 443. If you have Docker\ncontainers running on this port, choose an unused port over 1000\nsuch as 3443, 4443, 5443, etc."]}),"\n",(0,t.jsxs)(n.li,{children:["If you changed any of the above settings, hit ",(0,t.jsx)(n.strong,{children:"Apply"})," for them to\ntake effect."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"CA-signed certificate file"})," area, click ",(0,t.jsx)(n.strong,{children:"Provision"})]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"remote-access---choose-remote-access-type",children:["Remote Access - ",(0,t.jsx)(n.strong,{children:"Choose Remote Access Type"})]}),"\n",(0,t.jsxs)(n.p,{children:["There are two kinds of Remote Access provided through Unraid Connect:\n",(0,t.jsx)(n.strong,{children:"Dynamic Remote Access"})," and ",(0,t.jsx)(n.strong,{children:"Static Remote Access"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Remote Access"})," enables access to your WebGUI from the\ninternet only when needed, and leaves the WebGUI inaccessible from WAN\notherwise. This feature works with both UPNP as well as static port\nforwarding and uses an API call through the Unraid Connect plugin to\nopen your WebGUI to internet traffic, closing it automatically when not\nneeded. This helps to prevent automated attacks."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Static Remote Access"})," enables your server to listen to WAN traffic at\nall times, allowing your server to be accessed from the internet."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8054).Z+"",width:"860",height:"511"})}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-remote-access",children:(0,t.jsx)(n.strong,{children:"Dynamic Remote Access"})}),"\n",(0,t.jsxs)(n.p,{children:["To use Dynamic Remote access, first set the type you would like to use\nin the ",(0,t.jsx)(n.strong,{children:"Management Access \u2192 Unraid Connect"})," settings page. Choose one\nof the Dynamic settings in the Remote Access dropdown:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic - UPNP"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This option enables dynamic access through the Connect dashboard,\nas well as automatically opening and closing a random port on\nnetwork with UPNP. To use this option your router must have UPNP\nenabled."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic - Manual Port Forward"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This option enables dynamic access through the Connect dashboard,\nbut requires manual port forwarding."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"dynamic-remote-access-usage",children:"Dynamic Remote Access Usage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.a,{href:"/de/connect/help#unraid-connect-dashboard",children:"Unraid Connect"}),", then to\neither the management page or the server details view"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You will be presented with a new ",(0,t.jsx)(n.strong,{children:"Dynamic Remote Access"})," card,\nwith a button that will be enabled if your server is not accessible\nfrom your current\nlocation."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(3713).Z+"",width:"626",height:"346"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clicking the button will trigger your server to enable wan access,\nand if using UPNP, create a new UPNP port forward lease on your\nrouter. This can take up to a minute to complete"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When using UPNP, a 30 minute lease will be created, which will be\nrenewed automatically while Dynamic Remote Access is enabled."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After enabling, the card will report the status of the enabling\nprocess, and what the current state of UPNP is."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'After ten minutes of inactivity, or clicking "Disable Remote\nAccess", your server will automatically turn off access from WAN\ntraffic.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When using UPNP, your server will also attempt to remove the UPNP\nlease from your router."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Active Remote Access Card",src:s(6874).Z+"",width:"602",height:"337"})}),"\n",(0,t.jsxs)(n.h3,{id:"configuring-upnp-applies-to-dynamic---upnp--always-on---upnp",children:["Configuring ",(0,t.jsx)(n.strong,{children:"UPNP"})," (Applies to Dynamic - UPNP / Always On - UPNP)"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure your router supports UPNP and has it enabled."}),"\n",(0,t.jsx)(n.li,{children:'Navigate to Settings \u2192 Management Access and set "Use UPnP" to\nYes.'}),"\n",(0,t.jsx)(n.li,{children:"On the Unraid Connect settings page, set the remote access option to\nUPNP (either Dynamic or Always On) and Apply."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"(Always on Forwarding Only)"})," : Press the ",(0,t.jsx)(n.strong,{children:"Check"}),' button. If the\nport is forwarded correctly you will see a message saying "Your\nUnraid Server is reachable from the Internet"',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Note: When using Dynamic forwarding, you will not be able to\naccess your server from this manual port forward unless you click\nthe Enable Dynamic Remote access button in ",(0,t.jsx)(n.a,{href:"/de/connect/help#unraid-connect-dashboard",children:"Unraid\nConnect"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'Note: If the setting changes from UPnP to "Manual Port Forward" when\nyou reload the page, then we were not able to communicate with your\nrouter to enable UPnP. It may need to be enabled on your router, or\nperhaps the router needs a firmware update to use it.'}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"configuring-manual-port-forwarding-applies-to-dynamic---manual-port-forward--always-on---manual-port-forward",children:["Configuring ",(0,t.jsx)(n.strong,{children:"Manual Port Forwarding"})," (Applies to Dynamic - Manual Port Forward / Always On - Manual Port Forward)"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.strong,{children:"WAN port"})," you want to use. We highly recommend you choose\na random port over 1000 rather than using the default of 443. i.e.\nsomething like 13856, 48653, etc"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Apply"})]}),"\n",(0,t.jsxs)(n.li,{children:["Setup your router to port forward the ",(0,t.jsx)(n.strong,{children:"WAN port"})," you specified to\nthe ",(0,t.jsx)(n.strong,{children:"HTTPS port"})," used by the server. There is a note on the screen\ntelling you the exact ports and IP to use.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Note: some routers require that the ",(0,t.jsx)(n.strong,{children:"WAN port"})," match the ",(0,t.jsx)(n.strong,{children:"HTTPS\nport"}),". In that case, we'd recommend setting both to the same high\nrandom number."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"(Always on Forwarding Only)"})," : Press the ",(0,t.jsx)(n.strong,{children:"Check"}),' button. If the\nport is forwarded correctly you will see a message saying "Your\nUnraid Server is reachable from the Internet"',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Note: When using Dynamic forwarding, you will not be able to\naccess your server from this manual port forward unless you click\nthe Enable Dynamic Remote access button in ",(0,t.jsx)(n.a,{href:"/de/connect/help#unraid-connect-dashboard",children:"Unraid\nConnect"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["To access your server using Remote Access, login to ",(0,t.jsx)(n.a,{href:"/de/connect/help#unraid-connect-dashboard",children:"Unraid\nConnect"})," and click the Manage link"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["===Optional step for secure local access=== If you want to use secure\nhttps for local access to your server as well, navigate to Settings \u2192\nManagement Access. In the CA-signed certificate area, if there are no\nwarnings about DNS Rebinding then go ahead and set ",(0,t.jsx)(n.strong,{children:"Use SSL/TLS"})," to\n",(0,t.jsx)(n.strong,{children:"Strict"}),". If there are warnings about DNS Rebinding see ",(0,t.jsx)(n.a,{href:"/de/connect/help#a-note-regarding-dns-rebinding-protection",children:"A note\nregarding DNS Rebinding\nProtection"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that once SSL is set to Strict, your client computers will need\naccess to DNS in order to access your server. This means if your\nInternet connection drops you will likely lose access to your server's\nWebGUI. See ",(0,t.jsx)(n.a,{href:"/de/connect/help#how-to-access-your-server-when-dns-is-down",children:"How to access your server when DNS is\ndown"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2463:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Enabling_remote_access-5be7d0c842caddb8bc4e74eaf60e9549.png"},3713:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Remote-access-enable-card-608cc524c166e04f012d7e3d9e200f9b.png"},6874:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Remote-access-enabled-static-edce311be0363ac9f5bcaae906fbaf59.png"},8054:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Remote_access_settings-70262cb6b2dc73e9a87c65a28973223b.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var t=s(7294);const r={},o=t.createContext(r);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);