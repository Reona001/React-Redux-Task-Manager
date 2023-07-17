import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { compose } from "redux";

const ProjectDetails = (props) => {
  console.log(props);

  // You will see an object that has properties such as history and url ids.

  // const id = props.match.params.id;
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container sectio project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}{" "}
            </div>
            <div>11th September, 1am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading projects...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

// connecting to firestore
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
