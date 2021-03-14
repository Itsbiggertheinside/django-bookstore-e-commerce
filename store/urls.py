from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookListHomeViewSet, OrderItemViewSet, OrderRetrieveAPIView


router = DefaultRouter()
router.register('', BookListHomeViewSet, basename='book')
router.register('order-item', OrderItemViewSet, basename='order-item')


urlpatterns = [
    
    path('', include(router.urls)),
    path('order/<anything>/', OrderRetrieveAPIView.as_view(), name='order'),

]
