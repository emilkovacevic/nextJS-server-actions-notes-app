"use client";

import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import NoteForm from "./NoteForm";
import { Notes } from "@prisma/client";

type EditNoteType = {
  funcName: string;
  handleDelete?: () => void;
  note?: Notes
};

const UpdateNote = ({ funcName, handleDelete, note }: EditNoteType) => {
  const [isPending, startTransition] = useTransition();
  const [editingOn, setEditingOn] = useState(false);
  return (
    <>
      {funcName === "Edit" && (
        <Button
          disabled={isPending}
          onClick={() => setEditingOn((prev) => !prev)}
        >
          {funcName}
        </Button>
      )}
      {funcName === "Delete" && handleDelete && (
        <Button
          disabled={isPending}
          onClick={() => startTransition(() => handleDelete())}
        >
          {funcName}
        </Button>
      )}
      {editingOn && (
        <div className="absolute w-screen h-screen top-0 left-0 z-30 bg-background flex  justify-center">
          <div className="flex justify-center p-4 w-full lg:w-2/3 bg-card">
            <NoteForm noteData={note} setIsOpenDialog={setEditingOn}/>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateNote;
