import { FaLeaf, FaTrophy, FaConciergeBell, FaUtensils, FaMapMarkedAlt, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaLeaf size={40} className="text-green-600" />,
    title: "Eco-Friendly Resort",
    description: "Committed to sustainable practices and minimal environmental impact.",
  },
  {
    icon: <FaTrophy size={40} className="text-yellow-500" />,
    title: "Award-Winning Service",
    description: "Recognized for exceptional hospitality and guest satisfaction.",
  },
  {
    icon: <FaConciergeBell size={40} className="text-blue-600" />,
    title: "24/7 Concierge",
    description: "Around-the-clock assistance to meet your every need.",
  },
  {
    icon: <FaUtensils size={40} className="text-orange-500" />,
    title: "Gourmet Dining",
    description: "Fresh, local ingredients prepared by our expert culinary team.",
  },
  {
    icon: <FaMapMarkedAlt size={40} className="text-purple-600" />,
    title: "Local Expertise",
    description: "Staff with deep knowledge of local culture and attractions.",
  },
  {
    icon: <FaShieldAlt size={40} className="text-gray-700" />,
    title: "Safe & Secure",
    description: "Comprehensive safety measures for your peace of mind.",
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold">
            Why Choose The Woods Charikot Resort?
          </h1>
          <p className="text-gray-600 text-lg mt-2">Exceptional Experiences Await You</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
