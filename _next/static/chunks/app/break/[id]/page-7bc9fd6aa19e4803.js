(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{40119:(e,t,a)=>{Promise.resolve().then(a.bind(a,25512))},25512:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var r=a(34001),s=a(57749),n=a(29e3),i=a(11397),o=a(74466),c=a(17590),l=a(68138);function d(e){let{id:t}=e,a=(0,n.useRouter)(),d=t?Number.parseInt(t,10):Number.NaN;console.log("BreakPageClient: Received id=".concat(t,", parsed sectionId=").concat(d));let[u,h]=(0,s.useState)(0),[m,x]=(0,s.useState)(0),[g,f]=(0,s.useState)("First Name Last Name"),[b,v]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=localStorage.getItem("examUser"),t=localStorage.getItem("examState");if(!e||!t){let e=(0,c.DT)();a.push("".concat(e,"/register"));return}try{let r=JSON.parse(e);f("".concat(r.firstName," ").concat(r.lastName));let s=JSON.parse(t);if(!s.completedSections||!s.completedSections.includes(d)){let e=(0,c.DT)();a.push("".concat(e,"/exam/section/").concat(d));return}let n=600;2===d&&(n=1800),x(n),h(n)}catch(t){console.error("Error loading exam state:",t);let e=(0,c.DT)();a.push("".concat(e,"/instructions"))}},[a,d,t]),(0,s.useEffect)(()=>{if(u<=0)return;let e=setInterval(()=>{h(t=>t<=1?(clearInterval(e),0):t-1)},1e3);return()=>clearInterval(e)},[u]),(0,r.jsxs)("div",{className:"min-h-screen flex flex-col bg-white dark:bg-slate-900",children:[(0,r.jsxs)("div",{className:"bg-[#1a4a7a] text-white p-2 flex justify-between items-center",children:[(0,r.jsxs)("div",{children:["Demo - Pearson VUE Test Driver - ",g]}),(0,r.jsx)("div",{className:"flex items-center gap-4",children:(0,r.jsxs)("div",{children:["Time Remaining ",(0,o.f)(u)]})})]}),(0,r.jsx)("div",{className:"flex-1 flex items-center justify-center p-4",children:(0,r.jsxs)("div",{className:"w-full max-w-md bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 shadow-sm",children:[(0,r.jsx)("div",{className:"bg-[#1a4a7a] text-white p-3",children:(0,r.jsx)("h2",{className:"text-lg font-normal",children:"Break Time"})}),(0,r.jsxs)("div",{className:"p-6 space-y-4",children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("div",{className:"text-3xl font-bold mb-2 text-black dark:text-white",children:(0,o.f)(u)}),(0,r.jsx)("p",{className:"text-sm text-gray-600 dark:text-slate-300",children:u>0?"Remaining in break":"Break time is over"})]}),(0,r.jsxs)("div",{className:"bg-gray-100 dark:bg-slate-700 p-4 border border-gray-300 dark:border-slate-600",children:[(0,r.jsx)("h3",{className:"font-medium mb-2 text-black dark:text-white",children:"Next Section"}),(0,r.jsxs)("p",{className:"text-sm dark:text-slate-300",children:["Section ",d+1,": ",["","Biological and Biochemical Foundations of Living Systems","Chemical and Physical Foundations of Biological Systems","Psychological, Social, and Biological Foundations of Behavior","Critical Analysis and Reasoning Skills"][d+1]||"Next Section"]})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("h3",{className:"font-medium dark:text-white",children:"Break Tips"}),(0,r.jsxs)("ul",{className:"list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-slate-300",children:[(0,r.jsx)("li",{children:"Stretch and move around"}),(0,r.jsx)("li",{children:"Use the restroom if needed"}),(0,r.jsx)("li",{children:"Drink water to stay hydrated"}),(0,r.jsx)("li",{children:"Take deep breaths to reduce stress"}),(0,r.jsx)("li",{children:"Avoid looking at your phone or other screens"})]})]}),(0,r.jsx)(i.$,{onClick:()=>{let e=(0,c.DT)();a.push("".concat(e,"/exam/section/").concat(d+1))},className:"w-full bg-[#1a4a7a] hover:bg-[#0d3a6a] rounded-none mt-4 text-white dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white",children:0===u?"Continue to Next Section":"Skip Break"})]})]})}),(0,r.jsx)("div",{className:"bg-[#1a4a7a] text-white p-2 flex justify-between items-center",children:(0,r.jsxs)("button",{className:"bg-[#3a6a9a] px-3 py-1 rounded",onClick:()=>v(!0),children:[(0,r.jsx)("span",{className:"mr-1",children:"❓"})," Help"]})}),(0,r.jsx)(l.Q,{open:b,onOpenChange:v})]})}},11397:(e,t,a)=>{"use strict";a.d(t,{$:()=>l});var r=a(34001),s=a(57749),n=a(98864),i=a(8069),o=a(74466);let c=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=s.forwardRef((e,t)=>{let{className:a,variant:s,size:i,asChild:l=!1,...d}=e,u=l?n.DX:"button";return(0,r.jsx)(u,{className:(0,o.cn)(c({variant:s,size:i,className:a})),ref:t,...d})});l.displayName="Button"},74466:(e,t,a)=>{"use strict";a.d(t,{R:()=>o,cn:()=>n,f:()=>i});var r=a(13549),s=a(32184);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,r.$)(t))}function i(e){let t=Math.floor(e/3600),a=Math.floor(e%3600/60),r=e%60;return t>0?"".concat(t.toString().padStart(2,"0"),":").concat(a.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0")):"".concat(a.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0"))}function o(e){let t=[...e];for(let e=t.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}return t}},29e3:(e,t,a)=>{"use strict";var r=a(2712);a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}})}},e=>{var t=t=>e(e.s=t);e.O(0,[883,609,99,142,767,358],()=>t(40119)),_N_E=e.O()}]);