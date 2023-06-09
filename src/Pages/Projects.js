import React from "react";
import Sidebar from "../Components/Sidebar";

const Projects = () => {
  return (
    <>
      {" "}
      <div className="w-full min-h-[100vh]">
        <div>
          {" "}
          <Sidebar />{" "}
        </div>
        <div>Content</div>
      </div>
    </>
  );
};

export default Projects;
