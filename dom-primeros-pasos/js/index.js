// colocá todo tu código JS acá
//ejercicio 1

let title=document.querySelector("h1");
console.log(title);
title.textContent="Estoy agregando un nuevo texto";

let primerParrafo=document.querySelector("p");
primerParrafo.innerHTML="<span>Estoy aprendiendo a manipular el DOM</span>";

let segundaLista=document.querySelectorAll("ul");
console.log("segunda lista: ");
console.log(segundaLista[1]);

//ejercicio 2
title.style.background="yellow";

let subTitle=document.querySelectorAll("h2");
console.log(subTitle);
for (let index = 0; index < subTitle.length; index++) {
    subTitle[index].classList.add("subtitulos");  
}

let styloLetras=document.querySelectorAll(".estilo-letras");
console.log(styloLetras);
for (let index = 0; index < styloLetras.length; index++) {
    styloLetras[index].classList.remove("estilo-letras");
    
}
console.log(styloLetras);

//ejercicio 3
let i=0;
let contadorClick=document.getElementById("btn-contador");
contadorClick.addEventListener("click",()=>{
    i++;
   document.querySelector("#contador-click").innerHTML=i;
   console.log(i);
})
