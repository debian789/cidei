from django.conf.urls import patterns, include, url


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cidei.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'app.views.index', name='index'),
    url(r'^about/$', 'app.views.about', name='about'),

    
    
    url(r'^items/$', 'app.views.item', name='item'),
    url(r'^items/add/$', 'app.views.add_item', name='add-items'),
    url(r'^items/(?P<item_id>\d+)/$', 'app.views.itemDetails', name='detalles-item'),
    url(r'^items/(?P<item_id>\d+)/edit/$', 'app.views.itemUpdate', name='actualizar-item'),
    url(r'^items/ajax/$', 'app.views.ajax_items', name='ajax_items'),



    url(r'^categoria/add/$', 'app.views.add_category', name='add-category'),
    url(r'^categoria/$', 'app.views.categoria', name='categoria'),
    url(r'^categoria/(?P<slug>[\w-]+)/$', 'app.views.categoriaDetail', name='detalles-categoria'),
    url(r'^categoria/(?P<slug>[\w-]+)/edit/$', 'app.views.categoriaUpdate', name='actualizar-categoria'),



    #url(r'^categoria/(?P<categoria_id>\d+)/$', 'app.views.categoriaDetail', name='detalles-categoria'),


   # url(r'^admin/', include(admin.site.urls)),
    )
