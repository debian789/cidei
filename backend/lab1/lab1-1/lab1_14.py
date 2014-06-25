class Person(object):

	def __init__(self,name='',id=0,ege=0):
		self._name = name 
		self._id = id 
		self._age = ege 



	def getName(self):
		return self._name 

	def getId(self):
		return self._id 

	def getAge(self):
		return self._age

	def __str__(self):
		return ""


class Teacher(Person):
	def __init__(self):
		self._profesion = ""
		self._number_id 

	def getProfession(self):
		return self._profesion

	def getNumberId(self):
		return self._number_id

class Student(Person):

	def __init__(self,name='',id=0,ege=0):
		self._assigments = []
		self._score = []
		super(Student,self).__init__(name,id,ege)

		#Person.

	def getAssigments(self):
		return selt._assigments 

	def setAssigments(self,assgiment):
		self._assigments.append(assigment)

	def getScores(self):
		return self._score

	def setScores(self,score):
		self._score.append(score)

