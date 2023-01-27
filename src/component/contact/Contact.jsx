import React from 'react'
import "./Contact.css"


export default function Contact() {
  return (
    <>
    {/* <!-- Contact Start --> */}
<div className="container-fluid py-5" id="contact">
    <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" id="contac">Contact</h1>
            <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="contact-form text-center">
                    <div id="success"></div>
                    <form name="sentMessage" method="post" enctype="text/plain" id="contactForm" novalidate="novalidate">
                        <div className="form-row">
                            <div className="control-group col-sm-6">
                                <input type="text" className="form-control p-4" id="nam" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group col-sm-6">
                                <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <input className="btn btn-outline-primary rounded-pill" type="submit" id="sendMessageButton" value="Send Message"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Contact End --> */}
    </>
  )}
