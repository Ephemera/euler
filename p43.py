from itertools import permutations

divider = [2,3,5,7,11,13,17]
def check(t):
    for i, d in enumerate(divider): 
        if int(''.join(map(str, t[i+1:i+4]))) % d != 0:
            return False 
    return True 

result = 0
for p in permutations([9,8,7,6,5,4,3,2,1,0]):
    if p[0] != 0:
        if check(p):
            result += int(''.join(map(str, p)))
print result
