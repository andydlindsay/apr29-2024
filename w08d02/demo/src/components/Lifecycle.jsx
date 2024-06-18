import React from 'react';

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputField: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      inputField: event.target.value,
    });
  }

  // fires once; when component is added to the DOM
  // setting up timers and intervals, making AJAX requests, establishing socket connections
  // useEffect(() => {}, [])
  componentDidMount() {
    console.log('component was added to the DOM');
  }

  // fires every time state or props change
  // listening for particular values to change
  // useEffect(() => {}, [props.username])
  // useEffect(() => {}, [state.counter])
  componentDidUpdate(prevState, prevProps) {
    if (prevProps.username !== this.props.username) {
      // username has changed
    }

    console.log('the component has updated');
  }

  // fires one time; when the component is about to be removed from the DOM
  // useful for cleaning up; stopping intervals, severing socket connections
  // useEffect that returns a cleanup function
  componentWillUnmount() {
    console.log('the component will be removed from the DOM');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Component</h2>
        <div>
          <label>Type here:</label>
          <input 
            value={this.state.inputField}
            onChange={this.onChangeHandler}
          />
        </div>
      </div>
    );
  }
}

export default Lifecycle;
