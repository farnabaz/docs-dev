import{d as C,a$ as w,ag as B,ah as I,r as y,G as S,b7 as A,b as s,c as o,e as d,n as l,aA as e,F as f,a8 as g,a9 as h,f as D,t as N,al as U,am as $,b3 as z,ab as F,a4 as G}from"./entry.boYxB-gq.js";const V=["onClick"],L=C({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(x){const _={wrapper:"relative my-5 space-y-6",header:"flex items-center relative",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},b=x,i=w(),{ui:r,attrs:k}=B("content.codeGroup",void 0,_,I(b,"class"),!0),p=y(b.selectedIndex||0),m=y(1),v=S(()=>{var u;return m.value,((u=i.default)==null?void 0:u.call(i).map((n,c)=>{var t,a;return{index:c,label:((t=n.props)==null?void 0:t.label)||`${c}`,icon:(a=n.props)==null?void 0:a.icon,component:n}}))||[]});return A(()=>{m.value+=1}),(u,n)=>{const c=G;return s(),o("div",F({class:e(r).wrapper},e(k)),[d("div",{class:l(e(r).header)},[d("div",{class:l(e(r).border)},null,2),(s(!0),o(f,null,g(e(v),(t,a)=>(s(),o("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:j=>p.value=a},[t.icon?(s(),h(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):D("",!0),d("span",null,N(t.label),1)],10,V))),128))],2),(s(!0),o(f,null,g(e(v),(t,a)=>U((s(),o("div",{key:a},[(s(),h(z(t.component)))])),[[$,e(p)===a]])),128))],16)}}});export{L as default};
