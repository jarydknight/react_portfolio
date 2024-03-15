import { Col, Row, Container } from "react-bootstrap";
import { ReactComponent as GithubIcon } from "../../assets/icons/9034977_logo_github_icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/4550857_email_gmail_mail_sending_yahoo_icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/icons8-linkedin-500.svg";

const Footer = () => {
    return(
        <Container id="contact">
            <Row >
                <Col className="col-12 d-flex justify-content-center mt-5">
                    <a href="https://github.com/jarydknight" target="_blank" rel="noreferrer">
                        <GithubIcon />
                    </a>
                    <a href="mailto:jarydknightdev@gmail.com">
                        <EmailIcon />
                    </a>
                    <a href="https://linkedin.com/in/jaryd-k" target="_blank" rel="noreferrer">
                        <LinkedinIcon />
                    </a>
                </Col>
                <Col className="col-12 d-flex justify-content-center mb-3">
                    <p>2024 © Jaryd Knight ❤️‍🔥</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;