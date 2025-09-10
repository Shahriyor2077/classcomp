import React, { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      data: null,
      error: null,
      loading: true,
      hide: false,
    };
  }

  handleInc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDec = () => {
    this.setState({ count: this.state.count - 1 });
  };

   
  render() {
    const { count, hide } = this.state;
    return (
      <div>
        <h2>Footer {count}</h2>

        <button onClick={this.handleInc}>increment</button>
        <button onClick={this.handleDec}>decrement</button>

        {hide && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            reprehenderit vero saepe doloribus perferendis recusandae amet qui
            velit! Porro dolorem sed iure quod quibusdam incidunt cumque dolor
            doloremque commodi reiciendis.
          </p>
        )}
        <button onClick={() => this.setState({ hide: !hide })}>
          {hide ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
