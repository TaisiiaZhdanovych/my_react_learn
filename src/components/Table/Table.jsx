import '@fortawesome/fontawesome-free/css/all.min.css';
import "./table.scss"
import { useTable } from "react-table";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite} from "../../redux/actions/productsAction.js";
import { handleModalActive } from "../../redux/actions/modalAction";



export function Table({ columns, data }) {

    const dispatch = useDispatch();
    const favorits =useSelector((state) => state.products.favorits)
const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data
  });

    

    return (
     
    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    const currentProduct = data[i];
                    const starColor = favorits.includes(currentProduct.id) ? "star-active" : "star-oncard"
          prepareRow(row);
          return (
              <tr key={currentProduct.id} {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
                <td>
                  <button className="btn btn-success table__btn" onClick={() => { dispatch(handleModalActive(true, currentProduct.id)) }}>ADD TO CART</button>
                  <i className={"fa-solid fa-star " + starColor} onClick={() => { dispatch(addToFavorite(currentProduct.id)) }} ></i>
                </td>
              </tr>
          
          );
        })}
                
      </tbody>
            </table>
  
  );
}

export default Table;