const Features = () => {
  const features = [
    {
      title: "Expert Technicians",
      description:
        "Skilled professionals ensuring top-quality and precise interior design and installation.",
      icon: "👷‍♂️", // Replace with actual icons if desired
    },
    {
      title: "Professional Service",
      description:
        "Dedicated to delivering exceptional and reliable service for all your design needs.",
      icon: "📋",
    },
    {
      title: "Great Support",
      description:
        "Comprehensive support from start to finish, ensuring a smooth design experience.",
      icon: "📞",
    },
    {
      title: "Technical Skills",
      description:
        "Advanced technical expertise for flawless execution and innovative solutions.",
      icon: "🛠️",
    },
    {
      title: "Highly Recommended",
      description:
        "Trusted by clients for our excellence and commitment to quality.",
      icon: "👍",
    },
    {
      title: "Positive Reviews",
      description:
        "Consistently praised by clients for outstanding service and results.",
      icon: "💬",
    },
  ];

  return (
    <section className="py-16 bg-yellow-200">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Some Features that Made us Unique
          </h2>
          <p className="text-lg text-gray-500 mb-6">
            Interior Design Chittagong Gypsum
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
