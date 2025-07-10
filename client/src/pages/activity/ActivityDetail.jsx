import { useParams, Link } from 'react-router-dom';
import { activities as staticActivities } from '../../data/activitydata';
import { FaUsers, FaTag } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { fetchActivities } from '../../api/adminApi';

export default function ActivityDetail() {
  const { slug } = useParams();
  const [dynamicActivities, setDynamicActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadActivities() {
      try {
        const data = await fetchActivities();
        setDynamicActivities(data);
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
    longDescription: activity.longDescription || activity.description,
    groupSize: activity.groupSize || 'Varies',
    category: activity.category || 'Other',
  });

  // Combine static and dynamic activities
  const allActivities = [
    ...staticActivities,
    ...dynamicActivities.map(mapDynamicActivity),
  ];

  const activity = allActivities.find((act) => act.slug === slug);

  if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (!activity) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--bg)] text-[var(--text)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Activity not found!</h1>
          <p className="mb-8">We couldn&apos;t find the activity you&apos;re looking for.</p>
          <Link to="/activities" className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            Back to Activities
          </Link>
        </div>
      </div>
    );
  }

  const otherActivities = allActivities.filter((act) => act.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-800">
        <img src={activity.image} alt={activity.title} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{activity.category}</p>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{activity.title}</h1>
            <div className="mt-4 text-sm !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span><Link to="/" className="hover:text-green-400 !text-white">Home</Link></span>
                <span className="mx-2">/</span>
                <span><Link to="/activities" className="hover:text-green-400 !text-white">Activities</Link></span>
                <span className="mx-2">/</span>
                <span className="!text-white">{activity.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">About This Activity</h2>
            <p className="text-lg text-[var(--text)]/80 leading-relaxed">{activity.longDescription}</p>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-white/50 border border-black/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Book This Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaUsers className="text-green-600" size={20}/>
                  <div>
                    <p className="font-semibold">Group Size</p>
                    <p className="text-sm text-[var(--text)]/80">{activity.groupSize}</p>
                  </div>
                </div>
                 <div className="flex items-center gap-3">
                  <FaTag className="text-green-600" size={20}/>
                  <div>
                    <p className="font-semibold">Category</p>
                    <p className="text-sm text-[var(--text)]/80">{activity.category}</p>
                  </div>
                </div>
              </div>
              <Link to="/booking" className="mt-6 block w-full text-center px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200">
                Book Now
              </Link>
               <Link to="/contact" className="mt-3 block w-full text-center px-4 py-3 bg-transparent border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200">
                Ask Questions
              </Link>
            </div>
          </aside>
        </div>
      </div>
      
       {/* You Might Also Like Section */}
      <section className="py-16 bg-white/20 border-t border-black/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">You Might Also Like</h2>
          <p className="text-center text-base text-gray-700 mb-8">Discover more exciting activities during your stay</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherActivities.map((act) => (
              <Link to={`/activities/${act.slug}`} key={act.id} className="group bg-white rounded-2xl shadow-sm overflow-hidden transform transition-shadow duration-700 ease-in-out hover:shadow-2xl border border-black/10">
                 <div className="relative h-56">
                  <img src={act.image} alt={act.title} className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-700 ease-in-out group-hover:scale-105"></div>
                   <div className="absolute bottom-4 left-4 !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      <h3 className="font-bold text-xl !text-white">{act.title}</h3>
                      <p className="text-sm text-white">{act.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
           <div className="text-center mt-12">
                <Link to="/activities" className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                    View All Activities
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
