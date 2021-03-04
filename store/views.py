from django.shortcuts import render
from rest_framework import viewsets, serializers, permissions, filters

from .models import Book
from .serializers import BookSerializer
from .permissions import IsAdminOrReadOnly
from .pagination import BookPagination

# Create your views here.
class BookListViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.prefetch_related('details__comments__owner__user').all()
    serializer_class = BookSerializer
    permission_classes = (IsAdminOrReadOnly, )
    lookup_field = 'slug'
    filter_backends = (filters.SearchFilter, )
    search_fields = ('category',)
    pagination_class = BookPagination