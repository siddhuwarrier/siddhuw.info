#!/bin/bash

if [ ! -d django-env ]; then
	virtual django-env	
fi

source django-env/bin/activate
export PATH="/Applications/Postgres.app/Contents/MacOS/bin:$PATH"
