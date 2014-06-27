from django.contrib import admin
from app.models import Category,Item

class CategoryAdmin(admin.ModelAdmin):
	pass

class ItemAdmin(admin.ModelAdmin):
	pass

admin.site.register(Item,ItemAdmin)
admin.site.register(Category,CategoryAdmin)
# Register your models here.
