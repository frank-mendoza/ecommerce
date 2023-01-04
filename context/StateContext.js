import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalQuantities, settotalQuantities] = useState(0);
  const [qty, setqty] = useState(1);

  let foundProduct;
  let index;

  const incQty = () => {
    setqty((prev) => prev + 1);
  };

  const decQty = () => {
    setqty((prev) => {
      if (prev - 1 < 1) return 1;

      return prev - 1;
    });
  };

  const onAdd = (product, quantity) => {
    const checkProductCart = cartItems.find((item) => item._id === product._id);
    settotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    settotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductCart) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === product._id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
        }
      });

      setcartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setcartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to cart`);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((item) => item._id === id);

    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setcartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);

      settotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      settotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setcartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);

        settotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        settotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    settotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    settotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setcartItems(newCartItems);
  }

  const openCart = () => {
    setshowCart(true);
  };

  const closeCart = () => {
    setshowCart(false);
  };

  const clear = () => {
    setcartItems([])
    settotalPrice(0)
    settotalQuantities(0)
  }

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        openCart,
        onAdd,
        onRemove,
        closeCart,
        toggleCartItemQuantity,
        clear,
        settotalPrice,
        settotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
