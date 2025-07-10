
price_house = 1000000
is_good_credit = True

if is_good_credit:
    print(f" you have good credit score and down payment is £ {price_house * 0.10}")
    #msg = f'You have good credit score and DowN payment is {price_house * .10}'
    #print(msg)
else:
    print(f"Bad credirt score and down payment is £{price_house * 0.20}")

message = f"congratulation for your new house monthly installem is £ {price_house // 12}"
print(message)