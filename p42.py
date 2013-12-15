import shlex, string, math
f = shlex.split(open('words.txt').read())[0].split(',')

cache = [0 for i in xrange(2001)]
alphabet = string.ascii_uppercase
def check(s):
    result = 0
    for i in s:
        result += alphabet.index(i) + 1
    if result in cache:
        return True
    else:
        x = int(math.sqrt(result * 2))
        if ((x * (x+1)) / 2)  == result:
            cache[x] = result
            return True
        else:
            return False

res = 0
for i in f:
    if check(i):
        res += 1

print res

