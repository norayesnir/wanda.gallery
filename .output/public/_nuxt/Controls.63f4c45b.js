import m from"./Arrow.a9f4d158.js";import{a as l,o as v,b as T,e as d,f as p,w as i}from"./entry.9730d326.js";const M={data(){return{timer:null,interval:10}},methods:{handleClick(n){const a=document.querySelector("#mario"),s=a.getAttribute("position"),o=a.getAttribute("rotation");switch(n){case"down":a.setAttribute("position",`${s.x-.1*Math.sin(o.y/180*Math.PI)} ${s.y} ${s.z-.1*Math.cos(o.y/180*Math.PI)}`);break;case"up":a.setAttribute("position",`${s.x+.1*Math.sin(o.y/180*Math.PI)} ${s.y} ${s.z+.1*Math.cos(o.y/180*Math.PI)}`);break;case"right":a.setAttribute("position",`${s.x-.1*Math.cos(o.y/180*Math.PI)} ${s.y} ${s.z+.1*Math.sin(o.y/180*Math.PI)}`);break;case"left":a.setAttribute("position",`${s.x+.1*Math.cos(o.y/180*Math.PI)} ${s.y} ${s.z-.1*Math.sin(o.y/180*Math.PI)}`);break}},startTimer(n){this.timer=setInterval(()=>{this.handleClick(n)},this.interval)},stopTimer(){clearInterval(this.timer)}},mounted(){window.addEventListener("keydown",n=>{if(n.code.startsWith("Arrow")){const t=n.code.substring(5).toLowerCase();this.startTimer(t)}}),window.addEventListener("keyup",n=>{n.code.startsWith("Arrow")&&this.stopTimer()})}};const w={class:"controls"};function y(n,t,a,s,o,e){const u=m;return v(),T("div",w,[d("button",{onMousedown:t[0]||(t[0]=r=>e.startTimer("up")),onMouseup:t[1]||(t[1]=r=>e.stopTimer()),onTouchstart:t[2]||(t[2]=i(r=>e.startTimer("up"),["prevent"])),onTouchend:t[3]||(t[3]=i(r=>e.stopTimer(),["prevent"])),class:"up"},[p(u,{class:"arrow"})],32),d("button",{onMousedown:t[4]||(t[4]=r=>e.startTimer("left")),onMouseup:t[5]||(t[5]=r=>e.stopTimer()),onTouchstart:t[6]||(t[6]=i(r=>e.startTimer("left"),["prevent"])),onTouchend:t[7]||(t[7]=i(r=>e.stopTimer(),["prevent"])),class:"left"},[p(u,{class:"arrow"})],32),d("button",{onMousedown:t[8]||(t[8]=r=>e.startTimer("down")),onMouseup:t[9]||(t[9]=r=>e.stopTimer()),onTouchstart:t[10]||(t[10]=i(r=>e.startTimer("down"),["prevent"])),onTouchend:t[11]||(t[11]=i(r=>e.stopTimer(),["prevent"])),class:"down"},[p(u,{class:"arrow"})],32),d("button",{onMousedown:t[12]||(t[12]=r=>e.startTimer("right")),onMouseup:t[13]||(t[13]=r=>e.stopTimer()),onTouchstart:t[14]||(t[14]=i(r=>e.startTimer("right"),["prevent"])),onTouchend:t[15]||(t[15]=i(r=>e.stopTimer(),["prevent"])),class:"right"},[p(u,{class:"arrow"})],32)])}const f=l(M,[["render",y],["__scopeId","data-v-d9ad4861"]]);export{f as default};