from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookListHomeViewSet, OrderItemAPIView, OrderRetrieveAPIView


router = DefaultRouter()
router.register(r'book', BookListHomeViewSet)

urlpatterns = [
    
    path('', include(router.urls)),
    
    path('order/', OrderRetrieveAPIView.as_view(), name='order'),
    path('order-item/<int:book_id>/', OrderItemAPIView.as_view(), name='order-item'),

]
