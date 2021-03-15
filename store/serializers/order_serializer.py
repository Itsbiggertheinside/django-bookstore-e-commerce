from rest_framework import serializers
from store.models import Order, OrderItem
        

class OrderItemOrderFields(serializers.RelatedField):
    def to_representation(self, instance):
        context = {
            'id': instance.item.id,
            'title': instance.item.title,
            'author': instance.item.author.name,
            'publisher': instance.item.publisher,
            'image': instance.item.image.url,
            'category': instance.item.category,
            'price': instance.item.price,
            'discounted_price': instance.item.discounted_price,
            'quantity': instance.quantity,
            'slug': instance.item.slug
        }
        return context


class OrderItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):

    items = OrderItemOrderFields(read_only=True, many=True)

    class Meta:
        model = Order
        fields = '__all__'