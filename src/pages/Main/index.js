import React, { Component, Fragment } from "react";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();

    try {
      const response = await api.get(`/saulossg/repos`);
      this.setState({ repositories: [this.state.repositories, response.data] });
      console.log(this.state.repositories);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <button type="submit">OK</button>
        </form>
      </Fragment>
    );
  }
}
