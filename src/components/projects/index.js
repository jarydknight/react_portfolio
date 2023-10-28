import { CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const projectList = [
    {
        name: "Travel Blog",
        description: "",
        link: "",
        img: ""
    },
    {
        name: "Social Network API",
        description: "",
        link: "",
        img: ""
    },
    {
        name: "E-commerce",
        description: "",
        link: "",
        img: ""
    },
    {
        name: "Weather Dashboard",
        description: "",
        link: "",
        img: ""
    },
    {
        name: "Note Taker",
        description: "",
        link: "",
        img: ""
    },
    {
        name: "Employee Tracker",
        description: "",
        link: "",
        img: ""
    }
];

const Projects = () => {
    return (
        <Row xs={1} md={2} className="g-4">
            {projectList.map(function(project, index) {
            return (
                <Col key={index}>
                    <Card>
                        <CardImg variant="top" src={project.img}/>
                        <CardBody>
                            <CardTitle>{project.name}</CardTitle>
                            <CardText>{project.description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            )
            })}
        </Row>
    )
}

export default Projects;