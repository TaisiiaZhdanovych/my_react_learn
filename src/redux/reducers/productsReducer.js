
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
        const cartsId = cart.map((item) => item.id);
        if (!cartsId.includes(action.payload)) {
          newArrCart = [...cart, { id: action.payload, count: 1 }];
        } else {
          newArrCart = cart;
        }
        localStorage.setItem("cart", JSON.stringify(newArrCart));
        return { ...state, cart: newArrCart };

      case productsTypes.DEL_CART:
        let newArrDelCart;

        newArrDelCart = cart.filter((item) => item !== action.payload);

        return { ...state, cart: newArrDelCart };

      case productsTypes.CHECKOUT_CART:
        localStorage.removeItem("cart");
        return { ...state, cart: [] };

      case productsTypes.ADD_COUNT:
        // const { cart } = state;
        const addCards = cart.find((item) => item.id === action.payload);
        addCards.count += 1;

        let newArrCount = cart.map((item) => {
          if (item.id === addCards.id) {
            return addCards;
          } else {
            return item; // Додано повернення значення `item`
          }
        });
        localStorage.setItem("cart", JSON.stringify(newArrCount));

        return { ...state, cart: newArrCount };

      case productsTypes.REMOVE_COUNT:
       
        const removeCards = cart.find((item) => item.id === action.payload);
        if (removeCards.count > 0) { removeCards.count -= 1 }
        if (removeCards.count < 1) {
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
        };

        let newArrCountMinus = cart.map((item) => {
          if (item.id === removeCards.id) {
            return removeCards;
          } else {
            return item; // Додано повернення значення `item`
          }
        });
        localStorage.setItem("cart", JSON.stringify(newArrCountMinus));

        return { ...state, cart: newArrCountMinus };

      default:
        return state;
    }
}
