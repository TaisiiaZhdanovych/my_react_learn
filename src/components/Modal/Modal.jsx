
import "./modal.scss";
import { useDispatch } from "react-redux";


function Modal(props) {

  const dispatch = useDispatch()
   
  
  console.log(props);
  return (
    <div className={props.active ? "modal active" : "modal"} onClick={() => dispatch(props.onClick())}>
      <div className={props.active ? "modal__container active" : "modal__container"} onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <span className="modal__header-text">{props.headerText}</span>
          <span className={props.active ? "modal__close" : ""} data-testid="closeModal" onClick={() => dispatch(props.onClick())}>X</span>
        </div>
        <p className="modal__main-text">{props.mainText}</p>
        <div className="modal__btn-box">
          <button className="modal__button" onClick={() => { dispatch(props.addToCart(props.id)); dispatch(props.onClick())}}>Так</button>
       
           <button className="modal__button" onClick={() => dispatch(props.onClick())}>Ні</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;






