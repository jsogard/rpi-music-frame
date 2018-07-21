from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from webplayer.models import MusicVideo
from datetime import datetime
from django.views.decorators.http import require_GET
from math import floor

QUEUE_LOAD_FACTOR = 0.7

class CurrentSong:
	def __init__(self, music_video):
		self.music_video = music_video
		self.start_time = datetime.now()
		
class Queue:
	def __init__(self):
		self.queue = []
		self.populate_queue()
		self.next_song()
		
	def populate_queue(self):
		add_size = floor(MusicVideo.objects.count() * QUEUE_LOAD_FACTOR) - len(self.queue)
		self.queue = MusicVideo.objects.random(length=add_size, \
											   existing=self.queue,\
											   as_list=True,\
											   extend=True)
	def next_song(self):
		song = self.queue[0]
		self.current_song = CurrentSong(song)
		self.queue.remove(song)
		self.populate_queue()
		
queue = Queue()
		
def get_all_music_videos():
	return MusicVideo.objects.all()

def upload(request):
	if request.method == 'POST':
		music_video = MusicVideo(\
						title=request.POST.get('title'), \
					  	artist=request.POST.get('artist'), \
					  	file=request.FILES['video'])
		error = {'title': '', 'artist': '', 'file': ''}
		try:
			music_video.save()
		except ValidationError as err:
			print(err.message_dict)
#			error.title = music_video.errors.title
#			error.artist = music_video.errors.artist
#			error.file = music_video.errors.file
		return render(request, 'upload.html', context={'error': error})
	elif request.method == 'GET':
		return render(request, 'upload.html')

def control(request):
	return render(request, 'control.html')

def library(request):
	return render(request, 'library.html', context={'songs' : get_all_music_videos()})

@require_GET
def get_current_song(request):
	time = (datetime.now() - queue.current_song.start_time).total_seconds()
	duration = (queue.current_song.music_video.duration / 1000)
	ratio = time / duration
	return JsonResponse({'title': queue.current_song.music_video.title, \
						 'artist': queue.current_song.music_video.artist, \
						 'duration': duration, \
						 'time': time, \
						 'ratio': ratio})