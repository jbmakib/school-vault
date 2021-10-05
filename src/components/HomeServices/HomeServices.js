import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";

// we have to show only 4 services in home. so we sliced it and showed it into Ui
const HomeServices = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch("./services.JSON")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    const slicedServices = services.slice(0, 4);

    const goToServices = () => {
        history.push("/services");
    };

    return (
        <div className="my-4">
            <h2 className="text-orange text-center">Services</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {slicedServices.map((service) => (
                    <Card key={service.id} service={service}></Card>
                ))}
            </Row>
            <div className="text-center">
                <button className="btn btn-orange mt-3" onClick={goToServices}>
                    All services &#8594;
                </button>
            </div>
        </div>
    );
};

export default HomeServices;
