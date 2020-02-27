var animals = [
	{ name: 'A', species: 'rabbit' },
	{ name: 'B', species: 'dog' },
	{ name: 'C', species: 'dog' },
	{ name: 'D', species: 'fish' },
	{ name: 'E', species: 'cat' },
	{ name: 'F', species: 'fish' },
]


/*** Filter ***/
/* Transforma em um matriz de tamanho menor */
var isDog = function(animal) {
	return animal.species === 'dog'
}

var dogs = animals.filter(isDog)

console.log('dogs', dogs)

// var dogs = []
// for (var i = 0; i < animals.length; i++) {
// 	if (animals[i].species === 'dog')
// 		dogs.push(animals[i])
// }

/*** Find ***/
/* Mesmo que o filter, mas somente a primeira entrada */

var firstAnimal = animals.find(isDog)
console.log('firstAnimal', firstAnimal)

/*** Map ***/
/* Pega uma matriz e a transforma em outra do mesmo tamanho,
mas com as entradas transformadas */

var names = animals.map((animal) => animal.name)
console.log('names', names)

// var names = [];
// for (var i = 0; i < animals.length; i++) {
// 	names.push(animals[i].name)
// }

/*** Map ***/