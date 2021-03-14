from rest_framework import viewsets, mixins, serializers, permissions, filters, generics, status
from rest_framework.response import Response

from .models import Book, Order, OrderItem
from .serializers import BookSerializer, BookDetailSerializer, OrderItemSerializer, OrderSerializer
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


class OrderRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = OrderSerializer

    def get(self, request, *args, **kwargs):
        customer = request.user.customer
        queryset, created = Order.objects.get_or_create(customer=customer, is_completed=False)
        serializer = OrderSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)


class OrderItemAPIView(mixins.CreateModelMixin, mixins.UpdateModelMixin, generics.GenericAPIView):
    queryset = OrderItem.objects.select_related('order__customer__user', 'item__author').all()
    serializer_class = OrderItemSerializer

    def post(self, request, book_id=None, *args, **kwargs):
        customer = request.user.customer
        book = generics.get_object_or_404(Book, id=book_id)

        order, created = Order.objects.get_or_create(customer=customer, is_completed=False)
        order_item, created = OrderItem.objects.get_or_create(order=order, item=book)
        order_item.quantity += 1
        order_item.save()

        serializer = OrderItemSerializer(order_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    # def put(self, request, book_id=None, *args, **kwargs):
    #     customer = request.user.customer
    #     book = generics.get_object_or_404(Book, id=book_id)
    #     quantity = request.query_params.get('quantity', None)

    #     order = generics.get_object_or_404(Order, customer=customer, is_completed=False)
    #     order_item = generics.get_object_or_404(OrderItem, order=order, item=book)
    #     order_item.quantity = quantity
    #     order_item.save()

    #     serializer = OrderItemSerializer(order_item)
    #     return Response(serializer.data, status=status.HTTP_202_ACCEPTED)