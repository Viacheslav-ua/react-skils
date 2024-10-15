import clsx from "clsx";
import { Link, LinkProps, useMatch } from "react-router-dom";

interface LinkNavBarProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  props?: LinkProps;
}
export const LinkNavBar: React.FC<LinkNavBarProps> = ({children, to, className, ...props}) => {

  const match = useMatch(to);

  return (
    <Link to={to} {...props} 
      className={clsx( match 
        ? "text-indigo-800 border-b-2 border-blue-800" 
        : "hover:bg-gray-500",
        className)}
    >
      {children}
    </Link>
  );
}