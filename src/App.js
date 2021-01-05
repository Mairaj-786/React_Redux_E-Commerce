import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Home'
import MainNav from './Container/MainNav';
import Navbar from './Container/Navbar';
import Slides from './Components/Slides';
import LatestProduct from './Components/LatestProduct';
import ThirdNav from './Container/ThirdNav';
import './index.css';


import { Provider } from 'react-redux'
import store from './Store';
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
import KidsProducts from './Components/KidsProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <MainNav />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/details/:id" component={SingleProduct}></Route>
            <Route exact path="/carts" component={Cart}></Route>
            <Route exact path="/kids" component={KidsProducts}></Route>
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
