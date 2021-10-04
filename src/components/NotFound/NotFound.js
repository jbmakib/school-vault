import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container className="h-100">
            <Row
                xs={12}
                className="h-100 justify-content-center align-items-center"
            >
                <div>
                    <h3>Oops! Page Not Found.</h3>
                    <h1>404</h1>
                    <p>We can't find the page you're looking for.</p>
                    <Link to="/">Back To Site</Link>
                </div>
            </Row>
        </Container>
    );
};

export default NotFound;
