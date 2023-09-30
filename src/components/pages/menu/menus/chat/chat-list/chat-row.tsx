import OtaCol from "../../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../../UI/card.tsx";

const ChatRow = () => {
  return (
    <OtaRow className="group/row gap-3 p-2 py-3 rounded-2xl cursor-pointer hover:bg-gray-100">
      <img
        className="w-12 h-12 rounded-full"
        src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2023/8/6/6f7504bf-ce26-40df-9243-2c4884695f99.jpg"
      />
      <OtaCol className="w-full">
        <OtaRow crossAxis="center" gap={2}>
          <span className="text-lg font-bold">Broodis</span>
          <Card className="!rounded text-xs !py-0.5 !px-1.5 font-semibold text-onSecondary bg-secondary">
            Penjual
          </Card>
          <span className="ml-auto text-gray-500">14:18</span>
        </OtaRow>
        <OtaRow crossAxis="center">
          <span className="line-clamp-1 w-[90%]">
            📢 PROMO spesial buat Uki, hanya di toko kami. Yuk, belanja pakai
            promo ini sebelum periodenya berakhir!
          </span>
          <OtaCol
            className="ml-auto font-bold text-xs text-center rounded-full bg-secondary text-onSecondary h-5 w-5"
            crossAxis="center"
            mainAxis="center"
          >
            3
          </OtaCol>
          <div className="hidden w-[7%] text-end font-semibold cursor-pointer group-hover/row:block ">
            <span className="px-1">:</span>
          </div>
        </OtaRow>
      </OtaCol>
    </OtaRow>
  );
};

export default ChatRow;
