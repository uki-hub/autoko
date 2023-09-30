import Message, { BaseMessageProps } from "./message.tsx";

interface Props extends BaseMessageProps {
  message: string;
  time: string;
}

const MessageText = (props: Props) => {
  const className =
    "max-w-[70%] py-2 px-4 relative overflow-hidden " +
    (props.isMe
      ? "rounded-l-2xl rounded-br-2xl bg-gray-200"
      : "rounded-r-2xl rounded-bl-2xl bg-gray-100");

  return (
    <Message isMe={props.isMe}>
      <div className={className}>
        <div className="max-w-full">
          <span className="mr-2 break-words">{props.message}</span>
          <span className="float-right text-gray-400">{props.time}</span>
        </div>
      </div>
    </Message>
  );
};

export default MessageText;
