import{i as m,j as f,k as h,l as v,s as a,u as r,o as i,b as l,e as o,f as t,m as k,q as y,p as b,h as C,a as x}from"./entry.9730d326.js";import P from"./Controls.63f4c45b.js";import"./Arrow.a9f4d158.js";function S(){return m().$device}const V=f("main",{state:()=>({controlsPopupVisible:!1})}),_=s=>(b("data-v-f22e8a76"),s=s(),C(),s),g={class:"card-content"},I={class:"card-header"},N={class:"title"},w=_(()=>o("h3",null,"Controls",-1)),z={class:"card-information"},B=_(()=>o("div",{class:"card-paragraph"},[o("p",null,"Move around with the WASD-keys or the arrow-keys of your keyboard. Look around by draging your mouse over the screen.")],-1)),D={key:1,class:"mobile-controls"},A=h({__name:"ControlsPopup",setup(s){const p=v(),e=V();a(p),a(e);const{isDesktop:u}=S();function d(){e.controlsPopupVisible=e.controlsPopupVisible!=!0}return(M,j)=>{const n=y,c=P;return r(u)?(i(),l("div",{key:0,class:k([{closed:r(e).controlsPopupVisible},"controls-popup"])},[o("section",g,[o("div",I,[o("div",N,[t(n,{name:"carbon:chart-3d",size:"32"}),w]),t(n,{onClick:d,class:"close",name:"ic:outline-close",size:"36"})]),o("div",z,[B,t(c)])])],2)):(i(),l("div",D,[t(c)]))}}});const R=x(A,[["__scopeId","data-v-f22e8a76"]]);export{R as default};