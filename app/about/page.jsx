import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="wow fadeIn" data-wow-delay="0.1s">
          <div className="relative overflow-hidden p-5 pe-0">
            <img
              className="w-full h-auto object-cover"
              src="/images/about.jpg"
              alt="About Guest House"
            />
          </div>
        </div>
        
        {/* Text Section */}
        <div className="wow fadeIn" data-wow-delay="0.5s">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The number 1 Place To Find The Perfect Guest House
          </h1>
          <p className="text-lg mb-4">
            <span className="text-primary font-bold">At My Properties,</span> we are dedicated to providing sophisticated design and attentive services that meet the highest standards of quality. With a focus on luxurious, comfortable, and reliable accommodations at affordable prices, we aim to exceed customer expectations. Founded in 2021, our mission is to offer an exceptional stay for those who value excellence.
          </p>
          <ul className="space-y-2">
            <li>
              <i className="fa fa-check text-primary mr-3"></i>
              <span className="text-primary font-bold">Excellence:</span> We strive for perfection in everything we do, ensuring unparalleled quality and service.
            </li>
            <li>
              <i className="fa fa-check text-primary mr-3"></i>
              <span className="text-primary font-bold">Integrity:</span> Honesty and transparency are at the core of our operations, guiding every decision we make.
            </li>
            <li>
              <i className="fa fa-check text-primary mr-3"></i>
              <span className="text-primary font-bold">Innovation:</span> We continuously evolve to bring fresh ideas and cutting-edge solutions to meet our clients' needs.
            </li>
          </ul>
          <a className="inline-block bg-primary text-white py-3 px-6 mt-5 rounded-md hover:bg-opacity-90 transition" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

// "use client"
// import React from 'react'

// export default function page() {
//   return (
//     <div>
//       <h1 className='text-center px-8 py-8 bg-slate-400 text-white'>About Page</h1>
//     </div>
//   )
// }
