import React, {Component} from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
    }
    addItem(e) {
        const itemArray = this.state.items;
        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState =({
                items: itemArray
            });
            this._inputElement.value = "";
        }
        console.log(itemArray);
        e.preventDefault();
        {/* e.preventDefault() : By default, when you submit a form, the page reloads and clears 
            everything out. We don't want that here (the items we add should be listed on the page, 
                not disappear. The preventDefault() method blocks this default behaviour.) 
        */}

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
            </div>
        )
    }
}
export default TodoList;