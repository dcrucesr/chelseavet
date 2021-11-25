import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Servicios/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp';
import Detalle from './Vistas/Detalle/Detalle';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/services' component={Services} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path="/products/:idproducto" component={Detalle} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
