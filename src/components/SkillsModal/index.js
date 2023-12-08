import React, { useState } from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";

function SkillsModal () {
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false)}
    const handleShow = () => {setShow(true)};

    const skillList = [
        {skill: "Javascript"},
        {skill: "HTML"},
        {skill: "CSS"},
        {skill: "MongoDB"},
        {skill: "Express"},
        {skill: "React"},
        {skill: "Node.JS"},
        {skill: "Bootstrap"},
        {skill: "Webpack"},
        {skill: "MySQL"},
        {skill: "Third Party APIs"},
        {skill: "Handlebars"},
        {skill: "Command Line"},
        {skill: "Git"}
    ];

    return (
        <>
            <Button variant="dark" size="lg" onClick={handleShow}>Show More Skills</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Skills</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{maxHeight:'40vh', overflowY:'auto'}}>
                    <ListGroup>
                        {skillList.map(function(skill, index) {
                            return(
                                <ListGroup.Item id={index}>{skill.skill}</ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SkillsModal;