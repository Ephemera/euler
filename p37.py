from prime import prime

p = prime[:200000]
cache = [-1 for i in xrange(10000000)] 
n = 0
count = 0
#for j in xrange(9, 10000000): 
for j in p[4:]: 
    a = str(j)
    f = True 

    for i in xrange(len(a)):
        x = int(a if a[:-i] == '' else a[:-i])
        y = int(a if a[i:] == '' else a[i:])

        xx = cache[x]
        yy = cache[y]

        if xx == -1:
            xx = x in p 
            cache[x] = xx

        if yy == -1:
            yy = y in p
            cache[y] = yy


        if not xx or not yy:         
            f = False
            break
    if f:
        count += 1
        n += j
        print count, j
        if count > 10:
            break

print n
