"use strict";

BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

function procesa(){

    var Clave = document.getElementById("clave").value,
    Nombre = document.getElementById("nombre").value,
    Telefono = document.getElementById("telefono").value,
    Personas = document.getElementById("personas").value,
    fecha = document.getElementById("fecha").value;
    
    
    salidaFecha.textContent = "Fecha: "+fecha;
    salidaClave.textContent = "Clave: "+Clave;
    salidaNombre.textContent = "Nombre: "+Nombre;
    salidaTelefono.textContent = "Telefono: "+Telefono;   

}

function alerta(){

    var 
    Clave = document.getElementById("clave").value,
    Nombre = document.getElementById("nombre").value,
    Telefono = document.getElementById("telefono").value,
    fecha = document.getElementById("fecha").value;
    
    alert ( "Su reservación se guardo con exito con fecha: "     + fecha + 
     "Para:  "      + Clave +        
                     "A nombre de:  "        + Nombre + 
                    "Telefono de contacto  " + Telefono);

}
