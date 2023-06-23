import "./viewButton.scss";

export function ViewButton(props) {




  return (
    <> 
      <div className='view'>
              <button className='view__btn' onClick={props.onClick}>{props.buttonText}</button>
              
      </div> 
    </>
  );
}

export default ViewButton;