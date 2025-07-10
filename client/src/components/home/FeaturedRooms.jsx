import { useState } from 'react';
import { rooms } from '../../data/roomdata';
import { FaWifi, FaMountain, FaTree, FaConciergeBell, FaTv, FaFire, FaBed, FaShieldAlt, FaKey, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const amenityIcons = {
  'Free WiFi': <FaWifi />, 'Mountain View': <FaMountain />, 'Forest View': <FaTree />, 'Private Balcony': <FaKey />, 'Room Service': <FaConciergeBell />, 'TV': <FaTv />, 'Fireplace': <FaFire />, 'Safe': <FaShieldAlt />, 'Work Desk': <FaBed />
};

function getShortDescription(desc) {
  // Remove markdown and get first 20-25 words
  const plain = desc.replace(/\n|\r|-|\*/g, ' ').replace(/\s+/g, ' ');
  const words = plain.split(' ');
  let short = words.slice(0, 25).join(' ');
  if (words.length > 25) short += '...';
  return short;
}

export default function FeaturedRooms() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-block mb-4 px-4 py-1 bg-white border border-green-200 text-green-700 rounded-full font-medium text-sm shadow-sm">Accommodations</span>
          <h1 className="text-3xl md:text-6xl font-bold mb-2 text-center font-serif">
            Luxury Rooms & Villas
          </h1>
          <p className="text-gray-600 text-lg text-center max-w-2xl mb-8">Experience comfort and elegance in our thoughtfully designed accommodations</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {rooms.map((room, idx) => {
            const maxAmenities = 4;
            const shownAmenities = room.amenities.slice(0, maxAmenities);
            const moreCount = room.amenities.length - maxAmenities;
            return (
              <div
                key={room.id}
                className={`bg-white rounded-2xl shadow-xl flex flex-col justify-between items-stretch p-0 pb-8 min-h-[540px] transition-all duration-500 cursor-pointer ${hoveredIndex === idx ? '-translate-y-2 shadow-2xl' : ''}`}
                style={{ width: '370px', minWidth: '300px', maxWidth: '400px' }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(idx)}
                onTouchEnd={() => setHoveredIndex(null)}
              >
                <div className="relative w-full h-[270px] overflow-hidden rounded-t-2xl group">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className={`w-full h-full object-cover rounded-t-2xl transition-transform duration-500 ${hoveredIndex === idx ? 'scale-110' : 'scale-100'}`}
                  />
                  {/* Dark overlay on hover */}
                  <div className={`absolute inset-0 rounded-t-2xl pointer-events-none transition-all duration-500 ${hoveredIndex === idx ? 'bg-black/20' : 'bg-transparent'}`}></div>
                  {/* Featured badge */}
                  <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-4 py-1 rounded-full shadow">
                    Featured
                  </span>
                  {/* Price badge */}
                  <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow">
                    NPR {room.price}/night
                  </span>
                </div>
                <div className="flex flex-col flex-1 px-8 pt-6 pb-0">
                  <h3 className="text-2xl md:text-3xl font-bold font-serif mb-2">
                    {room.name}
                  </h3>
                  <div className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {getShortDescription(room.description)}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {shownAmenities.map((amenity, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                        {amenityIcons[amenity] || null} {amenity}
                      </span>
                    ))}
                    {moreCount > 0 && (
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                        +{moreCount} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-base mb-6">
                    <FaUsers className="text-green-700" /> Up to {room.maxOccupancy} guests
                  </div>
                  <div className="flex-1" />
                </div>
                <div className="px-8 pt-0">
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="w-full block text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg text-sm transition-all duration-300"
                  >
                    View Details & Book
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <a href="/rooms" className="inline-block bg-green-600 border-green-400 text-white font-semibold px-8 py-3 rounded hover:bg-green-700 shadow transition">
            Explore All Accommodations
          </a>
        </div>
      </div>
    </section>
  );
}
