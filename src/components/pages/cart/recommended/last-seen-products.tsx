import OtaCounter from "../../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";
import ProductCard from "../../../product/product-card.tsx";

const LastSeenProducts = () => {
  return (
    <OtaCol gap={4} className="text-sm">
      <OtaRow mainAxis="between">
        <label className="text-lg font-bold text-primaryVariant">
          Terakhir Dilihat
        </label>
        <label className="font-bold text-secondary">Lihat Semua</label>
      </OtaRow>
      <OtaRow gap={2} className="overflow-x-hidden">
        <OtaCounter count={10}>
          <ProductCard className="!h-min" />
        </OtaCounter>
      </OtaRow>
    </OtaCol>
  );
};

export default LastSeenProducts;
