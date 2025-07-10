import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import prashantImg from '../../assets/testomonials/prashant sir.jpg';
import dhurbaImg from '../../assets/testomonials/dhurba sir.png';
import sanjivImg from '../../assets/testomonials/sanjiv sir.jpg';

const testimonials = [
  {
    name: "Mr. Prashant Thakur",
    role: "Entrepreneur",
    rating: 5,
    text: "A perfect escape into nature! The Woods Charikot Resort was exactly what we needed — peaceful, scenic, and so relaxing. The view from our private balcony was breathtaking, and the staff made us feel like family. We'll definitely be back!",
    image: prashantImg
  },
  {
    name: "Mr. Dhruba Sen",
    role: "IT expert",
    rating: 5,
    text: "This resort offers the perfect blend of luxury and nature. The cottages are so comfortable yet you feel completely immersed in the forest. The restaurant serves amazing local cuisine that exceeded all expectations.",
    image: dhurbaImg
  },
  {
    name: "Mr. Sanjiv Udash",
    role: "Entrepreneur",
    rating: 5,
    text: "Our stay at The Woods Charikot Resort was absolutely magical. The views are breathtaking, the rooms are luxurious, and the staff went above and beyond to make our experience special. This place redefined luxury in nature for us.",
    image: sanjivImg
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <span className="inline-block mb-4 px-4 py-1 bg-white border border-green-200 text-green-700 rounded-full font-medium text-sm shadow-sm">Testimonials</span>
          <h1 className="text-3xl md:text-6xl font-bold">
            What Our Guests Say
          </h1>
          <p className="text-gray-600 text-lg mt-2">Read about the experiences that make our resort special</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-8 flex flex-col h-full border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <FaQuoteLeft className="text-4xl text-teal-200 mb-4 group-hover:text-teal-400 transition-colors duration-300" />
              <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-teal-100 object-cover" />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Stats Row */}
        <div className="text-center mt-16">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600">500+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600">95%</div>
              <div className="text-gray-600">Return Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
