import{g as m,i as f,C as g}from"./util-6344b0c4.js";/* empty css              */const e=document.querySelector("canvas");if(e===null)throw new Error("canvas is null");const i=e.getContext("2d");if(i===null)throw new Error("context is null");e.width=1280;e.height=720;const l={x:Math.round(e.width/2),y:Math.round(e.height/2)};document.onmousemove=t=>{const n=e.getBoundingClientRect();l.x=Math.round(t.clientX-n.left),l.y=Math.round(t.clientY-n.top)};const x=(t,n)=>{const r=Math.max(n,Math.random()*t),o=t-n;return Math.min(r,o)},p=(t,n)=>{const r=Math.max(n,Math.random()*t),o=t-n;return Math.min(o,r)},y=(t,n,r,o)=>t.length===0?!1:t.filter(a=>{const c=m(a.x,a.y,n,r);return f(c,a.radius,o)}).length>0;let u;const w=()=>{u=[];const t=150,n=25,r="hsl(240, 41%, 35%)";for(let o=0;o<t;o++){let s,a=0,c,h=!0;for(;h;)s=x(e.width,n),a=p(e.height,n),!y(u,s,a,n)&&(h=!1,c=new g(i,s,a,n,r),u.push(c))}},d=()=>{requestAnimationFrame(d),i.clearRect(0,0,e.width,e.height),i.fillStyle="blue",i.font="16px arial",i.fillText(`x:${l.x} y:${l.y}`,l.x,l.y),u.forEach(t=>t.updateStroke())};w();d();