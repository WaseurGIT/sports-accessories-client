import { Link } from "react-router-dom";
import errorImg from "./../../assets/error.jpg";

const Error = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={errorImg} className=" w-full rounded-2xl my-5" alt="" />
          <Link to="/">
            <button className="btn bg-green-600 text-white px-12">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
