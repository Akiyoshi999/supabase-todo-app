import type { Todo } from "../types";

type Props = {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center border-b py-2"
        >
          <span
            onClick={() => onToggle(todo)}
            className={`cursor-pointer ${
              todo.is_complete ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.title}
          </span>
          <button onClick={() => onDelete(todo.id)} className="text-red-500">
            削除
          </button>
        </li>
      ))}
    </ul>
  );
}
