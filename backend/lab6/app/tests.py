from django.test import TestCase
from app.models import Category,Item
from datetime import datetime 

class TextCidei(TestCase):

	def setUp(self):
		self.cat_one = Category.objects.create(name="Hardware",slug="hardware")
		self.item_one = Item.objects.create(listing="t",name="Computers",category=self.cat_one,departament="electrics",description="lallalalla",update_item=datetime.now())
		self.item_dos = Item.objects.create(listing="p",name="Servers",category=self.cat_one,departament="electrics",description="NOooooooooooooo",update_item=datetime.now())


	def test_category_one(self):
		response = self.client.get('/categoria/%s/' % self.cat_one.id)
		self.assertEqual(response.status_code,200)
		self.assertContains(response, "Hardware")

	def test_item_one(self):
		response = self.client.get('/items/%s/' % self.item_one.id)
		self.assertEqual(response.status_code,200)
		self.assertContains(response, "Computers")

# Create your tests here.
