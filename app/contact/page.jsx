import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelopeOpen, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  return (
    <div>
      {/* <!-- Contact Start --> */}
      <div className="container mx-auto py-10">
        <div className="text-center mx-auto mb-10" style={{ maxWidth: '600px' }}>
          <h1 className="text-4xl font-bold mb-5">Contact Us</h1>
          <p className="text-gray-600">
            For any inquiries or assistance, please email us or call us with our details displayed below. Alternatively, fill
            out the contact form below, and we’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Contact Details */}
          <div className="bg-gray-100 rounded p-4">
            <div className="flex items-center bg-white rounded p-4 border border-dashed border-blue-300">
              <div className="text-primary w-12 h-12 flex justify-center items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-xl" style={{height : '20px', width :'20px'}}/>
              </div>
              <span className="ml-3 text-gray-800">26, Ladega Street, Off New-Road, Olodi-Apapa, Lagos.</span>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <div className="flex items-center bg-white rounded p-4 border border-dashed border-blue-300 ">
              <div className="text-primary w-12 h-12 flex justify-center items-center">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="text-blue-500 text-xl" style={{height : '20px', width :'20px'}}/>
              </div>
              <span className="ml-3 text-gray-800">LordGideonel@gmail.com</span>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <div className="flex items-center bg-white rounded p-4 border border-dashed border-blue-300" >
              <div className="text-primary w-12 h-12 flex justify-center items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-500 text-xl" style={{height : '20px', width :'20px'}}/>
              </div>
              <span className="ml-3 text-gray-800">+2347085971914</span>
            </div>
          </div>
        </div>

        {/* Google Map and Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <iframe
              className="w-full h-full rounded"
              src="https://www.google.com/maps?q=Lagos,+Nigeria&output=embed"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Leave a message here"
                ></textarea>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </div>
  );
}
