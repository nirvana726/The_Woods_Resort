import { useState } from 'react';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import galleryHero from '../assets/hero/gallery-hero.jpg';

// Dynamically import all images from the gallery folder
const images = import.meta.glob('../assets/Gallery/*.{jpg,jpeg,png,webp}', { eager: true });

export default function Gallery() {
  const [layout, setLayout] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  // Convert images object to array
  const allImages = Object.values(images);
  const totalPages = Math.ceil(allImages.length / itemsPerPage);
  
  // Calculate start and end indices for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const imageArray = allImages.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (count) => {
    setItemsPerPage(count);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center mb-12">
        <img
          src={galleryHero}
          alt="Gallery Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 custom-blur" />
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          {/* Kicker */}
          <span className="inline-block mb-4 px-2 border border-white text-white rounded-full font-sm text-sm bg-transparent backdrop-blur-sm tracking-wider shadow-md">
            Gallery
          </span>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl !text-white !font-extrabold mb-4 drop-shadow-lg ">
            Our Gallery
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">
            Capture the beauty and essence of The Woods Charikot through our carefully curated collection of moments
          </p>
        </div>
      </section>

      {/* Controls Section */}
      <div className="py-6 bg-[var(--bg)] border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Pagination Options */}
            <div className="flex items-center gap-2">
              <label htmlFor="itemsPerPage" className="text-sm text-gray-600">Show:</label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={e => handleItemsPerPageChange(Number(e.target.value))}
                className="block w-32 px-2 py-1 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 bg-white text-gray-900"
              >
                <option value={6}>6 per page</option>
                <option value={12}>12 per page</option>
                <option value={24}>24 per page</option>
                <option value={48}>48 per page</option>
              </select>
            </div>

            {/* Layout Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setLayout('masonry')}
                className={`px-3 py-1 text-sm rounded-md transition ${
                  layout === 'masonry'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Masonry
              </button>
              <button
                onClick={() => setLayout('grid')}
                className={`px-3 py-1 text-sm rounded-md transition ${
                  layout === 'grid'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-16">
        {layout === 'masonry' ? (
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {imageArray.map((mod, i) => (
              <motion.div
                key={i}
                className="mb-4 group relative cursor-pointer"
                onClick={() => setSelectedImage(mod.default)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <img
                  src={mod.default}
                  alt={`Gallery ${startIndex + i + 1}`}
                  className="w-full h-auto rounded-lg shadow-md transition-all duration-500 ease-in-out group-hover:scale-105"
                />
                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-b-lg">
                  {`Gallery ${startIndex + i + 1}`}
                </div>
              </motion.div>
            ))}
          </Masonry>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageArray.map((mod, i) => (
              <motion.div
                key={i}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(mod.default)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <img
                  src={mod.default}
                  alt={`Gallery ${startIndex + i + 1}`}
                  className="w-full h-80 object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                />
                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  {`Gallery ${startIndex + i + 1}`}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button 
              className="px-3 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                  return (
                    <button
                      key={page}
                      className={`px-3 py-2 text-sm rounded transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} className="px-2 text-gray-500">...</span>;
                }
                return null;
              })}
            </div>
            
            <button 
              className="px-3 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        {/* Loading indicator */}
        {imageArray.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 text-lg">Loading images...</div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.img src={selectedImage} className="max-w-full max-h-full rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()} />
            <button className="absolute top-5 right-5 text-white text-3xl hover:text-gray-300" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
