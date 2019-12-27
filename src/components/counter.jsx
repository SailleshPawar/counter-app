import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    //, imageUrl: "https://picsum.photos/200"
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  style = {
    fontSize: 50,
    fontWeight: "bold"
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }

  handleIncrement = () => {
    //console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags! </p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      // <>
      //   <h1>My First CSS Example</h1>
      //   <p className="center large">This is a paragraph.</p>
      //   <p> hello i am only paragraph</p>
      //   <h2>Hellps h1 </h2>
      //   <h3>Hellps h2 </h3>

      //   <h4>Hellps h4 </h4>
      // </>
      <div data-test="component-app">
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //passing reference to the function
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
