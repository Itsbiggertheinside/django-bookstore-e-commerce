def uploadBookMedia(instance, filename):
    author = instance.author.name.replace(' ', '-')
    book = instance.title.replace(' ', '-')
    return f'books/{author}/{book}/{filename}'

def uploadAuthorMedia(instance, filename):
    author_name = instance.name.replace(' ', '-')
    return f'books/{author_name}/{filename}'