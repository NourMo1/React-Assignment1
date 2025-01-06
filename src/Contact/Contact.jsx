import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="d-flex justify-content-center align-items-center">
            <div className="container py-5">
                <div className="title mb-4">
                    <h2 className="fw-bold mb-3 text-center text-capitalize">contact component</h2>
                    <div className="title-border d-flex justify-content-center align-items-center mb-3">
                        <span className="line me-2"></span>
                        <i class="fa-solid fa-star"></i>
                        <span className="line ms-2"></span>
                    </div>
                </div>
                <form className="mx-auto py-3">
                    <div class="form-floating mb-3">
                        <input type="name" class="form-control" id="floatingInput" placeholder="Your Name" />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingPassword" placeholder="Your Age" />
                        <label for="floatingPassword">Age</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="my-btn">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact