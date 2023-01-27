import React from 'react'
import "./Qualification.css"

export default function Qualification() {
  return (
    <>
    {/* <!-- Qualification Start --> */}
    <div className="container-fluid py-5" id="qualification">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" id="education" >Education</h1>
                <h1 className="position-absolute text-uppercase text-primary">Education</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h3 className="mb-4">My Education</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" id="ten"></i>
                            <h5 className="font-weight-bold mb-1">10th Standard</h5>
                            <p className="mb-2"><strong>NIOS</strong> | <small>
                                    2018</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
                                dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem
                                diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" id="twelve"></i>
                            <h5 className="font-weight-bold mb-1">11th-12th Standard</h5>
                            <p className="mb-2"><strong>NIOS</strong> | <small>2019 - 2021</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
                                dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem
                                diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6"><br/><br/>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">

                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" id="diploma" ></i>
                            <h5 className="font-weight-bold mb-1">Full Stack Developer</h5>
                            <p className="mb-2"><strong>Delhi School Of Skill Development(DSSD)</strong></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
                                dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem
                                diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" id="bcom"></i>
                            <h5 className="font-weight-bold mb-1">B.Com</h5>
                            <p className="mb-2"><strong>DU Sol</strong> | <small>Studing</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
                                dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem
                                diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Qualification End --> */}
    
    </>
  )}