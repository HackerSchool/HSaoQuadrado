from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    points = models.DecimalField(max_digits=1000000, decimal_places=2)