import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-25 text-white py-8 font-averia fixed bottom-0 left-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-playfair">Techraganza 2024</h2>
            <p>Where Innovation Meets Sustainability</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-playfair">Exciting Activities</h3>
            <ul>
              <li>Hackathons</li>
              <li>Project Showcase</li>
              <li>Workshops</li>
              <li>Tech Talks</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-playfair">Location</h3>
            <div className="bg-blue-500 p-4 rounded">
              <p>Stylized Map with Location Pin</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-playfair">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white">Instagram</a>
              <a href="#" className="text-white">Facebook</a>
              <a href="#" className="text-white">LinkedIn</a>
              <a href="#" className="text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© Techvaganza 2024, all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
