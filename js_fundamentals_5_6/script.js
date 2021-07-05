console.log("Funciona desde javascript");
console.warn("cuidado");
console.error("Esto ha petado");

function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

// Invocar función
let a = 2;
let b = 3;
console.log("La suma es: "+suma(2,3)+". La resta es:"+resta(5,2));
// Template string
console.log(`Cálculos de ${a} y ${b}: 
            SUMA: ${suma(a,b)}. 
            RESTA: ${resta(a,b)}`);

// Selectores
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");
let resultado3 = document.getElementById("resultado3");
let resultado4 = document.getElementById("resultado4");

function calcular() {
    console.log(suma(2,2));

    let mensaje = `Cálculos de ${a} y ${b}: 
                    SUMA: ${suma(a,b)}. 
                    RESTA: ${resta(a,b)}`;

    resultado1.classList.toggle("big_red");
    resultado1.innerHTML = mensaje;
}

/********* Ejemplo 1 ***********/
document.getElementById("boton1").addEventListener("click",calcular)

/********* Ejemplo 2 ***********/

resultado2.addEventListener("mouseover",function(){
    resultado2.style.fontSize = "20px";
    resultado2.style.backgroundColor ="green";
})

resultado2.addEventListener("mouseout",function(){
    resultado2.style.fontSize = "16px";
    resultado2.style.backgroundColor ="#fff";
})

/********* Ejemplo 3 ***********/
resultado3.addEventListener("mouseover",function(){
    resultado3.classList.toggle("big_green");
})

resultado3.addEventListener("mouseout",function(){
    resultado3.classList.toggle("big_green");
})


/********* Ejemplo 4 ***********/

function crearLista(){
   let cabeceras = document.getElementsByTagName("h2");

   let ul = document.createElement("ul"); // UL

    for (let i = 0; i < cabeceras.length; i++) {
        const h2 = cabeceras[i];
        //console.log(h2.innerHTML) // texto

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

document.getElementById("boton2").addEventListener("click",crearLista)


