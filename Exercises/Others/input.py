import random


rand = random.randrange(1,100)

def guess():
    finished = False
    number = 0
    while not finished:
        number = int(input('Guess the number: '))
        if number == rand:
            finished = True
            print('You guessed the number!')
        elif number < rand:
            print('Too low! Try again!')
        else:
            print('Too high! Try again!')


guess()