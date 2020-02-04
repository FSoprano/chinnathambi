import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {

    render() {
        return(
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        {/* 'exact': See comment on Route exact below. Here, the props prevents 
                        that the 'Home' link is always highlighted by the .active CSS rule. */}
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        {/* 'exact' fixes the routing error. Explanation:
                        Before, the home text was always displayed because its routing path 
                        is /, the same as the entry point of the app. / is also contained in 
                        the /stuff and /contact routes, so the home text never goes away. */}
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;