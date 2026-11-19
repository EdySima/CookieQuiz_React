  
from django.urls import path
from .views import RandomQuestion

app_name='quiz'

urlpatterns = [
    
    path('', RandomQuestion.as_view(), name='random' ),
    
]