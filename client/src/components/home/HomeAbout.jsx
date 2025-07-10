import { FaArrowRight } from 'react-icons/fa';
import homeAboutImg from '../../assets/homeabout/homeabout.jpg';

export default function HomeAbout() {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 bg-white border border-green-200 text-green-700 rounded-full font-medium text-sm shadow-sm">About Us</span>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 font-serif" style={{ fontFamily: 'Playfair, serif' }}>
              Welcome to The Woods<br />Charikot Resort
            </h1>
            <div className="w-24 h-1 bg-green-500 mb-6" />
            <div className="mb-4">
              <span className="font-semibold text-lg text-gray-900">A hidden gem in the heart of Charikot</span>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              Nestled amidst the tranquil hills of Charikot, <em>Wood Charikot</em> is more than just a place to stay — it&apos;s an escape into nature. Built with wood, warmth, and whispers of the forest, our resort offers a cozy yet modern retreat for travelers, families, and seekers of stillness. Whether you&apos;re here for the mountain views, peaceful mornings, or soulful moments around the fire, you&apos;ll find home here.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Come unwind, recharge, and reconnect — with yourself and the wild.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded shadow transition text-md"
            >
              Learn More <FaArrowRight />
            </a>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center items-center">
            <img
              src={homeAboutImg}
              alt="The Woods Charikot Resort - A hidden gem in the heart of Charikot"
              className="rounded-2xl shadow-xl object-cover w-full max-w-2xl h-[350px] md:h-[420px]"
              style={{ background: '#eee' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
