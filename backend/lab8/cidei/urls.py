from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings 
from rest_framework import routers 

from accounts.views import UserViewSet,UserProfileViewSet
from app.views import CategoryViewSet


router = routers.DefaultRouter()
router.register(r'user',UserViewSet)
router.register(r'profile',UserProfileViewSet)
router.register(r'category',CategoryViewSet)




admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    
    url(r'api/v1/',include(router.urls)),
    #cuando las vista necesita autenticacion pude ser oauth2 oauth, rest_frame
    url(r'api-auth/',include('rest_framework.urls',namespace="rest_framework")),


    url(r'^admin/', include(admin.site.urls)),

    url(r'^app/',include('app.urls')),
    url(r'^accounts/',include('accounts.urls')),

    )


## resolver archivos que se suben al server 
if settings.DEBUG:
    urlpatterns += patterns(
        'django.views.static',
        (r'media/(?P<path>.*)',
        'serve',
        {'document_root': settings.MEDIA_ROOT}),
    )
