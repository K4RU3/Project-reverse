const canvas = document.querySelector("#canvas");
const setAttributes=(o, ...a)=>{for(const b of a){o.setAttribute(b[0], b[1])}}
const line = (x1, y1, x2, y2)=>{let l=document.createElementNS("http://www.w3.org/2000/svg","line");;setAttributes(l,["x1",x1],["y1",y1],["x2",x2],["y2",y2]);canvas.appendChild(l);}