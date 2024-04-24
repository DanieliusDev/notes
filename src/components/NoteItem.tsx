export function NoteItem({ id, title, content, onDelete }: NoteItemProps) {
  return (
    <li key={id} className="bg-stone-900 rounded-xl p-3 space-y-3">
      <h2 className="text-2xl break-words">{title}</h2>
      <p className="bg-stone-800 p-1 rounded-lg whitespace-pre-line break-words">
        {content}
      </p>
      <button
        className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
}
