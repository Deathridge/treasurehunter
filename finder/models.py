from django.db import models

# Create your models here.
class Clue(models.Model):
	Latitude = models.DecimalField(max_digits=10, decimal_places=10, blank=False, null=False)
	Longitude = models.DecimalField(max_digits=10, decimal_places=10, blank=False, null=False)
	clue_text = models.TextField(max_length=500, blank=False, null=False)

class Traveller(models.Model):
	Latitude = models.DecimalField(max_digits=10, decimal_places=10, blank=False, null=False)
	Longitude = models.DecimalField(max_digits=10, decimal_places=10, blank=False, null=False)
	Location_Accuracy = models.DecimalField() #Described in meters and relates to accuracy of latitude and longitude
	Location_Altitude = models.DecimalField() #Described in meters above average sea level, non-negative real number
	Location_Altitude_Accuracy = models.DecimalField() #Described in meters, will be null if no altitude information
	Location_Heading = models.DecimalField() #Described in degrees clockwise from true north, if cannot be provided then it will be null, if stationary this attribute will be NaN
	Location_Speed = models.DecimalField() #Described in metres per second horizontally, if cannot be provided this will be null
	timestamp = models.DateTimeField()