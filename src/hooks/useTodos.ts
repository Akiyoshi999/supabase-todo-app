import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Tables } from "../types/database.types";

type Todo = Tables<"todos">;

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const fetchTodos = useCallback(async () => {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching todos:", error.message);
      return;
    }

    setTodos(data ?? []);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  async function addTodo() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const { error } = await supabase.from("todos").insert({ title: trimmed });
    if (error) {
      console.error("Error adding todo:", error.message);
      return;
    }

    setInput("");
    fetchTodos();
  }

  async function toggleComplete(todo: Todo) {
    const { error } = await supabase
      .from("todos")
      .update({ is_complete: !todo.is_complete })
      .eq("id", todo.id);

    if (error) {
      console.error("Error toggling todo:", error.message);
      return;
    }

    fetchTodos();
  }

  async function deleteTodo(id: string) {
    const { error } = await supabase.from("todos").delete().eq("id", id);
    if (error) {
      console.error("Error deleting todo:", error.message);
      return;
    }

    fetchTodos();
  }

  return { todos, input, setInput, addTodo, toggleComplete, deleteTodo };
}
