"use client";

import { NoteForm } from "@/components/NoteForm";
import { NoteItem } from "@/components/NoteItem";
import { useLocalState } from "@/lib/useLocalState";

export default function Page() {
  const [notes, setNotes] = useLocalState<Note[]>("notes", []);

  function addNote(title: string, content: string) {
    setNotes([...notes, { id: crypto.randomUUID(), title, content }]);
  }

  function deleteNote(id: string) {
    return () => setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <main className="max-w-4xl mx-auto p-3 space-y-5 h-full flex flex-col">
      <NoteForm onSubmit={addNote} />
      <ul className="space-y-3 border rounded-xl flex-grow">
        {!notes.length && (
          <div className="text-4xl flex h-full justify-center items-center">
            No Notes
          </div>
        )}
        {notes.map((note) => (
          <NoteItem key={note.id} {...note} onDelete={deleteNote(note.id)} />
        ))}
      </ul>
    </main>
  );
}
