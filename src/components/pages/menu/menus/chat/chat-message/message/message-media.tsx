import Card from "../../../../../../UI/card.tsx";
import Message, { BaseMessageProps } from "./message.tsx";

interface Props extends BaseMessageProps {}

const MessageMedia = (props: Props) => {
  return (
    <Message isMe={props.isMe}>
      <Card className="!p-0 w-[55%]">
        <img src="https://images.tokopedia.net/img/nYdSnP/2020/9/30/9ff5bb04-3450-407c-8122-14345c27e12e.jpg" />
      </Card>
    </Message>
  );
};

export default MessageMedia;
