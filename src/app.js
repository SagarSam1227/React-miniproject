import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/header.js";
import Body from "./components/body.js";
import Error from "./components/Error.js";
import Footer from "./components/footer.js";
import Shimmer from "./components/Shimmer.js";
import AdminLogin from "./components/AdminLogin.js";
import AdminDashboard from "./components/AdminDashboard.js";
import ListUser from "./components/ListUser.js";
import Admin from "./components/Admin.js";
import Login from "./components/login.js";
import Signup from "./components/Signup.js";
import ProductDetails from "./components/ProductDetails.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const Cart = lazy(() => import("./components/Cart.js"));
import userContext from "../utils/userContext.js";


const Container = () => {

  const [loginUser,setLoginUser] = useState({})
  return (
    <>
    <userContext.Provider value={{
      user:loginUser,
      setLoginUser:setLoginUser
    }}>
      <Header />
      <Outlet />
      <Footer />
    </userContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/signup",
        element:<Signup />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
  {
    path:"/admin",
    element:<Admin />,
    errorElement:<Error />,
    children:[
      {
        path:'/admin',
        element:<AdminLogin />
      },
      {
        path:"/admin/list-user",
    element:<ListUser />,
      },
      {
        path:"/admin/dashboard",
        element:<AdminDashboard />
      }
      
    ]

  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
