cache = {} 
for i in xrange(1,10000):
    a = list(str(pow(i, 3)))
    a.sort()
    aa = ''.join(a)
    if aa in cache:
        cache[aa].append(i)
    else:
        cache[aa] = [i]
      
for k, v in cache.iteritems():
    if len(v) == 5:
        print k, v, pow(v[0], 3)
