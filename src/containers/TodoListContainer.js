import TodoList from '../components/TodoList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        tasks: state.tasks.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)