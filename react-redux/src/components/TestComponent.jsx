import React from "react";
import Loader from "react-loader-spinner";

class TestComponent extends React.Component {
  state = {
    taskDescription: "",
  };

  constructor(props) {
    super(props);
    console.log("Constructed with props: ", props);
  }

  handleChange = ({ target: { value } }) =>
    this.setState({ taskDescription: value });

  handleClick = () => {
    const { taskDescription } = this.state;
    const task = { taskDescription };
    // this.props.dispatch(actions.addTask({ task }));
    this.props.addTask({ task });
    this.setState({ taskDescription: "" });
  };

  handleCounterClick = () =>
    this.props.updateCounter({
      counter: this.props.counter + 1,
    });

  handleGetUser = () => this.props.getUser();

  componentWillMount(a) {
    console.log("Test component WILL MOUNT");
  }

  componentDidMount() {
    console.log("Test component DID MOUNT");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Test component did UPDATE");
  }

  render() {
    console.log("Test component RENDERED");
    return (
      <div className="mb-5">
        <hr />
        <h4>Component in container</h4>
        <div className="mb-3">
          <span className="mr-3">Current counter: {this.props.counter}</span>
          <button onClick={this.handleCounterClick}>Increment Counter</button>
        </div>

        {this.props.tasks.map((task, index) => (
          <div key={index} className="alert alert-info">
            #{task.id} - {task.taskDescription}
          </div>
        ))}
        <input
          type="text"
          name="taskDescription"
          value={this.state.taskDescription}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add task</button>
        <hr />

        <h5>Async actions</h5>
        <div>
          {this.props.users.map((user, i) =>
            user.state === "successed" ? (
              <div key={i} className="m-3">
                {user.picture ? (
                  <img src={user.picture.medium} alt="some alt desc" />
                ) : null}
                {user.name ? (
                  <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
                ) : null}
              </div>
            ) : (
              <Loader type="ThreeDots" color="#00BFFF" height="40" width="40" />
            )
          )}
        </div>
        <button onClick={this.handleGetUser}>Get random user</button>
      </div>
    );
  }
}

export default TestComponent;
