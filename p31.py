a = [200, 100, 50, 20, 10, 5, 2, 1]


def calc(n, c):
    if n == 0 or c == 7: return 1

    result = 0  
    for i in xrange(n/a[c], -1, -1):
        result += calc(n - i * a[c], c + 1)
    return result
print calc(200, 0)
