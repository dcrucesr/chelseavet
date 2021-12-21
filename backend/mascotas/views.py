from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Producto,TblProductoPedido,Pedido,Usuario,Ubicacion
from .serializers import ProductoSerializer,ProductoPedidoSerializer,PedidoSerializer,UsuarioSerializer,UbicacionSerializer

''' Ver y crear una lista de prodcutos'''
@api_view(['GET','POST'])
def productos(request):
    if request.method == 'GET':
        lstProductos = Producto.objects.all()
        serProductos = ProductoSerializer(lstProductos,many=True)
        return Response(serProductos.data)
    elif request.method == 'POST':
        serProductos = ProductoSerializer(data=request.data)
        if serProductos.is_valid():
            serProductos.save()
            return Response(serProductos.data)
        else:
            return Response(serProductos.errors)
''' CRUD de un producto '''
@api_view(['GET','PUT','DELETE'])
def producto(request,producto_id):
    lstProductUnq = Producto.objects.get(producto_id=producto_id)
    if request.method == 'GET':
        serProductUnq = ProductoSerializer(lstProductUnq)
        return Response(serProductUnq.data)
    elif request.method == 'PUT':
        serProductUnq = ProductoSerializer(lstProductUnq,data=request.data)
        if serProductUnq.is_valid():
            serProductUnq.save()
            return Response(serProductUnq.data)
        else: 
            return Response(serProductUnq.erros)
    
    elif request.method == 'DELETE':
        lstProductUnq.delete()
        return Response(status=204)
''' Para obtener toda la lista de la tabla de pedidos'''
@api_view(['GET','POST'])
def tablaPedidos(request):
    if request.method == 'GET':
        lstProductoPedido = TblProductoPedido.objects.all()
        serProductoPedido = ProductoPedidoSerializer(lstProductoPedido,many=True)
        return Response(serProductoPedido.data)
    elif request.method == 'POST':
        serProductoPedido = ProductoPedidoSerializer(data=request.data)
        if serProductoPedido.is_valid():
            serProductoPedido.save()
            return Response(serProductoPedido.data)
        else:
            return Response(serProductoPedido.errors)

''' Para obtener la lista de filtrada de Productos según el id del pedido '''
@api_view(['GET'])
def tablaPedidosPorPedido(request,Pedido_id):
    lstPedidos = TblProductoPedido.objects.filter(pedido_id=Pedido_id)

    if request.method == 'GET':
        serProductoPedido = ProductoPedidoSerializer(lstPedidos,many=True)
        return Response(serProductoPedido.data)
''' Para obtener la lista de pedidos por usuarios'''
@api_view(['GET'])
def pedidosPorIdUser(request,user_id):
    lstPedidos = Pedido.objects.filter(usuario=user_id)
    if request.method == 'GET':
        serProductoPedido = PedidoSerializer(lstPedidos,many=True)
        return Response(serProductoPedido.data)

''' Para obtener el id del pedido y modificarlo'''
@api_view(['GET','PUT'])
def pedidosPorId(request,pedido_id):
    lstPedidos = Pedido.objects.get(pedido_id=pedido_id)
    if request.method == 'GET':
        serProductoPedido = PedidoSerializer(lstPedidos)
        return Response(serProductoPedido.data)
    
    elif request.method == 'PUT':
        serializer = PedidoSerializer(lstPedidos, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

''' Para obtener toda la lista de pedidos '''
@api_view(['GET','POST'])
def pedidos(request):
    if request.method == 'GET':
        lstProductoPedido = Pedido.objects.all()
        serProductoPedido = PedidoSerializer(lstProductoPedido,many=True)
        return Response(serProductoPedido.data)
    elif request.method == 'POST':
        lstProductoPedido = PedidoSerializer(data=request.data)
        if lstProductoPedido.is_valid():
            lstProductoPedido.save()
            return Response(lstProductoPedido.data)
        else:
            return Response(lstProductoPedido.errors)
''' Para obtener toda la lista de usuarios '''
@api_view(['GET','POST'])
def usuarios(request):
    if request.method == 'GET':
        lstProductoPedido = Usuario.objects.all()
        serProductoPedido = UsuarioSerializer(lstProductoPedido,many=True)
        return Response(serProductoPedido.data)
    elif request.method == 'POST':
        serProfesores = UsuarioSerializer(data=request.data)
        if serProfesores.is_valid():
            serProfesores.save()
            return Response(serProfesores.data)
        else:
            return Response(serProfesores.errors)

''' Para obtener toda la lista de las ubicaciones'''
@api_view(['GET','POST'])
def ubicacion(request):
    if request.method == 'GET':
        lstProductoPedido = Ubicacion.objects.all()
        serProductoPedido = UbicacionSerializer(lstProductoPedido,many=True)
        return Response(serProductoPedido.data)
    elif request.method == 'POST':
        serUbicacion = UbicacionSerializer(data=request.data)
        if serUbicacion.is_valid():
            serUbicacion.save()
            return Response(serUbicacion.data)
        else:
            return Response(serUbicacion.errors)

''' Para obtener la ubicacion especifica de un usuario '''
@api_view(['GET'])
def listaUbicacion(request,ubicacion_id):
    lstProductos = Ubicacion.objects.get(ubicacion_id=ubicacion_id)

    if request.method == 'GET':
        serProfesor = UbicacionSerializer(lstProductos)
        return Response(serProfesor.data)

''' Para obtener los datos de un usuario en especifico'''
@api_view(['GET'])
def listaUsuario(request,usuario_id):
    lstProductos = Usuario.objects.get(usuario_id=usuario_id)
    if request.method == 'GET':
        serProfesor = UsuarioSerializer(lstProductos)
        return Response(serProfesor.data)