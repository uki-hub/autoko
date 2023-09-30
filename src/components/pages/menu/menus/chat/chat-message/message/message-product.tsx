import Message, { BaseMessageProps } from "./message.tsx";
import ProductCard from "./product-card.tsx";

interface Props extends BaseMessageProps {}

const MessageProduct = (props: Props) => {
  return (
    <Message isMe={props.isMe}>
      <ProductCard className="!w-[55%]"/>
    </Message>
  );
};

export default MessageProduct;
