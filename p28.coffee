n = 1; j = 2
sum = 1
while true
	for i in [1..4]	
		n = n + j
		sum += n
	j += 2
	if j > 1000 
		break
console.log sum
