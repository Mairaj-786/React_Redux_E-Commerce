import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Home'
import MainNav from './Container/MainNav';
import Navbar from './Container/Navbar';
import './index.css';


import { Provider } from 'react-redux'
import store from './Store';
import SingleProduct from './Components/SingleProduct';

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
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
