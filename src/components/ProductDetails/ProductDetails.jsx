import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const { _id, name, price, quantity, details, photo } = product;
  return (
    <div className="card mx-auto my-5 card-side bg-base-100 shadow-lg rounded-2xl max-w-full sm:max-w-[950px] flex flex-col sm:flex-row">
      <figure className="w-full sm:w-[350px] mx-auto mb-5 sm:mb-0">
        <img
          src={photo}
          className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-300 transform hover:scale-105"
          alt={`Product: ${name}`}
        />
      </figure>

      <div className="ml-0 sm:ml-5 my-5 w-full sm:w-auto">
        <h2 className="card-title text-3xl font-bold my-5 text-gray-800">
          {name}
        </h2>
        <p className="my-3">
          <span className="text-xl font-semibold">Price: </span>
          <span className="text-green-600">{price}</span>
        </p>
        <p className="my-3">
          <span className="text-xl font-semibold">Quantity: </span>
          <span className="text-gray-700">{quantity}</span>
        </p>
        <p className="my-3 text-lg text-gray-600">{details}</p>

        <div className="card-actions justify-end mt-5">
          <button
            onClick={handleGoBack}
            className="btn btn-ghost border-2 border-green-400 px-8 py-2 rounded-lg text-green-500 font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
