arr = []
for i in [1..1000]
	for j in [1..1000]
		a = 2000 * (i + j)
		b = 1000000 + 2 * i * j
		if a <= b && i < j
			c = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2))
			if c%1 == 0
				arr.push(i+j+c)

count = 0
temp = ''
result = [0, 0]
for j in arr.sort()
	if j == temp
		count += 1
		if result[1] < count
			result = [j, count]
	else
		count = 1
		temp = j
console.log result
