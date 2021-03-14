from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookListHomeViewSet, OrderItemViewSet, OrderRetrieveAPIView


router = DefaultRouter()
router.register(r'book', BookListHomeViewSet)
router.register(r'order-item', OrderItemViewSet)

urlpatterns = [
    
    path('', include(router.urls)),
    
    path('order/<anything>/', OrderRetrieveAPIView.as_view(), name='order'),

]
