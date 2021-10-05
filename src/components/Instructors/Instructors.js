import React from "react";
import { Col, Row } from "react-bootstrap";
import instructor1 from "../../images/instructors/author-1.png";

const Instructors = () => {
    return (
        <div className="bg-light-orange p-5 rounded-4 my-5">
            <h3 className="bg-white mx-5 p-2 text-center">Our Instructors</h3>
            <Row xs={2} md={3} className="g-4">
                <Col>
                    <img src={instructor1} alt="" className="img-fluid" />
                </Col>
            </Row>
        </div>
    );
};

export default Instructors;
