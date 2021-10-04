import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// this is about component which is set into /about route
const About = () => {
    return (
        <Container>
            <Row xs={1} md={2} className="align-items-center my-4">
                <Col>
                    <div>
                        <img
                            src="https://shelly.merku.love/wp-content/uploads/2020/11/abt2.png"
                            alt="About banner"
                            className="img-fluid"
                        />
                    </div>
                </Col>
                <Col>
                    <h3 className="homeFront-h1">
                        Our
                        <span className="text-orange"> Mission</span>
                    </h3>
                    <p className="h5 border-start border-4 ps-4 border-orange fw-normal">
                        where you hope to see it in the future. The mission
                        provides an overview of the steps planned to achieve
                        that future. A vision is concise and easy to recall,
                        whereas a mission is lengthier and more explanatory in
                        nature.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
