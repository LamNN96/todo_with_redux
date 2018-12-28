import { createStackNavigator } from "react-navigation";
import TodoListContainer from "../containers/TodoListContainer";
import TaskDetail from "../components/TaskDetail";
import EditTaskContainer from "../containers/EditTaskContainer";
import AddTaskContainer from "../containers/AddTaskContainer";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TodoListContainer
    },
    Detail: {
      screen: TaskDetail
    },
    EditTask: {
      screen: EditTaskContainer
    },
    AddTask: {
      screen: AddTaskContainer
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;
