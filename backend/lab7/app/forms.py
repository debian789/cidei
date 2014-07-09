from django import forms 
from app.models import Category,Item,L_TYPE , L_CATEGORY


class ItemForm(forms.Form):
	listing = forms.ChoiceField(choices=L_TYPE,initial='t')
	name = forms.CharField(max_length=250)
	category = forms.ModelChoiceField(Category.objects.all())
	departament = forms.CharField(max_length=255)
	description = forms.CharField(widget=forms.Textarea)
	update_item = forms.DateTimeField()


	def clean_departament(self):
		""" """
		data=self.cleaned_data['departament']

		if data not in ['Desarrollo','Herramienta','Test']:
			raise forms.ValidationError('El departamento puede ser "Desarrollo", "Herramientas " y/o "text" ')

		return data 

class CategoryForm(forms.Form):
	name = forms.CharField(max_length=255)
	slug = forms.SlugField(max_length=255)
	description = forms.CharField(widget=forms.Textarea)


class TipoCategoriaForm(forms.Form):
	tipoCategoria =  forms.ChoiceField(choices=L_CATEGORY,initial='u')
