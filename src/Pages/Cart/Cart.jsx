


import "./cart.scss";
import ProductList from "../../components/ProductList/ProductList";
import { cartModalActive } from "../../redux/actions/modalAction";

import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/actions/productsAction";





export function Cart() {

  
  const {cardProducts, cart} = useSelector((state) =>  state.products);
  
 const dispatch = useDispatch();
    return (
      
     
          
        <div className="item-box row row-cols-2 row-cols-md-3 row-cols-lg-5 g-5">{cart.length?<ProductList
            cardProducts={cardProducts.filter(item => cart.includes(item.id))}
            
            
        AddtoCart={dispatch(deleteFromCart)}   
            handleModalActive={cartModalActive}
           
            childrenProps={{
              buttonText: 'X',
              style:{display:"none"}}} />: <i className="empty-text">Ваша корзина порожня, переходьте до головної сторінки і обирайте!</i>} 
        
            
            </div>  
            

    )
}
