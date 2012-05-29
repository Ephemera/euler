def solve(n):
	str = repr(pow(2,n))[:-1]
	return sum(map(int, str))
print solve(1000)
