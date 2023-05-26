import u from"./Button.4669cb1f.js";import{k as m,B as p,t as y,v,o as s,b as a,u as o,F as f,z as g,a3 as h,e as r,Z as _,f as I,a as k}from"./entry.9730d326.js";const x={key:0,class:"room-selection"},B=["src","alt"],V={class:"content"},q=m({__name:"[id]",setup(A){const n=p();let c;Array.isArray(n.params.id)?c=parseInt(n.params.id[0]):c=parseInt(n.params.id);const d=y`
  query($categoryId: Int!) {
    rooms(category_id: $categoryId) {
      data {
        id
        title
        intro
        cover_url
      }
    }
  }
`,{data:t,error:N,refresh:$}=v(d,{categoryId:c});return(C,F)=>{const i=u;return s(),a("div",null,[o(t)&&o(t).rooms&&o(t).rooms.data?(s(),a("div",x,[(s(!0),a(f,null,g(o(t).rooms.data,(e,l)=>(s(),a("div",{class:"room",key:l},[r("img",{class:"image",src:e.cover_url,alt:e.cover_url},null,8,B),r("div",V,[r("h3",null,_(e.title),1),r("p",null,_(e.intro),1),I(i,{name:"View this project",to:`rooms/${e.id}`},null,8,["to"])])]))),128))])):h("",!0)])}}});const w=k(q,[["__scopeId","data-v-05dd2553"]]);export{w as default};
