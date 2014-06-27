from app.models import Category,Item
from autofixture import generators, register, AutoFixture

import datetime
import random 

nombres =("Colombia","Brazil","Mexico","Honduras","Venezuela")

L_TYPE= (
	('t','Para verificar'),
	('l','Para revisar'),
	('p','No resuelto'),
)



class CategoryFixture(AutoFixture):
	field_value = {
		'name':generators.random.choice(nombres),
		'slug':generators.SlugGenerator('cidei'),
	}

register(Category,CategoryFixture)

class ItemFixture(AutoFixture):
	field_value = {
		#'listing':generators..random.choice(L_TYPE),
		'name':generators.StringGenerator(),
		#'category':generators.StringGenerator(),
		'departament':generators.StringGenerator(),
		'description':generators.StringGenerator(),
		'update_item':generators.DateTimeGenerator()
	}
