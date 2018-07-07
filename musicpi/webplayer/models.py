from django.db import models
import subprocess

# Create your models here.
def get_file_name(instance, filename):
	return 'music_videos/{}/{}.mp4'.format(instance.artist.lower(), instance.title.lower())

class MusicVideo(models.Model):
	title = models.CharField(max_length=100)
	artist = models.CharField(max_length=100)
	duration = models.DurationField(default=0)
	file = models.FileField(upload_to=get_file_name)
	
	def __str__(self):
		return '<{}> {} by {}'.format(self.id, self.title, self.artist)
	