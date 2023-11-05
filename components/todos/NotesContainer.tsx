import prisma from "@/lib/prisma";
import { Session } from "next-auth";
import NotFoundMsg from "../messages/NotFoundMsg";
import H1 from "../ui/h1";
import NoteForm from "./NoteForm";

type NotesContainerProps = {
  session: Session | null;
};

const NotesContainer = async ({ session }: NotesContainerProps) => {
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email,
    },
    include: {
      Notes: true,
    },
  });

  if (!user?.id) return <NotFoundMsg error="User" />;

  return (
    <div>
      <H1 title="Your Notes"/>
      {user?.Notes.length ? (
        <section>
          {user?.Notes.map((note) => (
            <div key={note.id}>{note.desc}</div>
          ))}
        </section>
      ) : (
        <section
        className="space-y-4 bg-card p-4 shadow"
        >
        <h2>No notes found. Create a note.</h2>
        {JSON.stringify(session)}
        <NoteForm />
        </section>
      )}
    </div>
  );
};

export default NotesContainer;
