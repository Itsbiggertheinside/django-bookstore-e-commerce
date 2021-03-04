from rest_framework import pagination


class BookPagination(pagination.PageNumberPagination):
    page_size = 1