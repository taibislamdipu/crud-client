import React from "react";
import { useForm } from "react-hook-form";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="container shadow rounded-3 mt-5">
        <h3 className="pt-3 ps-3 pb-4">Create Product</h3>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label for="productName" className="form-label fw-bold">
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
                <label for="productCode" className="form-label fw-bold">
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
                <label for="image" className="form-label fw-bold">
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
                <label for="unitPrice" className="form-label fw-bold">
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
                <label for="qty" className="form-label fw-bold">
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
                <label for="totalPrice" className="form-label fw-bold">
                  Total Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="totalPrice"
                  placeholder="Total Price"
                  {...register("email")}
                />
              </div>
            </div>

            {/* <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>} */}

            <div className="row">
              <div className="col-md-4 my-3 ">
                <button type="submit" className="btn btn-primary fw-bold w-100">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
