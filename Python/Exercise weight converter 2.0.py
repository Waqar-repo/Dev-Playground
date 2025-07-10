weight = int(input("Weight "))
unit =input(" (L)bs or (k) g").lower()
if unit == "L":
  converted = weight * 0.45
  print(f"you are {converted} kilos")

elif unit == "k":
   converted = weight / 0.45
   print(f" you are {converted} Lbs")

else:
   print("Please enter right value")
