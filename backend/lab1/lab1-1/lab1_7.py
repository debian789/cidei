"""
File : lab1_7.py 
para que no se les olvide esto es un comentario de tio DocString

"""



bstring = raw_input("ingrese el string de bits: ")

decimal = 0  

exponent = len(bstring) - 1

for digit in bstring:
	decimal = decimal + int(digit) * 2 ** exponent
	exponent = exponent -1 

print "El valor enter es: " , decimal