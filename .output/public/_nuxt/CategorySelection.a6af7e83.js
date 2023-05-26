import l from"./Button.4669cb1f.js";import{k as i,t as d,v as u,o as s,b as n,e,F as p,z as m,Z as a,f,u as h,p as v,h as g,a as y}from"./entry.9730d326.js";const x=o=>(v("data-v-9fbfe7d1"),o=o(),g(),o),S=x(()=>e("h1",null,"Projects",-1)),b={class:"category-selection"},k={class:"category"},B=["src","alt"],I={class:"content"},j=i({__name:"CategorySelection",setup(o){const c=d`
  query {
    categories {
      data {
        id
        title
        intro
        cover_url
      }
    }
  }
`,{data:r,error:q,refresh:C}=u(c);return(V,w)=>{const _=l;return s(),n("div",null,[S,e("div",b,[(s(!0),n(p,null,m(h(r).categories.data,(t,F)=>(s(),n("div",k,[e("img",{class:"image",src:t.cover_url,alt:t.cover_url},null,8,B),e("div",I,[e("h3",null,a(t.title),1),e("p",null,a(t.intro),1),f(_,{name:"View this project",to:`project/${t.id}`},null,8,["to"])])]))),256))])])}}});const A=y(j,[["__scopeId","data-v-9fbfe7d1"]]);export{A as default};
