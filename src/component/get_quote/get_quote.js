import React from 'react'

export default function get_quote() {
  return (
    <div>
        <div className="w-auto h-auto">
    <div className="container w-auto h-auto mt-60px quote">
        <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 w-auto h-auto justify-content-center align-content-center quoteyes">
                <form className="row g-3">
                    <h1 className="tell">Tell us about your company </h1>
                    <div className="col-12">
                        <label for="inputName" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Nipun Bansal" required/>
                    </div>
                    <div className="col-md-12">
                        <label for="inputEmail4" className="form-label">Work Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="your@work.org" required/>
                    </div>
                    <div className="col-12">
                        <label for="inputName" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Zoom" required/>
                    </div>
                    <div className="col-12">
                        <label for="inputSize" className="form-label">Team Size</label>
                        <input type="number" className="form-control" id="inputName" placeholder="12" required/>
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-outline-dark btn-lg goback"><a href="Home.html" className="text-decoration-none">Go
                                back</a></button>
                        <button type="submit" className="btn btn-primary btn-lg mx-20px">Continue</button>
                    </div>
                </form>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 w-auto h-auto ">
                <center>
                    <div className="w-auto h-auto my-60px">
                        <div className="row h-180px mb-30px quotehn shadow-sm">
                            <img src="assets/images/quote1.png" className="quote-img1" alt=""/>
                            <p className="need">Need help with something?</p>
                            <p className="request">Request a callback, sit back relax!</p>
                            <p className="talk1">Talk to our experts
                                <svg viewBox="0 0 13 20" focusable="false" role="presentation" className="arrow"><svg width="13" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m2 18 8-8-8-8" stroke="#2D3D54" stroke-width="3"></path>
                                    </svg></svg>
                            </p>
                        </div>
                        <div className="row h-280px mb-0px quoteno shadow-sm">
                            <img src="assets/images/quote2.jpeg" className="quote-img2" alt=""/>
                            <p className="tail">Get tailored pricing</p>
                            <p className="tailored">We use this info to find a plan that is <br/> tailored for
                                yourcompany.
                                Having your <br/> email id lets
                                us send you a detailed <br/> quote and to make our communication <br/> easier</p>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    </div>
</div>
    </div>
  )}