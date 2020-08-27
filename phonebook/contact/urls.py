
from . import views
from knox import views as knox_views

from django.conf.urls import url
from django.urls import path


urlpatterns = [
    path('register/', views.RegisterAPIView.as_view()),
    url(r'login/', views.LoginView.as_view(), name='knox_login'),
    url(r'logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    url(r'logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
]
