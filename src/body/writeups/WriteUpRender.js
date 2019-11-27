import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class WriteUpRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.path,
      backToSelect: props.backToSelect
    }

    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.state.backToSelect();
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleBack}>
          Back
        </Button>
        <h1>{this.state.path}</h1>
      </div>
    )
  }
}

export default WriteUpRender;