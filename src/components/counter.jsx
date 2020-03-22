import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["Increment"]
  };

  render() {
    return (
      <React.Fragment>
        {this.state.tags.map(tag => (
          <li key={tag}>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn-secondary btn-sm"
            >
              {tag}
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </li>
        ))}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    var counter = this.props.counter.value;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
