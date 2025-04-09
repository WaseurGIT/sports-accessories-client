import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
  const products = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <h1 className="text-3xl font-bold text-center my-12 text-blue-400 border-b-2 border-b-lime-400 max-w-[250px] mx-auto">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5 px-4">
        {products.slice(0, 6).map((product) => (
          <div key={product._id} className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shadow-md">
              <figure className="px-6 pt-6">
                <img
                  src={product.photo}
                  alt="Shoes"
                  className="rounded-xl h-60 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xl font-bold">{product.name}</h2>
                <p className="text-lg">
                  <span className="font-semibold">Price: </span>
                  {product.price}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Quantity: </span>
                  {product.quantity}
                </p>
                <p className="text-base text-gray-400">{product.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/products" className="w-full flex justify-center">
        <button className="btn w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-[280px] my-5 bg-green-400 hover:border-2 text-white border-green-400 px-4 py-2 rounded-md transition duration-300">
          More Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
