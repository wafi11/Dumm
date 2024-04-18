// import React, { useEffect } from "react";
// import { useCartSlice } from "./hooks/CartSlice";
// import useFakeStore from "./hooks/FakeStoreApi";

import { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import useFakeStore from "./hooks/FakeStoreApi";

// // const Men = ({ item }) => {
// //   const {
// //     cart,
// //     addToCart,
// //     removeCart,
// //     clearCart,
// //     increaseAmount,
// //     decreaseAmount,
// //     totalAmount,
// //   } = useCartSlice();
// //   const { fetchProduct, product } = useFakeStore();

// //   useEffect(() => {
// //     fetchProduct();
// //   }, []);
// //   const handleClikBuy = (item) => {
// //     addToCart(item);
// //   };
// //   console.log(cart);
// //   return (
// //     <>
// //       <div className="pt-20">
// //         <h1 className="text-white text-3xl">total : </h1>
// //         <h1 className="text-white text-3xl">total : </h1>
// //       </div>
// //       {product.products?.map((item) => {
// //         return (
// //           <div key={item.id}>
// //             <h1>{item.title}</h1>
// //             <button
// //               onClick={() => handleClikBuy(item, item.id)}
// //               className="dark:bg-orange-700 bg-slate-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-yellow-500">
// //               Buy
// //             </button>
// //             <button
// //               onClick={() => removeCart(item)}
// //               className="dark:bg-orange-700 bg-slate-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-yellow-500">
// //               cell
// //             </button>
// //             <button
// //               onClick={() => clearCart(item)}
// //               className="dark:bg-orange-700 bg-slate-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-yellow-500">
// //               CLEAR
// //             </button>
// //             <button
// //               onClick={() => increaseAmount(item)}
// //               className="dark:bg-orange-700 bg-slate-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-yellow-500">
// //               +
// //             </button>
// //             <button
// //               onClick={() => decreaseAmount(item, item.amount)}
// //               className="dark:bg-orange-700 bg-slate-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-yellow-500">
// //               -
// //             </button>
// //           </div>
// //         );
// //       })}
// //     </>
// //   );
// // };

// // export default Men;

// function Men() {
//   // // const [searchParams, setSearchParams] = useSearchParams();
//   // const [searchQuery, setSearchQuery] = useState();
//   // const navigate = useNavigate();

//   // // const handleSearchChange = (e) => {
//   // //   setSearchQuery(e.target.value);
//   // // };

//   // // const handleSubmit = (e) => {
//   // //   e.preventDefault();
//   // //   setSearchParams({ query: searchQuery });
//   // // };

//   // // searchParams.get("query");
//   // // const handleLink = () => {
//   // //   navigate(`?${searchParams}`);
//   // // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // setSearchParams({ q: searchQuery });
//   //   // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
//   // };
//   // console.log(searchParams);

//   // const { fetchProduct, product } = useFakeStore();

//   // useEffect(() => {
//   //   fetchProduct();
//   // }, []);

//   return (

//   )
//   // return (
//   //   // <div>
//   //   //   {/* <form > */}
//   //   //   <input
//   //   //     type="text"
//   //   //     // value={searchQuery}
//   //   //     onChange={(e) => setSearchQuery(e.target.value)}
//   //   //     placeholder="Enter your search query"
//   //   //   />
//   //   //   <Link rel="stylesheet" to={`/search?q=${searchQuery}`}>
//   //   //     <button
//   //   //       type="submit"
//   //   //       // onClick={() => {
//   //   //       //   const params = new URLSearchParams();
//   //   //       //   params.set("query", searchParams);
//   //   //       //   setSearchParams(params, {
//   //   //       //     onLoading: true,
//   //   //       //   });
//   //   //       // }}>
//   //   //     >
//   //   //       Submit
//   //   //     </button>
//   //   //   </Link>
//   //   //   {/* </form> */}
//   //   //   {/* <h1>{searchParams.get("q")}</h1> */}
//   //   // </div>

//   //   <div>
//   //     <div className="grid grid-cols-6">
//   //       {product.products?.map((item) => {

//   //         return (
//   //           <div key={item.id} className="">
//   //             <a href={`/products/${item.id}`}>{item.title}</a>
//   //           </div>
//   //         );
//   //       })}
//   //     </div>
//   //   </div>
//   // );
// }

const Men = () => {
  const { fetchProduct, product } = useFakeStore();

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <div>
        <div className="grid grid-cols-6">
          {product.products?.map((item) => {
            return (
              <div key={item.id} className="">
                <Link to={`/products/${item.id}`}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Men;
