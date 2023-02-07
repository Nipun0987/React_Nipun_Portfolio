import React from 'react'
// import { BrowserRouter } from 'react-router-dom'

import "./About.css"

export default function About() {
  return (
    <>
          {/* About Start  */}
    <div className="container-fluid py-5" id="about">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" id="abou" >About</h1>
                <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5 pb-4 pb-lg-0">
                    <img className="img-fluid rounded w-100 " src="assets_2/img/2.jpeg" alt=""/>
                </div>
                <div className="col-lg-7">
                    <h3 className="mb-4">Web Designer & Web Developer</h3>
                    <p>A unique and effective way of organizing your personal information on the web is
                        to create an online business card (vCard). In doing so, we learn who the
                        designer is, other places to connect with him, and how to get in touch with him.
                    </p>
                    <div className="row mb-3">
                        <div className="col-sm-6 py-2">
                            <h6>Name: <span className="text-secondary">Nipun Bansal</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Birthday: <span className="text-secondary">3rd December 2002</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Degree: <span className="text-secondary">Studing</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Experience: <span className="text-secondary">1 Year</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Phone: <span className="text-secondary">+91 9311828408</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Email: <span className="text-secondary">Nipunbansal0987@gmail.com</span>
                            </h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Address: <span className="text-secondary">Sector-3, Rohini,
                                    Delhi=110085</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Freelance: <span className="text-secondary">Nipun B.@nipunbansal0987</span></h6>
                        </div>
                    </div>
                    
                    {/* <link target="" className="btn btn-outline-primary mr-4 rounded-pill">More</link> */}
                
                </div>
            </div>
        </div>
    </div>
     {/* About End */}

    </>
  )
}
