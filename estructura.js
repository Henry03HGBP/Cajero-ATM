const form = document.getElementById("form")
//const contraseñaConfirma = document.getElementById("contraseñaConfirma")

const userdb="Henry"
const passwordb="America"
function validar(u, p){
    if(u===userdb && p===passwordb){
        alert("Bienvenido a Bank Money")
        console.log("Bienvenido")
        window.location.href="./principal.html"
    } else {
        alert("El usuario o la contraseña son incorrectos") 
    }
}
//Establecemos el evento submit para el form y prevenimos el envío
form.addEventListener("submit",(e) => {
    e.preventDefault()
    const usuario = document.getElementById("usuario").value
    const contraseña = document.getElementById("contraseña").value
    validar(usuario,contraseña)
    }
);
