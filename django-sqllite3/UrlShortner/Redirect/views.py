# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.shortcuts import redirect

from APIS.models import URLMappingHelper

# Create your views here.
def index(req):
    return render(req, 'homepage.html')

def parse_url(req, surl_id):
    short_url_object = None
    UMH = URLMappingHelper()
    try:
        short_url_object = UMH.getBySid(sid=surl_id)
        return redirect(short_url_object.url)
    except Exception as e:
        return render(req, 'errors/invalid-surl.html', {'surl': surl_id})
    
        
