import{_ as x}from"./ProseCodeIcon.vue.OLsIapuU.js";import{d as C,a$ as B,ag as $,ah as w,r as A,G as u,b as i,c as p,e as f,F as G,a8 as I,n as m,aA as e,g as S,t as D,a9 as F,b3 as N,ab as P}from"./entry.boYxB-gq.js";const V=["onClick"],L=C({inheritAttrs:!1,__name:"CodeGroup",props:{class:{type:[String,Object,Array],default:void 0}},setup(g,{expose:v}){const y={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},_=g,l=B(),{ui:t,attrs:h}=$("content.codeGroup",void 0,y,w(_,"class"),!0),n=A(0);v({selectedIndex:n});const b=u(()=>{var c;return((c=l.default)==null?void 0:c.call(l).map((a,d)=>{var o,r,s;return{label:((o=a.props)==null?void 0:o.filename)||((r=a.props)==null?void 0:r.label)||`${d}`,icon:(s=a.props)==null?void 0:s.icon,component:a}}))||[]}),k=u(()=>b.value.find((c,a)=>a===n.value));return(c,a)=>{var o;const d=x;return i(),p("div",P({class:e(t).wrapper},e(h)),[f("div",{class:m(e(t).header)},[(i(!0),p(G,null,I(e(b),(r,s)=>(i(),p("button",{key:s,tabindex:"-1",class:m([e(t).tab.base,e(n)===s?e(t).tab.active:e(t).tab.inactive]),onClick:j=>n.value=s},[S(d,{icon:r.icon,filename:r.label,class:m(e(t).tab.icon.base)},null,8,["icon","filename","class"]),f("span",null,D(r.label),1)],10,V))),128))],2),(i(),F(N((o=e(k))==null?void 0:o.component),{"hide-header":""}))],16)}}});export{L as default};
