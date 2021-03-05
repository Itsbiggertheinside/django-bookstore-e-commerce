from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookListHomeViewSet, OrderItemViewSet


router = DefaultRouter()
router.register('', BookListHomeViewSet)
router.register('order-item/', OrderItemViewSet)


urlpatterns = [
    
    path('', include(router.urls)),

]
