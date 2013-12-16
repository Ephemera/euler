maximum = 0
for i in xrange(100):
    for j in xrange(100):
        m = sum(map(int, list(str(pow(i,j)))))
        if maximum < m:
            maximum = m
print maximum 
