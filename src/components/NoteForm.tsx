"use client";

import { useState } from "react";

export function NoteForm({ onSubmit }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
  }

  return (
    <form
      className="bg-stone-900 p-3 rounded-xl border space-y-4"
      onSubmit={submit}
    >
      <input
        className="block rounded-lg bg-stone-800 p-1 focus:outline-none w-full"
        required
        placeholder="Title"
        type="text"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <textarea
        className="block rounded-lg bg-stone-800 p-1 focus:outline-none w-full resize-none"
        required
        placeholder="Content"
        rows={Math.min(content.split("\n").length, 10)}
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />
      <button
        className="block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg ml-auto"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
