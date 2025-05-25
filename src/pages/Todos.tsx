import useTodos from "../hooks/useTodos";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function Todos() {
  const { todos, input, setInput, addTodo, toggleComplete, deleteTodo } =
    useTodos();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🎣 TODO アプリ</h1>
      <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleComplete} onDelete={deleteTodo} />
    </div>
  );
}
