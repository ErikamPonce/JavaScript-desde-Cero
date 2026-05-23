alert ("Hola Mundo")

//ingresar datos
let opcion = parseInt(prompt(
`Bienvenido al cajero automático
1. Consultar saldo
2. Depositar dinero
3. Retirar dinero
4. Salir`       
));

let saldo = 1000;
switch (opcion) {
    case 1:
        alert(`Su saldo es: $${saldo}`);  
        break;
    case 2:
        let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
        saldo += deposito;  
        alert(`Su saldo es: $${saldo}`);
        break;
    case 3:
        let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
        saldo -= retiro;
        alert(`Su saldo es: $${saldo}`);
        break;
    case 4:
        alert("Gracias por usar el cajero automático");
        break;
    default:
        alert("Opción no válida");
}

