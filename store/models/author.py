from django.db import models
from .utils import uploadAuthorMedia


class Author(models.Model):
    name = models.CharField(max_length=255)
    picture = models.ImageField(upload_to=uploadAuthorMedia, null=True, blank=True)

    def __str__(self):
        return self.name