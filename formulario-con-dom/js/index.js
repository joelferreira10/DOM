// Escribe tu codigo JS acá
let form=document.getElementById("formulario");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let nombre= document.getElementById("floatingName").value,
        email=document.getElementById("floatingInput").value,
        mensaje=document.getElementById("floatingTextarea").value;

    document.getElementById("data-nombre").innerHTML+=nombre;
    document.getElementById("data-email").innerHTML+=email;
    document.getElementById("data-mensaje").innerHTML+=mensaje;
    
});

