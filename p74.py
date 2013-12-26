from math import factorial

cache = [[-1] for i in xrange(10000000)]

def factorialChain(o, n, l):
    s = sum(map(factorial, map(int, list(str(n)))))
    if len(l) > 60: return l

    result = cache[n]
    
    if result != [-1]:
        result = l + result
        return result 
    else:
        result = l

    if s in result: 
        cache[o] = result[:result.index(n)] 
        return cache[o] 

    result.append(s)
    return factorialChain(o, s, result)

count = 0
for i in xrange(1000000):
    f = factorialChain(i, i, [i])
    if len(f) == 60:
        count += 1
print count
