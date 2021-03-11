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
    
    skin_condition = serializers.CharField(source='get_skin_condition_display')
    language_of_publication = serializers.CharField(source='get_language_of_publication_display')

    class Meta:
        model = BookDetail
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):

    author = serializers.SlugRelatedField(slug_field='name', read_only=True)
    details = BookDetailSerializer(read_only=True, many=True)
    
    class Meta:
        model = Book
        fields = '__all__'
