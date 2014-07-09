from django.shortcuts import render,render_to_response,get_object_or_404,HttpResponseRedirect
from django.template import Context,RequestContext
from app.models import Item,Category
from app.forms import ItemForm,CategoryForm,TipoCategoriaForm


#modulo serializador de QuerySets para Django
from  django.http import HttpResponse
from django.core.serializers import serialize 
import json 


def index(request):
	#items = Item.objects.all()
	context = Context({'title':'Index  '})
	return render_to_response('index.html',context)


def about(request):
	#items = Item.objects.all()
	context = Context({'title':'Index','about':'titulo_about'})
	return render_to_response('about.html',context)




def item(request):
	items = Item.objects.all()
	context = Context({'title':'Items ','items':items})
	return render_to_response('categorias_items.html',context)

def categoria(request):
	categorias = Category.objects.all()
	context = Context({'title':'Categorias ','categorias':categorias})
	return render_to_response('categorias_items.html',context)




def itemDetails(reques,item_id):
	item = get_object_or_404(Item, id=item_id)

	context = Context({
		'title ': "Detalle de: %s " % item.name,
		'items':item

		})
	#print context
	return render_to_response('detail_item_categoria.html',context)


def categoriaDetail(request,slug):

	categorias = get_object_or_404(Category, slug=slug)
	
	context = Context({
		#'title ': "Detalle de: %s " % categorias.name,
		'title ': "Detalle de: ",
		'categorias':categorias

		})
	#print context
	return render_to_response('detail_item_categoria.html',context)



def add_item(request):
	if request.method == "POST":
		form = ItemForm(request.POST)

		if form.is_valid():
			item = Item.objects.create(
				listing = form.cleaned_data['listing'],
				name = form.cleaned_data['name'],
				category = form.cleaned_data['category'],
				departament = form.cleaned_data['departament'],
				description = form.cleaned_data['description'],
				update_item = form.cleaned_data['update_item']
				)

			return HttpResponseRedirect('/items/%s/' % item.id )
	else:
		form = ItemForm()

	
	context = Context({'title':"Adicionar Item",'form':form,'info_button':'Crear ' })
	return render_to_response('form.html',context, context_instance = RequestContext(request))




def itemUpdate(request,item_id):
	item = get_object_or_404(Item,id=item_id)
	if request.method == "POST":
		form = ItemForm(request.POST)

		if form.is_valid():
			item.listing = form.cleaned_data['listing'],
			item.name = form.cleaned_data['name'],
			item.category = form.cleaned_data.get('category'),
			item.departament = form.cleaned_data['departament'],
			item.description = form.cleaned_data['description'],
			item. update_item = form.cleaned_data['update_item']
			item.save()

			return HttpResponseRedirect('/items/%s/' % item.id )
	else:

		item_data = {
		'listing' :item.listing,
		'name' :item.name,
		'category' :item.category,
		'departament' :item.departament,
		'description' :item.description,
		'update_item' :item.update_item
		}

		form = ItemForm(initial=item_data)
	
	context = Context({'title':"Adicionar Item",'form':form,'info_button':'Actualizar ' })
	return render_to_response('form.html',context, context_instance = RequestContext(request))








def add_category(request):
	if request.method == "POST":
		form = CategoryForm(request.POST)

		if form.is_valid():
			category = Category.objects.create(				
				name = form.cleaned_data['name'],
				slug = form.cleaned_data['slug'],
				description = form.cleaned_data['description'],
				)

			return HttpResponseRedirect('/categoria/%s/' % category.slug )
	else:
		form = CategoryForm()
		tipoCategoria = TipoCategoriaForm()

	
	context = Context({'title':"Adicionar Category ",'form':form ,'info_button':'Crear',"tipoCategoria":tipoCategoria})
	return render_to_response('add-category.html',context, context_instance = RequestContext(request))




def categoriaUpdate(request,slug):
	category = get_object_or_404(Category,slug=slug)
	if request.method == "POST":
		form = CategoryForm(request.POST)
		if form.is_valid():
			category.name = form.cleaned_data['name']
			category.slug = form.cleaned_data['slug']

			category.save()

			return HttpResponseRedirect('/categoria/%s/' % category.slug)
	else: 
		category_data = {
		'name':category.name,
		'slug':category.slug
		}
		form = CategoryForm(initial=category_data)

	context = Context({'title':'Editar la Categoria','form':form,'info_button':'Actualizar'})
	return render_to_response('add-category.html',context,context_instance=RequestContext(request))

def ajax_items(request):
	if request.is_ajax():
		items = Item.objects.all()
		print item 
		items = serialize('json',items)
		print items 
		items = json.dumps(items)
		print items 

		return HttpResponse(items,content_type='application/json')
	else:
		return HttpResponse({'error':"Hubo un error"}, content_type='application/json')

