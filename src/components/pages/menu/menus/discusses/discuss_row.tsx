import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../UI/card.tsx";
import DiscussCard from "../../../product/discuss/discuss-card.tsx";

const DiscussRow = () => {
  const heart = (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26    "
      fill="var(--NN950, #4c5885)"
      data-testid="viewUnwishlisted"
    >
      <path d="M12.11 20.81a1.61 1.61 0 01-.92-.28c-2.14-1.28-6-4-7.92-7.64a6.8 6.8 0 010-7.12 5.39 5.39 0 014.6-2.54A5.1 5.1 0 0112 5.55a5.14 5.14 0 014.24-2.32 5.5 5.5 0 014.56 2.56 7.62 7.62 0 01.15 7c-2.31 4.17-7 7.15-8 7.7a1.63 1.63 0 01-.84.32zM7.87 4.73a3.89 3.89 0 00-3.4 1.87c-.18.27-1.6 2.45.13 5.59 1.7 3.32 5.4 5.86 7.4 7.08a.19.19 0 00.2 0c.56-.34 5.29-3.25 7.43-7.1a6.11 6.11 0 00-.09-5.6 4 4 0 00-3.29-1.86 4.12 4.12 0 00-3.57 2.61L12 8.68l-.67-1.34c-.84-1.68-2.07-2.61-3.46-2.61z"></path>
    </svg>
  );

  return (
    <Card className="shadow-sm !pt-4">
      <OtaCol className="gap-4">
        <OtaRow className="gap-4" crossAxis="center">
          <Card className="!p-0 !rounded-xl">
            <img
              className="w-12 h-12"
              src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/23/13a4a3d5-1ca8-4c8f-89e0-1f36405b7aa9.jpg"
            />
          </Card>
          <OtaCol>
            <span className="">
              Sambal Fermentasi Pedas Ekstrim Carolina Reaper
            </span>
            <OtaRow className="gap-2" crossAxis="center">
              <span className="font-bold">Rp60.000</span>
              <span className="text-background">|</span>
              <span className="text-sm text-gray-400">
                stok tersisa <span className="text-sm font-semibold text-gray-500">4</span>
              </span>
            </OtaRow>
          </OtaCol>
          <div className="ml-auto rounded-full p-2 cursor-pointer hover:bg-gray-200">
            {heart}
          </div>
        </OtaRow>
        <DiscussCard />
        <label className="text-end text-xs text-secondary cursor-pointer hover:text-secondaryVariant">
          Buka diskusi produk
        </label>
      </OtaCol>
    </Card>
  );
};

export default DiscussRow;
