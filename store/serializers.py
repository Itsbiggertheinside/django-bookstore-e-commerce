from rest_framework import serializers
from .models import Author, Book, BookDetail, BookComment


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

    class Meta:
        model = BookDetail
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):

    author = AuthorSerializer()
    details = BookDetailSerializer(read_only=True, many=True)
    get_absolute_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Book
        fields = '__all__'

    def get_get_absolute_url(self, obj):
        return obj.get_absolute_url()