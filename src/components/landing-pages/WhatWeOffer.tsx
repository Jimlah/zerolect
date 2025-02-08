const WhatWeOffer = () => {
  return (
    <div className="px-5">
      <div className="w-full py-20 h-full max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-y-3">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              What we offer
            </h2>
          </div>
          <p className="text-xs text-gray-500">
            Zerolect is a free and open-source web-based tool that allows you to
            create and manage your own digital ledger. It is designed to be easy
            to use and accessible to all users, including those with
            disabilities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-5 mt-5">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Service key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

const Service = () => {
  return (
    <div className="rounded-lg border border-gray-500/50 w-full first:aspect-square bg-gray-600 flex items-start flex-col justify-end p-2">
      <div className="border border-gray-100/20 text-gray-100 p-2 rounded-lg w-full flex items-center justify-between backdrop-blur-2xl bg-gray-50/50">
        <p>
          Humman Reources <br />
          Services
        </p>
      </div>
    </div>
  );
};
