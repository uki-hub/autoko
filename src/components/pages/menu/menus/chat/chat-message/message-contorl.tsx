import OtaCounter from "../../../../../UI-OTA/builder/ota-counter.tsx";
import OtaButton from "../../../../../UI-OTA/ota-button.tsx";
import OtaCol from "../../../../../UI-OTA/ota-col.tsx";
import OtaInputIcon from "../../../../../UI-OTA/ota-input-icon.tsx";
import OtaRow from "../../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../../UI/card.tsx";

const MessageControl = () => {
  const stickerIcon = (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--NN700, #5d6ba2)"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.75 12.06V12a.713.713 0 000-.2v-.07a1.067 1.067 0 00-.15-.22l-9-9a.83.83 0 00-.22-.14H12a9.75 9.75 0 109.82 9.82l-.07-.13zM18.93 11A8.29 8.29 0 0113 5.07L18.93 11zM12 20.24a8.25 8.25 0 01-.71-16.46 9.73 9.73 0 003.15 6.41A1 1 0 0014 11a1 1 0 001.94.31 9.64 9.64 0 004.27 1.4A8.25 8.25 0 0112 20.24zm3.54-4.7a5 5 0 01-7.08 0 .74.74 0 00-1.06 0 .75.75 0 000 1.06 6.52 6.52 0 009.2 0 .75.75 0 000-1.06.74.74 0 00-1.06 0zM9.98 11a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
    </svg>
  );

  const addIcon = (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--NN700, #5d6ba2)"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.584 3.882A9.75 9.75 0 0112 2.24 9.76 9.76 0 0121.75 12 9.75 9.75 0 116.584 3.882zm.832 14.967A8.25 8.25 0 0012 20.24 8.26 8.26 0 0020.25 12a8.25 8.25 0 10-12.834 6.849zm5.334-7.609H16a.75.75 0 110 1.5h-3.25V16a.75.75 0 11-1.5 0v-3.25H8a.75.75 0 110-1.5h3.25V8a.75.75 0 111.5 0v3.24z"
      ></path>
    </svg>
  );

  const planeSendIcon = (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--NN0, #FFFFFF)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.35 11.32L5.66 3.19a1.81 1.81 0 00-1.81.28 1.8 1.8 0 00-.55 1.77L4.72 12 3.3 18.71a1.75 1.75 0 00.7 1.81 1.68 1.68 0 001 .34c.266 0 .528-.069.76-.2l15.61-8a.759.759 0 00.41-.67.77.77 0 00-.43-.67zM5 19.34a.14.14 0 01-.15 0 .27.27 0 01-.1-.27L6 13.36l6.8-.87a.5.5 0 000-1L6 10.61 4.76 4.93a.33.33 0 01.07-.32.32.32 0 01.17-.06L19.36 12 5 19.34z"
      ></path>
    </svg>
  );

  return (
    <OtaCol className=" pt-2 pb-4 gap-4 px-4 border-t-[1px] border-gray-100">
      <OtaRow className="gap-2">
        <OtaCounter count={3}>
          <Card className=" !rounded-xl !px-2 !py-0.5 max-w-[25%] line-clamp-1 cursor-pointer !border-secondary text-primary hover:bg-gray-100 ">
            Terima kasih!
          </Card>
        </OtaCounter>
      </OtaRow>
      <OtaRow className="gap-2">
        <OtaInputIcon
          boxClassName="w-full !rounded-3xl !py-2 !px-1"
          placeholder="Tulis Pesan..."
          disableFocus={true}
          icon={
            <OtaRow gap={1}>
              {stickerIcon} {addIcon}
            </OtaRow>
          }
          gap={2}
        />
        <OtaButton className="w-[7%] !rounded-full">
          <OtaCol crossAxis="center">{planeSendIcon}</OtaCol>
        </OtaButton>
      </OtaRow>
    </OtaCol>
  );
};

export default MessageControl;
