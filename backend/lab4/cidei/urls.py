from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cidei.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'app.views.index', name='index'),
    url(r'^about/$', 'app.views.about', name='about'),

    
    
    url(r'^items/$', 'app.views.item', name='item'),
    url(r'^items/(?P<item_id>\d+)/$', 'app.views.itemDetails', name='detalles-item'),
    url(r'^categoria/$', 'app.views.categoria', name='categoria'),
    url(r'^categoria/(?P<slug>[\w-]+)/$', 'app.views.categoriaDetail', name='detalles-categoria'),
    #url(r'^categoria/(?P<categoria_id>\d+)/$', 'app.views.categoriaDetail', name='detalles-categoria'),


    url(r'^admin/', include(admin.site.urls)),
    )


