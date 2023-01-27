import React from 'react'
import "./Services.css"


export default function Services() {
  return (
    <>
         {/* <!-- Services Start --> */}
    <div className="container-fluid pt-5" id="service">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" id="servic" >Service</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Services</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-edit service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Full Stack Developer</h4>
                    </div>
                    <p>Full-stack technology refers to the entire depth of a computer system application, and full stack web developers are those who are capable of developing both the front end and the back end of web development. All of the features that are visible to the client, or the viewer of the site, are included in the front end.

                    </p>
                    <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Web Design</h4>
                    </div>
                    <p>Web design is the process of creating websites. It encompasses several different
                        aspects, including webpage layout, content production, and graphic design. </p>
                    <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Web Development</h4>
                    </div>
                    <p>Web development is the work involved in developing a website for the Internet
                        (World Wide Web) or an intranet (a private network). </p>
                    <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>

            </div>
        </div>
    </div>
    {/* <!-- Services End --> */}
    </>
  )}