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
                    <h2>"About"</h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 col-md-6">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <Row>
                <SkillsModal></SkillsModal>
            </Row>
        </Container>
    )
}

export default About;