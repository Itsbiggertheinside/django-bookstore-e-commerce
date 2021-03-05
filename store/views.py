from django.shortcuts import render
from rest_framework import viewsets, mixins, serializers, permissions, filters

from .models import Book
from .serializers import BookSerializer
from .permissions import IsAdminOrReadOnly
from .pagination import BookHomePagination, BookCategoryPagination


# Create your views here.
class BookListHomeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Book.objects.select_related('author').prefetch_related('details__comments__owner__user').all()
    serializer_class = BookSerializer
    lookup_field = 'slug'
    filter_backends = (filters.SearchFilter, )
    search_fields = ('category',)
    pagination_class = BookHomePagination