import OtaCounter from "../../../../../UI-OTA/builder/ota-counter.tsx";
import OtaButton from "../../../../../UI-OTA/ota-button.tsx";
import OtaCol from "../../../../../UI-OTA/ota-col.tsx";
import OtaInputIcon from "../../../../../UI-OTA/ota-input-icon.tsx";
import OtaRow from "../../../../../UI-OTA/ota-row.tsx";
import ChatRow from "./chat-row.tsx";

const ChatList = () => {
  const searchIcon = (
    <svg
      className="unf-icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--NN500, #8D96AA)"
    >
      <path d="M20.53 19.46l-4.4-4.4a7.33 7.33 0 10-1.07 1.06l4.41 4.41a.77.77 0 001.06 0 .77.77 0 000-1.07zm-15.78-9a5.75 5.75 0 115.75 5.75 5.76 5.76 0 01-5.75-5.72v-.03z"></path>
    </svg>
  );

  const settingIcon = (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--NN700, #4c5885)"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33 8.74H4a.75.75 0 010-1.5h1.33a3.74 3.74 0 017.34 0H20a.75.75 0 110 1.5h-7.33a3.74 3.74 0 01-7.34 0zm4.919-2.621A2.25 2.25 0 107.751 9.86a2.25 2.25 0 002.498-3.742zm8.421 9.121H20a.75.75 0 110 1.5h-1.33a3.74 3.74 0 01-7.34 0H4a.75.75 0 110-1.5h7.33a3.74 3.74 0 017.34 0zm-4.921 2.62a2.25 2.25 0 102.502-3.74 2.25 2.25 0 00-2.502 3.74z"
      ></path>
    </svg>
  );

  return (
    <OtaCol className="w-[34%] gap-4 pt-4">
      <label className="text-2xl font-bold">Chat</label>
      <OtaRow className="pr-2" gap={2}>
        <OtaInputIcon icon={searchIcon} placeholder="Cari Pengguna..." />
        <OtaButton className="!bg-background !px-2">{settingIcon}</OtaButton>
      </OtaRow>
      <div className="h-full overflow-y-auto pr-2">
        <OtaCol className="text-sm gap-2.5 pb-2">
          <OtaCounter count={11}>
            <ChatRow />
          </OtaCounter>
        </OtaCol>
      </div>
    </OtaCol>
  );
};

export default ChatList;
