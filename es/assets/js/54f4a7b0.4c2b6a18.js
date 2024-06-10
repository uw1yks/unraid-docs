"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2926],{9273:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=i(5893),n=i(1151);const r={},s="Parity",d={id:"legacy/FAQ/Parity",title:"Parity",description:"Parity is used by Unraid to protect against data loss. If a drive in the",source:"@site/docs/legacy/FAQ/Parity.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/Parity",permalink:"/unraid-docs/es/legacy/FAQ/Parity",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/Parity.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Upgrading to Unraid 6",permalink:"/unraid-docs/es/legacy/Articles/upgrading-to-unraid-6"},next:{title:"Cache Disk",permalink:"/unraid-docs/es/legacy/FAQ/cache-disk"}},o={},l=[{value:"How parity works",id:"how-parity-works",level:2},{value:"Reconstructing data",id:"reconstructing-data",level:2},{value:"Checking parity",id:"checking-parity",level:2},{value:"Parity disk",id:"parity-disk",level:2},{value:"Size",id:"size",level:3},{value:"Performance",id:"performance",level:3},{value:"Dual parity",id:"dual-parity",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"parity",children:"Parity"}),"\n",(0,a.jsx)(t.p,{children:"Parity is used by Unraid to protect against data loss. If a drive in the\narray fails, the data on the other drives can be combined with the\nparity data to reconstruct the missing data."}),"\n",(0,a.jsx)(t.p,{children:"Why have parity? Because there are only two types of hard disks in the\nworld:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Disks that have already failed."}),"\n",(0,a.jsx)(t.li,{children:"Disks that have not yet failed... but just need a bit more time\nuntil they do."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"how-parity-works",children:"How parity works"}),"\n",(0,a.jsxs)(t.p,{children:["In general, a parity process is designed to detect a single bit change\nacross a given set of bits, by setting the value of an added bit such\nthat a summation across that set of bits is forced to a known value. The\nadded bit is known as a ",(0,a.jsx)(t.strong,{children:"parity bit"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In Unraid, the parity bits are stored on a ",(0,a.jsx)(t.strong,{children:"parity drive"})," independent\nof the data drives. This parity bit works across the set of bits in the\nsame relative bit position on each drive. So the 57th bit of the parity\ndrive is the parity bit for the 57th bit of all of the data drives. A\nparity check of the 57th bit position therefore adds up all of the 57th\nbits of every drive including the parity drive, and checking to see\ntotal is an EVEN number. If the value returned is not EVEN, then the\nparity bit is toggled so that the parity check WILL return an EVEN\nnumber."]}),"\n",(0,a.jsx)(t.p,{children:"Why an EVEN number? Unraid uses 'even parity', which simply means that\nthe summation process (using a mathematical operation called 'exclusive\nOR' or 'XOR') across that set of bits must return a value that is an\nEVEN number."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"http://www.pcguide.com/ref/hdd/perf/raid/concepts/genParity-c.html",children:"PCGuide discussion of\nXOR"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"http://en.wikipedia.org/wiki/Exclusive_or",children:"Wikipedia on XOR"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Digital data is stored as a 1 or a 0. So, for example:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If you have 4 drives with bit values 1,1,1,1 the parity will be 0\n(1+1+1+1+0=even)."}),"\n",(0,a.jsx)(t.li,{children:"If the bit values are 1,0,0,0 the parity will be 1 (1+0+0+0+1=even)."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"When a drive is added to a parity-protected Unraid array, it is first\ncleared by writing zeroes to all bits of all sectors of that drive. A\nzero value will not impact parity. Once the new drive is full of zeros,\nUnraid can silently slip it into the array without needing to rebuild\nparity. Several disks can be added simultaneously in this way."}),"\n",(0,a.jsx)(t.h2,{id:"reconstructing-data",children:"Reconstructing data"}),"\n",(0,a.jsx)(t.p,{children:"There are only two situations that the parity data is used by Unraid to\nreconstruct data:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"when a disk is being reconstructed; and"}),"\n",(0,a.jsx)(t.li,{children:"when a bad sector is detected."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"At these times, all of the disks (including parity) are read to\nreconstruct the data to be written to the target disk. As the sum of the\nbits is always even, Unraid can reconstruct any ONE missing piece of\ndata (the parity or a data disk), as long as the other pieces are\ncorrect."}),"\n",(0,a.jsx)(t.p,{children:"In the two examples above, say the 2nd drive fails."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"1+x+1+1+0=even, x must equal 1"}),"\n",(0,a.jsx)(t.li,{children:"1+x+0+0+1=even, x must equal 0"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"As parity is so important for data reconstruction, ensure that parity is\ncorrect by running parity checks periodically."}),"\n",(0,a.jsx)(t.p,{children:"If you physically remove a single disk from your array you will still be\nable to read and write to it. It is 'simulated' by reading all the other\ndata disks and parity. In the same way, the parity disk is updated as\nneeded when writing to the simulated disk. If you now install a\nreplacement disk, it can be completely rebuilt from the re-constructed\ncontents based on parity and all the other data drives."}),"\n",(0,a.jsx)(t.h2,{id:"checking-parity",children:"Checking parity"}),"\n",(0,a.jsxs)(t.p,{children:["In a ",(0,a.jsx)(t.strong,{children:"parity sync"}),", the system reads all the data disks and writes the\ncomputed parity to the parity disk."]}),"\n",(0,a.jsxs)(t.p,{children:["In a ",(0,a.jsx)(t.strong,{children:"parity check"}),", the system reads all the data disks and the\nparity disk, comparing computed parity with stored parity. This\noperation has a flag:"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"CORRECT\xa0-\xa0if\xa0a\xa0parity\xa0mismatch\xa0occurs,\xa0write\xa0parity\xa0disk\xa0with\xa0computed\xa0parity\xa0and\xa0report\xa0in\xa0syslog"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.code,{children:"NOCORRECT\xa0-\xa0just\xa0report\xa0in\xa0syslog"})]}),"\n",(0,a.jsx)(t.p,{children:"Only the first 100 parity check errors are reported. (The messages in\nthe system log are generated for each sector address where a parity\nmis-match occurs. So if you tried a parity-check on an array that\ndoesn't have valid parity, the system log would quickly become massive;\nhence the limit to 100 messages.)"}),"\n",(0,a.jsx)(t.p,{children:"These parity mis-matches are called 'sync errors' or 'parity sync\nerrors'. They are a count of how many block addresses were found where\ncomputed parity did not 'synchronize' with (i.e., match) stored parity.\n(A 'block' is 4096 bytes. This is also the linux PAGE size - the\nfundamental unit of I/O.)"}),"\n",(0,a.jsxs)(t.p,{children:["Parity disk being ",(0,a.jsx)(t.strong,{children:"valid"})," means that there is a parity disk present,\nand sometime in the past a parity sync completed without error (or being\ncancelled). Once parity sync has completed, the parity disk will always\nbe 'valid' (and have a green dot). 'Valid' in this sense means that it\ncan be used to reconstruct a failed data disk."]}),"\n",(0,a.jsx)(t.p,{children:"(Actually, 'valid' is a status that applies to all array disks, both\ndata disks and the parity disk. If all array disks are valid except for\none of them, it means that the one that's not valid can be\nreconstructed using the data from all the other ones.)"}),"\n",(0,a.jsx)(t.p,{children:"When a parity check/nocorrect produces errors, why is the Parity disk\nstill marked 'valid'? This is because if the system marked the parity\ndisk 'invalid' because of a handful of parity errors, and then another\ndisk failed, that other disk could not be reconstructed (because now\nthere would be 2 invalid disks in the array). So the entire parity disk\nisn't marked invalid because of detected parity errors. Of course, a\nuser can always deem parity invalid by un-assigning it."}),"\n",(0,a.jsx)(t.p,{children:"Once parity has been calculated there should only be 2 ways that there\nshould be parity check errors:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"a non-clean shutdown, ie, sudden power loss or system reset. What\nhappens here is that there could be pending writes to the parity\nand/or data disks that don't get completed, leaving the\ncorresponding stripe with inconsistent parity."}),"\n",(0,a.jsx)(t.li,{children:"an undetected hardware fault (such as silent memory corruption)."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"parity-disk",children:"Parity disk"}),"\n",(0,a.jsx)(t.h3,{id:"size",children:"Size"}),"\n",(0,a.jsx)(t.p,{children:"The size of the parity disk must be equal to or larger than the largest\ndata drive."}),"\n",(0,a.jsx)(t.h3,{id:"performance",children:"Performance"}),"\n",(0,a.jsx)(t.p,{children:"Using parity to protect your data inevitably has an impact on\nperformance when you are writing data to the array. Any time a data disk\nis written to, the parity disk needs to be updated as well. Each write\nto a parity-protected Unraid data disk results in 4 disk operations: a\nread and write for parity, and a read and write for data. The platter of\neach disk has to make a full revolution after reading to position the\ndisk head back over the sector being written."}),"\n",(0,a.jsx)(t.p,{children:"Writing to the Unraid array is also limited by the slowest (rotational\nspeed) drive involved. If only the parity drive is a 7200 RPM drive,\nthen you are still limited by the speed of the data drive. You'll see\nno improvement in write speed unless there are multiple slower data\ndrives being written to simultaneously, and one faster 7200 RPM parity\ndrive trying to keep up with both of them."}),"\n",(0,a.jsx)(t.h2,{id:"dual-parity",children:"Dual parity"}),"\n",(0,a.jsx)(t.p,{children:"For large arrays, 'dual parity' -- or, the facility to have a second\nparity disc is not simply a mirror of the first. This permits two\nsimultaneous drive failures without losing data."}),"\n",(0,a.jsx)(t.p,{children:"In a P + Q redundancy system (as in a RAID-6 system), there would be two\nredundancy disks: 'P', which is the ordinary XOR parity, and 'Q', which\nis a Reed-Solomon code. This allows Unraid to recover from any 2 disk\nerrors, with minimal impact on performance.(Requires Clarification that\nthis is actually used)"}),"\n",(0,a.jsxs)(t.p,{children:["Further discussion:\n",(0,a.jsx)(t.a,{href:"https://forums.unraid.net/forum/index.php?topic=2634.msg21695#msg21695",children:"1"})]})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>s});var a=i(7294);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);