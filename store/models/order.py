from django.db import models

from .customer import Customer
from .book import Book


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='order')
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.customer}\'s order'


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    item = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return f'{self.order}, item: {self.item.title}'