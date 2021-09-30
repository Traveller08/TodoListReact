import Proptypes from "prop-types";
const Task = ({ text }) => {
  return (
    <div className="task">
      <div className="text">{text}</div>
      <div className="btn" id="edit">
        Edit
      </div>
      <div className="btn">Remove</div>
    </div>
  );
};
Task.defaultPropTypes = {
  text: "Add Task"
};
Task.proptypes = {
  text: Proptypes.string.isRequired
};
export default Task;
