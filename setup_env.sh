#!/bin/bash

if [ ! -d django-env ]; then
	virtualenv django-env	
fi

source django-env/bin/activate
export PATH=/Applications/Postgres.app/Contents/MacOS/bin:django-env/lib/python2.7/site-packages/django/bin:$PATH
export PYTHONPATH=django-env/lib/python2.7/site-packages/:$PYTHONPATH

