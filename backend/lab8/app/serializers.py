from rest_framework import serializers 
from app.models import Category

class CategorySerializer(serializers.HyperlinkedModelSerializer):

	class Meta: 
		model = Category 

		fields = ('name','slug','posted_on','description',)