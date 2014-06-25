# -*- coding: utf-8 -*-
"""
Programa: lab1-1.py 
Author : Miguel Suescun

1. Ingresar el valor para saber el rango a travez de la linea de comandos 
	ingresamos el valor de la calificacion 
2. Mostrar el tipo de califcacion 
	se muestra en linea de comandos la valorizacion para el rando de la califcacion

"""

number = input("Ingrese el numero de su calificacion : ")

if number > 89 : 
	letter = 'S'
elif number > 79:
	letter = 'B'
elif number > 69:
	letter = 'A'
else: 
	letter = "un caso perdio "

print "Su calificacion es dentro del rango ", letter