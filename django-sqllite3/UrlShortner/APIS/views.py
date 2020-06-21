# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist

from urllib import unquote

from helpers.utility import HelperClass

import json

from APIS.models import URLMappingHelper

def create_short_url(req):
    surl = unquote(HelperClass.get(req, 'url'))
    
    short_url_object = None
    UMH = URLMappingHelper()
    try:

        short_url_object = UMH.get(url=surl)
        if short_url_object is None: raise Exception("Object Not Found")
    except:
        unique_short_code = HelperClass.getRandomString(length=7)
        short_url_object = UMH.getBySid(sid=unique_short_code)
        
        while(short_url_object != None):
            unique_short_code = HelperClass.getRandomString(length=7)
            short_url_object = UMH.getBySid(sid=unique_short_code)
        
        short_url_object = UMH.create(url=surl, sid=unique_short_code)

    return JsonResponse({"status": "ok", "urlid": short_url_object.sid})
