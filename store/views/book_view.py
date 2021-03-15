from rest_framework import viewsets, serializers, permissions, filters, generics, status
from rest_framework.response import Response

from store.models import Book
from store.serializers import BookSerializer, BookWithDetailsRetrievePageSerializer
from store.pagination import BookHomePagination, BookCategoryPagination


class BookReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    lookup_field = 'slug'
    filter_backends = (filters.SearchFilter, )
    search_fields = ('$category', '$title', '$publisher', '$author__name')
    pagination_class = BookHomePagination

    def get_queryset(self):
        queryset = Book.objects.select_related('author').all()

        if self.action == 'list':
            queryset = queryset.order_by('-created_at')

        if self.action == 'retrieve':
            queryset = queryset.prefetch_related('details__comments__owner__user')

        return queryset

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return BookWithDetailsRetrievePageSerializer

        return BookSerializer