#!/bin/bash

if [ ! -d django-env ]; then
	virtual django-env	
fi

source django-env/bin/activate
