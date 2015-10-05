from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Clue(models.Model):
	Latitude = models.DecimalField(max_digits=12, decimal_places=10, blank=False, null=False)
	Longitude = models.DecimalField(max_digits=12, decimal_places=10, blank=False, null=False)
	Altitude = models.DecimalField(max_digits=12, decimal_places=10, blank=False, null=False)
	clue_text = models.TextField(max_length=500, blank=False, null=False)

class Participant(models.Model):
	Username = models.ForeignKey(User)
	Clues = models.ForeignKey(Clue)