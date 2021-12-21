from django.db import models
from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User
import datetime
class Pedido(models.Model):
    lst_estados= (
    ('0', 'Cancelado'),
    ('1', 'Pendiente'),
    ('2', 'Aceptado'),
    ('3', 'Enviado'),
    )
    pedido_id = models.AutoField(primary_key=True)
    usuario = models.ForeignKey('Usuario', models.DO_NOTHING)
    pedido_fenvio = models.DateTimeField(verbose_name='Fecha de envio', blank=True)  
    pedido_fpedido = models.DateTimeField(verbose_name='Fecha del pedido', auto_now=True) 
    pedido_estado = models.CharField(default="1",max_length=1,verbose_name='Estado del Pedido',choices=lst_estados,blank=True)

    class Meta:
        managed = False
        db_table = 'pedido'
        verbose_name_plural = "Pedidos"
    
    def __str__(self):
        return f'{self.usuario.usuario_nombre} - id: {self.pedido_estado}  : {self.pedido_fpedido}'

class Producto(models.Model):
    producto_id = models.AutoField(primary_key=True)
    tipo_producto_tipo_producto = models.ForeignKey('TipoProducto', models.DO_NOTHING)
    producto_nombre = models.CharField(max_length=200, blank=False, null=True)
    producto_descripcion = models.CharField(max_length=500, blank=False, null=True)
    producto_img = CloudinaryField('image',default='')
    producto_precio = models.DecimalField(max_digits=10,decimal_places=2)
    producto_estado = models.BooleanField(default=True,verbose_name='Estado del producto')
    producto_cantidad = models.IntegerField(default=0,verbose_name='Cantidad de existencias')

    class Meta:
        managed = False
        db_table = 'producto'
        verbose_name_plural = "Productos"

    def __str__(self):
        return f'{self.producto_nombre} - {self.producto_descripcion} - {self.producto_precio}'


class TblProductoPedido(models.Model):
    producto_pedido_id = models.AutoField(primary_key=True)
    producto_pedido_cant = models.IntegerField(blank=False)
    producto_pedido_pre = models.DecimalField(max_digits=10,decimal_places=2)
    pedido = models.ForeignKey(Pedido, models.DO_NOTHING)
    producto = models.ForeignKey(Producto, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_producto_pedido'
        verbose_name_plural = "Producto-Pedido"

    def __str__(self):
        return f'{self.pedido.usuario} : {self.producto}'

class TipoProducto(models.Model):
    tipo_producto_id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_producto'

    def __str__(self):
        return f'{self.nombre}'

class Ubicacion(models.Model):
    ubicacion_id = models.AutoField(primary_key=True)
    usuario = models.ForeignKey('Usuario', models.DO_NOTHING)
    ubicacion_ciudad = models.CharField(max_length=100, blank=False)
    ubicacion_distrito = models.CharField(max_length=100, blank=False)
    ubicacion_direccion = models.CharField(max_length=150, blank=False)
    ubicacion_referencia = models.CharField(max_length=255, blank=True)

    class Meta:
        managed = False
        db_table = 'ubicacion'
        verbose_name_plural = "Ubicacion"
    
    def __str__(self):
        return f'{self.usuario.usuario_nombre} - {self.ubicacion_direccion}'

class Usuario(models.Model):
    usuario_id = models.AutoField(primary_key=True)
    usuario_nombre = models.CharField(max_length=100, verbose_name='Nombres',blank=False)
    usuario_apellido = models.CharField(max_length=100, verbose_name='Apellidos',blank=False)
    usuario_email = models.EmailField(max_length=100, verbose_name='Correo Electrónico',blank=False)
    usuario_contra = models.CharField(max_length=100, verbose_name='Contraseña',blank=False)
    usuario_celular = models.CharField(max_length=20, verbose_name='Nro Celular',blank=False)
    usuario_isadmin = models.BooleanField(default=False,verbose_name='Es administrador')  

    class Meta:
        managed = False
        db_table = 'usuario'
        verbose_name_plural = "Usuarios"
    
    def __str__(self):
        return f'{self.usuario_nombre} - email: {self.usuario_email}'
