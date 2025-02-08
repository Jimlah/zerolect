const Team = () => {
  return (
    <div className="px-5 bg-white">
      <div className="w-full py-20 h-full max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-y-3">
          <div>
            <h2 className="text-sx font-semibold text-gray-800">
              Meet the team
            </h2>
            <p className="text-2xl text-gray-500">
              Leadership Team Industry expirience
            </p>
          </div>
          <p className="text-xs text-gray-500">
            Zerolect is a free and open-source web-based tool that allows you to
            create and manage your own digital ledger. It is designed to be easy
            to use and accessible to all users, including those with
            disabilities.
          </p>
        </div>
        <div className="flex items-center gap-5 mt-5">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <User key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

const User = () => {
  return (
    <div className="rounded-lg border aspect-[2/3]  border-gray-500/20 w-full bg-gray-500 flex items-start flex-col justify-end p-2">
      <div className="border  border-gray-100/20 text-gray-100 p-2 rounded-lg w-full backdrop-blur-2xl bg-gray-50/50">
        <h3 className="text-lg font-semibold">Sean Smith</h3>
        <p className="text-xs">Founder</p>
      </div>
    </div>
  );
};
