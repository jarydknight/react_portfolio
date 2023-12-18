import About from "../about";
import Projects from "../projects"

//Uses props to receive state about which category is clicked from the nav compponent in app.js
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