import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Card from "../Card/Card";

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.JSON")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    const slicedServices = services.slice(0, 4);

    return (
        <div className="my-4">
            <h2 className="text-orange text-center">Services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {slicedServices.map((service) => (
                    <Card key={service.id} service={service}></Card>
                ))}
            </Row>
        </div>
    );
};

export default HomeServices;
