import React from "react";
import "./Header.css"

export default function Header() {
  return (
    <>
   {/* Header Start */}
    <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                    <img className="img-fluid w-100 rounded-circle shadow-sm" src="assets/img/1.jpeg" alt=""/>
                </div>
                <div className="col-lg-7 text-center text-lg-left">
                    <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                    <h1 className="display-3 text-uppercase text-primary mb-2" id="name" >
                        Nipun Bansal</h1>
                    <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
                    <div className="typed-text d-none">Full Stack Developer, Web Designer, Web Developer, Front End Developer, Back End Developer</div>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        <a href="./public/assets_2/img/nipun_bansal.pdf" className="btn btn-outline-light mr-5">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Header End */}

    </>
  )}