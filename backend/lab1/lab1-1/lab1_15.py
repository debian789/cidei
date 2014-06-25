class X(object):
	def __init__(self,x):
		print x 
		#self._x = x 

	def __str__(self):
		return self._x 

class Z(object):

	def __init__(self,z,xx):
		print z 

		#super(Z,self).__init__(xx)
		#self._x = x 

	def __str__(self):
		return self._x 

class W(object):

	def __init__(self,z,xx):
		print z 

		#super(Z,self).__init__(xx)
		#self._x = x 

	def __str__(self):
		return self._x 



class Y(X,Z,W):

	def __init__(self,x,y,z,w):
		self._y=y 
		print y 
		super(Y,self).__init__(x)
		super(Y,self).__init__(z)
		super(Y,self).__init__(w)
		#super(Y,self).__init__(z)

	def __str__(self):

		return " x : " + self._x + " y " + self._y