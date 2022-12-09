import React from 'react'


export default function Navbar() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className="container">
            <a className="navbar-brand" href="">
                <img src="assets/images/logo.png" alt=""/>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto w-100 pb-10px justify-content-end">
                    <li className="nav-item dropdown">
                        <a href="#" className="text-decoration-none text-dark nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Platform</a>
                        <ul className="dropdown-menu bg-primary bg-gradient" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item">
                                <a href="employee-login" className="text-decoration-none text-dark">
                                    <div className="row">
                                        <div className="col-4 d-flex justify-content-center align-items-center">
                                            <div className="w-50px h-50px rounded overflow-hidden">
                                                <img src="assets/images/employee login.png" className="w-100 h-100"/>
                                            </div>
                                        </div>
                                        <div className="col-8 d-flex justify-content-center align-items-center">
                                            Employee Login
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li className="dropdown-item">
                                <a href="company-login" className="text-decoration-none text-dark">
                                    <div className="row">
                                        <div className="col-4 d-flex justify-content-center align-items-center">
                                            <div className="w-50px h-50px rounded overflow-hidden">
                                                <img src="assets/images/corporate login.png" className="w-100 h-100"/>
                                            </div>
                                        </div>
                                        <div className="col-8 d-flex justify-content-center align-items-center">
                                            Corporate Login
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#" className="text-decoration-none text-dark nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Benefits</a>
                        <ul className="dropdown-menu bg-primary bg-gradient" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center align-items-center">
                                        <div className="w-50px h-50px rounded overflow-hidden">
                                            <img src="assets/images/insurance.png" className="w-100 h-100"/>
                                        </div>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        Insurance
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center align-items-center">
                                        <div className="w-50px h-50px rounded overflow-hidden">
                                            <img src="assets/images/health.png" className="w-100 h-100"/>
                                        </div>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        Health Benefits
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center align-items-center">
                                        <div className="w-50px h-50px rounded overflow-hidden">
                                            <img src="assets/images/tele health.png" className="w-100 h-100"/>
                                        </div>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        Telehealth
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center align-items-center">
                                        <div className="w-50px h-50px rounded overflow-hidden">
                                            <img src="assets/images/Pre-existing diseases covered.png" className="w-100 h-100"/>
                                        </div>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        Wellness
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center align-items-center">
                                        <div className="w-50px h-50px rounded overflow-hidden">
                                            <img src="assets/images/covid.png" className="w-100 h-100"/>
                                        </div>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        Covid-19
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center align-items-center">
                                        <div className="w-90px h-50px rounded overflow-hidden">
                                            <img src="assets/images/top up.png" className="w-100 h-100 pr-10px"/>
                                        </div>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        Super Top-up
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#" className="text-decoration-none text-dark nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Learn More</a>
                        <ul className="dropdown-menu bg-primary bg-gradient" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item">
                                <div className="row">
                                    <div className="col-4 d-flex justify-content-center align-items-center">
                                        <div className="w-50px h-50px rounded overflow-hidden">
                                            <img src="assets/images/faqs.svg" className="w-100 h-100"/>
                                        </div>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        FAQ's
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <a href="blog" target="_blank" className="text-decoration-none text-dark">
                                    <div className="row">
                                        <div className="col-4 d-flex justify-content-center align-items-center">
                                            <div className="w-50px h-50px rounded overflow-hidden">
                                                <img src="assets/images/blog.png" className="w-100 h-100"/>
                                            </div>
                                        </div>
                                        <div className="col-8 d-flex justify-content-center align-items-center">
                                            Blog
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                            <a href="get-quote">
                                <button type="button" className="btn btn-outline-primary btn-lg">Get
                                    quote</button></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
 </div>
  
)}
