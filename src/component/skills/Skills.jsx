import React from 'react'
import "./Skills.css"


export default function Skills() {
  return (
    <>
          {/* <!-- Skill Start --> */}
    <div className="container-fluid py-5" id="skill">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" id="skills">Skills</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">HTML</h6>
                            <h6 className="font-weight-bold">99%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Bootstrap</h6>
                            <h6 className="font-weight-bold">80%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">JQuery</h6>
                            <h6 className="font-weight-bold">70%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">PHP With MySQL</h6>
                            <h6 className="font-weight-bold">90%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Github</h6>
                            <h6 className="font-weight-bold">95%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">CSS</h6>
                            <h6 className="font-weight-bold">90%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                   
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">JavaScript</h6>
                            <h6 className="font-weight-bold">70%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">React Js</h6>
                            <h6 className="font-weight-bold">69%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Codeigniter</h6>
                            <h6 className="font-weight-bold">85%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Software Testing</h6>
                            <h6 className="font-weight-bold">80%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Skill End --> */}
    </>
  )}