
decimal = raw_input("ingrese el string de bits: ")

modulo = ""
while decimal > 0  :
	cociente = int(decimal ) % 2 
	decimal  = int(decimal ) / 2 
	modulo = str(cociente) + modulo 
	print "%5d%8d%12s" % (decimal,cociente,modulo )
