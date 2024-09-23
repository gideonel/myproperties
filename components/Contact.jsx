import React from 'react'

export default function Contact() {
  return (
    <div>
      {/* <!-- Call to Action Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="bg-white rounded p-4">
                        <div className="row g-5 align-items-center" style={{border: '1px dashed  rgba(0, 185, 142, .3)'}}>
                            <div className="col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100" src="/img/call-to-action.png" alt="image here" />
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-4">Contact With Our Certified Agent</h1>
                                    <p>Our certified agent is here to guide you through every step, offering expert advice and personalized assistance. Whether you need help booking a stay or have specific inquiries, we’re ready to provide a seamless experience. </p>
                                </div>
                                <a href="" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</a>
                                <a href="" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>BOOK</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Call to Action End --> */}
    </div>
  )
}
