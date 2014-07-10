from django.conf.urls import patterns, include, url


urlpatterns = patterns('',
    url(r'^register/$', 'accounts.views.register', name='register'),
    url(r'^login/$', 'accounts.views.user_login', name='login'),
    url(r'^logout/$', 'accounts.views.user_logout', name='logout'),

    
    
    # url(r'^items/$', 'app.views.item', name='item'),
    # url(r'^items/add/$', 'app.views.add_item', name='add-items'),
    # url(r'^items/(?P<item_id>\d+)/$', 'app.views.itemDetails', name='detalles-item'),
    # url(r'^items/(?P<item_id>\d+)/edit/$', 'app.views.itemUpdate', name='actualizar-item'),
    # url(r'^items/ajax/$', 'app.views.ajax_items', name='ajax_items'),



    # url(r'^categoria/add/$', 'app.views.add_category', name='add-category'),
    # url(r'^categoria/$', 'app.views.categoria', name='categoria'),
    # url(r'^categoria/(?P<slug>[\w-]+)/$', 'app.views.categoriaDetail', name='detalles-categoria'),
    # url(r'^categoria/(?P<slug>[\w-]+)/edit/$', 'app.views.categoriaUpdate', name='actualizar-categoria'),


    )
