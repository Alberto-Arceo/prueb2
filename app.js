"use strict";
// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 24;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
//Funcion convertida
var miFuncionf = function (a, b) { return (a + b) * 2; };
//console.log( miFuncionf(2,3));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "Arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
    console.log(mensaje);
}
;
getAvenger("Iron Man", "dinero", "Armadura");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
