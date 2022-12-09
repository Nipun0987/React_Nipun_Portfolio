import React from 'react'

export default function talk_to_expert() {
  return (
    <div>
      <div className="w-100 h-auto bg-light">
    <div className="container h-auto py-100px ">
        <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 w-auto h-auto justify-content-center align-content-center">

                <form className="row g-3">
                    <h1 className="tellone">Tell us about your Company</h1>
                    <div className="col-12">
                        <label for="inputName" className="form-label">Name</label>
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
                        <label for="inputSize" className="form-label">Number of employees</label>
                        <input type="number" className="form-control" id="inputName" placeholder="12" required/>
                    </div>
                    <div className="col-12">
                        <label for="inputSize" className="form-label">Phone number</label>
                        <input type="number" className="form-control" id="inputName" placeholder="9876543210" required/>
                    </div>
                    <div className="col-md-12">
                        <label for="inputState" className="form-label">What can Plum help you with today?</label>
                        <select id="inputState" className="form-select">
                            <option selected>Buying insurance for the first time</option>
                            <option>Existing policy is expiring</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-xxl-7 col-xl-7  w-100 h-auto">
                <img src="assets/images/talk.png" className="talkimg w-650px h-600px"/>

            </div>

        </div>

    </div>
</div>
    </div>
  )}