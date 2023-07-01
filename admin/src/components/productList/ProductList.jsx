import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { getHostName } from "../../util";

export default function ProductList(props) {
  const { productList, removeProductRequest } = props;

  const columns = [
    { field: "productId", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={`${getHostName()}/images/${params.row.image[0].name}`}
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "price", headerName: "Price", width: 200 },
    {
      field: "brand",
      headerName: "Brand",
      width: 300,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.productId}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => removeProductRequest(params.row.productId)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={productList}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row.productId}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
