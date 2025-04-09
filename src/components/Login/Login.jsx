import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, loginGoogle } = useContext(AuthContext);

  const handleLoginUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLoginUser = (e) => {
    e.preventDefault();
    loginGoogle();
  };

  return (
    // <div className="hero my-5 rounded-2xl bg-base-200 min-h-screen px-4">
    //   <div className="hero-content flex-col lg:flex">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-3xl text-green-500 font-bold">User Login</h1>
    //     </div>
    //     <div className="card bg-base-100 w-[550px] max-w-5xl shrink-0 shadow-2xl">
    //       <form onSubmit={handleLoginUser} className="card-body h-[350px]">
    //         <fieldset className="fieldset my-6">
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             className="input w-full"
    //             name="email"
    //             placeholder="Email"
    //           />
    //           <label className="fieldset-label font-semibold text-lg my-2">
    //             Password
    //           </label>
    //           <input
    //             type="password"
    //             className="input w-full"
    //             name="password"
    //             placeholder="Password"
    //           />
    //           <div>
    //             <a className="link link-hover my-2 block">Forgot password?</a>
    //           </div>
    //           <button className="btn btn-neutral hover:rounded-lg mt-4 w-full">
    //             Login
    //           </button>
    //         </fieldset>
    //       </form>
    //       <Link to="/">
    //         <button
    //           className="btn border-2 m-2 mx-6 w-[500px] text-blue-400"
    //           onClick={handleGoogleLoginUser}
    //         >
    //           Login with <FcGoogle className="text-xl " />
    //         </button>
    //       </Link>
    //       <p className="text-center mb-2 font-semibold">
    //         Don't Have Any Account{" "}
    //         <Link
    //           to="/register"
    //           className="text-blue-400 font-bold hover:underline"
    //         >
    //           Register
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="hero my-5 rounded-2xl bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col lg:flex-col items-center justify-center gap-10 w-full">
        <div className="text-center ">
          <h1 className="text-3xl text-green-500 font-bold">User Login</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
          <form onSubmit={handleLoginUser} className="card-body">
            <fieldset className="fieldset">
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
              <div>
                <a className="link link-hover my-2 block">Forgot password?</a>
              </div>
              <button className="btn btn-neutral hover:rounded-lg mt-4 w-full">
                Login
              </button>
            </fieldset>
          </form>

          <div className="px-6">
            <button
              className="btn border-2 w-full text-blue-400"
              onClick={handleGoogleLoginUser}
            >
              Login with <FcGoogle className="text-xl ml-2" />
            </button>
          </div>

          <p className="text-center mb-4 font-semibold">
            Don't Have Any Account?{" "}
            <Link
              to="/register"
              className="text-blue-400 font-bold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
