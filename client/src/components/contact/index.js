import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        
    }

    return (
        <Container>
            <Row className="d-block">
                <Col className="text-center mb-4">
                    <h1>Let's Work Together</h1>
                </Col>
                <Col className="justify-content-center">
                    <Form className="bg-body-tertiary p-4" noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Group controlId="conftactFormName" className="my-2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Name" required />
                            <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" name="company" placeholder="Company" />
                        </Form.Group>
                        <Form.Group controlId="contactFormEmail" className="my-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Email" required/>
                            <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="contactFormMessage" className="my-2">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" name="message" rows={3} max-rows={6} placeholder="Message" required/>
                            <Form.Control.Feedback type="invalid">Please enter a message</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="dark" type="submit" className="my-3" formAction="https://formsubmit.co/jarydknightdev@gmail.com" formMethod="POST">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default Contact;