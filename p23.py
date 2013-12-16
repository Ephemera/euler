def divisor(n):
    result = []
    for j in xrange(1, n/2+1):
        if n % j == 0:
            result.append(j)
    return result

abundant_list = []
for i in xrange(1, 28123):
    d = divisor(i)
    if sum(d) > i:
        abundant_list.append(i)

count = [] 
for i in abundant_list:
    for j in abundant_list:
        if i >= j:
            s = i + j
            if s <= 28123:
                count.append(s)
all_sum = 0
for i in xrange(28124):
    all_sum += i

print all_sum - sum(set(count))
