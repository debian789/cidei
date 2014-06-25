import math

def raiz (**kwargs):
	temp = (kwargs['_b'] ** 2) - (4*kwargs['_a']*kwargs['_c'] )
	return math.sqrt(temp)


def main():
	a = input("ingrese el valor de a ")
	b = input("ingrese el valor de b ")
	c = input("ingrese el valor de c ")

	x1 = positivo(_a = a,_b= b,_c = c ) / 2 * a 
	x2 = negativo(_a=a,_b=b,_c=c)/2 * a 

	return " x1 : %d y x2: %d " % (x1,x2 )


def positivo(**kwargs):
	return kwargs['_b'] + raiz( _a = kwargs['_a'], _b = kwargs['_b'], _c = kwargs['_c']) 


def negativo(**kwargs):
	return  -kwargs['_b'] + raiz( _a = kwargs['_a'], _b = kwargs['_b'], _c = kwargs['_c']) 


print main()
