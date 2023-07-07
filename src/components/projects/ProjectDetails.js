import React from "react";

const ProjectDetails = (props) => {
  console.log(props);
  // You will see an object that has properties such as history and url ids.

  const id = props.match.params.id;

  return (
    <div className="container sectio project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            culpa possimus alias nesciunt, architecto laborum nemo explicabo
            suscipit dignissimos odit. Facilis repellendus ut tenetur quidem
            expedita aut fuga cupiditate sunt?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by someone</div>
          <div>11th September, 1am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
