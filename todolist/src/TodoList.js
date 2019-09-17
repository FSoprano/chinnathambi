import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        
        if (this._inputElement.value !== "") {
            // This is taken from the video, not from the code in the book!
            // The stuff in the book does not work!
            let newItem = {
                key: Date.now(), // produces a good-enough unique key for our list items.
                text: this._inputElement.value, 
            }; // Creates one item object.

            // Uses the previous state of the items array ([] at beginning and then 
            // concatenates each new item to the array.
            // Remember: concat outputs a new array. It does not mutate the existing array. This 
            // is to be on the safe side and avoid conflicts.

            this.setState((prevState) => {
                return {
                items: prevState.items.concat(newItem)
                }
            });
            // This here makes sure that the entry field is cleared after submitting a value:
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
        /* e.preventDefault() : By default, when you submit a form, the page reloads and clears 
            everything out. We don't want that here (the items we add should be listed on the page, 
                not disappear. The preventDefault() method blocks this default behaviour.) 
        */
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter( function(item) {
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem} >
                        <input ref={(a) => this._inputElement = a}
                         placeholder="enter task"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem} />
            </div>
        );
    }
}
export default TodoList;