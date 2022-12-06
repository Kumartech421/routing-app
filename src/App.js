import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import Order from './Components/Order';
import User from './Components/User';
import UserDetails from './Components/UserDetails';
import PageNotFound from './Components/PageNotFound';
import CommonService from './ServiceComponent/CommonService';
import CommonFunctional from './ServiceComponent/CommonFunctional';
import PostService from './ServiceComponent/PostService';
import ParentComp from './PureComponent/ParentComp';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeShopComponent from './redux/cake/CakeShopComponent';
const LazyAbout = React.lazy(() => import('./Components/About'));

function App() {
  return (
    <Provider store={store}>
    <>
      <CakeShopComponent />
    </> 
    </Provider>
  )
    {/* This is get api */}
    {/* <CommonService />
    <CommonFunctional /> */}
    {/* This is get api */}


    {/* This is Post api */}
     {/* <PostService /> */}



    {/* <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<React.Suspense fallback="loading............."><LazyAbout /></React.Suspense>} />
        <Route path='products' element={<Products />} />
        <Route path='order' element={<Order />} />
        <Route path='user' element={<User />}>
          <Route index element={<UserDetails />} />
          <Route path=':userId' element={<UserDetails />} />
          <Route path='userDetails' element={<UserDetails />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes> */}
    {/* </> */}
  {/* ); */}
}

export default App;
