from rest_framework import serializers

from .models import Producto,TblProductoPedido,Pedido,TblProductoPedido,Usuario,Ubicacion

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['producto_img'] = instance.producto_img.url
        return representation

class ProductoPedidoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TblProductoPedido
        fields = '__all__'

class PedidoSerializer(serializers.ModelSerializer):
    pedido_fenvio = serializers.DateTimeField(format="%Y-%m-%d")
    pedido_fpedido = serializers.DateTimeField(format="%Y-%m-%d")
    class Meta:
        model = Pedido
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class UbicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubicacion
        fields = '__all__'