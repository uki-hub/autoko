import OtaCol from "../../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../../UI/card.tsx";
import MessageControl from "./message-contorl.tsx";
import Messages from "./messages.tsx";

const ChatMessage = () => {
  const moreIcon = (
    <svg
      className="ml-auto"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--color-icon-enabled, #5d6ba2)"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.48 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.5 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
    </svg>
  );

  return (
    <OtaCol className="w-[66%] h-full">
      <OtaRow
        className="pl-4 gap-4 border-gray-200 py-2 border-b-[1px]"
        crossAxis="center"
      >
        <div className="relative rounded-full overflow-visible">
          <img
            className="w-14 h-14 rounded-full"
            src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2023/8/6/6f7504bf-ce26-40df-9243-2c4884695f99.jpg"
          />
          <div className="absolute p-0.5 rounded-full w-[18px] h-[18px] right-0 bottom-[0%] bg-white">
            <div className="w-full h-full rounded-full bg-green-600" />
          </div>
        </div>

        <OtaCol>
          <OtaRow crossAxis="center">
            <img
              className="w-5 h-5 object-fill"
              src="https://images.tokopedia.net/img/official_store/badge_os.png"
            />
            <span className="font-bold text-base ml-0.5 mr-2">Broodis</span>
            <Card className="!rounded text-xs !py-0.5 !px-1.5 font-semibold text-onSecondary bg-secondary">
              Penjual
            </Card>
          </OtaRow>
          <span className="text-xs text-gray-700">Online</span>
        </OtaCol>
        {moreIcon}
      </OtaRow>
      
      <Messages />

      <MessageControl />
    </OtaCol>
  );
};

export default ChatMessage;
