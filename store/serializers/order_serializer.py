from rest_framework import serializers
from store.models import Order, OrderItem
        

class OrderItemOrderFields(serializers.RelatedField):
    def to_representation(self, instance):
        context = {
            'id': instance.item.id,
            'title': instance.item.title,
            'author': instance.item.author.name,
            'image': 'http://localhost:8000' + instance.item.image.url,
            'category': instance.item.category,
            'price': instance.item.price,
            'discounted_price': instance.item.discounted_price,
            'item_total': (instance.item.discounted_price * instance.quantity),
            'discount_percent': ((instance.item.price - instance.item.discounted_price) * 100) // instance.item.price,
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
    total = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_total(self, instance):
        total = sum([item.item.discounted_price * item.quantity for item in instance.items.all()])
        return total