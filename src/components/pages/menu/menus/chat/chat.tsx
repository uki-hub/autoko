import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaLine from "../../../../UI-OTA/ota-line.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../UI/card.tsx";
import ChatList from "./chat-list/chat-list.tsx";
import ChatMessage from "./chat-message/chat-message.tsx";

const Chat = () => {
  return (
    <div className="h-screen">
      <Card className="!rounded-xl !py-0 !pr-0 shadow h-[83%]">
        <OtaRow className="h-full">
          <ChatList />

          <OtaCol className="w-min" crossAxis="end">
            <OtaLine
              orientation="vertical"
              className="!bg-gray-200"
              width={0.8}
            />
          </OtaCol>

          <ChatMessage />
        </OtaRow>
      </Card>
    </div>
  );
};

export default Chat;
