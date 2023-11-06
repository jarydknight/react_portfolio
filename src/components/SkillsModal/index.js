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
        {Skill: "Node.JS"}
    ];

    return (
        <>
            <Button variant="dark" onClick={handleShow}>Show More Skills</Button>

            <Modal show={show} scrollable="true" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Skills</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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