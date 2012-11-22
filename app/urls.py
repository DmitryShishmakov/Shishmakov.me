from django.conf.urls.defaults import *
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    (r'^$', 'defapp.views.index'),
    (r'^([a-z0-9\-]+)$', 'defapp.views.page'),
    (r'^ajax/([a-z0-9\-]+)$', 'defapp.views.ajax'),
    (r'^admin/', include(admin.site.urls)),
)
