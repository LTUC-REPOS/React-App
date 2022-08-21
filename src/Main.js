import react from "react";
import HornedBeast from "./HornedBeast";
class Main extends react.Component {
    render() {
        return (
            <div>
                <HornedBeast />
                <HornedBeast />
                <HornedBeast />
                <HornedBeast />
                <HornedBeast />
            </div>
        )
    }

}

export default Main;