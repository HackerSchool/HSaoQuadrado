# users/urls.py

from django.conf.urls import url, include
from django.urls import path
from .views import *


app_name = 'exams'
urlpatterns = [
    url("list", list_exams),
    path("results/<int:id>", results),
    path('<int:id>/render',exam_id_render),
    path("gerador/", generate_exam)
]