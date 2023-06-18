// import { useOutletContext } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import { useSelector } from "react-redux";
import {  addToFavorite} from "../redux/actions/productsAction";
import { handleModalActive } from "../redux/actions/modalAction";
function StartPage(props) {

       

      const {cardProducts, favorits, cart} = useSelector((state) =>  state.products);              
        const { modalActive, modalId, headerText, mainText, modalHandler } = useSelector((state) => state.modal);
   

    
    return  <ProductList
               cardProducts={cardProducts}
               favorits={favorits}
              cart={cart}

           modalActive={modalActive}
           modalId={modalId}
           headerText={headerText}
           mainText={mainText}
           modalHandler={modalHandler}
                             
        addToFavorite={addToFavorite}
       
       handleModalActive={handleModalActive}
       
            childrenProps={{
             hideButtonCount:true,
              }}
    />
}

export default StartPage;