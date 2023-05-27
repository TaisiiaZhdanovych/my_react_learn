


// import { useSelector } from "react-redux";
import CardItem from "../ProductItem/CardItem";


 



function ProductList (props) {
   
 


  return (
    <>
      
      {props.cardProducts.map((item) => {
        return (

          <CardItem
            favorite={props.favorits?.includes(item.id)}
            key={item.id}
          
            {...item}
             addToFavorite={props.addToFavorite}
            buttonText={'Add to Cart'}

             setModalActive={props.handleModalActive}     
           
            {...props.childrenProps}
          />
        );
      })}

                        
         
        
      
                </>
            )
        }
    

export default ProductList;











