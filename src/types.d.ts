interface Note {
  id: string;
  title: string;
  content: string;
}

interface NoteFormProps {
  onSubmit(title: string, content: string): void;
}

interface NoteItemProps extends Note {
  onDelete(): void;
}
