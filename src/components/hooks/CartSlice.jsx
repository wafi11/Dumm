import { Create } from "@mui/icons-material";
import { create } from "zustand";

export const useCartSlice = create((set, get) => ({
  cart: [],
  setCart: (cart) => set(() => ({ cart: cart })),
  amount: 0,
  setAmount: (amounts) => set(() => ({ amount: amounts })),
  // filterByCategory: (item) => {

  //   const { cart } = get();
  //   const filter = cart.findIndex((product) => {
  //     return item.id === product.id;
  //   });
  //   console.log(filter);
  //   if (filter !== -1) {
  //     const updatedCategory = cart.filter(
  //       (category) => item.category !== category.category
  //     );
  //     console.log(updatedCategory);
  //   }
  //   let TempDatas = [];
  //   if (cart.length === 0) {
  //     TempDatas = cart;
  //     console.log(TempDatas);
  //   }
  // },
  totalAmount: () => {
    const { cart, setCart } = get();
    if (cart) {
      // const amount = cart.reduce((total,item) =>{ return  total + item.amount},0)
      const totalAmounts = cart.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
      return totalAmounts;
    }
  },
  itemAmount: () => {
    const { cart, setAmount } = get();
    if (cart) {
      const amount = cart.reduce((total, item) => {
        return total + item.amount;
      }, null);
      // const totalAmount = cart.reduce((total, item) => total + item.price * item.amount, 0);
      return setAmount(amount);
    }
  },
  priceProduct: () => {
    const { cart, setAmount } = get();
    if (cart) {
      const totalAmount = cart.reduce((total, item) => {
        total + item.price * item.amount;
      }, 0);
      return setAmount(totalAmount);
    }
  },
  addToCart: (product, products) => {
    const { cart, setCart, itemAmount } = get();
    const data = { ...product, amount: 1 };
    const CartItem = cart.find((item) => {
      return item.id === product.id;
    });
    console.log(`item ${product.title}`);
    if (CartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, data]);
    }
    console.log(cart);
  },

  // addToCart: (product) =>
  //   set((state) => {
  //     state.items++;
  //     const hasProduct = state.cart.find((p) => p.id === product.id);
  //     if (hasProduct) {
  //       return {
  //         cart: state.cart.map((p) => {
  //           if (p.id === product.id) {
  //             return { ...p, amount: p.quantity + 1 };
  //           }
  //         }),
  //       };
  //     }
  //   }),
  removeCart: (product) => {
    const { cart, setCart } = get();
    const newCart = cart.filter((item) => {
      return item.id !== product.id;
    });
    setCart(newCart);
  },
  clearCart: () => {
    const { cart, setCart } = get();
    console.log("testing");
    setCart([]);
  },
  increaseAmount: (product) => {
    const { cart, setCart, addToCart } = get();
    console.log(`item telah ditambahkan ${product.amount}`);
    const CartItem = cart.findIndex((item) => {
      return item.id === product.id;
    });
    console.log(CartItem);
    addToCart(product);
  },
  decreaseAmount: (product) =>
    // const { cart, setCart, removeCart } = get();
    // const CartItem = cart.find((item) => {
    //   return item.id === product.id;
    // });
    // if (CartItem) {
    //   const newCart = cart
    //     .map((item) => {
    //       if (item.id === product.id) {
    //         return { ...item, amount: CartItem.amount - 1 };
    //       }
    //       return item;
    //       //  else {
    //       //   console.log("sebelum");
    //       //   return cart.filter((item) => {
    //       //     item.id !== product.id;
    //       //   });
    //       // }
    //     })
    //     .filter((p) => p.amount > 0);
    //   //   setCart(newCart);
    //   }
    //   console.log(CartItem);
    //   // if (id <= 1) {
    //   //   const newCart = cart.filter((item) => {
    //   //     return item.id !== product.id;
    //   //   });
    //   //   setCart(newCart);
    //   // }
    //   console.log(cart);
    // },
    set((state) => {
      const updatedItems = state.cart.map((item) =>
        item.id === product.id
          ? { ...item, amount: Math.max(0, item.amount - 1) }
          : item
      );
      return {
        cart: updatedItems.filter((item) => item.amount > 0),
      };
    }),

  clearCarts: () => set({ cart: [] }),
}));
