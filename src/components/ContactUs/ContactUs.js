import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// contact us page in /contact route
const ContactUs = () => {
    return (
        <Container className="pb-5">
            <h1 className="fw-bold text-center mt-3 mb-5">
                Contact
                <span className="text-orange"> Us</span>
            </h1>
            <Row xs={1} lg={2} className="g-4">
                <Col>
                    <h5 className="fw-bold">Get in touch</h5>
                    <p>
                        Have a question? Concern? Request? We’d love to hear
                        from you. Connect with us through the following ways.
                    </p>
                    <Row className="align-items-center justify-content-start py-3">
                        <Col
                            xs={2}
                            md={1}
                            className="d-flex justify-content-center"
                        >
                            <i className="fas fa-headset h3"></i>
                        </Col>
                        <Col xs={10} md={11}>
                            <h6 className="fw-bolder m-0 my-1">Support 24/7</h6>
                            <a
                                href="tel:+8801322810867"
                                className="text-decoration-none my-1"
                            >
                                <span className="text-orange">01322810867</span>
                            </a>
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-start py-3">
                        <Col
                            xs={2}
                            md={1}
                            className="d-flex justify-content-center"
                        >
                            <i className="fas fa-map-marker-alt h3"></i>
                        </Col>
                        <Col xs={10} md={11}>
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
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-start py-3">
                        <Col
                            xs={2}
                            md={1}
                            className="d-flex justify-content-center"
                        >
                            <i className="fas fa-envelope h3"></i>
                        </Col>
                        <Col xs={10} md={11}>
                            <h6 className="fw-bolder m-0 my-1">Email</h6>
                            <a
                                href="mailto:web@programming-hero.com"
                                className="text-decoration-none my-1"
                            >
                                <span className="text-orange">
                                web@programming-hero.com
                                </span>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h5 className="fw-bold">Message Me</h5>
                    <form>
                        <Row xs={1} md={2} className="my-2">
                            <Col className="form-floating">
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
                            </Col>
                            <Col className="form-floating">
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
                            </Col>
                        </Row>
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
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
