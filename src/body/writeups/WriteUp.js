import React, { Component } from 'react';

import WriteUpSelector from './WriteUpSelector';
import WriteUpError from './WriteUpError';
import getGithubPaths from '../../utils/GithubFetcher';
import Loader from '../../utils/Loader';
import './assets/writeup_style.css';
import WriteUpRender from './WriteUpRender';

class WriteUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Write Up Selector
      loading: true,
      success: false,
      paths: {},

      // Write Up Render
      writeUpNotSelected: true,
      renderPath: ""
    };

    this.renderWriteUp = this.renderWriteUp.bind(this);
    this.backToSelect = this.backToSelect.bind(this);
  }

  async componentDidMount() {
    const pathsURL = getGithubPaths('Pitt-Cyber-Security/Write-Ups');

    const merge = (current, updates) => {
      Object.keys(updates).map((key) => {
        if (!current.hasOwnProperty(key) 
            || typeof updates[key] !== 'object') {
          current[key] = updates[key];
        } else {
          merge(current[key], updates[key]);
        }
      }); 
      return current;
    }

    const githubPaths = await fetch(pathsURL)
      .then(resp => resp.json())
      .then(data => {
        const pathsObj = {};
        pathsObj.success = true;
        pathsObj.filePath = {};

        data.items.map((value) => {
          if (value.path.indexOf('README.md') === -1) {
            const pathArr = value.path.split('/');

            let pathNest = {}
            
            pathNest = pathArr.reverse().reduce((res, key) => {
              return ({[key]: res});
            });

            pathsObj.filePath = merge(pathNest, pathsObj.filePath);
          }
        });

        return pathsObj;
      })
      .catch(error => {
        console.error(error);
        const pathsObj = {};
        pathsObj.success = false;

        return pathsObj;
      });

    this.setState({
      loading: false,
      success: githubPaths.success,
      paths: githubPaths.filePath
    });
  }

  renderWriteUp(path) {
    console.log(path);
    this.setState({
      writeUpNotSelected: false,
      renderPath: path
    });
  }

  backToSelect() {
    this.setState({
      writeUpNotSelected: true,
      renderPath: ""
    });
  }

  render() {
    const loading = this.state.loading;
    const success = this.state.success;
    const writeUpNotSelected = this.state.writeUpNotSelected;

    let writeUpStatus;

    if (loading) {
      writeUpStatus = <Loader />
    } else if (!success) {
      writeUpStatus = <WriteUpError />
    } else {
      writeUpStatus = <WriteUpSelector 
                        paths={this.state.paths} 
                        success={success}
                        renderWriteUp={this.renderWriteUp} />
    }

    return (
      <div className="write-up-div">
        {writeUpNotSelected ?
          <div>
            <h1 className="write-up-header">Write Ups</h1>
            <div>
              {writeUpStatus}
            </div> 
          </div> 
          :
          <WriteUpRender 
            path={this.state.renderPath} 
            backToSelect={this.backToSelect} />
        }
      </div>
    );
  }
}

export default WriteUp;
