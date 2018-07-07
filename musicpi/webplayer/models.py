from django.db import models

# Create your models here.

class MusicVideo(models.Model):
	title = models.CharField(max_length=100)
	artist = models.CharField(max_length=100)
	duration = models.DurationField(default=0)
	#upload = models.FileField(upload_to='music_videos/')
	
	def __str__(self):
		return '<{}> {} by {}'.format(self.id, self.title, self.artist)
	
	