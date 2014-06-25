class Student(object):
	""" Representacion de un estudiante """

	def __init__(self,name,age,number):
		""" Todo el puntaje se inicia en 0 """

		self._name = name 
		self._age = age 
		self._scores = []
		for count in xrange(number):
			self._scores.append(0)

	def getName(self):
		""" Returnanado el nombre """
		return self._name 

	def getEge(self):
		""" Retorna la Edad """
		return self._age

	def setScore(self,i,score):
		""" Reset del score, countinua desde 1. """
		return self._scores[i - 1 ] - score 

	def getScore(self, i ):
		""" Retorna el valor del score """
		return self._scores[i - 1]

	def getAverage(self):
		""" Obteniendo el promedio del puntaje """ 
		sum  = reduce(lambda x,y: x+y,self,_scores)
		return sum / len(self._scores)

	def __str__(self):
		"""Returna los string de la case estudiante """
		return "Nombre : " + self._name + "\nPuntaje : " + " ".join(map(str,self._scores))