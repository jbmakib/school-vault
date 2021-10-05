import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Instructors.css";
import instructor1 from "../../images/instructors/author-1.png";
import instructor2 from "../../images/instructors/author-2.png";
import instructor3 from "../../images/instructors/author-3.png";
import instructor4 from "../../images/instructors/author-4.png";
import instructor5 from "../../images/instructors/author-5.png";
import instructor6 from "../../images/instructors/author-6.png";
import instructor7 from "../../images/instructors/author-7.png";
import instructor8 from "../../images/instructors/author-8.png";
import instructor9 from "../../images/instructors/author-9.png";

const Instructors = () => {
    return (
        <div className="bg-light-orange p-5 rounded-4 my-5">
            <h3 className="bg-white mx-5 p-2 text-center">Our Instructors</h3>
            <Row xs={1} md={3} className="g-4 mt-3">
                <Col className="text-center">
                    <img src={instructor1} alt="" className="instructor-img" />
                    <h4>Enamul Haque</h4>
                </Col>
                <Col className="text-center">
                    <img src={instructor2} alt="" className="instructor-img" />
                    <h4>Mr. Drew</h4>
                </Col>
                <Col className="text-center">
                    <img src={instructor3} alt="" className="instructor-img" />
                    <h4>Polin Kaker</h4>
                </Col>
                <Col className="text-center">
                    <img src={instructor4} alt="" className="instructor-img" />
                    <h4>Anthony Marker</h4>
                </Col>
                <Col className="text-center">
                    <img src={instructor5} alt="" className="instructor-img" />
                    <h4>Peter Parker</h4>
                </Col>
                <Col className="text-center">
                    <img src={instructor6} alt="" className="instructor-img" />
                    <h4>P. Pong</h4>
                </Col>
                <Col className="text-center">
                    <img src={instructor7} alt="" className="instructor-img" />
                    <h4>Joe Piting</h4>
                </Col>
                <Col className="text-center">
                    <img src={instructor8} alt="" className="instructor-img" />
                    <h4>Pekon Sam</h4>
                </Col>
                <Col className="text-center">
                    <img src={instructor9} alt="" className="instructor-img" />
                    <h4>Sanuj Same</h4>
                </Col>
            </Row>
        </div>
    );
};

export default Instructors;
