const whyChoseUs = [
  {
    title: "Easy to use",
    description:
      "Zerolect is easy to use and intuitive. It has a simple and straightforward interface that makes it easy for users to navigate and find the information they need quickly and easily.",
  },
  {
    title: "Secure",
    description:
      "Zerolect is designed to be secure and protect your data. It uses encryption to protect your information and ensures that your data is safe from unauthorized access.",
  },
  {
    title: "Customizable",
    description:
      "Zerolect is highly customizable and allows you to personalize it to your needs. You can choose the layout, font, and color scheme to match your preferences and make it more suitable for your use.",
  },
  {
    title: "Accessible",
    description:
      "Zerolect is designed to be accessible to all users, including those with disabilities. It has features such as keyboard navigation, screen reader support, and alternative text for images and other elements to make it easier for people with visual impairments to use.",
  },
  {
    title: "Accessible",
    description:
      "Zerolect is designed to be accessible to all users, including those with disabilities. It has features such as keyboard navigation, screen reader support, and alternative text for images and other elements to make it easier for people with visual impairments to use.",
  },
  {
    title: "Accessible",
    description:
      "Zerolect is designed to be accessible to all users, including those with disabilities. It has features such as keyboard navigation, screen reader support, and alternative text for images and other elements to make it easier for people with visual impairments to use.",
  },
];

const WhyChoseUs = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-20">
      <div className="mx-auto container">
        <div className="flex items-center justify-end">
          <h2 className="text-start text-4xl">
            Why <br /> Chose Zerolect
          </h2>
        </div>
        <div className="flex items-center flex-nowrap overflow-x-auto gap-5 mt-10">
          {whyChoseUs.map((item, index) => (
            <div key={index} className="min-w-[30%] bg-gray-400">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
