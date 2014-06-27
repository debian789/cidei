from django import forms 
from app.models import Category,Item,L_TYPE 


class ItemForm(forms.Form):
	listing = forms.ChoiceField(choices=L_TYPE,initial='t')
	name = forms.CharField(max_length=250)
	category = forms.ModelChoiceField(Category.objects.all())
	departament = forms.CharField(max_length=255)
	description = forms.CharField(widget=forms.Textarea)
	update_item = forms.DateTimeField()