import React, { useEffect } from "react";
import { useModalStore } from "../hooks/useModal";
import { IoCloseOutline } from "react-icons/io5";
import { useCartSlice } from "../hooks/CartSlice";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { CloseSharp, ClosedCaptionOffRounded } from "@mui/icons-material";
import useStoreApi from "../hooks/useApi";

const Modal = () => {
  const { modal, onClose } = useModalStore();
  const { fetchProduct, product } = useStoreApi();
  const {
    cart,
    amount,
    setAmount,
    itemAmount,
    totalAmount,
    priceProduct,
    increaseAmount,
    decreaseAmount,
    removeCart,
    clearCart,
  } = useCartSlice();

  const handleCheckoutToWhatsapp = () => {
    if (totalAmount === 0) return;

    const phoneNumber = "6281318841398";
    const message = encodeURIComponent(
      `Halo, Saya ingin membeli :\n${cart
        .map((product) => `${product.amount} barang - ${product.title}`)
        .join(",\n")} \n\nTotal harga $ ${totalAmount()}`
    );

    const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(URL, "_blank");
  };

  useEffect(() => {
    itemAmount();
  }, [cart]);

  return (
    <>
      {modal && (
        <div className="" onClick={onClose}>
          <div className="realtive h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm ">
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md
             bg-white dark:bg-gray-900 rounded-md duration-200 w-[500px]">
              {/* header */}
              <div className="flex items-center justify-between p-4 border-b-[1px] border-gray-300">
                <div>
                  <h1>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => onClose()}
                  />
                </div>
              </div>
              <div className=" mt-4 w-full h-[400px] overflow-y-auto">
                {cart?.map((item) => (
                  <div
                    className=" flex justify-between p-4 mb-10 h-30 border-b-[1px] border-gray-400 "
                    key={item.id}>
                    <img
                      src={item.images[0]}
                      alt="../"
                      className="w-20 h-20 "
                    />
                    <div className="grid cursor-pointer justify-center items-center text-center ">
                      <span className="text-md">{item.title}</span>
                      <div className="flex flex-row justify-center ">
                        <button
                          className="text-sm  px-2 "
                          onClick={() => increaseAmount(item)}>
                          <FaPlus />
                        </button>
                        <button className="text-sm  px-3 ">
                          {item.amount}
                        </button>
                        <button className="text-sm  px-2 ">
                          <FaMinus onClick={() => decreaseAmount(item)} />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 px-2">
                      <CloseSharp onClick={() => removeCart(item)} />
                      <p>Rp. {(item.amount * item.price).toFixed(3)}</p>
                    </div>
                  </div>
                ))}
                <div
                  className=" w-full bottom-0 mt-2 h-[50px] bg-gray-100 grid grid-cols-2 justify-center
                 items-center text-center fixed">
                  <h4 className="">Total : $ {totalAmount()}</h4>
                  <button
                    className=" bg-gray-200 py-3"
                    onClick={handleCheckoutToWhatsapp}>
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
