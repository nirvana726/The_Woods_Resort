import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/UserContext";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/activities", label: "Activities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  
];

const policyPaths = [
  "/privacy-policy",
  "/terms",
  "/cancellation",
  "/guest-guidelines"
];

const Navbar = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if current path is a policy page
  const isPolicyPage = policyPaths.some((path) => location.pathname.startsWith(path));

  // The header should be transparent on ANY page when at the very top, EXCEPT on policy pages
  const isAtTop = !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar classes based on state
  // On policy pages, always use solid background
  const navBackground = isPolicyPage
    ? 'bg-[var(--bg)] shadow-md'
    : (isAtTop ? 'bg-transparent' : 'bg-[var(--bg)] shadow-md');
  const textColor = isAtTop && !isPolicyPage ? 'text-white' : 'text-[var(--text)]';

  // Login/Profile button for desktop
  const renderProfileOrLogin = () => (
    auth?.user ? (
      <button
        className="ml-4 text-3xl text-[var(--heading)] hover:text-[var(--accent)] transition"
        onClick={() => navigate('/user/dashboard')}
        aria-label="Profile"
      >
        <FaUserCircle />
      </button>
    ) : (
      <button
        className="bg-[#014443] hover:bg-[#012e2a] text-white font-semibold px-8 py-2 rounded-full text-base transition-colors duration-200"
        style={{
          minWidth: '140px',
          letterSpacing: '0.01em',
          boxShadow: 'none',
        }}
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    )
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground} ${textColor}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center h-14">
            <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg">
              <img
                src="/logo.avif"
                alt="The Woods Charikot Resort Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
          </NavLink>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-10 ml-16">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-md font-semibold hover:text-[var(--accent)] transition"
              style={({ isActive }) => ({
                color: isActive ? "var(--accent)" : "inherit",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Profile Icon or Login Pill */}
        <div className="hidden md:flex items-center gap-6">
          {renderProfileOrLogin()}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open Menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[var(--bg)] text-[var(--text)] absolute top-full left-0 w-full shadow-xl">
          <div className="container mx-auto px-4 pt-2 pb-6 flex flex-col items-center space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="w-full text-center py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            {/* Login/Profile for mobile */}
            {auth?.user ? (
              <button
                className="mt-4 text-3xl text-[var(--heading)] hover:text-[var(--accent)] transition"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/user/dashboard');
                }}
                aria-label="Profile"
              >
                <FaUserCircle />
              </button>
            ) : (
              <button
                className="mt-4 w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition flex items-center justify-center gap-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/login');
                }}
                style={{ minWidth: '110px', letterSpacing: '0.01em' }}
              >
                <FaUserCircle className="text-2xl" />
                Login
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
