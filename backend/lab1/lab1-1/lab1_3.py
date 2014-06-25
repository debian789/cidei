sum = 0.0 
data = raw_input("Ingreso un numero : ")

while data != "":
	number =  float(data)
	sum += number 
	data = raw_input("ingrese el siguiente numero : ")
	sum += float(data )

print "Esa suma extra;a es : ", sum 

