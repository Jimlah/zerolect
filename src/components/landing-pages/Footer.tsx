import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <div className="px-5 bg-gray-800 text-white">
      <div className="w-full grid md:grid-cols-2 gap-10 py-20 h-full max-w-5xl mx-auto">
        <div className="">
          <h2 className="text-2xl font-semibold text-white">Zerolect</h2>
          <p className="mt-4 text-xs">
            Zerolect is a free and open-source web-based tool that allows you to
            create and manage your own digital ledger. It is designed to be easy
            to use and accessible to all users, including those with
            disabilities.
          </p>
        </div>
        <div className="flex items-center gap-5 mt-5 w-full justify-end">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default Footer;
