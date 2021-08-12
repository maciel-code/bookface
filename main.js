











//-----------------------------------Guardar-Usuario----------------------------------------------------------------------

const btn = document.querySelector("#btn").addEventListener('click', guardar)
const nombre = document.querySelector('#nombre');
const pasw = document.querySelector('#paw');
let datos = [];

function guardar() {
    datos.push(nombre.value, pasw.value)
    console.log(datos)
    console.log("usuario : " + datos[0] + " " + "contraseña: " + datos[1])
    localStorage.setItem("cuenta de : ", JSON.stringify(datos));

}
let timer = setTimeout(() => {
    console.log("HOLAAAAA A TODOSSSS SOY BRANDON")
}, 2000)
//---------------------------------------------------------------------------------------------------------


