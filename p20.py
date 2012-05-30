def factorial(n):
	return n != 0 and n * factorial(n-1) or n

def solve(n):
	return sum(map(int, str(factorial(n))))

print solve(100) 
