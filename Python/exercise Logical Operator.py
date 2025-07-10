# logical operator and or not
#comparison operator

name = "Waqar Ahmad"

if len(name) < 3:
    print(f"You entered [ {name} ] which must have atleast 3 characters long")
elif len(name) > 50 :
    print(f"You entered [ {name } ]which can be maximum of 50 charactor")

else:
    print(f"[{name }] name looks good")