import TodoItem from "../components/TodoItem";
import { connect } from "react-redux";
import { toggleTask } from "../actions/task";
const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickDone: taskID => {
      dispatch(toggleTask(taskID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
