cache = []
for i in xrange(1, 100):
    for j in xrange(1, 100):
        p = pow(j, i)
        if len(str(pow(j, i))) == i:
            cache.append(p)
print cache, len(cache)
