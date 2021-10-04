import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../Card/Card";

// in /services path we can see this component
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.JSON")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <Container className="mb-4">
            <h2 className="text-orange text-center">Services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {services.map((service) => (
                    <Card key={service.id} service={service}></Card>
                ))}
            </Row>
        </Container>
    );
};

export default Services;
