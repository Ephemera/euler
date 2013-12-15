# http://rosettacode.org/wiki/Miller-Rabin_primality_test#Python
import random
from itertools import permutations

_mrpt_num_trials = 2 

def is_probable_prime(n):
    assert n >= 2
    if n == 2:
        return True
    if n % 2 == 0:
        return False

    s = 0
    d = n - 1
    while True:
        quotient, remainder = divmod(d, 2)
        if remainder == 1:
            break
        s += 1
        d = quotient
    assert( 2**s * d == n - 1 )

    def try_composite(a):
        if pow(a, d, n) == 1:
            return False
        for i in xrange(s):
            if pow(a, 2**i * d, n) == n - 1:
                return False
        return True
   
    for i in xrange(_mrpt_num_trials):
        a = random.randrange(2, n)
        if try_composite(a):
            return False
   
    return True

for i in permutations([7,6,5,4,3,2,1]):
    ii = int(''.join(map(str, i)))
    chk = is_probable_prime(ii)
    if chk:
        print ii
        break
