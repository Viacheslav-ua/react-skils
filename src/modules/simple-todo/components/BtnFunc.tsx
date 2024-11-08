import { ListFunc } from "./ListFunc";
import { ContextMenuHover } from "shared/ui/ContextMenuHover";
import { TriggerFunc } from "./TriggerFunc";

export const BtnFunc = () => {
 
  return (
      <ContextMenuHover 
        ContextMenuTrigger={() => <TriggerFunc />}       
        ContextMenuContent={() => <ListFunc />}
      />
  )
}