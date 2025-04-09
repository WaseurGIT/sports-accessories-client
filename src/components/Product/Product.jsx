import { FcViewDetails } from "react-icons/fc";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Product = ({ product, products, setProducts }) => {
  const { _id, name, price, quantity, details, photo } = product;

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
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = products.filter((p) => p._id !== id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card bg-gray-200 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-bold">{name}</h2>
        <p>
          <span className="font-semibold">Price</span>: {price} $
        </p>
        <p>
          <span className="font-semibold">Quantity: </span> {quantity} $
        </p>
        <p>{details}</p>
        <div className="card-actions">
          <Link to={`/productDetails/${product._id}`}>
            <button className="btn btn-ghost text-2xl border-2 border-green-400">
              <FcViewDetails></FcViewDetails>
            </button>
          </Link>
          <Link to={`/updateProduct/${product._id}`}>
            <button className="btn btn-ghost text-2xl border-2 text-blue-500 border-blue-500">
              <MdModeEdit></MdModeEdit>
            </button>
          </Link>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            className="btn btn-ghost border-2 border-red-500 text-red-600 text-2xl"
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
