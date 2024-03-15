import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Intro() {
    return (
        <Container id="home" className="intro">
            <Row className="mt-5 text-center">
                <h1>Jaryd Knight</h1>
                <h2>Full Stack WebDev</h2>
            </Row>
            <Row>
                <Col className="mx-5 px-5 my-3">
                    <Image src={require("../../assets/ProfilePic/IMG_7059.JPEG")} fluid roundedCircle width={"200px"} height={"200x"} alt="profile pic"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;