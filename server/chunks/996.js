"use strict";
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 2996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ StateContext),
/* harmony export */   "F": () => (/* binding */ useStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const StateContext = ({ children  })=>{
    const { 0: showCart , 1: setshowCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: cartItems , 1: setcartItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: totalPrice , 1: settotalPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: totalQuantities , 1: settotalQuantities  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: qty , 1: setqty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    let foundProduct;
    let index;
    const incQty = ()=>{
        setqty((prev)=>prev + 1
        );
    };
    const decQty = ()=>{
        setqty((prev)=>{
            if (prev - 1 < 1) return 1;
            return prev - 1;
        });
    };
    const onAdd = (product, quantity)=>{
        const checkProductCart = cartItems.find((item)=>item._id === product._id
        );
        settotalPrice((prevTotalPrice)=>prevTotalPrice + product.price * quantity
        );
        settotalQuantities((prevTotalQuantities)=>prevTotalQuantities + quantity
        );
        if (checkProductCart) {
            const updatedCartItems = cartItems.map((cartItem)=>{
                if (cartItem._id === product._id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + quantity
                    };
                }
            });
            setcartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setcartItems([
                ...cartItems,
                {
                    ...product
                }
            ]);
        }
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].success(`${qty} ${product.name} added to cart`);
    };
    const toggleCartItemQuantity = (id, value)=>{
        foundProduct = cartItems.find((item)=>item._id === id
        );
        index = cartItems.findIndex((item)=>item._id === id
        );
        const newCartItems = cartItems.filter((item)=>item._id !== id
        );
        if (value === "inc") {
            setcartItems([
                ...newCartItems,
                {
                    ...foundProduct,
                    quantity: foundProduct.quantity + 1
                }, 
            ]);
            settotalPrice((prevTotalPrice)=>prevTotalPrice + foundProduct.price
            );
            settotalQuantities((prevTotalQuantities)=>prevTotalQuantities + 1
            );
        } else if (value === "dec") {
            if (foundProduct.quantity > 1) {
                setcartItems([
                    ...newCartItems,
                    {
                        ...foundProduct,
                        quantity: foundProduct.quantity - 1
                    }, 
                ]);
                settotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price
                );
                settotalQuantities((prevTotalQuantities)=>prevTotalQuantities - 1
                );
            }
        }
    };
    const onRemove = (product)=>{
        foundProduct = cartItems.find((item)=>item._id === product._id
        );
        const newCartItems = cartItems.filter((item)=>item._id !== product._id
        );
        settotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price * foundProduct.quantity
        );
        settotalQuantities((prevTotalQuantities)=>prevTotalQuantities - foundProduct.quantity
        );
        setcartItems(newCartItems);
    };
    const openCart = ()=>{
        setshowCart(true);
    };
    const closeCart = ()=>{
        setshowCart(false);
    };
    const clear = ()=>{
        setcartItems([]);
        settotalPrice(0);
        settotalQuantities(0);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
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
            settotalQuantities
        },
        children: children
    }));
};
const useStateContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context)
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;