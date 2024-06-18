import React from 'react';
// import {Component} from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    super(props); // call the React.Component constructor

    this.state = {
      counter: 0,
      internalCount: props.count + 10,
      message: 'hello',
      secretMessage: null,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>ClassBased Component</h2>
        <h2>The message is: {this.props.message}, {this.props.colour}</h2>
        <h2>Counter is: {this.state.counter}</h2>
        <button onClick={this.clickHandler}>Increment!</button>
      </div>
    );
  }
}

export default ClassBased;

// const yourComp = new ClassBased(props)
// yourComp.props = props;
// yourComp.render()
