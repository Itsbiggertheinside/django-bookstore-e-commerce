from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookReadOnlyViewSet, OrderItemViewSet, OrderRetrieveAPIView


router = DefaultRouter()
router.register(r'book', BookReadOnlyViewSet, basename='book')
router.register(r'item', OrderItemViewSet)

urlpatterns = [
    
    path('', include(router.urls)),
    
    path('order/', OrderRetrieveAPIView.as_view(), name='order'),

]
