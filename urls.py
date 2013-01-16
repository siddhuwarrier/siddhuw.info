import django
from django.conf.urls import patterns, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic.simple import redirect_to

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()
from django.views.generic.base import TemplateView
import settings

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name="index.html")),
	url(r'^foaf.rdf', redirect_to, {'url':'/static/foaf.rdf'}),
    url(r'^professional$', TemplateView.as_view(template_name="professional.html")),
)

urlpatterns += patterns('',
    url('^static/(?P<path>.*)$', django.views.static.serve, {'document_root': settings.STATIC_ROOT ,'show_indexes': True}),
)
