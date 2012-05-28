def chk(n):
	arr = []
	for i in range(2,n+1):
		for j in range(2, n+1):
			p = pow(i, j)
			if p not in arr:
				arr.append(p)
	return arr

print len(chk(100))
