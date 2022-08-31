import "../App.css";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((el) => {
        return (
          <span
            className={`filter ${selected === el ? "selectedFilter" : null}`}
            onClick={() => onSelectFilter(el)}
          >
            {el}
          </span>
        );
      })}
    </div>
  );
};

export default Toolbar;
