# from django.db import models

from pickle import TRUE
from django.db import models
class users(models.Model):
    Username = models.CharField(max_length=30)
    password= models.CharField(max_length=30)

