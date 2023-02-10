class nuevoIngreso{
    constructor(ingreso, categoria){
        this.ingreso= ingreso;
        this.categoria= categoria.toLowerCase();
    }
}

const sueldo = new nuevoIngreso(50000, "salario");
const plazoFijo = new nuevoIngreso(5000, "intereses");

const arrayIngresos=[sueldo, plazoFijo];

const totalIngresos= arrayIngresos.reduce((acumulador, item) => acumulador + item.ingreso, 0);
console.log(totalIngresos);


class nuevoGasto{
    constructor(gasto, categoria){
        this.gasto = gasto;
        this.categoria = categoria.toLowerCase(); 
    }
}
const movistar= new nuevoGasto(1800, "servicios");
const supermercado = new nuevoGasto(8500, "alimentos");

const arrayGastos= [movistar, supermercado];

const totalGastos = arrayGastos.reduce ((acumulador, item) => acumulador + item.gasto, 0);
console.log(totalGastos);


//Menu inicial

function menu(){
    let opcion= parseInt(prompt ("Gestión de dinero personal \nIngrese una de las siguientes opciones:\n1) Ingreso de dinero \n2)Gastos \n3)Consultar saldo \n4)Salir"));
    return opcion
}


//Opción 1 - Ingreso de dinero

function ingresoDinero(){
    let ingreso= parseFloat(prompt("Monto ingresado:"));
    let categoriaIngreso= prompt("¿A qué categoría corresponde este monto?: \n-Salario \n-Horas extra \n-Intereses \n-Otra");
    let ingresa= new nuevoIngreso(ingreso, categoriaIngreso);
    arrayIngresos.push(ingresa);
    console.log(arrayIngresos);
 }

//Opción 2 - Gastos

function ingresoGasto(){
    let gasto = parseFloat(prompt("Ingrese monto:"));
    let categoriaGastos= prompt("¿A qué categoría corresponde este gasto? \nSeleccione una de las siguientes: \n-Alimentos \n-Servicios \n-Tarjeta de crédito \n-Salud \n-Otros");
    let ingresoGasto= new nuevoGasto (gasto, categoriaGastos);
    arrayGastos.push(ingresoGasto);
    console.log(arrayGastos);
}

//Opción 3 - Consultar saldo

const saldo = (a,b) => a-b;
let saldoActual = saldo(totalIngresos, totalGastos);
console.log(saldoActual);

function informe(){
    alert("Tu saldo actual es de $" + saldoActual);
}

// Opción 4 - Salir

function salida(){
    alert("¡Hasta pronto!");
}

let opcion= menu();

switch(opcion){
    case 1:
        ingresoDinero();
        break;

     case 2:
        ingresoGasto();
        break;

    case 3:
         informe();
        break;

    case 4:
        salida();
        break;

    default:
            alert("Intente nuevamente");
            break;

} 

