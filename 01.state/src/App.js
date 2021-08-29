import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add} >ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

// class App extends React.Component {
//   state = {
//     isLoading: true
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({isLoading : false})
//     }, 3000);
//   }

//   render() {
//     const { isLoading } = this.state;
//     return (
//       <div>{isLoading ? "Loading..." : "We are ready"}</div>
//     );
//   }
// }

export default App;
