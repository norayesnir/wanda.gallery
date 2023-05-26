import{k as A,t as $,v as w,x as E,r as s,o as i,c as y,y as _,f as r,b as g,F as x,z as b,u as v}from"./entry.9730d326.js";const I=["id","src"],C=10,k=20,F=A({__name:"Room",setup(M){const z=$`
  query {
    artworks(per_page: 10, page: 1) {
      data {
        id
        title
        description
        date
        url
        room_id
      }
    }
  }
`,{data:h,error:Z,refresh:q}=w(z),e={x:0,y:2,z:0},p=E([]);(()=>{const c=2*Math.PI/C;for(let n=0;n<C;n++){const l=n*c,u=e.x+k*Math.cos(l),d=e.y,o=e.z+k*Math.sin(l),t=`0 ${Math.atan2(e.x-u,e.z-o)*(180/Math.PI)} 0`,a={position:`${u} ${d} ${o}`,rotation:t,text:`Entity${n+1}`};p.value.push(a)}})();const m=c=>c.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).join("-").toLowerCase();return(c,n)=>{const l=s("a-assets"),u=s("a-image"),d=s("a-text"),o=s("a-entity"),f=s("a-scene");return i(),y(f,{"loading-screen":"backgroundColor: black; dotsColor: white;","vr-mode-ui":"enabled: false"},{default:_(()=>[r(l,null,{default:_(()=>[(i(!0),g(x,null,b(v(h).artworks.data,(t,a)=>(i(),g("img",{id:m(t.title),src:t.url,crossorigin:"anonymous"},null,8,I))),256))]),_:1}),r(o,{id:"mario"},{default:_(()=>[(i(!0),g(x,null,b(v(h).artworks.data,(t,a)=>(i(),y(o,{key:t.id,position:p.value[a].position,rotation:p.value[a].rotation},{default:_(()=>[r(u,{src:"androids/adran-engineered-arts-uk-wanda-tuerlinckx.webp",alt:m(t.title),id:m(t.title),width:"1.6",height:"2"},null,8,["alt","id"]),r(d,{class:"title",width:"7",baseline:"bottom",position:"1 .7 0",value:t.title},null,8,["value"]),r(d,{class:"description",baseline:"top",position:"1 .5 0",value:`${t.description}`},null,8,["value"])]),_:2},1032,["position","rotation"]))),128))]),_:1})]),_:1})}}});export{F as default};
