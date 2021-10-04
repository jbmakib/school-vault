import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

// this compoenent will be shown when no page exists
const NotFound = () => {
    return (
        <Container className="vh-50 text-center">
            <Row
                xs={12}
                className="h-100 justify-content-center align-items-center"
            >
                <div>
                    <h3>Oops! Page Not Found.</h3>
                    <h1>404</h1>
                    <p>We can't find the page you're looking for.</p>
                    <Link to="/">&#8592; Back To Site</Link>
                </div>
            </Row>
        </Container>
    );
};

export default NotFound;
