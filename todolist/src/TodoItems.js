import React, {Component} from "react";
import FlipMove from "react-flip-move";


class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        // Define onClick function properly! The code in the book will give you 
        // a type error because curly braces around the function body are missing.
        return (<li onClick={() => {this.delete(item.key)}} key={item.key}> {item.text} </li>);
    }

    render() {
        const tEntries = this.props.entries;
        console.log(tEntries);
        const lItems = tEntries.map(this.createTasks);
        console.log(lItems);
        return (
            <ul className="theList">
                {/* FlipMove: extra animation package. Addded with yarn. */}
                <FlipMove duration={500} easing="ease-out">
                {lItems}
                </FlipMove>
            </ul>
        );
    }
}
export default TodoItems;