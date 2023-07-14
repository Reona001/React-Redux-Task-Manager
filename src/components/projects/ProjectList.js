import React from "react";

import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// && means if there is projects do this
const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return (
            <Link to={"/project/" + project.id}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;

// We have the unique project id stored by firebase so we go ahead and use that
