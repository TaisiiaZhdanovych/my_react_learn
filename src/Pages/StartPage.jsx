// import { useOutletContext } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import { useSelector } from "react-redux";
import {  addToFavorite} from "../redux/actions/productsAction";
import { handleModalActive } from "../redux/actions/modalAction";
function StartPage(props) {

       // function addToCart() {
              
       // }

      const {cardProducts, favorits, cart} = useSelector((state) =>  state.products);              // add cart in {} this
        const { modalActive, modalId, headerText, mainText, modalHandler } = useSelector((state) => state.modal);
   
//     const { handleModalActive } = useOutletContext();
    
    return  <ProductList
               cardProducts={cardProducts}
               favorits={favorits}
              cart={cart}

           modalActive={modalActive}
           modalId={modalId}
           headerText={headerText}
           mainText={mainText}
           modalHandler={modalHandler}
                             //add cart={cart}  this
        addToFavorite={addToFavorite}
       //  addToCart={addToCart}                // додала після reducer this
           handleModalActive={handleModalActive}
    />
}

export default StartPage;