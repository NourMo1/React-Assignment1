import React from 'react'

const Home = () => {
    return (
        <section id="home" className="d-flex justify-content-center align-items-center">
            <div className="container py-5">
                <div className="image text-center mb-5 mx-auto">
                    <img className="img-width" src="./../src/assets/avataaars.svg" alt="Home Image" />
                </div>
                <div className="title mb-4">
                    <h2 className="fw-bold mb-3 text-center text-white text-capitalize">start framework</h2>
                    <div className="title-border d-flex justify-content-center align-items-center mb-3">
                        <span className="line bg-white me-2"></span>
                        <i class="text-white fa-solid fa-star"></i>
                        <span className="line bg-white ms-2"></span>
                    </div>
                </div>
                <p className="text-center text-white">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </section>
    )
}

export default Home