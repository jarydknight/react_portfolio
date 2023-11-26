import { CardBody, CardImg, CardText, CardTitle, Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const projectList = [
    {
        name: "Travel Blog",
        description: "A travel blog project built using Javascript, Node.js, Handlebars, Express.js, MySQL, Sequalize ORM, Amazon S3",
        github: "https://github.com/jarydknight/travel-blog",
        img: require("../../assets/images/travel_blog.jpg"),
        liveDeployment: ""
    },
    {
        name: "Social Network API",
        description: "Social medial API that can complete CRUD operations on a NoSQL database using Mongoose",
        github: "https://github.com/jarydknight/social-network-api",
        img: require("../../assets/images/social_network_api.jpg"),
        liveDeployment: ""
    },
    {
        name: "E-commerce",
        description: "The purpose of this project is to use the ORM Sequalize (NPM package) to complete a back end for an e-commerce application and execute CRUD operations on a database",
        github: "https://github.com/jarydknight/e-commerce",
        img: require("../../assets/images/ecommerce.jpg"),
        liveDeployment: ""
    },
    {
        name: "Weather Dashboard",
        description: "The purpose of this project is create a weather dashboard to showcase my skills working with third party APIs.",
        github: "https://github.com/jarydknight/weather-dashboard",
        img: require("../../assets/images/weather_dashboard.jpg"),
        liveDeployment: "https://jarydknight.github.io/weather-dashboard/"
    },
    {
        name: "Note Taker",
        description: "The purpose of the project is to use Express to build a server for a note taker so that notes from a client can be stored in the back-end then later retireved and served back to the client",
        github: "https://github.com/jarydknight/note-taker",
        img: require("../../assets/images/note_taker.jpg"),
        liveDeployment: "https://note-taker-no-jutsu.herokuapp.com"
    },
    {
        name: "Employee Tracker",
        description: "The purpose of this project is to build an SQL database to manage employees and a command line interface for users to easily interact with and complete CRUD operations on the database",
        github: "https://github.com/jarydknight/employee-tracker",
        img: require("../../assets/images/employee_tracker.jpg"),
        liveDeployment: ""
    },
    {
        name:"Code Quiz",
        description: "The purpose of this project is create a Javascript code quiz game to demonstrate my Javascript Skills and Web API skills.",
        github: "https://github.com/jarydknight/code-quiz",
        img: require("../../assets/images/code_quiz.jpg"),
        liveDeployment: "https://jarydknight.github.io/code-quiz/"
    }
];

const Projects = () => {
    return (
        <Container id="projects" className="mb-5">
            <Row className="mb-3">
                <Col>
                    <h2>"Projects"</h2>
                </Col>
            </Row>
    
            <Row xs={1} md={2} className="g-4">
                {projectList.map(function(project, index) {
                return (
                    <Col key={index}>
                        <Card border="secondary">
                            <CardImg variant="top" src={project.img} alt="project display image"/>
                            <CardBody>
                                <CardTitle>{project.name}</CardTitle>
                                <CardText>{project.description}</CardText>
                                <Button href={project.github} target="blank" variant="dark" className="me-3">GitHub Repository</Button>
                                {project.liveDeployment ? <Button href={project.liveDeployment} target="blank" variant="dark">Live Deployment</Button> : <></>}
                            </CardBody>
                        </Card>
                    </Col>
                )
                })}
            </Row>
        </Container>
    )
}

export default Projects;