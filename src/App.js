
import './App.css';
import Login from './Pages/Login/Login/Login'
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import PopularItem from './Pages/Home/PopularItem/PopularItem';
import AdFoodItems from './Pages/AdFoodItems/AdFoodItems';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import ManageFoodItems from './Pages/ManageFoodItems/ManageFoodItems';
import Deliveryinfo from './Pages/Deliveryinfo/Deliveryinfo';
import Product from './Pages/Home/Product/Product';
import ContactUs from './Pages/Home/ContactUs/ContactUs';
import About from './Pages/Home/About/About';
import NotFound from './Pages/NotFound/NotFound';
import NavBar from './Pages/Shared/Header/NavBar';
import Deshboard from './Pages/Deshboard/Deshboard';
import Thankyou from './Pages/Thankyou';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/thankyou'>
              <Thankyou></Thankyou>
            </Route>
            <PrivateRoute exact path='/product'>
              <Product></Product>
            </PrivateRoute>
            <Route exact path='/popularitem'>
              <PopularItem></PopularItem>
            </Route>
            <PrivateRoute exact path='/adfooditems/'>
              <AdFoodItems></AdFoodItems>
            </PrivateRoute>
            <PrivateRoute exact path='/deshboard'>
              <Deshboard></Deshboard>
            </PrivateRoute>
            <PrivateRoute exact path='/managefooditems'>
              <ManageFoodItems></ManageFoodItems>
            </PrivateRoute>
            <Route exact path='/contactus'>
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path='/confirmitem/:itemId'>
              <AdFoodItems></AdFoodItems>
            </PrivateRoute>
            <PrivateRoute path='/deliveryinfo'>
              <Deliveryinfo></Deliveryinfo>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
