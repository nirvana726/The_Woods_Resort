import { FaLeaf, FaHeart, FaMountain, FaTree } from 'react-icons/fa';
import aboutHero from '../assets/hero/about-hero.jpg';
import about1 from '../assets/Gallery/about1.jpg';
import rajanImg from '../assets/about/rajan sir.avif';
import nirajanImg from '../assets/about/nirajan sir.avif';

export default function About() {
  const values = [
    {
      icon: <FaLeaf className="w-12 h-12 text-green-600" />,
      title: "Sustainability",
      description: "We are committed to preserving the natural beauty of Charikot through eco-friendly practices and sustainable tourism."
    },
    {
      icon: <FaHeart className="w-12 h-12 text-green-600" />,
      title: "Hospitality",
      description: "Our warm Nepali hospitality ensures every guest feels like family, creating memories that last a lifetime."
    },
    {
      icon: <FaMountain className="w-12 h-12 text-green-600" />,
      title: "Adventure",
      description: "We provide authentic mountain experiences that connect you with nature while maintaining luxury and comfort."
    },
    {
      icon: <FaTree className="w-12 h-12 text-green-600" />,
      title: "Conservation",
      description: "We actively participate in local conservation efforts to protect the pristine environment for future generations."
    }
  ];

  const team = [
    {
      name: "Rajan Thapa",
      role: "Co-Founder",
      image: rajanImg,
      description: "Rajan Thapa is the co-founder of The Woods Charikot Resort, bringing a strong background in education and leadership to the venture. With years of experience in managing educational institutions, he brings a thoughtful, community-centered approach to hospitality. Rajan's commitment to quality, learning, and sustainable practices helps shape the resort's warm, welcoming atmosphere. His passion for the natural beauty of Charikot and belief in mindful tourism play a key role in the resort's mission to offer meaningful, nature-connected experiences."
    },
    {
      name: "Nirajan Thapa",
      role: "Founder / Managing Director",
      image: nirajanImg,
      description: "Nirajan Thapa is the visionary behind The Woods Charikot Resort. A civil engineer by education, he combines technical expertise with a deep love for nature and sustainable living. Born and raised in Nepal, Nirajan has long been inspired by the beauty of the Charikot region. His mission is to create a tranquil, eco-friendly retreat where guests can reconnect with nature without compromising on comfort. Through thoughtful design and a hands-on approach, he has transformed The Woods Charikot Resort into a unique destination that reflects both his professional background and personal passion for hospitality and environmental stewardship."
    }
  ];

  const stats = [
    { number: "2018", label: "Established", sublabel: "Year Founded" },
    { number: "20+", label: "Team Members", sublabel: "Dedicated staff" },
    { number: "1000+", label: "Happy Guests", sublabel: "Satisfied Visitors" }
  ];

  return (
    <div className="bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center mb-12">
        <img
          src={aboutHero}
          alt="About The Woods Charikot Resort"
          className="absolute inset-0 w-full h-full blur-xs object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          {/* Kicker */}
          <span className="inline-block mb-4 px-2  border border-white text-white rounded-full font-sm text-sm bg-transparent backdrop-blur-sm tracking-wider shadow-md">
            Our Story
          </span>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl !text-white !font-extrabold mb-4 drop-shadow-lg ">
            About The Woods Charikot Resort
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">
            Where luxury meets nature, and every moment becomes a cherished memory
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 md:py-24 bg-[var(--bg)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold mb-16 text-center">A Legacy of Nepalese Hospitality</h2>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nestled in the pristine hills of Charikot, Dolakha, The Woods Charikot was born from a vision to create a sanctuary where luxury harmoniously coexists with nature. Our story began when our founder, inspired by the breathtaking beauty of the Himalayas, dreamed of sharing this magical place with the world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Since opening our doors, we have been committed to providing an authentic Nepali experience wrapped in modern luxury. Every detail of our resort has been carefully crafted to honor the local culture while offering world-class amenities and services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe that true luxury lies not just in comfort, but in the meaningful connections we create - with nature, with local communities, and with each other.
                </p>
              </div>
              <div className="lg:w-1/2 relative">
                <img 
                  src={about1} 
                  alt="Our Resort" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-gray-800 mb-1">2018</div>
                  <div className="text-sm text-gray-600 font-medium">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[var(--bg)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-6xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 mt-2">The principles that guide everything we do at The Woods Charikot Resort</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[var(--bg)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-6xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 mt-2">The passionate individuals who make your experience extraordinary</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-lg text-gray-600 mb-4 font-semibold">{member.role}</p>
                    <p className="text-gray-700 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-[var(--bg)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold mb-4 text-[var(--heading)]">{stat.number}</div>
                <div className="text-xl text-[var(--text)] font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--bg)] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">Ready to Experience The Woods Charikot Resort?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable journey where luxury meets nature
          </p>
          <a
            href="/booking"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded shadow transition"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
}
