import OAuthSignIn from "@/components/auth-button/SignIn";
import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";

type AuthFormProps = {
    title: string
    type: string
}

const AuthForm = ({title, type}: AuthFormProps) => {
  return (
    <main className="text-center">
      <H1 title={title} />
      <div className="p-5 shadow max-w-lg mx-auto m-1 bg-card">
        <form className="space-y-8">
          <Input type="email" placeholder="Your email" />
          <Input type="password" placeholder="Your password" />
          <Button className="w-full" type="submit">
            {
                type === 'signin'
                ?
                "SignIn"
                :
                "Register"
            }
          </Button>
        </form>
        <h2
        className="my-4"
        >or continue with</h2>
        <OAuthSignIn />
      </div>
    </main>
  );
};

export default AuthForm;
