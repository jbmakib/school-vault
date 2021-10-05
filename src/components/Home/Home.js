import React from "react";
import { Container } from "react-bootstrap";
import HomeFront from "../HomeFront/HomeFront";
import HomeServices from "../HomeServices/HomeServices";
import Instructors from "../Instructors/Instructors";

// this is the home component for /home path.
const Home = () => {
    return (
        <Container>
            <HomeFront></HomeFront>
            <HomeServices></HomeServices>
            <Instructors></Instructors>
        </Container>
    );
};

export default Home;
