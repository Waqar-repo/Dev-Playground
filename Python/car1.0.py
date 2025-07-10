

command = ""
started = False

while True:
    command = input("> ").lower()
    if command == "start":
        if started:
            print("car is already started ")
        else:
            started = True
            print("car has started")
    elif command == "stop":
        if not started:
            print(" car is already stopped")
        else:
            started = False
            print("car has stopped")

    elif command == "help":
        print("""
        start - to start car
        stop - to stop car
        quit - to quit program""")
    elif command == "quit":
        break

    else:
        print("unknown command")

