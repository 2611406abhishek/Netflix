import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import './App.css';
import Home from '../src/pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserList from './pages/UserList';
import User from './pages/User';
import NewUser from './pages/NewUser';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';
import React, { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';
import ListList from './pages/ListList';
import List from './pages/List';
import NewList from './pages/NewList';

const App = () => {
 
 const {user} = useContext(AuthContext);
//  console.log(user);
  return (

    <BrowserRouter >
       
      
       {!user ? (
        <>
        <Login/>
        </>
       ) : (
          <>
        <Topbar/>
       <div className='container'>
            <><Sidebar/></>
             <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/users" element={<UserList/>}/>
              <Route exact path="/user/:userId" element={<User/>}/>
              <Route exact path="/newUser" element={<NewUser/>}/>
              <Route exact path="/movies" element={<ProductList/>}/>
              <Route exact path="/product/:productId" element={<Product/>}/>
              <Route exact path="/newproduct" element={<NewProduct/>}/>
              <Route exact path="/lists" element={<ListList/>}/>
              <Route exact path="/list/:listId" element={<List/>}/>
              <Route exact path="/newList" element={<NewList/>}/>
              <Route path="*" element={<Home/>}/>
              </Routes>
             
       </div>
       </>)}

    </BrowserRouter>
  )
}

export default App;