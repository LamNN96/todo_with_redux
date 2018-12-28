import EditTask from "../components/EditTask";
import { connect } from "react-redux";
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
