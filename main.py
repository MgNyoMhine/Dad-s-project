import calculation

calculation.values()

print("\noption 1: find difference"
      "\noption 2: find two's place"
      "\noption 3: find hours and minutes"
      "\noption 4: call add_wraparound\n")

while True:
    choose = int(input("\nChoose one option(1,2,3,4): "))

    if choose == 1:
        calculation.difference()
    elif choose == 2:
        calculation.call_find_two()
    elif choose == 3:
        calculation.call_hours_minutes()
    elif choose == 4:
        calculation.call_add_wraparound()
    else:
        break