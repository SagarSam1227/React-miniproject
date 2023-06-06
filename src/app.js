import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.js";
import Body from "./components/body.js";
import Error from "./components/Error.js";
import Footer from "./components/footer.js";
import Shimmer from "./components/Shimmer.js";
import Login from "./components/login.js";
import ProductDetails from "./components/ProductDetails.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const Cart = lazy(() => import("./components/Cart.js"));
import userContext from "../utils/userContext.js";


const Container = () => {

  const [loginUser,setLoginUser] = useState({
    name:'priyesh',
    email:'pri'
  })
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
