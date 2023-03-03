import React from 'react';
import { Link } from 'react-router-dom';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from '../../Pages/Login/Login/AdminRoute/AdminRoute';
// import WelcomePage from '../../WelcomePage/WelcomePage';
import ManageFoodItems from '../ManageFoodItems/ManageFoodItems';
import AdFoodItems from '../AdFoodItems/AdFoodItems';

const Deshboard = () => {
  
  
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  
  
  return (
    <div className="container mx-auto px-4">
      <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
              <span className="ml-3 text-xl">Deshboard</span>
            </span>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <Link to='/home'><button className="mr-5 hover:text-gray-900">Home</button></Link>
              <Link to='/payment'><button className="mr-5 hover:text-gray-900">Payment</button></Link>
              
              <Link to='/myorder'><button className="mr-5 hover:text-gray-900">My Order</button></Link>
            <Link to='/adfooditems' className="mt-1 mr-3 ml-auto inline-flex  font-bold text-black bg-yellow-50 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 hover:text-red-500 rounded text-md" >  Add Food Items</Link>
            <Link to='/managefooditems' className="mt-1 mr-3 ml-auto inline-flex  font-bold text-black bg-yellow-50 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 hover:text-red-500 rounded text-md" > Manage Food Items </Link>

            { admin &&

            <span>
              <Link to={`${url}/makeAdmin`}><button className="mr-5 hover:text-gray-900">Make Admin</button></Link>
                          
                <Link to={`${url}/adfooditems`}><button className="mr-5 hover:text-gray-900">Food Add</button>
              </Link>
                <Link to={`${url}/managefooditems`}><button className="mr-5 hover:text-gray-900">Manage Orders</button>
              </Link>
            </span>

            }
              
            </nav>
            
          </div>
        </header>

        <div>
          
        <Switch>
        <Route exact path={path}>
          {/* <DeshboardHome></DeshboardHome> */}
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
          <AdminRoute path={`${path}/adfooditems`}>
            <AdFoodItems></AdFoodItems>
        </AdminRoute>
          <AdminRoute path={`${path}/managefooditems`}>
            <ManageFoodItems></ManageFoodItems>
        </AdminRoute>
      </Switch>
        </div>
      {/* <WelcomePage></WelcomePage> */}
    </div>
  );
};

export default Deshboard;