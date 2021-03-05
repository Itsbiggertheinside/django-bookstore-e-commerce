from django.contrib import admin
from .models import *


admin.site.register(Customer)
admin.site.register(Author)
admin.site.register(Book)
admin.site.register(BookDetail)
admin.site.register(BookComment)