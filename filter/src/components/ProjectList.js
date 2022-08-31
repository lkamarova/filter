import "../App.css";

const ProjectList = ({ projects }) => {
  return (
    <div className="wrapperImg">
      {projects.map((el) => (
        <img className="img" src={el.img} alt={el.category} />
      ))}
    </div>
  );
};

export default ProjectList;
