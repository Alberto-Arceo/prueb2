
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 24;

let PERSONAJE = {
  nombre: nombre,
  edad: edad
};

interface SuperHeroes {
  nombre:string,
  [artesMarciales:string]:any
}
// Cree una interfaz que sirva para validar el siguiente objeto
let batman:SuperHeroes = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a:number, b:number ){
  return (a + b) * 2
}
//Funcion convertida
let miFuncionf = (a:number, b:number) => (a + b) * 2 ;

//console.log( miFuncionf(2,3));


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "Arco" ){
  var mensaje;
  if( poder ){
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = `${nombre} tiene un ${arma}`
  }

  console.log(mensaje);
};
 getAvenger("Iron Man","dinero","Armadura");

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
