from operator import itemgetter

def divider(n, m):
    i = 0
    s = ''
    l = []
    while n > 0:
        if i == 1:
            s += '.'
        i += 1
        s += str(n/m)
        n = (n % m) * 10
        if n in l:
            return int(''.join(map(str, s[l.index(n)+2:]))), s
        else:
            l.append(n)
        if i > 1000:
            return (0 , s)
    return (0, s) 

result = []
for i in xrange(2, 1000):
    result.append(divider(1, i) + (i,))
print sorted(result, key=itemgetter(0))[-1][2]
