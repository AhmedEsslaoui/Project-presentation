import{d as m,z as f,o as d,b as _,e as s,f as v,h as x,c as b,k as g,aa as l,q as h,s as k,B as c}from"./modules/vue-BqjJt-9x.js";import{u,f as $}from"./slidev/context-D5gRgLHb.js";import{_ as y}from"./index-CRPLMJt3.js";import"./modules/shiki-DQ91SLbT.js";function i(e){return e.startsWith("/")?"/"+e.slice(1):e}function C(e,r=!1){const o=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?r?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const B={class:"my-auto w-full"},S=m({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const r=e,o=f(()=>C(r.background,!0));return(t,a)=>(d(),_("div",{class:"slidev-layout cover text-center",style:x(o.value)},[s("div",B,[v(t.$slots,"default")])],4))}}),P={__name:"slides.md__slidev_1",setup(e){const{$slidev:r,$nav:o,$clicksContext:t,$clicks:a,$page:w,$renderContext:z,$frontmatter:p}=u();return t.setup(),(R,n)=>(d(),b(S,h(k(c($)(c(p),0))),{default:g(()=>n[0]||(n[0]=[s("h1",null,"Staying in Customer Support",-1),s("h2",null,"My Role & Vision",-1),s("div",{class:"absolute bottom-10 left-0 right-0"},[s("div",{class:"border border-neutral-200/40 rounded-lg py-2 px-4 w-fit mx-auto backdrop-blur-sm"},[l(" Press "),s("kbd",{class:"px-1 py-0.5 text-xs border border-neutral-200/40 rounded"},"space"),l(" to continue ")])],-1)])),_:1},16))}},q=y(P,[["__scopeId","data-v-492b3fa3"]]);export{q as default};
