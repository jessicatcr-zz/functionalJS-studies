/*** Closure ***/
/* As funções tem acesso a variáveis fora do escopo dela,
não precisando enviar argumento, caso tenha sido declarado antes.
Pega o último valor que a variável recebeu antes da chamada da função */


var me = 'Jéssica Rodrigues'

function greetMe() {
	console.log('Hello, ' + me + '!')
}

me = 'Jess'
greetMe()

/* <Sem closure> */

// function greetMe(me) {
// 	console.log('Hello, ' + me + '!')
// }

// greetMe('Jess Rodrigues')

/* </ Sem closure> */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
/*Funções aninhadas têm acesso a variáveis ​​declaradas em seu escopo externo.*/
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

function makeFunc() {
  var name2 = 'Mozilla2';
  function displayName() {
    console.log(name2);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
// add5 e add10 ambas são closures.
console.log(add5(2));  // 7
console.log(add10(2)); // 12