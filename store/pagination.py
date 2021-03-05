from rest_framework import pagination



class BookHomePagination(pagination.PageNumberPagination):
    page_size = 12
    

class BookCategoryPagination(pagination.PageNumberPagination):
    page_size = 40