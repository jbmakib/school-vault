import React from "react";
import { Col, Row } from "react-bootstrap";
import "./HomeFront.css";
import homeBanner from "../../images/home-banner.jpg";

// we created this component as home front bcz when the user get into the website he/she will see the front side
const HomeFront = () => {
    return (
        <Row xs={1} md={2} className="align-items-center my-4">
            <Col>
                <h1 className="homeFront-h1">
                    The Smarter Way to Learn
                    <span className="text-orange"> Anything</span>
                </h1>
                <p className="h5 border-start border-4 ps-4 border-orange fw-normal">
                    Our mission is to provide a safe, supportive environment in
                    which students will become active, reflective, and creative
                    learners.
                </p>
            </Col>
            <Col>
                <div className="banner-image-container">
                    <img src={homeBanner} alt="Home banner" />
                </div>
            </Col>
        </Row>
    );
};

export default HomeFront;
