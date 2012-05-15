fs = require 'fs'
fileText = fs.readFileSync(process.argv[2]).toString().replace(/\"/g,'').split(',').sort()
sum = 0
for i in [1..fileText.length]
	count = 0
	for j in fileText[i-1].split('')
		count += j.charCodeAt() - 64
	sum += count * i
console.log sum
