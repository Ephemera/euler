from math import sqrt 
import itertools

def sieveOfErat(end):
	if end < 2:
		return []

	# The array doesn't need to include even nubers
	lng = ((end/2)-1 + end%2)

	# Create array and assume all numbers in array are prime
	sieve = [True] * (lng+1)

	"""
	In the following code, you're going to see some funky
	bit shifting and stuff, this is just transforming i and j
	so that they represent the proper elements in the array.
	The transforming is not optimal, and the number of
	operations involved can be reduced.
	"""

	# Only go up to squre root of the end
	for i in range(int(sqrt(end)) >> 1):
		# Skip numbers that aren't marked as prime
		if not sieve[i]:
			continue

		# Unmark all multiples of i, starting at i**2
		for j in range( (i*(i + 3) << 1) + 3, lng, (i << 1) + 3):
			sieve[j] = False

	# Don't forget 2!
	primes = [2]

	# Gather all the primes into a list, leaving out the composite numbers
	primes.extend([(i << 1) + 3 for i in range(lng) if sieve[i]])

	return primes

def chk(n):
	nn = str(n)
	for n in range(len(nn)):
		nn = nn[1:] + nn[:1]
		if int(nn) in s:
			''	
		else:
			return False
	return True

s = sieveOfErat(1000000)
d = []
for i in range(1, 1000000):
	if i in s:
		if chk(i):
			d.append(i)

print len(d)
