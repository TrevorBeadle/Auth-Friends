import React from "react";

class Login extends React.Component {
  state = {
    credentials: { username: "", password: "" },
  };

  handleChange = e => {
    this.setState({
      ...this.state.credentials,
      [e.target.name]: e.target.value,
    });
  };

  login = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={this.state.credentials.username}
          onChange={this.handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />

        <button>Login</button>
      </form>
    );
  }
}
