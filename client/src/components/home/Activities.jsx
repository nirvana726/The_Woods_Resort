import { activities } from '../../data/activitydata';

export default function Activities() {
  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
        <span className="inline-block mb-4 px-4 py-1 bg-white border border-green-200 text-green-700 rounded-full font-medium text-sm shadow-sm">Experiences</span>
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            Resort Activities
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover adventure, relaxation, and cultural immersion
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative rounded-2xl shadow-lg overflow-hidden group min-h-[320px] flex"
              style={{ minHeight: '320px' }}
            >
              {/* Background image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <h3 className="text-2xl md:text-3xl font-bold !text-white mb-2 drop-shadow-lg">
                  {activity.title}
                </h3>
                <p className="text-white mb-4 drop-shadow-lg">
                  {activity.description}
                </p>
                <a
                  href={`/activities/${activity.slug}`}
                  className="text-white font-semibold flex items-center gap-1 hover:underline group"
                >
                  Discover <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Activities Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/activities"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            View All Activities
          </a>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Ready for Your Mountain Adventure?
            </h1>
            <p className="text-gray-600 mb-8">
              Experience the magic of the Himalayas at The Woods Charikot Resort. 
              Book your stay now and create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/booking" 
                className="px-8 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold"
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
