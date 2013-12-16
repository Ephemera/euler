#from prime import prime
from eulertools import is_probable_prime


def run():
    maximum_index = 0 
    maximum = 0
    num_list = []
    P = [i for i in xrange(2, 1000000) if is_probable_prime(i)] 
    for p in P:
        num_list.append(0)
        for i in xrange(len(num_list)):
            num_list[i] += p   
            if num_list[i] in P and num_list[i] < 1000000:
                if maximum_index < len(num_list) - i:
                    maximum_index = len(num_list) - i
                    maximum = num_list[i]
        if num_list[-1] >= 1000000 or p > 4000:
            return maximum
        if num_list[0] > 1000000:
            del num_list[0]
print run()
