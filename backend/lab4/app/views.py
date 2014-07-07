from django.shortcuts import render,render_to_response,get_object_or_404
from django.template import Context
from app.models import Item,Category



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




# Create your views here.
