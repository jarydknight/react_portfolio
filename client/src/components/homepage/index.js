import About from "../about";
import Projects from "../projects"
import Intro from "../intro"

//Uses props to receive state about which category is clicked from the nav compponent in app.js
function Homepage(props) {
    switch (props.category) {
        case "Projects":
            return (<Projects></Projects>);
        case "About":
            return (<About></About>);
        default:
            return (<Intro></Intro>);
    }
}

export default Homepage;