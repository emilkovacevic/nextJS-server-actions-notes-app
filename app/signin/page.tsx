import { getServerSession } from "next-auth";
import AuthForm from "@/components/forms/AuthForm";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();

  if (session?.user.email) redirect("/");

  return (
    <main className="text-center">
      {JSON.stringify(session)}
      <AuthForm title="Wellcome Back!" type="signin" />
    </main>
  );
};

export default page;
