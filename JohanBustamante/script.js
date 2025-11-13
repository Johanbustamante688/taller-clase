//Necesito un programa que calcule el total de mi compra en el supermercado. 
// Pide el precio de tres productos diferentes y muestra el total a pagar.

//prompt("Ingrese sus productos: ")

console.log("Sus productos y su precio son: ")
let precioUno = 2000
let precioDos = 5000
let precioTres = 4000

console.log("Leche $ " , precioTres)
console.log("Huevos $ " , precioDos)
console.log("Azucar $ " , precioUno)

let totalCompra = (precioUno  + precioDos  + precioTres)


console.log("Total a pagar: " , totalCompra)

//Para un evento, necesito un banner. Pide el ancho y el alto de una pared (en metros) y calcula su área para saber cuánto material comprar.

//prompt("Ingrese el ancho de la pared en metros: ")

//prompt("Ingrese la altura de la pared en metros: ")

let anchoPared = prompt("Ingrese el ancho de la pared en metros: ") 
let alturaPared = prompt("Ingrese la altura de la pared en metros: ")
let areaPared = (anchoPared * alturaPared)

console.log("El ancho de la pared en metros es: " , anchoPared)
console.log("La altura de la pared en metros es: " , alturaPared)
console.log("El area de la pared en metros cuadrados es: " , areaPared)





