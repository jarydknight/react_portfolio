import About from "../about";
import Projects from "../projects"

function Homepage(props) {
    switch (props.category) {
        case "Projects":
            return (<Projects></Projects>);
        case "About":
            return (<About></About>);
        default:
            return (<></>);
    }
}

export default Homepage;