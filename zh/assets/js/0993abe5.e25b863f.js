"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9554],{9599:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var o=n(5893),r=n(1151);const t={sidebar_position:1},i="Manage Docs Versions",d={id:"contribute-to-docs/tutorial-extras/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/contribute-to-docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"contribute-to-docs/tutorial-extras",slug:"/contribute-to-docs/tutorial-extras/manage-docs-versions",permalink:"/zh/contribute-to-docs/tutorial-extras/manage-docs-versions",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/contribute-to-docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"unraidSidebar",previous:{title:"Tutorial - Extras",permalink:"/zh/category/tutorial---extras"},next:{title:"Translate your site",permalink:"/zh/contribute-to-docs/tutorial-extras/translate-your-site"}},c={},a=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"manage-docs-versions",children:"Manage Docs Versions"}),"\n",(0,o.jsx)(s.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,o.jsx)(s.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,o.jsx)(s.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"docs"})," folder is copied into ",(0,o.jsx)(s.code,{children:"versioned_docs/version-1.0"})," and ",(0,o.jsx)(s.code,{children:"versions.json"})," is created."]}),"\n",(0,o.jsx)(s.p,{children:"Your docs now have 2 versions:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"1.0"})," at ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"current"})," at ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,o.jsx)(s.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,o.jsx)(s.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,o.jsxs)(s.p,{children:["Modify the ",(0,o.jsx)(s.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: "docsVersionDropdown",\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n'})}),"\n",(0,o.jsx)(s.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Docs Version Dropdown",src:n(3196).Z+"",width:"370",height:"302"})}),"\n",(0,o.jsx)(s.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,o.jsx)(s.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"docs/hello.md"})," updates ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3196:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>i});var o=n(7294);const r={},t=o.createContext(r);function i(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);