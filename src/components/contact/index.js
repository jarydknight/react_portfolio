import { Col, Row, Container } from "react-bootstrap";
import { ReactComponent as GithubIcon } from "../../assets/icons/9034977_logo_github_icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/4550857_email_gmail_mail_sending_yahoo_icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/icons8-linkedin-500.svg";

const Contact = () => {
    return(
        <Container>
            <Row >
                <Col className="d-flex justify-content-center my-5">
                    <a href="https://github.com/jarydknight" target="_blank" rel="noreferrer">
                        <GithubIcon />
                    </a>
                    <a href="#home">
                        <EmailIcon />
                    </a>
                    <a href="https://linkedin.com/in/jaryd-k" target="_blank" rel="noreferrer">
                        <LinkedinIcon />
                    </a>
                </Col>

            </Row>
        </Container>
    )
}

export default Contact;