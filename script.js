const canvas = document.querySelector("#canvas")
const obj = (name, ...p)=>{return document.createElement(name, name==="line" ? name==="rect" ? {x:p[0],y:p[1],width:p[2],height:p[3]} : {x1:p[0],y1:p[1],x2:p[2],y2:p[3]} : {})}
const line = (x1,y1,x2,y2)=>{canvas.appendChild()}
console.log(obj("line", 200, 200, 100,100))