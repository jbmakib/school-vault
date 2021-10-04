import React from "react";
import { Container } from "react-bootstrap";

const ContactUs = () => {
    return (
        <Container className="pb-5">
            <h1 className="fw-bold text-center mt-3 mb-5">
                Contact
                <span className="text-orange"> Us</span>
            </h1>
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                <div className="col">
                    <h5 className="fw-bold">Get in touch</h5>
                    <p>
                        Have a question? Concern? Request? We’d love to hear
                        from you. Connect with us through the following ways.
                    </p>
                    <div className="row align-items-center justify-content-start py-3">
                        <div className="col-2 col-md-1 d-flex justify-content-center">
                            <i className="fas fa-headset h3"></i>
                        </div>
                        <div className="col-10 col-md-11">
                            <h6 className="fw-bolder m-0 my-1">Support 24/7</h6>
                            <a
                                href="tel:+8801322810867"
                                className="text-decoration-none my-1"
                            >
                                <span className="text-orange">01322810867</span>
                            </a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-start py-3">
                        <div className="col-2 col-md-1 d-flex justify-content-center">
                            <i className="fas fa-map-marker-alt h3"></i>
                        </div>
                        <div className="col-10 col-md-11">
                            <h6 className="fw-bolder m-0 my-1">Location</h6>
                            <a
                                href="https://goo.gl/maps/wj4uBTA79oUoSnHR8"
                                target="_blank"
                                className="text-decoration-none my-1"
                                rel="noreferrer"
                            >
                                <span className="text-orange">
                                    CTG, Bangladesh
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-start py-3">
                        <div className="col-2 col-md-1 d-flex justify-content-center">
                            <i className="fas fa-envelope h3"></i>
                        </div>
                        <div className="col-10 col-md-11">
                            <h6 className="fw-bolder m-0 my-1">Email</h6>
                            <a
                                href="mailto:web@programming-hero.com"
                                className="text-decoration-none my-1"
                            >
                                <span className="text-orange">
                                    web@programming-hero.com
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h5 className="fw-bold">Message Me</h5>
                    <form action="#">
                        <div className="row row-cols-1 row-cols-md-2 my-3">
                            <div className="col form-floating">
                                <input
                                    type="text"
                                    className="form-control mb-3 mb-md-0"
                                    id="floatingName"
                                    placeholder="Full Name"
                                    required
                                />
                                <label htmlFor="floatingName" className="ps-4">
                                    Full Name
                                </label>
                            </div>
                            <div className="col form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingEmail"
                                    placeholder="name@example.com"
                                    required
                                />
                                <label htmlFor="floatingEmail" className="ps-4">
                                    Email
                                </label>
                            </div>
                        </div>
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingSub"
                                placeholder="Subject"
                                required
                            />
                            <label htmlFor="floatingSub">Subject</label>
                        </div>
                        <div className="form-floating my-3">
                            <textarea
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                style={{ height: "140px" }}
                                required
                            ></textarea>
                            <label htmlFor="floatingTextarea2">
                                Message...
                            </label>
                        </div>
                        <button
                            className="btn btn-orange py-2 px-4"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default ContactUs;
