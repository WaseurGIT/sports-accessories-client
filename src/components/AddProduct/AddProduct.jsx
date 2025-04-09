import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const productInfo = { name, price, quantity, details, photo };
    console.log(productInfo);

    // do the 1 and 2 step in the server and then do this
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    form.reset();
  };

  return (
    // <div className="hero my-5 rounded-2xl bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col lg:flex">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-3xl text-green-500 font-bold">Add Product</h1>
    //     </div>
    //     <div className="card bg-base-100 w-[550px] max-w-5xl shrink-0 shadow-2xl">
    //       <form onSubmit={handleAddProduct} className="card-body h-[650px]">
    //         <fieldset className="fieldset my-6">
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             className="input w-[500px]"
    //             name="name"
    //             placeholder="Product Name"
    //           />
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Price
    //           </label>
    //           <input
    //             type="text"
    //             className="input w-[500px]"
    //             name="price"
    //             placeholder="Product Price"
    //           />
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Quantity
    //           </label>
    //           <input
    //             type="text"
    //             className="input w-[500px]"
    //             name="quantity"
    //             placeholder="Product Quantity"
    //           />
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Details
    //           </label>
    //           <input
    //             type="text"
    //             className="input w-[500px]"
    //             name="details"
    //             placeholder="Product Details"
    //           />
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Photo
    //           </label>
    //           <input
    //             type="text"
    //             className="input w-[500px]"
    //             name="photo"
    //             placeholder="Product Photo"
    //           />
    //           <button className="btn btn-neutral hover:rounded-lg mt-4">
    //             Add Product
    //           </button>
    //         </fieldset>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="hero my-5 rounded-2xl bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col lg:flex-col items-center justify-between gap-10 w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-green-500 font-bold">Add Product</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
          <form onSubmit={handleAddProduct} className="card-body">
            <fieldset className="fieldset my-4">
              <label className="font-semibold text-lg my-2">Name</label>
              <input
                type="text"
                className="input w-full"
                name="name"
                placeholder="Product Name"
              />

              <label className="font-semibold text-lg my-2">Price</label>
              <input
                type="text"
                className="input w-full"
                name="price"
                placeholder="Product Price"
              />

              <label className="font-semibold text-lg my-2">Quantity</label>
              <input
                type="text"
                className="input w-full"
                name="quantity"
                placeholder="Product Quantity"
              />

              <label className="font-semibold text-lg my-2">Details</label>
              <input
                type="text"
                className="input w-full"
                name="details"
                placeholder="Product Details"
              />

              <label className="font-semibold text-lg my-2">Photo</label>
              <input
                type="text"
                className="input w-full"
                name="photo"
                placeholder="Product Photo URL"
              />

              <button className="btn btn-neutral w-full hover:rounded-lg mt-4">
                Add Product
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
