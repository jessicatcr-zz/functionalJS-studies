//import fs from 'fs'

var fs = require('fs')

// Transformar o data.txt em formato de objeto 
var output = fs.readFileSync('data.txt', 'utf8')
			.split('\n')
			.map(line => line.split('\t'))
			.reduce((customers, line) => {
					customers[line[0]] = customers[line[0]] || []
					customers[line[0]].push({
						name: line[1],
						price: line[2],
						quantity: line[3],

					})
					return customers
				}, {})
		

// 2 espaços para identar
console.log('output', JSON.stringify(output, null, 2));
