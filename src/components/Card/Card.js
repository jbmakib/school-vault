import React from "react";
import { Col, Card as BootstrapCard } from "react-bootstrap";
import "./Card.css";

const Card = ({ service }) => {
    const { img, name, authorName, price, days, time } = service;
    return (
        <Col>
            <BootstrapCard className="h-100 rounded-4 overflow-hidden">
                <BootstrapCard.Img
                    variant="top"
                    src={img}
                    className="border-bottom border-4 border-orange"
                />
                <BootstrapCard.Body>
                    <div className="fw-bold border-bottom pb-3 border-3 card-border">
                        <small>
                            <i className="far fa-calendar text-orange"></i>
                            <span className="text-muted ps-2">{days}</span>
                        </small>
                        <small className="ps-3">
                            <i className="far fa-clock text-orange"></i>
                            <span className="text-muted ps-1">{time}</span>
                        </small>
                    </div>
                    <BootstrapCard.Title className="pt-3 fw-bold">
                        {name}
                    </BootstrapCard.Title>
                    <div className="d-flex justify-content-between">
                        <p className="m-0 text-secondary fw-bold">
                            {authorName}
                        </p>
                        <p className="h5 m-0 text-orange">{price}</p>
                    </div>
                </BootstrapCard.Body>
            </BootstrapCard>
        </Col>
    );
};

export default Card;
