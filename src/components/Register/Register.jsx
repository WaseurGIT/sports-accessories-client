import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegisterUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const newUser = { name, email };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    // <div className="hero my-5 rounded-2xl bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col lg:flex">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-3xl text-green-500 font-bold">
    //         User Registration
    //       </h1>
    //     </div>
    //     <div className="card bg-base-100 w-[550px] max-w-5xl shrink-0 shadow-2xl">
    //       <form onSubmit={handleRegisterUser} className="card-body h-[450px]">
    //         <fieldset className="fieldset my-6">
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             className="input w-[500px]"
    //             name="name"
    //             placeholder="Name"
    //           />
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             className="input w-[500px]"
    //             name="email"
    //             placeholder="Email"
    //           />
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Password
    //           </label>
    //           <input
    //             type="password"
    //             className="input w-[500px]"
    //             name="password"
    //             placeholder="Password"
    //           />
    //           <button className="btn mt-4 w-[500px] btn-neutral hover:rounded-lg ">
    //             Register
    //           </button>
    //         </fieldset>
    //       </form>
    //       <p className="text-center mb-2 font-semibold">
    //         Already Have An Account{" "}
    //         <Link
    //           to="/login"
    //           className="text-blue-400 font-bold hover:underline"
    //         >
    //           Login
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div className="hero my-5 rounded-2xl bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col lg:flex-col items-center justify-between gap-10 w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-green-500 font-bold">
            User Registration
          </h1>
        </div>

        <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
          <form onSubmit={handleRegisterUser} className="card-body">
            <fieldset className="fieldset my-4">
              <label className="font-semibold text-lg my-2">Name</label>
              <input
                type="text"
                className="input w-full"
                name="name"
                placeholder="Name"
              />
              <label className="font-semibold text-lg my-2">Email</label>
              <input
                type="email"
                className="input w-full"
                name="email"
                placeholder="Email"
              />
              <label className="font-semibold text-lg my-2">Password</label>
              <input
                type="password"
                className="input w-full"
                name="password"
                placeholder="Password"
              />
              <button className="btn mt-4 w-full btn-neutral hover:rounded-lg">
                Register
              </button>
            </fieldset>
          </form>

          <p className="text-center mb-4 font-semibold">
            Already Have An Account?{" "}
            <Link
              to="/login"
              className="text-blue-400 font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
