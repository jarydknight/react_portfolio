import { CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const projectList = [
    {
        name: "Travel Blog",
        description: "A travel blog project built using Javascript, Node.js, Handlebars, Express.js, MySQL, Sequalize ORM, Amazon S3",
        link: "https://github.com/jarydknight/travel-blog",
        img: require("../../assets/placeholders/Placeholder.png")
    },
    {
        name: "Social Network API",
        description: "Social medial API that can complete CRUD operations on a NoSQL database using Mongoose",
        link: "https://github.com/jarydknight/social-network-api",
        img: require("../../assets/placeholders/Placeholder.png")
    },
    {
        name: "E-commerce",
        description: "The purpose of this project is to use the ORM Sequalize (NPM package) to complete a back end for an e-commerce application and execute CRUD operations on a database",
        link: "https://github.com/jarydknight/e-commerce",
        img: require("../../assets/placeholders/Placeholder.png")
    },
    {
        name: "Weather Dashboard",
        description: "The purpose of this project is create a weather dashboard to showcase my skills working with third party APIs.",
        link: "https://github.com/jarydknight/weather-dashboard",
        img: require("../../assets/placeholders/Placeholder.png")
    },
    {
        name: "Note Taker",
        description: "The purpose of the project is to use Express to build a server for a note taker so that notes from a client can be stored in the back-end then later retireved and served back to the client",
        link: "https://github.com/jarydknight/note-taker",
        img: require("../../assets/placeholders/Placeholder.png")
    },
    {
        name: "Employee Tracker",
        description: "The purpose of this project is to build an SQL database to manage employees and a command line interface for users to easily interact with and complete CRUD operations on the database",
        link: "https://github.com/jarydknight/employee-tracker",
        img: require("../../assets/placeholders/Placeholder.png")
    }
];

const Projects = () => {
    return (
        <div>
            <h2>"Projects"</h2>
            <Row xs={1} md={2} className="g-4">
                {projectList.map(function(project, index) {
                return (
                    <Col key={index}>
                        <Card>
                            <CardImg variant="top" src={project.img} alt="project display image"/>
                            <CardBody>
                                <CardTitle>{project.name}</CardTitle>
                                <CardText>{project.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )
                })}
            </Row>
        </div>
    )
}

export default Projects;