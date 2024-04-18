import React, { Suspense, useState } from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Men from "./components/men";
// import Search from "./components/navbar/Search";
import SearchPage from "./components/pages/Search";
import ProductsId from "./components/pages/ProductsId";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // { path: "/search:query", element: <SearchPage /> },
  { path: `/search`, element: <SearchPage /> },
  // { path: "/products", element: <Men /> },
  { path: `/products/:productId`, element: <ProductsId /> },
]);
