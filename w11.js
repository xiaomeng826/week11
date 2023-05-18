let svg = document.getElementById("base_svg");
let circle = document.getElementById("mycircle")
circle.setAttribute("r",20);
let r = Math.round(Math.random() * 255);
let g = Math.round(Math.random() * 255);
let b = Math.round(Math.random() * 255);
circle.setAttribute('fill', `rgb(${r}, ${g}, ${b})`);
circle.setAttribute('cx',Math.random()*500)
circle.setAttribute('cy',Math.random()*500)
let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
newCircle.setAttribute("cx","300")
newCircle.setAttribute("cy","300")
newCircle.setAttribute("r","60")
newCircle.setAttribute("fill","#ffffff")
svg.appendChild(newCircle)
const circletwo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circletwo.setAttribute("cx", "50");
circletwo.setAttribute("cy", "50");
circletwo.setAttribute("r", "30");
circletwo.setAttribute("fill", "blue");
svg.appendChild(circletwo)
let rect = document.getElementById("myrect")
rect.setAttribute('height',Math.random()*500)
rect.setAttribute('width',Math.random()*200)