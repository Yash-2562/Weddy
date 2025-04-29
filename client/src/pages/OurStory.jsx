import React from 'react';

const OurStory = () => {
  return (
    <div className="w-full">
      {/* Our Story Section */}
      <section id="our-story" className="flex flex-col items-center font-sans">
        <div className="relative w-full h-[70vh] sm:h-screen overflow-hidden">
          <img 
            src="your-our-story-background.jpg" 
            alt="Holding hands background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl sm:text-6xl font-bold">Our Story</h1>
          </div>
        </div>
        <div className="max-w-3xl px-4 py-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our story. It all began with a chance meeting and grew into a beautiful journey of love, laughter, and dreams. We are so excited to share this special moment with you!
          </p>
        </div>
      </section>
      
      {/* Location Section */}
      <section id="location" className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Location</h2>
          <p className="mb-8 text-gray-700 text-lg">
            Our special day will be celebrated at a beautiful venue located at 1234 Wedding Lane, Bliss Town. Nestled in the heart of nature, it offers a scenic, intimate setting perfect for our celebration.
          </p>
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Map Placeholder</span>
          </div>
        </div>
      </section>
      
      {/* Our Memories Section */}
      <section id="our-memories" className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Our Memories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="your-memory-image-1.jpg" 
                alt="Beach memory" 
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="your-memory-image-2.jpg" 
                alt="Forest memory" 
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="your-memory-image-3.jpg" 
                alt="Festive outdoor memory" 
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Lovely Partners Section */}
      <section id="our-lovely-partners" className="w-full bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Our Lovely Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="w-32 h-32 flex items-center justify-center bg-white shadow-md rounded">
              <img src="partner-logo-1.png" alt="Partner 1" className="max-w-full max-h-full"/>
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-white shadow-md rounded">
              <img src="partner-logo-2.png" alt="Partner 2" className="max-w-full max-h-full"/>
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-white shadow-md rounded">
              <img src="partner-logo-3.png" alt="Partner 3" className="max-w-full max-h-full"/>
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-white shadow-md rounded">
              <img src="partner-logo-4.png" alt="Partner 4" className="max-w-full max-h-full"/>
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-white shadow-md rounded">
              <img src="partner-logo-5.png" alt="Partner 5" className="max-w-full max-h-full"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;