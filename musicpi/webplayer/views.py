from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from webplayer.models import MusicVideo

def get_all_music_videos():
	return MusicVideo.objects.all()

def index(request):
    return render(request, 'index.html', context={'songs' : get_all_music_videos()})