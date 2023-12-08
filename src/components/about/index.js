import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SkillsModal from "../SkillsModal";
import { ReactComponent as JavascriptIcon } from "../../assets/icons/JavascriptIcon.svg"
import { ReactComponent as GitIcon } from "../../assets/icons/GitIcon.svg";
import {ReactComponent as NodejsIcon } from "../../assets/icons/NodejsIcon.svg";
import { ReactComponent as HtmlIcon } from "../../assets/icons/HtmlIcon.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/CssIcon.svg";
import { ReactComponent as MongodbIcon } from "../../assets/icons/MongodbIcon.svg";
import { ReactComponent as JqueryIcon } from "../../assets/icons/JqueryIcon.svg";
import { ReactComponent as NpmIcon } from "../../assets/icons/NpmIcon.svg";
import { ReactComponent as MysqlIcon } from "../../assets/icons/MysqlIcon.svg";
import { ReactComponent as AwsIcon } from "../../assets/icons/AwsIcon.svg";
import { ReactComponent as HerokuIcon } from "../../assets/icons/HerokuIcon.svg";
import { ReactComponent as ApiIcon } from "../../assets/icons/ApiIcon.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/ReactIcon.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/icons/BootstrapIcon.svg";

function About() {
    return (
        <Container id="about">
            <Row>
                <Col className="col-12">
                    <h2>About</h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 col-md-6">
                    <p>
                    As a Full Stack Web Developer, I bring together a diverse skill set to create dynamic and engaging digital experiences. I use my proficiency in languages like Javascript, HTML, CSS to craft intuitive front-end interfaces while leverging front-end frameworks like React to create a seamless user experience. On the back-end my expertise in MongoDB, Express, Node.js, and SQL allows me to create robust and scalable serverside solutions. Utilizing Git and Github for version control alongside deploying applications using services like Heroku I ensure efficient collaboration and seamless deployment.
                    </p>
                </Col>
                <Col className="col-12 col-md-6 d-flex flex-wrap justify-content-center">
                    <AwsIcon className="mx-1 my-1"/>
                    <GitIcon className="mx-1 my-1"/>
                    <BootstrapIcon className="mx-1 my-1"/>
                    <JavascriptIcon className="mx-1 my-1"/>
                    <JqueryIcon className="mx-1 my-1"/>
                    <NodejsIcon className="mx-1 my-1"/>
                    <HtmlIcon className="mx-1 my-1"/>
                    <CssIcon className="mx-1 my-1"/>
                    <MongodbIcon className="mx-1 my-1"/>
                    <NpmIcon className="mx-1 my-1"/>
                    <MysqlIcon className="mx-1 my-1"/>
                    <ReactIcon className="mx-1 my-1"/>
                    <HerokuIcon className="mx-1 my-1"/>
                    <ApiIcon className="mx-1 my-1"/>
                </Col>
            </Row>
            <Row className={"justify-content-center my-3"} lg={3}>
                <Col className={"d-flex justify-content-center"}>
                    <SkillsModal></SkillsModal>
                </Col>
            </Row>
        </Container>
    )
}

export default About;