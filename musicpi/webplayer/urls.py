from django.urls import path

from . import views

urlpatterns = [
    path('', views.control, name='control'),
	path('upload', views.upload, name='upload'),
	path('library', views.library, name='library'),
	path('current', views.get_current_song, name='current song')
]