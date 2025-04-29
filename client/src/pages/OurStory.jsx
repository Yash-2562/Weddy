import React from 'react';

const OurStory = () => {
  return (
    <div className="w-full">
      {/* Our Story Section */}
      <section id="our-story" className="flex flex-col items-center font-sans">
        <div className="relative w-full h-96 ">
          <img
            src="https://images.unsplash.com/photo-1708133302753-bc167beeb484?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Holding hands background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl sm:text-6xl font-bold">Our Story</h1>
          </div>
        </div>
        <div className="max-w-3xl px-4 py-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our story. It all began with a chance meeting and grew into a beautiful
            journey of love, laughter, and dreams. We are so excited to share this special moment
            with you!
          </p>
          <p className='text-lg text-gray-700 leading-relaxed' > Thanks to Weddy for making this so Dreamy and memorable ❣️</p>
        </div>
      </section>

      {/* Location Section
      <section id="location" className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Location</h2>
          <p className="mb-8 text-gray-700 text-lg">
            Our special day will be celebrated at a beautiful venue located at 1234 Wedding Lane,
            Bliss Town. Nestled in the heart of nature, it offers a scenic, intimate setting perfect
            for our celebration.
          </p>
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Map Placeholder</span>
          </div>
        </div>
      </section> */}

      {/* Our Memories Section */}
      <section id="our-memories" className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Our Memories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1708133302586-2ffca3db5553?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Beach memory"
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1721677337543-37b07e7e28b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Forest memory"
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1681841324775-880c54ffd0c1?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <img src="https://images.unsplash.com/photo-1628760584600-6c31148991e9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Partner 1" className="max-w-full max-h-full" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-white shadow-md rounded">
              <img src="https://images.unsplash.com/photo-1660071155921-7204712d7d1a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Partner 2" className="max-w-full max-h-full" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-white shadow-md rounded">
              <img src="https://plus.unsplash.com/premium_photo-1668902221464-402993a500ce?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Partner 3" className="max-w-full max-h-full" />
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
