# Generated by Django 3.1.7 on 2021-03-02 22:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_auto_20210302_2333'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='slug',
            field=models.SlugField(default='unique-slug', unique=True),
            preserve_default=False,
        ),
    ]
