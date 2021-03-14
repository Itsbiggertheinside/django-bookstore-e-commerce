from rest_framework import serializers
from .models import Order, OrderItem, Author, Book, BookDetail, BookComment


class OrderItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItem
        fields = '__all__'
        read_only_fields = ('quantity', )


class OrderSerializer(serializers.ModelSerializer):

    items = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_items(self, obj):
        query = obj.items.values_list('item__title', 'item__author__name', 'item__publisher', 'item__price', 'item__discounted_price', 'item__category')
        return query


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class BookCommentSerializer(serializers.ModelSerializer):

    owner = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = BookComment
        fields = '__all__'


class BookDetailSerializer(serializers.ModelSerializer):

    comments = BookCommentSerializer(read_only=True, many=True)
    
    skin_condition = serializers.CharField(source='get_skin_condition_display')
    language_of_publication = serializers.CharField(source='get_language_of_publication_display')

    class Meta:
        model = BookDetail
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):

    author = serializers.SlugRelatedField(slug_field='name', read_only=True)
    details = BookDetailSerializer(read_only=True)
    
    class Meta:
        model = Book
        fields = '__all__'
