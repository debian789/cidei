from django.db import models

L_TYPE= (
	('t','Para verificar'),
	('l','Para revisar'),
	('p','No resuelto'),
)

L_CATEGORY = (
	('u','Unica'),
	('p','Privada'),

)




class Category(models.Model):
	name = models.CharField(max_length=255)
	slug = models.SlugField(max_length=255,unique=True)
	posted_on = models.DateTimeField(auto_now_add=True)
	#update_category = models.DateTimeField()
	description = models.CharField(max_length=200)
	#apellido = models.CharField(max_length=200)


	def __unicode__(self):
		return self.name 

class Item(models.Model):
	listing = models.CharField(max_length=1,choices=L_TYPE,default='t')
	name = models.CharField(max_length=120)
	category = models.ForeignKey(Category)
	departament = models.CharField(max_length=255)
	description = models.TextField()
	posted_on =  models.DateTimeField(auto_now_add=True)
	update_item = models.DateTimeField()

	def __unicode__(self):
		return  " %s - %s " % (self.name, self.category)

class Pictures(models.Model):
	item  = models.ForeignKey(Item)
	url = models.CharField(max_length=255)

class TipoCategoria(models.Model):
	type_category =  models.CharField(max_length=1,choices=L_CATEGORY,default='u')
	
	def __unicode__(self):
		return self.type_category

