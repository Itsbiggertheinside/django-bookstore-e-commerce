from rest_framework import serializers
from .models import Book, BookDetail, BookComment



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

    details = BookDetailSerializer(read_only=True, many=True)
    
    class Meta:
        model = Book
        fields = '__all__'
