import '@fortawesome/fontawesome-free/css/all.min.css';
import "./cardItem.scss";
import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
import { CountButton } from "../CountProduct/CountProduct";
import { addCount, removeCount} from '../../redux/actions/productsAction';

function CardItem (props) {
   
  const dispatch = useDispatch();
 const count = useSelector(state => {
    const card = state.products.cart.find(item => item.id === props.id);
    return card ? card.count : 0;
  });
  
  // const [count, setCount] = useState(0)
    
    // const onClickPlus = () => {
    //  setCount(count + 1)
      
    // }
  //   const onClickMinus = () => {
  //       if (count > 0) { setCount(count - 1) }
  // }
  
  const starColor = props.favorite ? "star-active" : "star-oncard"
  
    return (<>
      <div className="col-11 col-md-6 col-lg-4 mx-0 mb-5">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={props.url} alt="foto" className="card-img-top img-fluid" />
                <div className="card-body">
                    <i className={"fa-solid fa-star " + starColor} key={props.id} style={props.style} onClick={() => {dispatch(props.addToFavorite(props.id))}} ></i>
                    
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-title">артикул : {props.partNumber}</h6>
            <h5 className="card-title">$ {props.price}</h5>
                    <p className="card-text">{props.color}</p>
                  
            {!props.hideButton && <button className="btn btn-success" onClick={() => {dispatch((props.setModalActive(true, props.id)) )}}>{props.buttonText}</button>}
                    
          </div>
        
        </div>
          
      </div>
      {!props.hideButtonCount && <CountButton
        onClickPlus={() => dispatch(addCount(props.id))}
        onClickMinus={() => dispatch(removeCount(props.id))}
        count ={count}
      />}
      </>
    );
  }



export default CardItem;

