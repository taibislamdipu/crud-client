import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data from API
  useEffect(() => {
    async function fetchApi() {
      try {
        const products = await fetch("http://localhost:5000/products");
        const result = await products.json();
        setProducts(result);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchApi();
  }, []);

  // delete products
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProducts = products.filter(
                (product) => product._id !== id
              );
              setProducts(remainingProducts);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="table-responsive pb-5">
      <h3 className="pt-3 ps-3 pb-4">Product List ({products?.length})</h3>

      {loading ? (
        <Loader />
      ) : (
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
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteProduct(product?._id)}
                  >
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
      )}
    </div>
  );
};

export default Table;
