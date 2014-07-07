from list.models import Category, Item

from autofixture import generators, register, AutoFixture 

import random 

nouns = ("Hardware","Software","Text-Software","Test-Hardware","Apss","BigData",)

class CategoryFixture(AutoFixture):
	field_value = {
		'name': generators.random.choice(nouns),
		'slug':generators.SlugGenerator('cidei'),
	}

register(Category,CategoryFixture)