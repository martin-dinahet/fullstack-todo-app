"use client";

import { useState } from "react";

type Props = {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
};

export const TodoItem: React.FC<Props> = ({ id, title, completed, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedFile, setEditedFile] = useState<string>(title);

  const handleSubmit = () => {
    if (editedFile.trim()) {
      onEdit(id, editedFile);
      setIsEditing(false);
    }
  };

  return (
    <li>
      <div>
        <input type="checkbox" checked={completed} onChange={() => onToggle(id, !completed)} />
        {isEditing && (
          <input
            type="text"
            value={editedFile}
            onChange={(e) => setEditedFile(e.target.value)}
            onBlur={handleSubmit}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            autoFocus
          />
        )}
        {!isEditing && <span onDoubleClick={() => setIsEditing(true)}>{title}</span>}
      </div>
      <div>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};
