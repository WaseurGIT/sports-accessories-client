import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { useState } from "react";

const Products = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div>
      <div className="flex flex-col md:grid grid-cols-3 gap-8 w-fit mx-auto  my-5">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
