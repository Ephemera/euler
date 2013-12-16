from itertools import permutations

num_list = []
for p in permutations([1,2,3,4,5,6,7,8,9,0], 6):
    num_list.append(int(''.join(map(str, p))))

for n in num_list:
    if set(str(n*6)) == set(str(n*5)) == set(str(n*4)) == set(str(n*3)) == set(str(n*2)):
        print n 
        break
