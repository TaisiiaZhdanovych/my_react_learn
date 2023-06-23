// import { useOutletContext } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import { useSelector} from "react-redux";
import { useMemo, useContext } from "react";
import { addToFavorite} from "../redux/actions/productsAction";
import { handleModalActive } from "../redux/actions/modalAction";
import Table from "../components/Table/Table";
import SettingsContext from "../components/Context/Settings";
import "./startPage.scss";
import ViewButton from "../components/ViewButton/ViewButton"


function StartPage(props) {
  
  const context = useContext(SettingsContext);

  const toggleTableVisibility = () => {
    const setValue = context.settings === "cards" ? "table" : "cards";
    context.saveSettings(setValue);
  };

  const { cardProducts, favorits, cart } = useSelector((state) => state.products);
  const { modalActive, modalId, headerText, mainText, modalHandler } = useSelector((state) => state.modal);
   
  console.log(context);
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Product List",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "price",
            accessor: "price",
          },
          {
            Header: "partNumber",
            accessor: "partNumber",
          },
          {
            Header: "color",
            accessor: "color",
          },
             
        ],
      },
      
    ],
    []
  );
    
  return <> <ViewButton onClick={toggleTableVisibility} buttonText={"CHANGE VIEW OF PRODUCTS LIST"} />
    {/* <button className="productlist__btn" onClick={toggleTableVisibility}>Show a list of all products</button> */}
    {context.settings === "cards" ? <ProductList
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
        hideButtonCount: true,
      }}
      
    />
      : <Table columns={columns} data={cardProducts} />}
    </>
}


export default StartPage;