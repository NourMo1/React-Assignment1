import React from 'react'
import image1 from './../assets/poert1.png'
import image2 from './../assets/port2.png'
import image3 from './../assets/port3.png'

const Portfolio = () => {
    return (
        <section id="portfolio" className="d-flex justify-content-center align-items-center py-5">
            <div className="container py-5">
                <div className="title mb-4">
                    <h2 className="fw-bold mb-3 text-center text-capitalize">portfolio component</h2>
                    <div className="title-border d-flex justify-content-center align-items-center mb-3">
                        <span className="line me-2"></span>
                        <i class="fa-solid fa-star"></i>
                        <span className="line ms-2"></span>
                    </div>
                </div>
                <div className="row gy-3 g-md-3 g-lg-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="hover-div position-relative rounded-3 overflow-hidden">
                            <img src={image1} alt="App" />
                            <div className="overlay">
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="hover-div position-relative rounded-3 overflow-hidden">
                            <img src={image2} alt="App" />
                            <div className="overlay">
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="hover-div position-relative rounded-3 overflow-hidden">
                            <img src={image3} alt="App" />
                            <div className="overlay">
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="hover-div position-relative rounded-3 overflow-hidden">
                            <img src={image1} alt="App" />
                            <div className="overlay">
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="hover-div position-relative rounded-3 overflow-hidden">
                            <img src={image2} alt="App" />
                            <div className="overlay">
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="hover-div position-relative rounded-3 overflow-hidden">
                            <img src={image3} alt="App" />
                            <div className="overlay">
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio