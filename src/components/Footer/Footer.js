import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterExtLink from "../FooterExtLink/FooterExtLink";

// this is footer which is fixed in all path
const Footer = () => {
    return (
        <div className="py-5 bg-secondary text-white">
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <h4>School Vault</h4>
                        <br />
                        <small>
                            Works for building your children properly. With
                            proper education and manners.
                        </small>
                    </Col>
                    <Col>
                        <Row xs={1} lg={2} className="g-4">
                            <Col>
                                <h6 className="fw-bold">Navigation</h6>
                                <br />
                                <Link
                                    to="/home"
                                    className="d-block text-decoration-none text-white"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="d-block text-decoration-none text-white"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/services"
                                    className="d-block text-decoration-none text-white"
                                >
                                    Services
                                </Link>
                            </Col>
                            <Col>
                                <h6 className="fw-bold">Quick Links</h6>
                                <br />
                                <FooterExtLink link="http://www.nctb.gov.bd/">
                                    NCTB
                                </FooterExtLink>
                                <FooterExtLink link="http://www.bangladesh.gov.bd/">
                                    Bangladesh Portal
                                </FooterExtLink>
                                <FooterExtLink link="http://www.moedu.gov.bd/index.php?option=com_content&task=view&id=338&Itemid=416">
                                    National Edu
                                </FooterExtLink>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <p>Discover Our App</p>
                        <a
                            href="https://play.google.com/"
                            target="_blank"
                            className="btn btn-dark me-1"
                            rel="noreferrer"
                        >
                            Google Play
                        </a>
                        <a
                            href="https://play.google.com/"
                            target="_blank"
                            className="btn btn-dark ms-1"
                            rel="noreferrer"
                        >
                            App Store
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
