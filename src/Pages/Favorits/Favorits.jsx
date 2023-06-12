


import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import "./favorits.scss";
import { addToFavorite } from "../../redux/actions/productsAction";

export function Favorits(props) {
 

    
    
  const {cardProducts, favorits} = useSelector((state) =>  state.products);
    
  console.log( "ighiuh", cardProducts);


    return (
      
        
       
           
        <div className="item-box row row-cols-2 row-cols-md-3 row-cols-lg-5 g-5">{favorits.length?<ProductList
          
            cardProducts={cardProducts.filter(item => favorits.includes(item.id))}
            
            
          
            addToFavorite={addToFavorite}
          
           
            childrenProps={{
             hideButton:true,
              style:{color:"red"}}} />: <i className="empty-text">Ви поки що нічого не обрали, переходьте до головної сторінки і обирайте!</i>}
            
            </div>  
            
            

  

    )
}

