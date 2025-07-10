import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { activities as staticActivities } from '../data/activitydata';
import { FaUsers, FaGlassCheers, FaSeedling, FaHiking, FaStar } from 'react-icons/fa';
import { fetchActivities } from '../api/adminApi';
import activitiesHero from '../assets/hero/activities-hero.jpg';

const categories = [
  { name: "All Activities", icon: FaStar },
  { name: "Cultural", icon: FaUsers },
  { name: "Events", icon: FaGlassCheers },
  { name: "Nature", icon: FaSeedling },
  { name: "Adventure", icon: FaHiking },
];

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState("All Activities");
  const [dynamicActivities, setDynamicActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadActivities() {
      try {
        const data = await fetchActivities();
        setDynamicActivities(data);
      } catch {
        setError("Failed to load activities.");
      } finally {
        setLoading(false);
      }
    }
    loadActivities();
  }, []);

  // Helper to map dynamic activity properties to static structure
  const mapDynamicActivity = (activity) => ({
    ...activity,
    id: activity._id || activity.id,
    slug: activity.slug,
    title: activity.title,
    image: activity.image,
    description: activity.description,
    category: activity.category || "Other",
    Icon: FaStar, // fallback icon for dynamic activities
  });

  // Filtered static activities
  const filteredStatic =
    selectedCategory === "All Activities"
      ? staticActivities
      : staticActivities.filter((activity) => activity.category === selectedCategory);

  // Filtered dynamic activities
  const filteredDynamic =
    selectedCategory === "All Activities"
      ? dynamicActivities
      : dynamicActivities.filter((activity) => activity.category === selectedCategory);

  // Card layout (shared for both static and dynamic)
  const ActivityCard = (activity) => (
    <div 
      key={activity.id} 
      className="group bg-white rounded-2xl shadow-sm overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-black/10 flex flex-col"
    >
      <div className="relative h-64">
        <img 
          src={activity.image} 
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 bg-white/80 text-gray-700 text-xs font-semibold shadow-sm">
          {(() => {
            const cat = categories.find(c => c.name.toLowerCase().includes((activity.category || '').toLowerCase()));
            const Icon = cat ? cat.icon : FaStar;
            return <Icon className="text-xs mr-1" />;
          })()}
          <span className="capitalize">{(activity.category || '').toLowerCase()}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <span className="text-green-600 text-2xl mr-3">{activity.Icon ? <activity.Icon /> : <FaStar />}</span>
          <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{activity.description}</p>
        <Link to={`/activities/${activity.slug}`} className="mt-auto block w-full text-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200">
          Learn More
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center mb-12">
        <img
          src={activitiesHero}
          alt="Unforgettable Activities Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 custom-blur" />
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          {/* Kicker */}
          <span className="inline-block mb-4 px-2 border border-white text-white rounded-full font-sm text-sm bg-transparent backdrop-blur-sm tracking-wider shadow-md">
            Adventures & Experiences
          </span>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl !text-white !font-extrabold mb-4 drop-shadow-lg ">
            Unforgettable Activities
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">
            Discover the beauty of Charikot through our carefully curated experiences. From thrilling adventures to peaceful cultural immersions.
          </p>
        </div>
      </section>
      {/* Category Filter Tabs */}
      <div className="py-12 bg-[var(--bg)]">
        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-x-10 gap-y-3">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setSelectedCategory(name)}
              className={`flex items-center gap-2 px-6 py-2 transition-all duration-300 border-b-2 rounded-t-lg
                ${selectedCategory === name
                  ? 'border-green-600 text-[var(--text)] font-bold bg-transparent'
                  : 'border-transparent text-[var(--text)]/70 font-normal hover:text-[var(--text)] bg-transparent'}
              `}
              style={{ boxShadow: 'none', background: 'none' }}
            >
              <Icon className="text-lg" />
              {name}
            </button>
          ))}
              </div>
      </div>
      {/* Activities Grid - Static */}
      <section className="pt-8 pb-8 bg-[var(--bg)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStatic.map(ActivityCard)}
          </div>
        </div>
      </section>
      {/* Activities Grid - Dynamic */}
      <section className="pb-20 bg-[var(--bg)]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">More Activities</h2>
          {loading ? (
            <div className="text-center p-10 text-teal-600 animate-pulse">Loading activities...</div>
          ) : error ? (
            <div className="text-center p-10 text-red-600">{error}</div>
          ) : !filteredDynamic.length ? (
            <div className="text-center p-10 text-gray-600">No activities available</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDynamic.map((activity) => ActivityCard(mapDynamicActivity(activity)))}
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-white/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for Your Adventure?</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8 text-lg">
            Book your stay with us and experience the perfect blend of luxury and adventure in the heart of Charikot.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/booking" className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-transform hover:scale-105">
              Book Your Stay
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all hover:scale-105">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
