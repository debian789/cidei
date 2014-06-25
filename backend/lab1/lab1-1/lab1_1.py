# -*- coding: utf-8 -*-
"""
Programa: lab1-1.py 
Author : Miguel Suescun

Calcular la tasa de impuesto de un alimento 

1 declaracion de variables 
	tax tasa de impuesto 
	tax_one tasa de impuesto adicional 
2 Entradas 
	valor del alimento 
	numero de alimentos 
3. Computaciones: 
	tasa de entradas = suma de numero de alimentos + tax + tax_one 
4. Salida: 
	El calculo de los alimentos 

"""

#Declaracion de constantes 
TAX = 0.16
TAX_ONE = 0.03

#entradas de teclado 

food = input("increse el valodr del  alimento ")
amount_food = input("Ingrese la cantidad de alimentos")


#Computaciones 
total = (food * amount_food ) * (TAX + TAX_ONE)

#salida 
#print "el total de los alimentos es : " + str(total)
#print "el total de los alimentos es : %d " % total
print "el total de los alimentos es : %d " , total