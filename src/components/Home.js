import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="home-top">
            <h3>Projects</h3>
            <button className="btn btn-success">Create Project</button>
          </div>
          <div className="home-body">
            {/* <h4>You don't have any project yet, click on create project to get started.</h4> */}
            <div className="project">
              <div className="project-card">
              </div>
            </div>
            <div className="project">
              <div className="project-card">
              </div>
            </div>
            <div className="project">
              <div className="project-card">
              </div>
            </div>
            <div className="project">
              <div className="project-card">
              </div>
            </div>
            <div className="project">
              <div className="project-card">
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;