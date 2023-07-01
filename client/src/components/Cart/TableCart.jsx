import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getHostName } from "../../util";

const TableCart = (props) => {
  const { data } = props;

  const styles = {
    fontSize: "16px",
    color: "#767676",
    fontWeight: "lighter",
  };

  console.log(data, "DATA");
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell sx={{}} align="right">
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((product) => (
              <TableRow
                key={product.productId}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <div className="product__name">
                    {product.image && product.image.length > 0 && (
                      <img
                        src={`${getHostName()}/images/${product.image[0].name}`}
                        alt=""
                      />
                    )}
                    <h1>{product.nameProduct}</h1>
                  </div>
                </TableCell>
                <TableCell sx={styles} align="right">
                  ${product.price}
                </TableCell>
                <TableCell sx={styles} align="right">
                  {product.quantity}
                </TableCell>
                <TableCell sx={styles} align="right">
                  ${product.quantity * product.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableCart;
