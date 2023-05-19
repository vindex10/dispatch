"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7988],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(4137));const o={description:"Overview of the Dispatch projects.",sidebar_position:0},a="Projects",s={unversionedId:"administration/settings/project",id:"administration/settings/project",title:"Projects",description:"Overview of the Dispatch projects.",source:"@site/docs/administration/settings/project.mdx",sourceDirName:"administration/settings",slug:"/administration/settings/project",permalink:"/dispatch/docs/administration/settings/project",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/project.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"Overview of the Dispatch projects.",sidebar_position:0},sidebar:"adminSidebar",previous:{title:"Settings",permalink:"/dispatch/docs/administration/settings/"},next:{title:"Incident",permalink:"/dispatch/docs/administration/settings/incident/"}},c={},p=[{value:"When should I create a new project vs using an existing one?",id:"when-should-i-create-a-new-project-vs-using-an-existing-one",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"projects"},"Projects"),(0,i.kt)("p",null,"Every case or incident within Dispatch is tied to a project. The project configuration determines how cases or incidents are created and managed. This allows multiple teams to use Dispatch in different ways."),(0,i.kt)("p",null,"From having their own case or incident types and priorities to providing the team with a view of their metrics."),(0,i.kt)("h3",{id:"when-should-i-create-a-new-project-vs-using-an-existing-one"},"When should I create a new project vs using an existing one?"),(0,i.kt)("p",null,"Generally, you would create a new project when the teams involved have very little overlap when handling cases or incidents."),(0,i.kt)("p",null,"For example, you might create a ",(0,i.kt)("inlineCode",{parentName:"p"},"security")," project for the handling of all security-related cases or incidents and a ",(0,i.kt)("inlineCode",{parentName:"p"},"reliability")," project for all outage-related incidents."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5001).Z,width:"738",height:"1004"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Name:")," A name for your project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," A description for your project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Color:")," A color for your project, so you can visually differentiate it from other projects."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Annual Employee Cost:")," An annual average cost per employee."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Business Year Hours:")," Number of working hours in a year. Used to calculate hourly rate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Owner Email:")," The email account of the project owner."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Owner Conversation:")," The conversation of the project owner (e.g. Slack channel)."))}d.isMDXComponent=!0},5001:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/admin-ui-project-0f1c9bc0131f7389901c536a1dc188c2.png"}}]);