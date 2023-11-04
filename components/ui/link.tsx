import NextLink from "next/link";

interface LinkInterface {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: LinkInterface) => {
  return (
    <NextLink
      className="font-semibold hover:underline text-accent-foreground"
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default Link;
