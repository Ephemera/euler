sum = 0
for i in [1..999999]
	s = i.toString()
	p = 0
	for j in s
		p += Math.pow(j, 5)
	if p is i and i != 1 
		sum += p
console.log sum
