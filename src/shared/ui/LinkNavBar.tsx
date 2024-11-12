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
        ? 'text-blue-800 font-bold dark:text-yellow-200 cursor-default' 
        : 'hover:underline',
        'relative',
        'dark:text-white font-medium text-lg',
        className)}
    >
      <div className={clsx( match 
        && 'absolute -bottom-3 h-1 w-full bg-blue-700 dark:bg-yellow-200' 
      )}></div>
      {children}
    </Link>
  );
}