while True:
    ilr = input("Do you have ILR? (yes/no) ").strip().lower()
    time = input("Have you had ILR for more than 1 year? (yes/no) ").strip().lower()
    record = input("Do you have a criminal record? (yes/no) ").strip().lower()

    if ilr == "yes" and time == "yes" and record == "no":
        print("Congratulations! You are eligible for nationality.")
        break  # Exit the loop

    elif record == "yes":
        print("You have to wait until your criminal record is cleared.")

    elif time == "no":
        print("You need to wait another year before applying.")

    print("You are not eligible at this time.")