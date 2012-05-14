sum = 0
chk = (n) -> return (j for j in [1..n-1] when n%j == 0).reduce (t, s) -> t + s
for i in [2..10000]
	a = chk(i) 
	if a != i and i == chk(a) 
		sum += a
console.log sum
