const Hero = () => {
  return (
    <div className="bg-gray-800 px-5">
      <div className="w-full py-20 h-full grid md:grid-cols-2 gap-10 text-white max-w-5xl mx-auto">
        <div className="">
          <h1 className="text-4xl font-semibold">
            Consultation and management of digital ledgers
          </h1>
          <p className="text-xs text-gray-500 mt-3">
            Zerolect is a free and open-source web-based tool that allows you to
            create and manage your own digital ledger. It is designed to be easy
            to use and accessible to all users, including those with
            disabilities.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="min-w-max bg-white rounded-full text-black font-semibold py-3 px-5 shadow-lg hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="grid grid-rows-[auto_1fr_auto] gap-5">
            <div className="bg-white rounded-lg invisible"></div>
            <div className="bg-white rounded-lg h-full">Boy</div>
            <div className="bg-white rounded-lg">Hello World</div>
          </div>
          <div className="grid grid-rows-[1fr_2fr] gap-5">
            <div className="bg-white rounded-lg"></div>
            <div className="bg-white rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
