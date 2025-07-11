import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Login from "./pages/Login";
import DashBoard from "./pages/Admin/DashBoard";
import CreatePost from "./pages/Admin/CreatePost";
import Details from "./pages/Admin/Details";
import PrivateRoute from "./components/Routes/Admin";
import UserRoutes from "./components/Routes/Private";
import CreateCategory from "./pages/Admin/CreateCategory";
import AllPost from "./pages/Admin/AllPost";
import AllTrip from "./pages/Admin/AllTrip";
import UpdatePost from "./pages/Admin/UpdatePost";
import Payment from "./pages/Payment";
import ThankYou from "./components/ThankYou";
import SelectedCategory from "./pages/SelectedCategory";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import ActivitiesPage from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import Terms from "./pages/policies/Terms";
import Cancellation from "./pages/policies/Cancellation";
import GuestGuidelines from "./pages/policies/GuestGuidelines";
import ActivityDetail from './pages/activity/ActivityDetail';
import RoomDetail from './pages/room/RoomDetail';
import FooterDivider from "./components/FooterDivider";

// Import your new Admin pages for rooms and activities
import RoomsAdmin from "./pages/Admin/RoomsAdmin";
import ActivitiesAdmin from "./pages/Admin/ActivitiesAdmin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activities/:slug" element={<ActivityDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/guest-guidelines" element={<GuestGuidelines />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/category/:slug" element={<SelectedCategory />} />

        {/* Admin Protected Routes */}
        <Route path="/admin" element={<PrivateRoute />}>
          {/* Nested routes for admin without repeating /admin */}
          <Route index element={<DashBoard />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="all-post" element={<AllPost />} />
          <Route path="details" element={<Details />} />
          <Route path="all-booking" element={<AllTrip />} />
          <Route path="post/:slug" element={<UpdatePost />} />
          {/* New Admin Pages */}
          <Route path="rooms" element={<RoomsAdmin />} />
          <Route path="activities" element={<ActivitiesAdmin />} />
        </Route>
      </Routes>
      <FooterDivider />
      <Footer />
    </>
  );
}

export default App;
