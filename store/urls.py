from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookListHomeViewSet


router = DefaultRouter()
router.register('', BookListHomeViewSet)


urlpatterns = [
    
    path('', include(router.urls)),

]
