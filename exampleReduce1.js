var orders = [
	{ amount: 250 },
	{ amount: 400 },
	{ amount: 100 },
	{ amount: 325 }
]

/*** Reduce ***/
/* 
Primeiro parâmetro: acumulador 
Segundo parâmetro: Objeto iterador
Retorno: operação desejada com os parâmentros
"Segundo retorno": ponto de partida para o acumulador
 */
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

// var totalAmount = 0
// for (var i = 0; i < orders.length; i++) {
// 	totalAmount += orders[i].amount
// }

console.log(totalAmount)