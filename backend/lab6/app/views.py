from django.shortcuts import render,render_to_response,get_object_or_404,HttpResponseRedirect
from django.template import Context,RequestContext
from app.models import Item,Category
from app.forms import ItemForm

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

	
	context = Context({'title':"Adicionar Item",'form':form })
	return render_to_response('form.html',context, context_instance = RequestContext(request))




