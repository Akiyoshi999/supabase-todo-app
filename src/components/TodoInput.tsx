type Props = {
  input: string;
  setInput: (input: string) => void;
  addTodo: () => void;
};

export default function TodoInput({ input, setInput, addTodo }: Props) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 border p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
        placeholder="やることを入力"
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={addTodo}>
        追加
      </button>
    </div>
  );
}
