import PropTypes from 'prop-types';

export default function PageHero({ kicker, title, subtitle, bgImage }) {
  const defaultBgImage =
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';

  return (
    <section
      className="relative bg-cover bg-center h-[40vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('${bgImage || defaultBgImage}')`,
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-left md:text-center max-w-3xl mx-auto">
          {kicker && (
            <span className="block text-xs md:text-sm font-medium tracking-widest mb-2 text-white/70 font-outfit">
              {kicker}
            </span>
        )}
        <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg !text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg !text-white">
            {subtitle}
          </p>
        )}
        </div>
      </div>
    </section>
  );
}

PageHero.propTypes = {
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string,
};
