//declaro arreglo de operaciones
let operacionesBancarias = [1000, -500, 1500, -2000, 1200, -1200]
//declarando funcion de operaciones
function calculateBalance(arreglosDeOperaciones) {
    let saldoDepositos = 0; // declaro las variables donde acumulare los saldos
    let saldoRetiros = 0;
    let saldoActual = 0;
    //recorro areglos de operaciones
    for (let i = 0; i < operacionesBancarias.length; i++) {
        if (operacionesBancarias[i] > 0) {
            saldoDepositos = saldoDepositos + operacionesBancarias[i];
        }
        else {
            saldoRetiros += operacionesBancarias[i];
        }

    }
    saldoActual = saldoDepositos - saldoRetiros;
    return (`El monto total de los depósitos es de: $${saldoDepositos} 
        El monto total de los retiros es de:$${saldoRetiros} 
        Por lo tanto, su saldo actual en la cuenta es de:$${saldoActual}`)
}

// console.log(calculateBalance(operacionesBancarias));

function bankBalance(nombre , apellido , arreglosDeOperaciones){
    let saldo = calculateBalance(arreglosDeOperaciones);
    return (`Estimada ${nombre} ${apellido } ${saldo}`)

}
// console.log (bankBalance("Melina" , "Correa" , operacionesBancarias));
module.exports = bankBalance
