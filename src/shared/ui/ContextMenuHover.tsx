import clsx from "clsx";
import { JSXElementConstructor, useState } from "react";

type ContextMenuHoverProps = {
  ContextMenuTrigger: JSXElementConstructor<React.PropsWithChildren> 
  ContextMenuContent: JSXElementConstructor<React.PropsWithChildren>
  className?: string
}

export const ContextMenuHover: React.FC<ContextMenuHoverProps> = ({
  ContextMenuTrigger, 
  ContextMenuContent, 
  className}) => {
  
    const [isContentOpen, setIsContentOpen] = useState(false);

    return (
    <div
    data-testid="block-context-menu"
    className={clsx('relative group border', className)}
    onMouseEnter={() => setIsContentOpen(true)}
    onMouseLeave={() => setIsContentOpen(false)}
    >
      <ContextMenuTrigger />
      { isContentOpen && <section 
        data-testid="content-menu"
        className={clsx(
          "absolute border w-min group opacity-0 transition-opacity duration-500 ",
          isContentOpen ? "opacity-100" : "opacity-0",
        )}
      >
        <ContextMenuContent />
      </section>}
     
    </div>
  );
};