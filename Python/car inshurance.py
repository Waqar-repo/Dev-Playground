

while True:
    value = input("Is you car is more than £20000 yes/no ").lower()
    car = input("is your car is new yes/no ").lower()
    accident = input("did you have accident in last two years yes/ no ").lower()
    if value == "no" and car == "no" and accident == "no":
        print("you will have cheap insurance ")
        break
    elif value == "yes" and car == "yes" and accident == "yes":
        print("you will have expensive insurance")
        break

