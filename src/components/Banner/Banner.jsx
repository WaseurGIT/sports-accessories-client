const Banner = () => {
  return (
    <div className="hero my-8 rounded-2xl bg-purple-300 min-h-[70vh] px-4 sm:px-8 md:px-16">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-8">
        <img
          src="https://i.ibb.co.com/wVC8hwC/image.png"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500">
            Choose Your Best Sport Accessories Now
          </h1>
          <p className="py-4 text-gray-600 text-base sm:text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
