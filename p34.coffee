fact = (n) ->
	#return n and n * fact(n-1) or 1
	return [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880][n]

solve = () ->
	sum = 0
	for i in [10..50000]
		p = 0
		for j in i.toString()
			p += fact(+j)
		if p == i
			sum += p
	return sum

console.log solve()
