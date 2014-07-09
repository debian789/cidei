from django.conf.urls import patterns, include, url
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^app/',include('app.urls')),
    url(r'^accounts/',include('accounts.urls')),
    url(r'^admin/', include(admin.site.urls)),


    

    )

if settings.DEBUG:
    urlpatterns += patterns(
        'django.views.static',
        (r'media/(?P<path>.*)',
        'server',
        {'docuemnt_root': settings.MEDIA_ROOT}),
    )
