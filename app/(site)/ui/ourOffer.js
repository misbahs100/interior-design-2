const OurOffer = () => {
  const offers = [
      {
          title: "Interior Design",
          description:
              "Transforming spaces with personalized, elegant, and functional interior designs that reflect your unique style and enhance your living or working environment.",
      },
      {
          title: "Architecture Design",
          description:
              "Crafting innovative and sustainable architectural solutions, blending aesthetics with functionality to create structures that inspire and stand the test of time.",
      },
      {
          title: "Concept Design",
          description:
              "Developing creative and cohesive design concepts, tailored to your vision, ensuring every detail aligns perfectly with your goals and preferences.",
      },
  ];

  return (
      <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center px-2">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-6">What We Offer</h2>
              <p className="text-lg text-gray-500 mb-12">
                  Customized interior designs and solutions for stylish, functional spaces.
              </p>
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {offers.map((offer, index) => (
                      <div
                          key={index}
                          className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                      >
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{offer.title}</h3>
                          <p className="text-base text-gray-600">{offer.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
};

export default OurOffer;
