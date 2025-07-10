import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterDivider from "./FooterDivider";
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <FooterDivider />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
