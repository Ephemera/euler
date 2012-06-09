n = 1000000
num = 0

palin = (n) ->
	str = n.toString()
	len = str.length
	cnt = len/2|0
	idx = 0
	for j in [1..cnt]
		if str[idx] != str[len+~idx]
			return false
		else
			if j is cnt
				return true
		idx++
	return false

solve = (n) ->
	for i in [1..n]
		if palin(i) == true
			two = i.toString(2)
			if palin(two) == true
				num = num + i 
	return num
console.log solve(n)

