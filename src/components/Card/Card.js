import React from "react";
import { Col, Card as BootstrapCard } from "react-bootstrap";

const Card = ({ service }) => {
    const { img, name, authorName, price } = service;
    return (
        <Col>
            <BootstrapCard className="h-100">
                <BootstrapCard.Img variant="top" src={img} />
                <BootstrapCard.Body>
                    <BootstrapCard.Title className="">{name}</BootstrapCard.Title>
                    <div className="d-flex justify-content-between">
                        <p className="m-0 text-secondary fw-bold">{authorName}</p>
                        <p className="h5 m-0 text-orange">{price}</p>
                    </div>
                </BootstrapCard.Body>
            </BootstrapCard>
        </Col>
    );
};

export default Card;
