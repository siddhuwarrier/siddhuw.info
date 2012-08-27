import django
from django.conf.urls import patterns, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()
from django.views.generic.base import TemplateView
import settings

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'^professional$', TemplateView.as_view(template_name="professional.html")),
)

if not settings.DEBUG:
    urlpatterns += patterns('',
        url('^static/(?P<path>.*)$', django.views.static.serve, {'document_root': settings.STATIC_ROOT ,'show_indexes': True}),
    )
else:
    urlpatterns += staticfiles_urlpatterns()
