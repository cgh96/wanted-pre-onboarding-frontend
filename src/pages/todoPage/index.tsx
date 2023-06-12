import useRedirectByJwt from "hooks/useRedirectByJwt";
import TodoInput from "components/Todo/TodoInput";
import TodoList from "components/Todo/TodoList";

function TodoPage() {
  useRedirectByJwt();
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoPage;
