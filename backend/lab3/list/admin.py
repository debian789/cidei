from django.contrib import admin
from list.models import Category,Item

class CategoryAdmin(admin.ModelAdmin):
	list_display = ['name']
	prepopulated_fields = {'slug':("name",)}

class ItemaAdmin(admin.ModelAdmin):
	list_display = ['name','category','departament','posted_on']
	list_filter = ['category','posted_on']

admin.site.register(Item,ItemaAdmin)
admin.site.register(Category,CategoryAdmin)
#   models here.
