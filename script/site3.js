let nombre = prompt("Por favor, ingrese su nombre...");
if (nombre == "") {
    alert("No ingresaste nada");
}
else {
    alert("Hola " + nombre);
    console.log("Hola " + nombre)
}

class Producto {
    constructor(nombre, color, talle, disponible) {
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.disponible = disponible;
    }
} 
const productos = [];
productos.push(new Producto("ATHENEA", "Rojo" , 40, true));
productos.push(new Producto("AURORA", "Negro" , 39, true));
productos.push(new Producto("GAIA", "Rosa" , 38, true));
productos.push(new Producto("DELIA", "Gris" , 37, false));
productos.push(new Producto("CIRSE", "Blanco" , 36, false));
console.log(productos);



function buscarProducto(nombre, talle){
    return nombre.find(objeto => objeto.nombre === talle.toUpperCase());
}
for (let index = 0; index < 3; index++) {
productos.push(new Producto("GAIA", "Rosa" , 38, true));
let busqueda = buscarProducto(productos, prompt('INGRESAR NOMBRE DEL ZAPATO \n\n 1- ATHENEA \n\n 2- AURORA \n\n 3- DELIA \n\n 4- GAIA'));
    if(busqueda != undefined){
        alert('nombre '+ busqueda.nombre+' color '+ busqueda.color+' talle '+ busqueda.talle);
    }else{
        alert('NO EXISTE ZAPATO CON ESE NOMBRE');
    }
}
console.log(buscarProducto);

