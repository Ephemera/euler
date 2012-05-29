solve = (n) ->
	arr = [3..n]
	result = [2]
	for i in arr
		for j in result
			if i % j == 0
				break
			else if  i % j != 0 and j == result[result.length-1]
				result.push(i)
	return result

console.log solve(2000000).reduce (t, s) -> t + s

