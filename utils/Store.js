import { createContext, useReducer } from "react";
import Cookies from "js-cookie"; //

export const Store = createContext();

const initialState = {
  cart: Cookies.get("cart") // searching the Cookies from cart key
    ? JSON.parse(Cookies.get("cart")) //convert the cart string to a JS object
    : { cartItems: [], shippingAddress: {}, paymentMethod: "" },
};

function reducer(state, action) {
  // updating the state based on actions.
  switch (
    action.type // It takes the current state and an action object, and it returns a new state based on the action type.
  ) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems })); //convert the obj to a string b4 saving in cookie
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      //Removes an item from the shopping cart.
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_RESET": //Resets the cart to its initial state
      return {
        ...state,
        cart: {
          cartItems: [],
          shippingAddress: { location: {} },
          paymentMethod: "",
        },
      };
    case "CART_CLEAR_ITEMS": //Clears all items from the cart
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    case "SAVE_SHIPPING_ADDRESS": //Saves the shipping address information in the reducer.
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };
    case "SAVE_PAYMENT_METHOD": //Saves the selected payment method.
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
//The StoreProvider component is a context provider.
//It uses the useReducer hook to manage the application state based on the reducer function and initialState.
//It wraps the entire application and provides the state and dispatch functions to child components through the Store context.
// This allows components to access and modify the global state.
