import { productsTypes } from "../types";


export function fillProducts(data) {
    console.log(data);
  return {
    type: productsTypes.FILL_PRODUCTS,
      payload: data ,
  };
}

export function getProductsAsync() {
  return async function (dispatch) {
      const results = await fetch("./ProductData.json")
          const data = await results.json()
          
          
  
    dispatch(fillProducts(data));
  };
}

 export const addToFavorite = (id) => {
   return {
     type: productsTypes.FILL_FAVORITS,
     payload: id,
   };
 };

 export const addToCart = (id) => {
   
   return {
     type: productsTypes.FILL_CART,
     payload: id,
   };
 };

 export const deleteFromCart = (id) => {
   return {
     type: productsTypes.DEL_CART,
     payload: id,
   };
};
 
export const informAboutCheckProducts = () => {
  return {
    type: productsTypes.TRANSFORM_CART
  }
};

export const checkOutCart = () => { 
  return {
    type: productsTypes.CHECKOUT_CART
  }
}
  

// dispatch action creator -> middleware(redux-thunk) -> store -> reducer -> store -> useSelector

// getFilmsAsync() -> redux-thunk -> getFilmsAsync()() -> dispatch action fillFilms(data) action -> store -> filmsReducer -> store -> useSelector gets updated value
