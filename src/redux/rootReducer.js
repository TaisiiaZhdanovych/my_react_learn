import { combineReducers } from "redux";

import { productsReducer as products } from "./reducers/productsReducer";
import { modalsReducer as modal } from "./reducers/modalReducer";

export const rootReducer = combineReducers({
    products,
    modal                                             //this
});
