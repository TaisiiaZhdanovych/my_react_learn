import React, {useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import { Outlet } from "react-router-dom";
import { getProductsAsync, addToCart, deleteFromCart, } from "../redux/actions/productsAction";
import {  closeModal} from "../redux/actions/modalAction";

export function Home (props) {
  const dispatch = useDispatch();
  const { favorits, cart } = useSelector((state) => state.products);

  
   const { modalActive, modalId, headerText, mainText, modalHandler} = useSelector((state) =>  state.modal);
  
 

 useEffect(() => {                            // асинхронна ф-ція по отриманню products
    dispatch(getProductsAsync());
 }, [dispatch]);
  
  
  useEffect(() => {
    // Збереження даних в localStorage при зміні `cart` або `favorits`
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorits", JSON.stringify(favorits));
  }, [cart, favorits]);
  
  
  function checkHandler(value) {          
    switch (value) {
      case "deleteFromCart":
        
        return deleteFromCart;
    
        case "addToCart":
       return addToCart;
      
      default:
      
        return  "closeModal"
    }
  }


  


  return (
        <>
            
        <section className="py-4 container">
          <div className="row juctify-content-center">
            <h1 className="text-center mt-3">
        <Header
            favCounter={favorits.length}
            cartCounter={cart.length}
           primary={favorits.length > 0}
        />
      </h1>
           
          <Outlet/>
             <Modal
          active={modalActive}
          id={modalId}
          headerText={headerText}
            mainText={mainText}
           
          addToCart={checkHandler(modalHandler)} 
            
           onClick={closeModal}
           
           
        />
          </div>
        </section>
      </>
    );
  

  }





