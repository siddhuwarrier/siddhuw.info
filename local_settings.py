import dj_database_url

DEBUG = True

DATABASES = {'default': dj_database_url.config(default='postgres://localhost/website')}