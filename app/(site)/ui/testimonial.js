import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      img: "/img/elements/user11.png",
      text: "Their design transformed our classrooms into vibrant, engaging spaces. Exceptional work that truly enhances our learning environment!",
      name: "Al-Maghrib International School",
      rating: 4,
    },
    {
      img: "/img/elements/user22.png",
      text: "আমি তাদের সাথে কাজ করে খুব সন্তুষ্ট।",
      name: "Rezaul Karim Chowdhury",
      rating: 4,
    },
    {
      img: "/img/elements/user33.png",
      text: "তারা এত সুন্দরভাবে কাজ করেছে। আমি সন্তুষ্ট.",
      name: "মুহাম্মদ নজরুল ইসলাম",
      rating: 3,
    },
    {
      img: "/img/elements/user33.png",
      text: "ইনটেরিয়র ডিজাইনার চট্টগ্রাম জিপসাম একটি সুন্দর পরিবেশ তৈরি করেছে। আমাদের গ্রাহকরা তাদের দ্বারা করা নতুন ডিজাইন পছন্দ করেছেন",
      name: "LT International",
      rating: 2,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Testimonial from our Clients
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                />
              </div>

              {/* Text and Details */}
              <div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>

                {/* Star Rating */}
                <div className="flex mt-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`${
                        starIndex < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      } text-lg`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
