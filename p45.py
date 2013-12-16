tria = [i * ( i + 1 ) / 2 for i in xrange(1, 100000)]
pent = [i * ( 3*i - 1 ) / 2 for i in xrange(1, 100000)] 
hexa = [i * ( 2*i - 1 ) for i in xrange(1, 100000)]

print set(tria) & set(pent) & set(hexa)

