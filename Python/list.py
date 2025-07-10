name = ['waqar', 'ahmad','hina', 'razzaq']
print(name)
name[1] = 'Ahmad'
print(name[0:3])
print(name)


# find the largest number in a list

numbers = [80,90,1,2,999,44,801,100,101,501]
max = numbers[0]
for number in numbers:
    if number > max:
        max = number
print(max)


