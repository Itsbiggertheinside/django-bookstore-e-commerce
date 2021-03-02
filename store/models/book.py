from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from .customer import Customer
from .utils import BOOK_SKIN_CONDITION, PUBLICATION_LANGUAGE


class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    publisher = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    discounted_price = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    stock = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title} - {self.author}'


class BookDetail(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='details')
    skin_condition = models.CharField(max_length=3, choices=BOOK_SKIN_CONDITION, default='H')
    date_of_publication = models.DateTimeField(null=True, blank=True)
    place_of_publication = models.CharField(max_length=255, null=True, blank=True)
    language_of_publication = models.CharField(max_length=3, choices=PUBLICATION_LANGUAGE, default='EN')
    dimensions = models.CharField(max_length=255, null=True, blank=True)
    paper_type = models.CharField(max_length=255, null=True, blank=True)
    number_of_pages = models.CharField(max_length=255, null=True, blank=True)
    barcode = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f'{self.book.title}\'s details - {self.book.author}'


class BookComment(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='comments')
    owner = models.ForeignKey(Customer, on_delete=models.PROTECT)
    comment = models.TextField()
    score = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])

    def __str__(self):
        return f'{self.book.title}\'s comment by {self.owner}, Score: {str(self.score)}'