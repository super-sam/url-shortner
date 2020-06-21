# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class URLMapping(models.Model):
    url = models.CharField(max_length=1000)
    created = models.DateTimeField(auto_now=True)
    sid = models.CharField(max_length=10)

    def __str__(self):
        return self.url

class URLMappingHelper():
    def get(self, url):
        url_mapping_object = None
        try:
            url_mapping_object = URLMapping.objects.get(url__exact=url)
        except:
            pass
        return url_mapping_object
    
    def getBySid(self, sid):
        url_mapping_object = None
        try:
            url_mapping_object = URLMapping.objects.get(sid__exact=sid)
        except:
            pass
        return url_mapping_object
    
    def create(self, url, sid):
        url_mapping_object = URLMapping.objects.get_or_create(url=url, sid=sid)[0]
        return url_mapping_object
        

    

