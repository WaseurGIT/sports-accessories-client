import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Error from "./components/Error/Error";
import AuthProvider from "./AuthProvider";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import Users from "./components/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "products",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
