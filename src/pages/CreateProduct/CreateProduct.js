import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const productNameRef = useRef();
  const productPriceRef = useRef();

  const [products, setProducts] = useState([]);

  const onSubmit = (data) => {
    // send data to server
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        const addedProduct = data;
        const newProducts = [...products, addedProduct];
        setProducts(newProducts);

        if (addedProduct.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your product has been added!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  // const [products, setProducts] = useState([]);

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

  const handleAddProduct = (e) => {
    // const productName = productNameRef?.current?.value;
    // const totalPrice = productPriceRef?.current?.value;
    // const productInfo = { productName: productName, totalPrice: totalPrice };
    // // send data to server
    // fetch("http://localhost:5000/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(productInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const addedProduct = data;
    //     const newProducts = [...products, addedProduct];
    //     setProducts(newProducts);
    //     console.log(products);
    //   });
    // e.preventDefault();
  };

  return (
    <div className="container">
      <div className="container shadow rounded-3 mt-5">
        <h3 className="pt-3 ps-3 pb-4">Create Product</h3>

        {/* product upload form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="productName" className="form-label fw-bold">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  placeholder="Product Name"
                  {...register("productName")}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="productCode" className="form-label fw-bold">
                  Product Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productCode"
                  placeholder="Product Code"
                  {...register("productCode")}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="image" className="form-label fw-bold">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="image link"
                  {...register("image")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="unitPrice" className="form-label fw-bold">
                  Unit Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="unitPrice"
                  placeholder="Unit Price"
                  {...register("unitPrice")}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="qty" className="form-label fw-bold">
                  QTY
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="qty"
                  placeholder="QTY"
                  {...register("qty")}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="totalPrice" className="form-label fw-bold">
                  Total Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="totalPrice"
                  placeholder="Total Price"
                  {...register("totalPrice")}
                />
              </div>
            </div>

            {/* <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>} */}

            <div className="row">
              <div className="col-md-4 mt-3 mb-5 ">
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill fw-bold w-100"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* <section>
          <div className="py-5">
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                ref={productNameRef}
                placeholder="Product Name"
              />
              <input
                type="text"
                ref={productPriceRef}
                placeholder="Product price"
              />
              <input type="submit" value="submit" />
            </form>
          </div>

          <div className="py-2">
            <h2>Total users: {products.length}</h2>
            <ul>
              {products.map((product) => (
                <li key={product?.id}>
                  {product?.productName} {product?.totalPrice}
                </li>
              ))}
            </ul>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default CreateProduct;
