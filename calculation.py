degree_values = []
minute_values = []
place_values = []
final_places = []


def values():
    for i in range(8):
        print(f"\nFor number {i + 1} ")
        degrees = int(input("Enter degrees: "))
        degree_values.append(degrees)
        minutes = int(input("Enter minutes: "))
        minute_values.append(minutes)
        places = int(input("Enter place: "))
        place_values.append(places)

        minutes += degrees * 60

        finals = minutes + (places - 1) * 30 * 60

        final_places.append(finals)

    eight_value = 1800 - (degree_values[7] * 60 + minute_values[7])
    degree_values[7] = eight_value // 60
    minute_values[7] = eight_value % 60
    final_places[7] = degree_values[7] * 60 + minute_values[7] + (place_values[7] - 1) * 1800

    for i in range(8):
        print(f"Number {i + 1} : {degree_values[i]} degrees {minute_values[i]} minutes and {place_values[i]} place")
        print(f"Number {i + 1} : {final_places[i]} minutes")


def difference():
    while True:
        num1 = int(input("\nEnter the first variable number to subtract (or 0 to exit): "))

        if num1 == 0:
            print("Exiting the program.")
            break

        num2 = int(input("Enter the second variable number to subtract: "))

        if num1 < 1 or num1 > 8 or num2 < 1 or num2 > 8:
            print("Invalid variable number.")
            continue

        difference = abs(final_places[num1 - 1] - final_places[num2 - 1])

        if difference > 10800:
            difference = 21600 - difference

        degree_difference = difference // 60
        minute_difference = difference % 60

        if num1 == 2 or num2 == 2:
            print(f"\nDistance between Number {num1} and Number {num2}: {difference} minutes")
        else:
            print(
                f"\nDistance between Number {num1} and Number {num2}: {degree_difference} degrees and {minute_difference} minutes")


def find_two(number_from_two, place_of_two):
    which_place = abs(place_values[number_from_two - 1] - place_of_two) * 30
    minutes_of_two = degree_values[number_from_two - 1] * 60 + minute_values[number_from_two - 1]

    if which_place > 180:
        which_place = 360 - which_place

    return print(f"{minutes_of_two} , {which_place}")


def call_find_two():
    while True:
        two_place = int(input("Enter the place of two: "))
        number = int(input("Enter the number you want to find two from: "))
        if two_place == 0 or number == 0:
            break
        else:
            find_two(number, two_place)
            continue


def hours_minutes(first_date, second_date):
    avg_hour = (second_date - first_date) / 24
    for i in range(25):
        print(f"{i} hour = {round(first_date, 2)}")
        first_date += avg_hour


def call_hours_minutes():
    while True:
        first_day = int(input("Enter your first day: "))
        second_day = int(input("Enter your second day: "))
        if first_day == 0:
            break
        else:
            hours_minutes(first_day, second_day)


def add_wraparound(num1, num2):
    increment = (1800 - num1 + num2) / 24
    result = [num1]

    while result[-1] != num2:
        next_num = (result[-1] + increment) % 1800
        result.append(next_num)

    return result


def call_add_wraparound():
    while True:
        number_one = int(input("Enter the first number: "))
        number_two = int(input("Enter the second number: "))
        if number_one == 0:
            break
        else:
            print(f"{add_wraparound(number_one, number_two)}")
