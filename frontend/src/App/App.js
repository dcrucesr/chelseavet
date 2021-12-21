import './App.css';
import { Navbar } from '../components/Header/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Principal/Home';
import Services from '../components/pages/Servicios/Services';
import Carrito from '../components/pages/Carrito/carrito';
import CarritoItem from '../components/pages/CarritoItem/carritoItem.';
import Pedido from '../components/pages/Admin/pedido/pedido';
import PedidoDetalle from '../components/pages/Admin/pedido/pedidoDetalle';
import MisPedidos from '../components/pages/MisPedidos/mispedidos';
import MisPedidoDetalle from '../components/pages/MisPedidos/mispedidosDetalle';
import Products from '../components/pages/Productos/Products';
import Logueo from '../components/pages/Logueo/Logueo';
import Registrar from '../components/pages/Registar/Registrar';
import Detalle from '../Vistas/Detalle/Detalle';
import Footer from '../components/Footer/Footer';
import React from "react";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/services' component={Services} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/iniciar-sesion' component={Logueo} />
        <Route exact path='/registrarse' component={Registrar} />
        <Route exact path='/carrito' component={Carrito} />
        <Route exact path='/carritoItem/:iditem' component={CarritoItem} />
        <Route exact path="/products/:idproducto" component={Detalle} />
        <Route exact path="/pedido" component={Pedido} />
        <Route exact path="/pedido/:idpedido" component={PedidoDetalle} />
        <Route exact path="/mispedidos:idUser" component={MisPedidos} />
        <Route exact path="/mispedidos/:idpedido" component={MisPedidoDetalle} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
