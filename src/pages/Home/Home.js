import React, { useEffect, useState } from "react";
import ProductListTable from "../../components/ProductListTable/ProductListTable";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      try {
        const products = await fetch("http://localhost:5000/users");
        const result = await products.json();
        setProducts(result);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchApi();
  }, []);

  return (
    <div className="container">
      <div className="container shadow rounded-3 mt-5">
        <h3 className="pt-3 ps-3 pb-4">Product List</h3>
        <ProductListTable />
      </div>

      <div className="py-5">
        <h2>Total users: {products.length}</h2>
        <ul>
          {products.map((product) => (
            <li key={product?.id}>{product?.productName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
