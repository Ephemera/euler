list = []
i = 0
while True:
	if i > 1:
		list.append(list[i-1] + list[i-2])
	else:
		list.append(1)
	i += 1	
	if len(str(list[-1])) > 999:
		print i
		break

