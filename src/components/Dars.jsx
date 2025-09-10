import React, { Component } from "react";

export default class Dars extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      data: [],
      editingItem: null,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { age, data, name, editingItem } = this.state;
    if (Number(age) < 0) {
      return alert("xato");
    }

    if (editingItem) {
      const editedData = data.map((user) =>
        user.id === editingItem.id ? { id: editingItem.id, name, age } : user
      );
      this.setState({ data: editedData, name: "", age: "", editingItem: null });
    } else {
      const user = {
        id: Date.now(),
        name,
        age: Number(age),
      };
      this.setState({ data: [...data, user], name: "", age: "" });
    }
  };

  handleDelete = (id) => {
    this.setState({ data: this.state.data.filter((user) => user.id !== id) });
  };

  handleUpdate = (user) => {
    console.log(user);
    this.setState({ name: user.name, age: user.age, editingItem: user });
  };

  handleCancel = () => {
    this.setState({ name: "", age: "", editingItem: null });
  };

  render() {
    const { age, name, data, editingItem } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit} action="">
          <input
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text"
          />
          <input
            value={age}
            onChange={(e) => this.setState({ age: e.target.value })}
            type="number"
          />
          <button>{editingItem ? "update" : "submit"}</button>
        </form>
        <div>
          {data?.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.age} years old</p>
              <button onClick={() => this.handleDelete(user.id)}>delete</button>
              <button onClick={() => this.handleUpdate(user)}>update</button>
              <button onClick={() => this.handleCancel()}>Cancel</button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}