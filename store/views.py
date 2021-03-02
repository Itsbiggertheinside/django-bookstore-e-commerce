from django.shortcuts import render
from rest_framework import viewsets, serializers, permissions

from .models import Book
from .serializers import BookSerializer
from .permissions import IsAdminOrReadOnly

# Create your views here.
class BookListViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.prefetch_related('details', 'comments__owner').all()
    serializer_class = BookSerializer
    permission_classes = (IsAdminOrReadOnly, )