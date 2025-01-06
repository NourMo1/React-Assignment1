import React from 'react'

const About = () => {
    return (
        <section id="about" className="d-flex justify-content-center align-items-center">
            <div className="container py-5">
                <div className="title mb-4">
                    <h2 className="fw-bold mb-3 text-white text-center text-capitalize">about component</h2>
                    <div className="title-border d-flex justify-content-center align-items-center mb-3">
                        <span className="line bg-white me-2"></span>
                        <i class="text-white fa-solid fa-star"></i>
                        <span className="line bg-white ms-2"></span>
                    </div>
                </div>
                <div className="row gy-5 gx-md-3">
                    <div className="col-12 col-md-6 px-5">
                        <p className="mb-0 text-white">
                            Freelancer is a free bootstrap theme created by Route.
                            The download includes the complete source files including HTML, CSS,
                            and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 px-5">
                        <p className="mb-0 text-white">
                            Freelancer is a free bootstrap theme created by Route.
                            The download includes the complete source files including HTML, CSS,
                            and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About