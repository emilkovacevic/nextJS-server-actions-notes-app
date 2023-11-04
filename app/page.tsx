import { getServerSession } from "next-auth";
import TodosContainer from "@/components/todos/TodosContainer";
import Link from "@/components/ui/link";
import H1 from "@/components/ui/h1";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="container grid items-center">
      {session?.user.id ? (
        <TodosContainer session={session} />
      ) : (
        <div className="text-center space-y-4">
          <H1 title="Wellcome to the Notes App" />
          <section>
            <p>
              To continue using the app
              <Link href="signin">
                <span className="text-primary">signin</span>
              </Link>
              or
              <Link href="/register">
                <span className="text-primary">create an account</span>
              </Link>
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
