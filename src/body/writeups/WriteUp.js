import React, { Component } from "react";
import getGithubPaths from "../../utils/GithubFetcher";
import "./assets/writeup_style.css";

class WriteUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 0,
            paths: {}
        }
    }

    componentDidMount() {
        const paths = getGithubPaths("Pitt-Cyber-Security/Write-Ups");
        console.log(paths);
    }

    render() {
        return (
            <div className="write-up-div">
                <h1 className="write-up-header">
                    Write Ups
                </h1>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default WriteUp;
