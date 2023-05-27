import '@fortawesome/fontawesome-free/css/all.min.css';
import "./cardItem.scss";
import { useDispatch } from 'react-redux';

function CardItem (props) {
   
  const dispatch = useDispatch();
  
  const starColor = props.favorite ? "star-active" : "star-oncard"
  
    return (
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
    );
  }



export default CardItem;

