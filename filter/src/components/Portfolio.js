import React, { useState } from "react";
import "../App.css";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import { LIST_OF_PROJECTS } from "./utils";

const Portfolio = () => {
  const [selectFilter, setSelectFilter] = useState("All");

  const allFilters = ["All", "Websites", "Flayers", "Business Cards"];
  const listOfProjects = LIST_OF_PROJECTS;
  const filteredProjects = (filter) => {
    if(filter === "All") {
      return listOfProjects;
    }

    return listOfProjects.filter(el => el.category === filter);
  };

  const onSelectFilter = (filter) => {
    setSelectFilter((prev) => filter);
    console.log(filter);
  };
  
  return (
    <div className="wrapper">
      <Toolbar
        filters={allFilters}
        selected={selectFilter}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={filteredProjects(selectFilter)}/>
    </div>
  );
};

export default Portfolio;
