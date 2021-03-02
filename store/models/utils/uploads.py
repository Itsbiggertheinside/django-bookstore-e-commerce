def uploadBookMedia(instance, filename):
    publisher = instance.publisher.replace(' ', '-')
    book = instance.title.replace(' ', '-')
    return f'books/{publisher}/{book}'