"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3203],{6470:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=r(5893),t=r(1151);const o={},i="Transferring Files from a Network Share to Unraid",a={id:"legacy/FAQ/transferring-files-from-a-network-share-to-unraid",title:"Transferring Files from a Network Share to Unraid",description:"Open a terminal session with SSH or Telnet",source:"@site/docs/legacy/FAQ/transferring-files-from-a-network-share-to-unraid.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/transferring-files-from-a-network-share-to-unraid",permalink:"/unraid-docs/de/legacy/FAQ/transferring-files-from-a-network-share-to-unraid",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/transferring-files-from-a-network-share-to-unraid.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Terminal Access",permalink:"/unraid-docs/de/legacy/FAQ/terminal-access"},next:{title:"Transferring Files Within the Unraid Server",permalink:"/unraid-docs/de/legacy/FAQ/transferring-files-within-the-unraid-server"}},c={},d=[{value:"Another method using Netcat and Tar",id:"another-method-using-netcat-and-tar",level:2},{value:"Unicode issues",id:"unicode-issues",level:2},{value:"Permission issues after copying",id:"permission-issues-after-copying",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"transferring-files-from-a-network-share-to-unraid",children:"Transferring Files from a Network Share to Unraid"}),"\n",(0,s.jsxs)(n.p,{children:["Open a ",(0,s.jsx)(n.a,{href:"/unraid-docs/de/legacy/FAQ/terminal-access",children:"terminal session with SSH or Telnet"}),"\nto Unraid, and login as root. Create a temporary directory on the\nserver:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"mkdir\xa0/work"})}),"\n",(0,s.jsx)(n.p,{children:"Mount a remote directory to the new directory:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"mount\xa0-t\xa0cifs\xa0//workstation/share\xa0/work"})}),"\n",(0,s.jsx)(n.p,{children:"(Substitute name of your workstation for 'workstation', and it will\nprobably prompt you for a workstation user name/password)."}),"\n",(0,s.jsx)(n.p,{children:"Copy all the files and folders from the workstation's share to a disk\nshare on the server:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cp\xa0-r\xa0/work/*\xa0/mnt/disk1"})}),"\n",(0,s.jsxs)(n.p,{children:["(Of course you can copy from the workstation share to any disk/share.\nEg. /mnt/user/",(0,s.jsx)(n.code,{children:"<sharename>"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"Edit: Another option is to use rsync to get speed/progress information:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"rsync\xa0-av\xa0--stats\xa0--progress\xa0/work/\xa0/mnt/disk1/"})}),"\n",(0,s.jsx)(n.p,{children:"When done:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"umount\xa0/work\nrmdir\xa0/work\n"})}),"\n",(0,s.jsx)(n.p,{children:'Caution: If you have directory or file names with non-English\ncharacters, commonly found in titles and names for media files from\nEuropean and South American countries, I would recommend to use Windows\nExplorer. The Linux commands either skip the whole file or directory, or\nreplaces the "strange" letter with an underscore. Also, the cp command\nmay set all file attributes to system and hidden, so the files don\'t\nshow up in Windows Explorer. This may be corrected with chmod command,\nbut I found it better to avoid this altogether by sticking to the\nExplorer in Windows.'}),"\n",(0,s.jsx)(n.h2,{id:"another-method-using-netcat-and-tar",children:"Another method using Netcat and Tar"}),"\n",(0,s.jsxs)(n.p,{children:["See also ",(0,s.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=5045.msg47257#msg47257",children:"this\npost"}),"\nfor an alternative method of data transfer between Linux systems, such\nas Unraid."]}),"\n",(0,s.jsx)(n.h2,{id:"unicode-issues",children:"Unicode issues"}),"\n",(0,s.jsx)(n.p,{children:"If you have any kind of foreign characters in your filenames (for\ninstance, an accented letter in a movie title), you want to mount the\ncifs share with the UTF-8 option as shown below, otherwise the mount\nwill give you a garbled character when doing the copy/rsync. When this\ngarbling happens, your directory will also be unlistable from a Mac\n(tested on 10.9) over AFP or SMB."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"mount\xa0-t\xa0cifs\xa0//workstation/share\xa0/work\xa0-o\xa0iocharset=utf8"})}),"\n",(0,s.jsx)(n.h2,{id:"permission-issues-after-copying",children:"Permission issues after copying"}),"\n",(0,s.jsx)(n.p,{children:"Because your SSH copy or rsync process is typically run as root, you may\nexperience 'Access Denied' messages with users writing to directories\nthat have been created as part of this job. This can be rectified by\nrunning the 'New Permissions' job from the tools menu in the web admin\nafter the copy process has completed."})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var s=r(7294);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);