import React from 'react'

const Footer = () => {
    return (
    <footer className="text-white">
        <div className="container">
            <div className="row py-5 text-center">
                <div className="col-12 col-md-4 mb-5 mb-md-0 location">
                    <h3 className="text-capitalize fw-bold mb-3">location</h3>
                    <p className="mb-0">2215 John Daniel Drive</p>
                    <p className="mb-0">Clark, MO 65243</p>
                </div>
                <div className="col-12 col-md-4 mb-5 mb-md-0 links">
                    <h3 className="text-capitalize fw-bold mb-3">around the web</h3>
                    <div className="icons d-flex justify-content-center align-items-center">
                        <a className="circle me-2" href=""><i class="fa-brands fa-facebook-f"></i></a>
                        <a className="circle me-2" href=""><i class="fa-brands fa-x-twitter"></i></a>
                        <a className="circle me-2" href=""><i class="fa-brands fa-linkedin-in"></i></a>
                        <a className="circle" href=""><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="col-12 col-md-4 freelance">
                    <h3 className="text-capitalize fw-bold mb-3">about freelancer</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        <div className="copy-right py-3 text-center">
            <p className="mb-0">Copyright © Your Website 2025</p>
        </div>
    </footer>
    )
}

export default Footer