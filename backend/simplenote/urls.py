from django.urls import re_path as url
from django.urls import include
from django.contrib import admin

urlpatterns = [
    url(r'^api/v1/', include('notes.urls')),
    url(r'^admin/', admin.site.urls),
]
