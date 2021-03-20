from rest_framework import serializers
from store.models import Customer, ShippingAddress


class CustomerSerializer(serializers.ModelSerializer):

    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Customer
        fields = '__all__'


class ShippingAddressSerializer(serializers.ModelSerializer):

    customer = serializers.SlugRelatedField(slug_field='name', read_only=True)

    class Meta:
        model = ShippingAddress
        fields = '__all__'