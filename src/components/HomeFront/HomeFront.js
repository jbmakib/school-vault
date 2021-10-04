import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeFront.css";

const HomeFront = () => {
    return (
        <Container>
            <Row xs={1} md={2} className="align-items-center">
                <Col>
                    <h1 className="homeFront-h1">
                        The Smarter Way to Learn <span className="text-orange">Anything</span>
                    </h1>
                    <p className="h5 border-start border-4 ps-4 border-orange fw-normal">
                        Our mission is to provide a safe, supportive environment
                        in which students will become active, reflective, and
                        creative learners.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeFront;
