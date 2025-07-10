while True:
    command = input("> ").lower()
    if command == "help":
        print(""" start - to start car
                  stop - to stop car
                  quit - to quit """)
    elif command == "start":
            print("car started ...")
    elif command == "stop":
        print("car has stoped..")
    elif command == "quit":
        break
    else:
        print("Unknown command")