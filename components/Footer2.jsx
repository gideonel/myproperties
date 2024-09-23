import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Footer2 = () => {
  return (
    <footer className="bg-blue-700 text-gray-400 pt-5 mt-5">
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Get In Touch Section */}
          <div>
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt mr-3"></i>26, Ladega Street, Off New-Road, Olodi-Apapa, Lagos.
            </p>
            <p className="mb-2">
              <i className="fas fa-phone-alt mr-3"></i>+2347085971914
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope mr-3"></i>LordGideonel@gmail.com
            </p>
            <div className="flex space-x-2 pt-2">
              <a href="#" className="btn-social text-white border border-white hover:bg-primary p-2 rounded-full">
                <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" style={{ height: '20px', width: '20px' }} />
              </a>
              <a href="#" className="btn-social text-white border border-white hover:bg-primary p-2 rounded-full">
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-xl" style={{ height: '20px', width: '20px' }} />
              </a>
              <a href="#" className="btn-social text-white border border-white hover:bg-primary p-2 rounded-full">
                <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-xl" style={{ height: '20px', width: '20px' }} />
              </a>
              <a href="#" className="btn-social text-white border border-white hover:bg-primary p-2 rounded-full">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-xl" style={{ height: '20px', width: '20px' }} />
              </a>
            </div>

          </div>

          {/* Quick Links Section */}
          <div>
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
              <li>
                <a href="/properties" className="hover:underline">Our Services</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Photo Gallery Section */}
          <div>
            <h5 className="text-white mb-4">Photo Gallery</h5>
            <div className="grid grid-cols-3 gap-2">
              <img className="rounded-md" src="images/property-1.jpg" alt="Property 1" />
              <img className="rounded-md" src="images/property-2.jpg" alt="Property 2" />
              <img className="rounded-md" src="images/property-3.jpg" alt="Property 3" />
              <img className="rounded-md" src="images/property-4.jpg" alt="Property 4" />
              <img className="rounded-md" src="images/property-5.jpg" alt="Property 5" />
              <img className="rounded-md" src="images/property-6.jpg" alt="Property 6" />
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h5 className="text-white mb-4">Newsletter</h5>
            <p className="mb-4">Subscribe to our newsletter for the latest updates, exclusive offers, and insightful articles. Enter your email to stay informed.</p>
            <div className="relative max-w-md">
              <input
                type="text"
                className="w-full py-3 px-4 bg-transparent border border-gray-400 rounded-md text-white placeholder-gray-400"
                placeholder="Your email"
              />
              <button className="absolute right-2 top-2 bg-primary text-white py-2 px-4 rounded-md">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              &copy; 2021 - 2024 <a href="#" className="text-primary">My Properties</a>
            </div>
            <div className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Cookies</a>
              <a href="#" className="hover:underline">Help</a>
              <a href="#" className="hover:underline">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
