#Importante  modulo completo "random" en python


import random

smaller =  input ("Diguite el    valor mas pequeno")
large =  input ("Diguite el valor mas grade")


my_random_number = random.randint(smaller,large)

count = 0

while True:
	count +=1
	user_number = input("ingrese un numero para comparar: ")
	if user_number < my_random_number:
		print " Es un numero pequeno"
	elif user_number > my_random_number: 
		print "es un numero grande"

	else: 
		print "lo tienes en ", count, "valve a intertarlo !"
		break
