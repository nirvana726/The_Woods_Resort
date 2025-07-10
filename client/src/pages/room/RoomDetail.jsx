import { useParams, Link } from "react-router-dom";
import { useRoom } from "../../context/RoomContext";
import { rooms as staticRooms } from "../../data/roomdata";
import { FaWifi, FaMountain, FaTree, FaConciergeBell, FaTv, FaFire, FaBed, FaShieldAlt, FaKey } from 'react-icons/fa';

const amenityIcons = {
  'Free WiFi': <FaWifi />, 'Mountain View': <FaMountain />, 'Forest View': <FaTree />, 'Private Balcony': <FaKey />, 'Room Service': <FaConciergeBell />, 'TV': <FaTv />, 'Fireplace': <FaFire />, 'Safe': <FaShieldAlt />, 'Work Desk': <FaBed />
};

export default function RoomDetail() {
  const { slug } = useParams();
  const { rooms: dynamicRooms, loading } = useRoom();

  // Combine static and dynamic rooms, mapping properties for consistency
  const allRooms = [
    ...staticRooms.map(room => ({
      ...room,
      title: room.title || room.name,
      name: room.name || room.title,
      maxGuest: room.maxGuest || room.maxOccupancy,
    })),
    ...dynamicRooms.map(room => ({
      ...room,
      name: room.title || room.name, // fallback for dynamic data
    })),
  ];

  const room = allRooms.find((r) => r.slug === slug);

  if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (!room) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Room not found!</h1>
          <p className="mb-8">We couldn&apos;t find the room you&apos;re looking for.</p>
          <Link to="/rooms" className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-800">
        <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mt-2 !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{room.name}</h1>
            <div className="mt-4 text-lg !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span><Link to="/" className="hover:text-green-400 !text-white">Home</Link></span>
                <span className="mx-2">/</span>
                <span><Link to="/rooms" className="hover:text-green-400 !text-white">Rooms</Link></span>
                <span className="mx-2">/</span>
                <span className="!text-white">{room.name}</span>
            </div>
          </div>
        </div>
        {/* Badges at bottom left */}
        <div className="absolute bottom-6 left-6 flex flex-wrap items-center gap-4 z-10">
          <span className="bg-black/60 text-white text-xs font-bold px-4 py-2 rounded-full">Featured</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-4">About This Room</h2>
            <div className="prose max-w-none text-[var(--text)]/90 mb-6 whitespace-pre-line">{room.description}</div>
          </div>

          {/* Amenities Section in Sidebar */}
          <aside>
            <div className="bg-[var(--bg)] rounded-2xl p-6 shadow-md">
              <h3 className="text-4xl font-semibold mb-6">Room Amenities</h3>
              <ul className="flex flex-wrap gap-4 mb-2">
                {room.amenities && room.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-center gap-2 text-green-900 text-base font-medium rounded-full border-2 border-green-600 bg-[var(--bg)] px-4 py-2">
                    <span className="text-green-700 text-xl">{amenityIcons[amenity] || null}</span> {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
      {/* What to Expect Section */}
      <section className="bg-[var(--bg)] border-t border-black/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600">Experience the perfect blend of luxury and nature in this thoughtfully designed accommodation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-green-600 text-5xl mb-4"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-12 h-12'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 17.75l-6.16 3.24 1.18-6.88L2 9.76l6.92-1.01L12 2.5l3.08 6.25L22 9.76l-5.02 4.35 1.18 6.88z' /></svg></span>
              <h3 className="text-xl font-semibold mb-2">Comfort & Style</h3>
              <p className="text-gray-600 text-center">Modern amenities and elegant interiors for a relaxing stay.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-green-600 text-5xl mb-4"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-12 h-12'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' /></svg></span>
              <h3 className="text-xl font-semibold mb-2">Natural Connection</h3>
              <p className="text-gray-600 text-center">Large windows and balconies to immerse in nature.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-green-600 text-5xl mb-4"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-12 h-12'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z' /></svg></span>
              <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
              <p className="text-gray-600 text-center">Attentive staff and thoughtful touches for your comfort.</p>
              </div>
            <div className="flex flex-col items-center">
              <span className="text-green-600 text-5xl mb-4"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 48 48' stroke='currentColor' className='w-12 h-12'><circle cx='24' cy='24' r='20' stroke='currentColor' strokeWidth='4' fill='none'/><text x='24' y='32' textAnchor='middle' fontSize='24' fill='currentColor' fontFamily='Arial' fontWeight='bold'>P</text></svg></span>
              <h3 className="text-xl font-semibold mb-2">Spacious Parking</h3>
              <p className="text-gray-600 text-center">Ample parking space for your convenience and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Experience CTA Section */}
      <section className="bg-[var(--bg)] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience {room.name}?</h2>
          <p className="text-xl text-gray-600 mb-10">Book your stay now or contact us for special packages and extended stays</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/booking" className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
              Book Now - NPR{room.price}/night
            </Link>
            <Link to="/rooms" className="px-6 py-2 bg-white border border-black/10 text-[var(--text)] rounded-lg font-semibold hover:bg-gray-100 transition">
              Explore Other Rooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
