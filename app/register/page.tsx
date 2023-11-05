import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AuthForm from "@/components/forms/AuthForm";

const page = async() => {

  const session = await getServerSession();

  if (session?.user.email) redirect("/");

  return (
    <main className="text-center">
      <AuthForm
        title="Wellcome to Notes App! Create your account here."
        type="register"
      />
    </main>
  );
};

export default page;
