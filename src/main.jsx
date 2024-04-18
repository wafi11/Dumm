import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import Navbar from "./components/navbar/index.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./components/modal/Modal.jsx";
import { useModalStore } from "./components/hooks/useModal.jsx";
import Footer from "./components/footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <QueryParamProvider adapter={ReactR} */}
    <Navbar />
    <Modal />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
