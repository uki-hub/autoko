import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaLine from "../../../../UI-OTA/ota-line.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../UI/card.tsx";
import ReviewMessageProduct from "../../../product/review/review-message.tsx";

const ReviewMessage = () => {
  return (
    <OtaCol className="w-full text-sm">
      <OtaRow gap={2}>
        
        <OtaCol className="mr-4">
        <Card className="max-w-[6rem] h-20 !p-0">
          <img
            className="w-full h-full"
            src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/2/3e45d4b3-36dc-4cf3-b503-17c9732c7f44.jpg.webp?ect=4g"
          />
        </Card>
          <label className="font-bold text-base min-w-[15rem] max-h-20 line-clamp-3">
            Fantech MK857 Maxfit61 Wired Mechanical Gaming Keyboard Fantech MK857 Maxfit61 Wired Mechanical Gaming Keyboard
          </label>
          <label className="text-sm min-w-[15rem] text-gray-500">
            Varian: Hitam - Red Switch
          </label>
        </OtaCol>

        <ReviewMessageProduct hideVarian={true} />
      </OtaRow>
      <OtaLine width={0.8} className="!bg-buttonColor mt-6" />
    </OtaCol>
  );
};

export default ReviewMessage;
