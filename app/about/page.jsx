import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="wow fadeIn" data-wow-delay="0.1s">
          <div className="relative overflow-hidden p-5 pe-0">
            <img className="w-full h-auto object-cover rounded-lg shadow-lg" src="/images/about.jpg" alt="About Guest House" />
          </div>
        </div>

        {/* Text Section */}
        <div className="wow fadeIn" data-wow-delay="0.5s">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
            The Number One Place to Find Your Perfect Guest House
          </h1>

          <p className="text-lg mb-6 text-gray-600">
            <span className="text-primary font-semibold">At My Properties,</span> we are committed to offering sophisticated design and personalized services that meet the highest standards. With a focus on luxurious yet affordable accommodations, we consistently aim to exceed expectations. Founded in 2021, our mission is to deliver an exceptional experience for those who value excellence.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="fa fa-check text-primary mr-3 mt-1"></i>
              <span>
                <span className="text-primary font-semibold">Excellence:</span> We strive for perfection in everything we do, offering unrivaled quality and service.
              </span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-check text-primary mr-3 mt-1"></i>
              <span>
                <span className="text-primary font-semibold">Integrity:</span> Honesty and transparency are core to our operations, guiding every decision we make.
              </span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-check text-primary mr-3 mt-1"></i>
              <span>
                <span className="text-primary font-semibold">Innovation:</span> We continually evolve, introducing fresh ideas and cutting-edge solutions to meet our clients' needs.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
