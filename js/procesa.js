"use strict";

BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

function procesa(){

    var Clave = document.getElementById("clave").value,
    Nombre = document.getElementById("nombre").value,
    Telefono = document.getElementById("telefono").value,
    Personas = document.getElemtById("personas").value,
    fecha = document.getElementById("fecha").value;
    
    
    salidaFecha.textContent = "Fecha: "+fecha;
    salidaClave.textContent = "Clave: "+Clave;
    salidaNombre.textContent = "Nombre: "+Nombre;
    salidaPersonas.textContent = "Personas: "+Personas;
    salidaTelefono.textContent = "Telefono: "+Telefono;   

}

function alerta(){

    var 
    Clave = document.getElementById("clave").value,
    Nombre = document.getElementById("nombre").value,
    Telefono = document.getElementById("telefono").value,
    Personas = document.getElemtById("personas").value,
    fecha = document.getElementById("fecha").value;
    
    alert ( "Su reservación se guardo con exito con fecha: " + fecha + "\nPara:  " + Clave + " A nombre de:  " + Nombre + " Personas: " + Personas +" Telefono de contacto:  " + Telefono);

}
