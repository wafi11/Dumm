import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFakeStore from "../hooks/FakeStoreApi";
import { useModalStore } from "../hooks/useModal";
import { useCartSlice } from "../hooks/CartSlice";

const ProductsId = () => {
  const params = useParams();
  const { cart, addToCart } = useCartSlice();
  const { fetchProductID, ProductId } = useFakeStore();

  useEffect(() => {
    fetchProductID(`${params.productId}`);
  }, []);
  const handleModal = (item) => {
    addToCart(item);
  };
  return (
    <div
      className="overflow-hidden relative h-screen bg-gray-100 flex justify-center 
    items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[0]"></div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center relative">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              src={
                `${`https://cdn.dummyjson.com/product-images/${params.productId}/thumbnail.jpg`}` ||
                `${`https://cdn.dummyjson.com/product-images/${params.productId}/2.jpg`}` ||
                `${`https://cdn.dummyjson.com/product-images/${params.productId}/2.png`}`
              }
              alt={ProductId.image}
              className="max-w-[200px] lg:max-w-sm "
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-5 max-w-[450px] mx-auto">
              {ProductId.title} ~ {ProductId.brand}
            </h1>
            <p className="text-yellow-300 mb-2  text-xl text-center mr-auto lg:mr-7 lg:text-right">
              {ProductId.category}
            </p>
            <div className="text-xl text-red-500 font-medium mb-3">
              $ {ProductId.price}
            </div>
            <p className="mb-8">{ProductId.description}</p>
            <button
              onClick={() => handleModal(ProductId)}
              className="bg-gradient-to-r
                 from-primary to-secondary transition-all duration-200 
                 text-white py-1 px-4 rounded-md 
              items-center group">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsId;
