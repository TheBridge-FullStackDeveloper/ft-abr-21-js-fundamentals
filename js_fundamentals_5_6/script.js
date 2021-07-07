console.log("Funciona desde javascript");
console.warn("cuidado");
console.error("Esto ha petado");

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

// Invocar función
let a = 2;
let b = 3;
console.log("La suma es: " + suma(2, 3) + ". La resta es:" + resta(5, 2));
// Template string
console.log(`Cálculos de ${a} y ${b}: 
            SUMA: ${suma(a, b)}. 
            RESTA: ${resta(a, b)}`);

// Selectores
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");
let resultado3 = document.getElementById("resultado3");
let resultado4 = document.getElementById("resultado4");

function calcular() {
  console.log(suma(2, 2));

  let mensaje = `Cálculos de ${a} y ${b}: 
                    SUMA: ${suma(a, b)}. 
                    RESTA: ${resta(a, b)}`;

  resultado1.classList.toggle("big_red");
  resultado1.innerHTML = mensaje;
}

/********* Ejemplo 1 ***********/
document.getElementById("boton1").addEventListener("click", calcular);

/********* Ejemplo 2 ***********/

resultado2.addEventListener("mouseover", function () {
  resultado2.style.fontSize = "20px";
  resultado2.style.backgroundColor = "green";
});

resultado2.addEventListener("mouseout", function () {
  resultado2.style.fontSize = "16px";
  resultado2.style.backgroundColor = "#fff";
});

/********* Ejemplo 3 ***********/
resultado3.addEventListener("mouseover", function () {
  resultado3.classList.toggle("big_green");
});

resultado3.addEventListener("mouseout", function () {
  resultado3.classList.toggle("big_green");
});

/********* Ejemplo 4 ***********/

function crearLista() {
  let cabeceras = document.getElementsByTagName("h2");
  console.log(cabeceras);
  let ul = document.createElement("ul"); // UL

  for (let i = 0; i < cabeceras.length; i++) {
    const h2 = cabeceras[i];
    console.log(h2); // texto

    // Crear 2 nodos: LI + texto
    let li = document.createElement("li"); // LI
    let texto = document.createTextNode(h2.innerHTML); // Texto

    // unir nodos LI ----> Texto
    li.appendChild(texto);
    // unir cada LI con UL
    ul.appendChild(li);
  }
  // Une el UL al DOM
  resultado4.appendChild(ul);
}

document.getElementById("boton2").addEventListener("click", crearLista);

/********* Ejemplo 5 - Objetos ***********/
const person = {
  "first-name": "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName : function() {
    return "Nombre:"+ this["first-name"] + " " + this.lastName;
  },
  eat: function(food){
      return this.fullName() +" come "+ food
  },
  editName: function(name){
    const antes = this.fullName();
    this["first-name"] = name;
    console.log(`cambiado: ${antes} -----> ${this.fullName()}`);
  }
};

console.log(person);
console.log(person["first-name"]);
console.log(person.lastName);




// Cambiar
person["first-name"] = "Alejandro"
person.lastName = "Reyes"
person.age = 26
console.log(person);
console.log(person.fullName());
console.log(person.eat("Tortilla"));  
person.editName("Pikachu")




const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "<men>      </men>'s clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
];

console.log(products[1].category);
console.log(products[2].image);
console.log(Object.keys(products[0])); // Devuelve claves

document.getElementById("boton3").addEventListener("click", function () {
    const url = products[2].image;
    const title = products[2].title;
    const price = products[2].price;

    const figure = ` 
                <figure>
                    <img src="${url}" alt="${title}" class="product">
                    <figcaption>${title} - Precio: ${price}€ </figcaption>
                </figure>  `;
        
    document.getElementById("resultado5").innerHTML = figure;
              
});

/********* Ejemplo 6 - Array de objetos ***********/

document.getElementById("boton4").addEventListener("click", function () {

    for (let i = 0; i < products.length; i++) {
        
        const url = products[i].image;
        const title = products[i].title;
        const price = products[i].price;
    
        const figure = ` 
                    <figure>
                        <img src="${url}" alt="${title}" class="product">
                        <figcaption>${title} - Precio: ${price}€ </figcaption>
                    </figure>  `;
            
        document.getElementById("resultado6").innerHTML += figure;
    }          
});

/********* Ejemplo 7 - Selectores class ***********/

console.log(document.getElementsByClassName("shield"));
let articles = document.getElementsByClassName("shield");

for (let i = 0; i < articles.length; i++) {
    console.log(articles[i].innerHTML);  
    console.log(articles[i].getElementsByTagName("h2")[0].innerHTML);              
}


/********* Ejemplo 7 - QuerySelector ***********/
console.log(document.querySelector("#resultado2"));
console.log(document.querySelector("p"));
console.log(document.querySelector(".shield"));

console.log(document.querySelector(".shield>h2").innerHTML);

// ALL
console.log(document.querySelectorAll(".shield>h2")[2].innerHTML);


// Demo

let lista2 = document.querySelectorAll(".clase2 > a");
console.log(lista2[0].href);
// pruebas con selectores
console.log(document.getElementById('miId1').innerText) // uno
console.log(document.querySelector('#miDiv .miClase').innerText) // cinco
console.log(document.querySelector('#miDiv #miId1.miClase').innerText) // uno
console.log(document.querySelectorAll("#miDiv .miClase"));



