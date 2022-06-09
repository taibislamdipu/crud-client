import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
const Table = () => {
  const [products, setProducts] = useState([]);

  // fetch data from API
  useEffect(() => {
    async function fetchApi() {
      try {
        const products = await fetch("http://localhost:5000/products");
        const result = await products.json();
        setProducts(result);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchApi();
  }, []);

  return (
    <div className="container table-responsive pb-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Unit Price</th>
            <th scope="col">QTY</th>
            <th scope="col">Total Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th scope="row">{product?.productName}</th>
              <td>{product?.unitPrice}</td>
              <td>{product?.qty}</td>
              <td>{product?.totalPrice}</td>

              <td>
                <button className="btn btn-danger">
                  <FaTrashAlt />
                </button>
                <button className="btn btn-success">
                  <AiFillEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
