// import { productsTypes } from "../types";
import { modalTypes } from "../types";
// import { faveJsonParse } from "../../Helpers/OtherFunction";





const initialState = {
  
  modalActive: false,
  modalId: null,
  headerText: "",
  mainText: "",
  modalHandler: null
};



export function modalsReducer(state = initialState, action) { 
    switch (
      action.type 
    ) {
      case modalTypes.OPEN_MODAL:
        const { id, modalHeaderText, modalMainText, modalHandler, modalActive } =
          action.payload;
        return {
         
          modalId: id,
          headerText: modalHeaderText,
          mainText: modalMainText,
          modalHandler: modalHandler, 
          modalActive: modalActive,
        };

      case modalTypes.CLOSE_MODAL:
        return {
          modalActive: false,
          modalId: null,
          headerText: "",
          mainText: "",
          modalHandler: null,
        };

      default:
        return state;
    }
}