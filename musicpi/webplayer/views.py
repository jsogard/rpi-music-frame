from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from webplayer.models import MusicVideo
from django.views.decorators.http import require_POST


def get_all_music_videos():
	return MusicVideo.objects.all()

def index(request):
    return render(request, 'index.html', context={'songs' : get_all_music_videos()})

def upload(request):
	if request.method == 'POST':
		music_video = MusicVideo(\
						title=request.POST.get('title'), \
					  	artist=request.POST.get('artist'), \
					  	file=request.FILES['video'])
		music_video.save()
		return HttpResponse('success')
	elif request.method == 'GET':
		return render(request, 'upload.html')

def control(request):
	return render(request, 'control.html')

def library(request):
	return render(request, 'library.html', context={'songs' : get_all_music_videos()})