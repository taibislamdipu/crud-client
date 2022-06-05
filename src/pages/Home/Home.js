import React from "react";
import ProductListTable from "../../components/ProductListTable/ProductListTable";

const Home = () => {
  return (
    <div className="container">
      <div className="container shadow rounded-3 mt-5">
        <h3 className="pt-3 ps-3 pb-4">Product List</h3>
        <ProductListTable />
      </div>
    </div>
  );
};

export default Home;
