import { PropsWithChildren } from "react";
import OtaRow from "../../../../../../UI-OTA/ota-row.tsx";

interface BaseMessageProps {
  isMe: boolean;
}

const Message = (props: PropsWithChildren<BaseMessageProps>) => {
  return (
    <OtaRow mainAxis={props.isMe ? "end" : "start"}>
      {props.children}
    </OtaRow>
  );
};

export type { BaseMessageProps };

export default Message;
