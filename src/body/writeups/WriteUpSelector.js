import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class WriteUpSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paths: props.paths,
      renderWriteUp: props.renderWriteUp,
      prevPaths: []
    }

    this.pathSelect = this.pathSelect.bind(this);
    this.prevPaths = this.prevPaths.bind(this);
  }

  pathSelect(path) {
    if (typeof this.state.paths[path] !== 'object') {
      this.state.renderWriteUp(this.state.paths[path]);
    } else {
      this.setState(state => ({
        paths: state.paths[path],
        prevPaths: [...state.prevPaths, state.paths]
      }));
    }
  }

  prevPaths() {
    let prevClone = [...this.state.prevPaths];

    const prev = prevClone.pop();
    this.setState(state => ({
      paths: prev,
      prevPaths: prevClone
    }))
  }

  render() {
    return (
      <div className="selector">
        {this.state.prevPaths.length !== 0 && <Button variant="flat" onClick={this.prevPaths}>..</Button>}
        {Object.keys(this.state.paths).map((path, index) => {
          return (
            <div key={index}>
              <Button variant="flat" onClick={() => this.pathSelect(path)}>
                { path.toUpperCase() }
              </Button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default WriteUpSelector;