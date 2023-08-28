const canvas = document.querySelector("#canvas");

const line = (x1, y1, x2, y2) => {
    canvas.appendChild(obj("line", x1, y1, x2, y2));
};

const obj = (name, ...p) => {
    let o = document.createElementNS("http://www.w3.org/2000/svg", name);
    
    if (name === "line") {
        o.setAttribute("x1", p[0]);
        o.setAttribute("y1", p[1]);
        o.setAttribute("x2", p[2]);
        o.setAttribute("y2", p[3]);
    }
    
    return o;
};

line(10, 10, 200, 200);
