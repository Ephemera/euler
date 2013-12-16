from itertools import product 
from eulertools import is_probable_prime

for n in set([i[0]*i[1] for i in product(range(3, 1000, 2), repeat=2)]):
    i = 0
    detect = True
    while True:
        i += 1 
        if 2 * pow(i, 2) > n: break
        remainder = n - (2 * pow(i, 2))
        if remainder >= 2 and is_probable_prime(remainder):
            detect = False

    if detect:
        print n
        break

