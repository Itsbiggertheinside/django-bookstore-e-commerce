from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from .models import Customer, Book, BookDetail


@receiver(post_save, sender=User)
def create_customer(sender, instance, created, **kwargs):
    if created:
        Customer.objects.create(user=instance, name=instance.username)


@receiver(post_save, sender=Book)
def create_book_detail(sender, instance, created, **kwargs):
    if created:
        BookDetail.objects.create(book=instance)