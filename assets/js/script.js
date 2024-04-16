// let nombre1 = "Rebeca";
// let nombre2 = "Ulises";
// let nombre3 = "Damaris";
// let nombre4 = "Carlos";

/*--------ARREGLOS----------*/

let nombres = [
  "Rebeca",
  "Ulises",
  "Damaris",
  "Carlos",
  "Rebeca",
  "Arturo",
  "Jorge",
  "Sofia",
];

/* ACCEDER A LOS VALORES */
nombres;
// devuelve ---> (4) ['Rebeca', 'Ulises', 'Damaris', 'Carlos']
nombres[0];
// devuelve ---> 'Rebeca'
nombres[1];
// devuelve ---> 'Ulises'
nombres[2];
// devuelve ---> 'Damaris'
nombres[3];
// devuelve ---> 'Carlos'

/* CANTIDAD DE ELEMENTOS */
nombres.length;
// devuelve 8
nombres[nombres.length - 1];
// devuelve el ultimo valor

/*------------ BUCLES -----------   */

//FOR LOOP
for (let i = 0; i < nombres.length; i++) {
  const element = nombres[i];
  console.log(element, "<-----for loop");
}

//FOR OF
for (const iterator of nombres) {
  console.log(iterator, "<-----for of");
}

/*----------OPERADORES ARITMETICOS ------------*/
let numero = 0;

// ====> SUME DE A 1
numero++;
// devuelve ---> 0
numero++;
// devuelve ---> 1
numero++;
// devuelve ---> 2
numero++;
// devuelve ---> 3

// ===> RESTA DE A 1
numero = 10;
// devuelve ---> 10
numero--;
// devuelve ---> 10
numero--;
// devuelve ---> 9
numero--;
// devuelve ---> 8
numero--;
// devuelve ---> 7

//===>   SUME, RESTA, MULTIPLICA, ETC en base al valor
numero;
// devuelve ---> 100
numero += 20;
// devuelve ---> 120
numero -= 20;
// devuelve ---> 100
numero *= 2;
// devuelve ---> 200
numero /= 3;
// devuelve ---> 66.66666666666667
numero;
// devuelve ---> 66.66666666666667

/*------BUCLES + TEMPLATE LITERAL----------*/
const data = ["Damaris", "Carlos", "Rebeca", "Arturo", "Jorge"];

const dynamic = document.querySelector("#dynamic-content");
let item = "";

for (const iterator of data) {
  //console.log(iterator, "<-----iterador de data");
  //dynamic.innerHTML += `<li>${iterator}</li>`;
  item += `<li>${iterator}</li>`;
  //console.log(item, "<---item dentro del loop");
}
//console.log(item, "<---item fuera del loop");
dynamic.innerHTML = item;

/*----------OBJETOS-----------*/
let datos = [
  "Maria",
  "Fernandez",
  "45",
  "Uruguay",
  ["Pepe", "Toto"],
  () => {
    console.log("Hola soy Mari");
  },
];

let persona = {
  nombre: "Maria",
  apellido: "Fernandez",
  edad: "45",
  paisDeResidencia: "Uruguay",
  mascotas: ["Pepe", "Toto"],
  saludo: () => {
    console.log("Hola soy Mari");
  },
};

/* ===> ACCEDER A LOS VALORES <===*/
//BRACKET NOTATION
persona["nombre"];
// devuelve ---> 'Maria'
persona;
// devuelve ---> {nombre: 'Maria', apellido: 'Fernandez', edad: '45', paisDeResidencia: 'Uruguay', mascotas: Array(2), …}apellido: "Fernandez"edad: "45"mascotas: (2) ['Pepe', 'Toto']nombre: "Maria"paisDeResidencia: "Uruguay"saludo: () => {
//     console.log("Hola soy Mari");
//   }[[Prototype]]: Object
persona["nombre"];
// devuelve ---> 'Maria'
persona["saludo"];
// devuelve ---> () => {
//    console.log("Hola soy Mari");
//  }
persona["saludo"]();
// devuelve --->  Hola soy Mari
persona["mascotas"];
// devuelve ---> (2) ['Pepe', 'Toto']
persona["mascotas"][0];
// devuelve ---> 'Pepe'
persona["mascotas"][1];
// devuelve ---> 'Toto'

//DOT NOTATION  -----No Acepta variables
persona.edad;
// devuelve ---> '45'
persona.saludo();
// devuelve ---> Hola soy Mari
persona.mascotas[1];
// devuelve ---> 'Toto'

/* ===> AGREGAR A LOS VALORES <===*/
//BRACKET NOTATION
persona["profesion"] = "Maestra";

//DOT NOTATION
persona.pasatiempo = "Pintura";

/* ===> MODIFICAR A LOS VALORES <===*/
//BRACKET NOTATION
persona["paisDeResidencia"] = "Chile";
//DOT NOTATION
persona.edad = persona.edad + 1;
persona.mascotas[0] = "Firulais";

/* ===> RECORRER EL OBJETO <===*/
for (const key in persona) {
  console.log(key, "<---KEY");
  console.log(persona[key], "<--- VALORES");
}

/* -------DOM + OBJETOS----------- */

const articulos = {
  id: 31,
  titulo: "Autos nuevos",
  subtitulo: "El mercado se normaliza",
  descipcion:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex debitis eaque earum rem minima iure sunt a quaerat modi corporis cumque impedit iste, eveniet illo eligendi, tempora, facere quas et?",
};

const articulosSection = document.querySelector(".articulos");

articulosSection.innerHTML = `<h4>${articulos.titulo}</h4>
<h6>${articulos.subtitulo}</h6>
<p>${articulos.descipcion}</p>
<a href="./articulo/${articulos.id}"><button>Ver Mas</button></a>`;

/*-----------ARREGLO DE OBJETOS------------*/

const productos = [
  {
    id: 1,
    nombre: "Item 1",
    valor: 1200,
  },
  {
    id: 2,
    nombre: "Item 2",
    valor: 2200,
  },
  {
    id: 3,
    nombre: "Item 3",
    valor: 3200,
  },
  {
    id: 4,
    nombre: "Item 4",
    valor: 4200,
  },
  {
    id: 5,
    nombre: "Item 5",
    valor: 5200,
  },
  {
    id: 6,
    nombre: "Item 6",
    valor: 6200,
  },
  {
    id: 7,
    nombre: "Item 7",
    valor: 7200,
  },
];

let html = "";
const ele = document.querySelector("#productos");

for (const iterator of productos) {
  // console.log(iterator, "<---iterador de objetos")
  html += `<div id="">
   <h2>${iterator.nombre}</h2>
   <p>${iterator.valor}</p>
   </div>`;
}

ele.innerHTML = html;
