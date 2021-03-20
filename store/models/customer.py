from django.db import models
from django.contrib.auth.models import User


GENDER_CHOICE = [
    ('M', 'Male'),
    ('F', 'Female'),
    ('U', 'Unknown'),
]

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=11, null=True, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICE, default='U')

    def __str__(self):
        return self.name


class ShippingAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=255)

    def __str__(self):
        return '{}\'s address'.format(self.customer.name)