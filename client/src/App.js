 
import './App.scss';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,Outlet,
  Route,
  Link,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Error } from './pages/Error';
import { Children } from 'react';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Products } from './pages/Products';

const Layout=()=>{
    return(
    <div className='app'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    )
}


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement:<Error/> , 
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/products",
        element:<Products/>
      },
    ]
  },
   
]);

function App() {
  return (
     <div className='app'>
               <RouterProvider router={router} />
     </div>
  );
}

export default App;
