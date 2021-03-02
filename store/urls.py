from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookListViewSet


router = DefaultRouter()
router.register('', BookListViewSet)


urlpatterns = [
    
    path('', include(router.urls)),

]
