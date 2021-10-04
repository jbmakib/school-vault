import React from "react";
import { Container } from "react-bootstrap";
import HomeFront from "../HomeFront/HomeFront";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
    return (
        <Container>
            <HomeFront></HomeFront>
            <HomeServices></HomeServices>
        </Container>
    );
};

export default Home;
