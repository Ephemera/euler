chk = (n) ->
	arr = [2..n]
	T = true
	i = 1
	while T
		for j in arr
			if i%j is 0
				if j is n
					return i
					T = false
			else
				break
		i = i + 1
console.log chk(20)
