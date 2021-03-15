from rest_framework import viewsets, mixins, serializers, permissions, filters, generics, status
from rest_framework.response import Response

from .models import Book, Order, OrderItem
from .serializers import BookSerializer, BookDetailSerializer, OrderItemSerializer, OrderSerializer
from .permissions import IsAdminOrReadOnly
from .pagination import BookHomePagination, BookCategoryPagination


# Create your views here.
class BookReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Book.objects.select_related('author').prefetch_related('details__comments__owner__user').all()
    serializer_class = BookSerializer
    lookup_field = 'slug'
    filter_backends = (filters.SearchFilter, )
    search_fields = ('category',)
    pagination_class = BookHomePagination


class OrderRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = OrderSerializer

    def get(self, request, *args, **kwargs):
        customer = request.user.customer
        queryset, created = Order.objects.get_or_create(customer=customer, is_completed=False)
        serializer = OrderSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.select_related('order', 'item').all()
    serializer_class = OrderItemSerializer

    def create(self, request, *args, **kwargs):
        customer = request.user.customer
        book_id = request.query_params.get('book_id', None)
        book = generics.get_object_or_404(Book, id=book_id)

        order, created = Order.objects.get_or_create(customer=customer, is_completed=False)
        order_item, created = OrderItem.objects.get_or_create(order=order, item=book)
        order_item.quantity += 1
        order_item.save()

        serializer = OrderItemSerializer(order_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        customer = request.user.customer
        quantity = request.query_params.get('quantity', None)
        book_id = request.query_params.get('book_id', None)
        book = generics.get_object_or_404(Book, id=book_id)

        order, created = Order.objects.get_or_create(customer=customer, is_completed=False)
        order_item, created = OrderItem.objects.get_or_create(order=order, item=book)
        order_item.quantity = quantity
        order_item.save()

        serializer = OrderItemSerializer(order_item)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)