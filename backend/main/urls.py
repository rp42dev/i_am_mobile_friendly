from django.urls import path
import main.views

urlpatterns = [
    path('', main.views.index),
    path('transform', main.views.transform),
]