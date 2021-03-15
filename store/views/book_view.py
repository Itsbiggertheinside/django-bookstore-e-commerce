from rest_framework import viewsets, serializers, permissions, filters, generics, status
from rest_framework.response import Response

from store.models import Book
from store.serializers import BookSerializer, BookDetailSerializer
from store.pagination import BookHomePagination, BookCategoryPagination



class BookReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Book.objects.select_related('author').prefetch_related('details__comments__owner__user').all()
    serializer_class = BookSerializer
    lookup_field = 'slug'
    filter_backends = (filters.SearchFilter, )
    search_fields = ('category',)
    pagination_class = BookHomePagination