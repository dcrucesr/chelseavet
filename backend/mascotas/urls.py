from django.urls import path

from . import views

urlpatterns = [
    path('productos', views.productos),
    path('producto-pedido', views.tablaPedidos),
    path('producto-pedido/<int:Pedido_id>', views.tablaPedidosPorPedido),
    path('productos/<int:producto_id>',views.producto),
    path('pedido',views.pedidos),
    path('pedido/<int:user_id>',views.pedidosPorIdUser),
    path('pedidoId/<int:pedido_id>',views.pedidosPorId),
    path('usuarios',views.usuarios),
    path('usuarios/<int:usuario_id>',views.listaUsuario),
    path('ubicaciones',views.ubicacion),
    path('ubicaciones/<int:ubicacion_id>',views.listaUbicacion),
]