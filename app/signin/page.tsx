import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <main className="text-center">
      <H1 title="Wellcome Back!" />
      <form className="p-5 shadow space-y-8 max-w-lg mx-auto m-1 bg-card">
        <Input type="email" placeholder="Your email" />
        <Input type="password" placeholder="Your password" />
        <Button type="submit">SignIn</Button>
      </form>
    </main>
  );
};

export default page;
