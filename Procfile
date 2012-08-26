web: python my_django_app/manage.py collectstatic --noinput; gunicorn_django -b 0.0.0.0:$PORT -w 9 -k gevent --max-requests 250 --preload settings
