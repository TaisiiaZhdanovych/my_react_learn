
import { handleModalActive } from "../../redux/actions/modalAction.js";


import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../../redux/rootReducer.js";
import { composeEnhancers, middleware } from "../../redux/middleware.js";

describe("myReducer", () => {
  let store;

  beforeEach(() => {
      store = createStore(
     rootReducer,
     composeEnhancers(applyMiddleware(...middleware))
   );

  });
  it("should increment the counter", () => {
      store.dispatch(
        handleModalActive(true, 3)
      );
    expect(store.getState().modal).toStrictEqual({
    "headerText": "Додати товар у корзину",
    
    "mainText": "Чи дійсно ви бажаєте додати товар у корзину?",
    
      "modalActive": true,
    
      "modalHandler": "addToCart",
    
      "modalId": 3,
    });
  });
});
