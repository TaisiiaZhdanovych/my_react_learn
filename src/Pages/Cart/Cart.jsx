import "./cart.scss";
import ProductList from "../../components/ProductList/ProductList";
import { cartModalActive } from "../../redux/actions/modalAction";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/actions/productsAction";
// import {SignupForm} from "../../components/Form/Form.js"
import { SignupForm } from "../../components/Form/CheckForm";
import ViewButton from "../../components/ViewButton/ViewButton";


// {/* <div className="item-box row row-cols-2 row-cols-md-3 row-cols-lg-5 g-5"></div> */}

export function Cart() {

  const [formVisible, setFormVisible] = useState(false);

  
  const { cardProducts, cart } = useSelector((state) => state.products);
  
  const [totalPrice, setTotalPrice] = useState(0);
 
  
  // const cartsId = cart.map(item => item.id)
  const cartsId = cart.map(item => item.id)

//   useEffect(() => {
//   const totalPrice = cardProducts.filter(item => cartsId.includes(item.id)).reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
//   setTotalPrice(totalPrice);
// }, [cardProducts, cart, cartsId]);
  
  useEffect(() => {
    const totalPrice = cardProducts.filter(item => cartsId.includes(item.id)).reduce((accumulator, currentItem) => {
      const cartItem = cart.find(cartItem => cartItem.id === currentItem.id);
      const itemPrice = currentItem.price * cartItem.count;
      return accumulator + itemPrice;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cardProducts, cart, cartsId]);


  const dispatch = useDispatch();
 

const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };


  
    
    return (
    <div className="cart__container">
      {cart.length ? (
        <>
          <div className="cart">
            <ProductList
              cardProducts={cardProducts.filter((item) => cartsId.includes(item.id))}
              AddtoCart={dispatch(deleteFromCart)}
              handleModalActive={cartModalActive}
              childrenProps={{
                buttonText: 'X',
                style: { display: "none" },
                hideCountButton: true
              }}
            />
            </div>
          <div className="cart__check">
                <div className="price-field">
                  <label className="currency-symbol">$</label>
                  <input type="text" className="price-input" placeholder="Total price" value={totalPrice} readOnly/>
              </div>
           
              <ViewButton onClick={toggleFormVisibility} buttonText={"ОФОРМИТИ ЗАМОВЛЕННЯ"}/>
              {/* <button className="cart__btn" onClick={toggleFormVisibility }>ОФОРМИТИ ЗАМОВЛЕННЯ</button>     */}
              {formVisible && <div><SignupForm totalPrice={totalPrice}/></div>}
             
              
          </div>
        </>
      ) : (
        <i className="empty__text">Ваша корзина порожня, переходьте до головної сторінки і обирайте!</i>
      )}
    </div>
  );
}








 // return (
      
     
    //       <div className="cart__container">
    //     <div className="cart">
    //       {cart.length ? <ProductList
    //         cardProducts={cardProducts.filter(item =>  cart.includes(item.id))}
            
            
    //     AddtoCart={dispatch(deleteFromCart)}   
    //         handleModalActive={cartModalActive}
           
    //         childrenProps={{
    //           buttonText: 'X',
    //           style:{display:"none"}}} />: <i className="empty__text">Ваша корзина порожня, переходьте до головної сторінки і обирайте!</i>} 
        
           
    //     </div>  
    //           <div className="price-field">
    //               <span className="currency-symbol"> $ </span>
    //               <input type="text" className="price-input" placeholder="Total price" value={totalPrice} readOnly/>
         
    //           </div>
    //                <button className="cart__btn">CHECKOUT</button>
    //    </div>
    // )