import React, {PureComponent} from "react";
import "./MenuButton.css";

class MenuButton extends PureComponent {
    
    /* Prevents that the following render method gets called each time the MenuContainer is up 
    dated in some way (if a parent component's render method gets called, normally all child 
    render methods get called as well).
    shouldComponentUpdate (nextProps, nextState) {
        return false;
    }
    
    However, can we be sure that the value of handleMouseDown never changes, and that therefore we 
    can always return 'false'? To avoid that we accidentally suppress the calling of this component's
    render method, we can modify the code a little bit:

    shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.handleMouseDown === this.props.handleMouseDown) {
            return false;
        } else {
            return true;
        }
    }

    However, there is simpler, more elegant approach: use PureComponent. This is what is currently 
    implemented here.
    So why not always use PureComponent then?
    - PureComponent effects only a shallow comparison between the virtual DOM and the real DOM. Most of the
    time, this is OK, but it might as well not be.
    - The use of PureComponent (check if props or states have changed) affects the performance because 
    the check might be run many times.
    */ 
   
    render() {
        console.log("Rendering: MenuButton");
        return (
            <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}
export default MenuButton;