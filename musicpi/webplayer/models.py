from django.db import models
import subprocess
from datetime import timedelta
from random import randint
from os.path import exists

class MusicVideoManager(models.Manager):
	def random(self, length=1, existing=None, as_list=False, extend=False):
		
		# accoutn for index out of bounds
		limit = self.count() - len(existing)
		if length > limit:
			length = limit
		
		# gather all off limits ids
		used_ids = []
		if existing:
			for video in existing:
				used_ids.append(video.id)
				
		# query set of new songs
		fresh = self.exclude(id__in=used_ids).order_by('?')[:length]
		
		# to list 
		if as_list or (type(existing) is list and extend):
			fresh = list(fresh)
		
		# append to existing if exisiting is list
		if extend and existing and type(existing) is list:
			
			fresh = existing.extend(fresh)
			
		return fresh
				

# Create your models here.
def get_file_name(instance, filename):
	return 'music_videos/{}/{}.mp4'.format(instance.artist.lower(), instance.title.lower())

class MusicVideo(models.Model):
	title = models.CharField(max_length=100)
	artist = models.CharField(max_length=100)
	duration = models.PositiveIntegerField(default=0) # in milliseconds
	file = models.FileField(upload_to=get_file_name)
	objects = MusicVideoManager()
	
	def __str__(self):
		return '{} by {}'.format(self.title, self.artist)
	
#	def clean(self):
#		# doesnt work
#		path = Path(get_file_name(self, None))
#		if exists(path):
#			raise ValidationError({'upload': '`{}` already exists'.format(self)})

		