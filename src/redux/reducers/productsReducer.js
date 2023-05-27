
import { productsTypes } from "../types";
import { faveJsonParse } from "../../Helpers/OtherFunction";



const initialState = {

  cardProducts: [],
  favorits: faveJsonParse("favorits"), 
  cart: faveJsonParse("cart"),
};

export function productsReducer(state = initialState, action) {
  const { cart } = state;
    switch (action.type) {
      case productsTypes.FILL_PRODUCTS:
        return { ...state, cardProducts: action.payload };
      case productsTypes.FILL_FAVORITS:
        let newArr;
        const { favorits } = state;
        if (favorits.includes(action.payload)) {
          newArr = favorits.filter((item) => item !== action.payload);
        } else {
          newArr = [...favorits, action.payload];
        }

        return { ...state, favorits: newArr };

      case productsTypes.FILL_CART: 
        let newArrCart;
       
        if (!cart.includes(action.payload)) {
          newArrCart = [...cart, action.payload];
        } else {
          newArrCart = cart;
        }
        localStorage.setItem("cart", JSON.stringify(newArrCart));
        return { ...state, cart: newArrCart };

      case productsTypes.DEL_CART: 
        let newArrDelCart;
       
        newArrDelCart = cart.filter((item) => item !== action.payload);
       
        return { ...state, cart: newArrDelCart };

      default:
        return state;
    }
}
