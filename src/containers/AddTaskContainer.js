import AddTask from '../components/AddTask';
import { addTask } from '../actions/task';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (data) => {
            dispatch(addTask(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)