import EditTask from "../components/EditTask";
import { connect } from "react-redux";
import { editTask } from "../actions/task";

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickEdit: data => {
      dispatch(editTask(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTask);
