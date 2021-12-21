from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Pedido)
admin.site.register(Producto)
admin.site.register(TblProductoPedido)
admin.site.register(Ubicacion)
admin.site.register(Usuario)
admin.site.register(TipoProducto)
