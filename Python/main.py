command = ""
while command != "quit":
    command = input(">").lower()
    if command == "start":
        print("Car started ...")

    elif command == "stop":
        print("car stoped ...")

    elif command == "help":
        print(""" start - to start car
              stop - to stop car
              quit - to quit """)
    elif command == "quit":
        break
    else:
        print("Unknow Command")