from django.conf.urls import url
from APIS import views

urlpatterns = [
    url(r"^create-surl", views.create_short_url, name="create_surl"),
]
