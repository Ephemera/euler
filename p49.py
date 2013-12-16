from eulertools import is_probable_prime
from prime import prime


prime2 = prime[:1229]
for i in prime2:
    for j in prime2:
        if i > j and i != j and i >= 1000 and j >= 1000:

            m = (i + j) / 2
            if m in prime2 and set(str(i)) == set(str(j)) == set(str(m)):
                print j, (i+j) / 2, i
