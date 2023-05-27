import { modalTypes } from "../types";
// import { productsTypes } from "../types";



export function openModal(id) {
      return {
        type: modalTypes.OPEN_MODAL,
        payload: id
      };
}
 
export function closeModal() {
  return {
    type: modalTypes.CLOSE_MODAL,
   
  };
}









export const handleModalActive = (active,id) => {
    return async function (dispatch, getState) {
      let { products } = getState();
      console.log(getState());
      let modalHandler = "addToCart";
      let modalActive = active;
    //   console.log("я тут");
      let modalHeaderText = "Додати товар у корзину";
      let modalMainText = "Чи дійсно ви бажаєте додати товар у корзину?";

      
      if (products.cart.includes(id)) {
       
        modalHeaderText = "Зверніть увагу";
        modalMainText = "Toвар вже у корзині"; 
        
      }
     
      
         dispatch(
           openModal({
             modalHeaderText,
             modalMainText,
             modalActive,
             modalHandler,
             id
           })
      );
      
    };

    

   
};


export const cartModalActive = (active, id) => {
  return async function (dispatch, getState) {
   
    console.log(getState());
    let modalHandler = "deleteFromCart";
    let modalActive = active;
    //   console.log("я тут");
    let modalHeaderText = "Видалення";
    let modalMainText = "Чи дійсно ви бажаєте видалити товар із корзини?";

    dispatch(
      openModal({
        modalHeaderText,
        modalMainText,
        modalActive,
        modalHandler,
        id,
      })
    );
  };
};

// export const closeModalActive = () => {
//     return async function (dispatch) {
        
//         let modalActive = false;
//         console.log("я тут");
//         let modalHederText = "";
//         let modalMainText = "";
//         let id = 0;
//         dispatch(closeModal({ modalHederText, modalMainText, modalActive, id }));
//     };
// }



