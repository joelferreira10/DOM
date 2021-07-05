const contenido=document.querySelectorAll("#main p");
console.log(contenido)
contenido[0].innerHTML="<h1 class='color'>primer parrafo</h1>";
contenido[1].innerHTML="segundo parrafo";
contenido[2].innerHTML="tercer parrafo";

contenido[1].style.color="red";
contenido[2].className="color2";

