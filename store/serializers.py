from rest_framework import serializers
from .models import Book, BookDetail, BookComment



class BookCommentSerializer(serializers.ModelSerializer):

    owner = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = BookComment
        exclude = ('id','book',)


class BookDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookDetail
        exclude = ('id', 'book',)


class BookSerializer(serializers.ModelSerializer):

    details = BookDetailSerializer(read_only=True, many=True)
    comments = BookCommentSerializer(read_only=True, many=True)
    
    class Meta:
        model = Book
        exclude = ('id', 'slug',)
