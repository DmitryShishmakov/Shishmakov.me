from django.shortcuts import render_to_response
from django.db import connection
from defapp.models import Data
import datetime

def index(request):
	return render_to_response('index.html')

def page(request, query):
	data = Data.objects.get(address=query)
	return render_to_response('index.html', {'page': '1', 'data': data})

def ajax(request, query):
	data = Data.objects.get(address=query)
	return render_to_response('ajax.html', {'data': data})