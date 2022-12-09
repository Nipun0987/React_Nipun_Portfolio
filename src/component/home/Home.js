import React from 'react'

export default function Home() {
  return (
    <div>
  {/* banner start */}

    <div className="w-100 h-auto bg-light">
      <div className="container w-100 pb-20px h-auto banner">
          <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-90px">
                  <div className="transform">Transform your employee healthcare experience</div>
                  <div className="comprehensive">Comprehensive group health insurance with seamless digital claims experience
                  </div>
                  <div className="button-holder my-30px">
                      <a href="talk_to_expert">
                          <button type="button" onclick="myfun()" className="btn btn-primary btn-lg" id="loaddata">Talk to an
                              expert</button>
                              
                      </a> 
                      <a href="">
                          <button type="button" className="btn btn-outline-primary btn-lg mx-15px my-20px">Get quote</button>
                      </a>
                  </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                  <div className="responsive">
                    <div><img src="assets/images/1.1.png" className="img-fluid bannerimg"/></div>
                    {/* <div><img src="assets/images/1.2.png" className="img-fluid bannerimg"/></div> */}
                    {/* <div><img src="assets/images/1.3.png" className="img-fluid bannerimg"/></div> */}
                  </div>
              </div>

          </div>
      </div>
  </div>
  {/* banner end */}
  
  {/* best in class Start */}
  <div className="w-100 h-auto bg-light">
      <div className="container w-100 h-auto">
          <div className="row ">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 w-100 h-auto bg-light bestinclass">
                  <div className="best">Best-in-class health insurance at affordable price</div>
                  <div className="your">Your teams want health insurance that comes with no surprises, no hidden costs &
                      no out-of-pocket expenses. Give them access to great care with Zoom.</div>
              </div>

              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 w-100 h-auto p-50px">
                  <div className="row h-100">
                      <div className="col-6 mb-50px">
                          <div className="row auto">
                              <div className="col-4 w-100 h-100 d-flex justify-content-center align-items-center">
                                  <div className="w-70px h-70px nnn"   >
                                      <img className="w-100 h-100" src="assets/images/covid.png" alt=""/>
                                  </div>
                              </div>
                              <div className="col-8 w-100 h-100">
                                  <h6>
                                      <b>Covid-19 treatment included</b>
                                  </h6>
                                  <h6>
                                      Covers pandemic including Covid-19 treatments
                                  </h6>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 mb-50px">
                          <div className="row auto">
                              <div className="col-4 w-100 h-100 d-flex justify-content-center align-items-center">
                                  <div className="w-70px h-70px nnn"   >
                                      <img className="w-100 h-100" src="assets/images/no waiting period.png" alt=""/>
                                  </div>
                              </div>
                              <div className="col-8 w-100 h-100">
                                  <h6>
                                      <b>No waiting periods</b>
                                  </h6>
                                  <h6>
                                      Use your health cover from day-1. Cover starts immediately
                                  </h6>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 mb-50px">
                          <div className="row auto">
                              <div className="col-4 w-100 h-100 d-flex justify-content-center align-items-center">
                                  <div className="w-70px h-70px nnn"   >
                                      <img className="w-100 h-100" src="assets/images/no limits.png" alt=""/>
                                  </div>
                              </div>
                              <div className="col-8 w-100 h-100">
                                  <h6>
                                      <b>No room rent or disease wise limit</b>
                                  </h6>
                                  <h6>
                                      Choose any hospital room you prefer without worrying about
                                      restrictions
                                  </h6>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 mb-50px">
                          <div className="row auto">
                              <div className="col-4 w-100 h-100 d-flex justify-content-center align-items-center">
                                  <div className="w-70px h-70px nnn"   >
                                      <img className="w-100 h-100" src="assets/images/new born.png" alt=""/>
                                  </div>
                              </div>
                              <div className="col-8 w-100 h-100">
                                  <h6>
                                      <b>Maternity &amp; newborn covered</b>
                                  </h6>
                                  <h6>
                                      Care for your employees and their newborn
                                  </h6>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 mb-50px">
                          <div className="row auto">
                              <div className="col-4 w-100 h-100 d-flex justify-content-center align-items-center">
                                  <div className="w-70px h-70px nnn"   >
                                      <img className="w-100 h-100" src="assets/images/Pre-existing diseases covered.png" alt=""/>
                                  </div>
                              </div>
                              <div className="col-8 w-100 h-100">
                                  <h6>
                                      <b>Pre-existing diseases covered</b>
                                  </h6>
                                  <h6>
                                      Covers all pre existing conditions from day-1
                                  </h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  {/* best in class End */}
 
   {/* get Start */}
<div className="w-100 h-auto">
      <div className="container w-100 h-200px">
          <div className="row h-100">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 h-100 d-flex justify-content-center align-items-center">
                  <h2><b>Get comprehensive health insurance for your team now.</b></h2>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 h-100 d-flex justify-content-center align-items-center">
                  <a href="talk-to-expert">
                      <button type="button" className="btn btn-primary btn-lg my-30px">Talk to an expert</button>
                  </a>
              </div>
          </div>
      </div>
  </div>
  {/* get end */}


  <footer className="w-100 h-auto mt-10px">
    <div className="w-100 h-auto bg-dark px-100px py-60px">
        <div className="row h-100">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 w-100 h-100">
                <div className="w-100 h-100 ">
                    <div className="footer-heading">BENEFITS</div>
                    <div className="foot ">
                        <ul>
                            <li>Group Health Insurance</li>
                            <li>Group Term Life Insurance</li>
                            <li>Group Personal Accident Insurance</li>
                            <li>Health benefits</li>
                            <li>Telehealth</li>
                            <li>Covid-19</li>
                            <li>Super top-up</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 w-100 h-100">
                <div className="w-100 h-100">
                    <div className="footer-heading">PLATFORM</div>
                    <div className="foot">
                        <ul>
                            <li>Employee Experience</li>
                            <li>Admin Experience</li>
                            <li>
                                <a href="get-quote"> Get Estimate </a>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 w-100 h-100">
                <div className="w-100 h-100">
                    <div className="footer-heading">ABOUT</div>
                    <div className="foot">
                        <ul>
                            <li>Careers</li>
                            <li>Contact Us</li>
                            <li>Reviews</li>
                            <li>Terms</li>
                            <li>
                                <a href="privacy-policy"> Privacy </a>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 w-100 h-100">
                <div className="w-100 h-100">
                    <div className="footer-heading">LEARN</div>
                    <div className="foot">
                        <ul>
                            <li>
                                <a href="blog">Blog</a>
                            </li>
                            <li>FAQs</li>
                            <li>Help Center</li>
                            <li>Zoom Wiki 101</li>
                            <li>Resources</li>
                            <li>Insurance Glossary</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row h-100">
            <div className="footer-logo mt-20px"><img src="assets/images/logo2.1.png" className="w-120px h-100"/></div>
            <p className="footp">Transform your employee <br/> healthcare experience</p>
        </div>
    </div>
    <div className="w-100 h-200px bg-secondary d-flex justify-content-center align-items-center">
        <div className="col-lg-12">
            <p className="text-light text-center font-14"><strong >Zoom Insurance Brokers Private Limited</strong><br/>
                <strong>Registered &amp; Corporate Office:</strong> D-104, Udyog Vihar Phase V, Sector-19, Gurugram, Haryana-122016<br/>
                <strong>CIN : </strong>U66000HR2008PTC065899, <strong>IRDAI Licence No.: </strong>389, <strong>Licence Category: </strong>Composite, <strong>Licence Expiry: </strong>1st January 2024
            </p>
            <p className="text-light text-center font-14">© Copyright zoomconnect.co.in. All Rights Reserved.</p>
        </div>
    </div>
</footer>

</div>

)}

