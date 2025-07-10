import HomeAbout from "../components/home/HomeAbout";
import FeaturedRooms from "../components/home/FeaturedRooms";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import Activities from "../components/home/Activities";
import homeHero from '../assets/hero/home-hero.jpg';

export default function HomePage() {
  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Subtle blurred background image */}
        <img
          src={homeHero}
          alt="The Woods Charikot Resort Hero"
          className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
        />
        
        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-7xl !font-extraboldbold !text-white mb-6 drop-shadow-lg">
            The Woods Charikot Resort
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-lg">
            Luxury Hillside Resort in the Heart of Nature.<br />
            Unwind, recharge, and reconnect with yourself and the wild.
          </p>
          <a
            href="/booking"
            className="inline-block rounded bg-white hover:bg-amber-100 text-black font-semibold px-8 py-3 rounded shadow transition"
          >
            Book Your Stay
          </a>
        </div>

        <div className="absolute inset-0 bg-black/30" />
      </section>

      <HomeAbout />

      <FeaturedRooms />

      <Features />

      <Testimonials />

      <Activities />

    </>
  );
}
