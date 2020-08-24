from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Address(models.Model):
    country = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    street = models.CharField(max_length=20, null=True, blank=True)
    lat = models.FloatField(null=True, blank=True)
    lng = models.FloatField(null=True, blank=True)


class Contact(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=40, null=True, blank=True)
    mobile = models.CharField(max_length=20, null=True, blank=True)
    birthday = models.DateTimeField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    is_favorite = models.BooleanField(default=False)
    address = models.ForeignKey(
        Address, null=True, blank=True, on_delete=models.SET_NULL)
