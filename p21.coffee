sum = 0
for i in [2..10000]
	a = (j for j in [1..i-1] when i%j == 0).reduce (t, s) -> t + s
	b = (j for j in [1..a-1] when a%j == 0).reduce (t, s) -> t + s
	if i == b and a != b
		sum += a
console.log sum
