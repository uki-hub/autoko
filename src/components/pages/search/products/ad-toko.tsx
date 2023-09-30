import OtaButtonOutlined from "../../../UI-OTA/ota-button-outlined.tsx";
import Card from "../../../UI/card.tsx";
import ProductCard from "../../../product/product-card.tsx";

const AdToko = () => {
  return (
    <Card className="w-full shadow !py-4">
      <div className="grid grid-cols-5 gap-x-3 w-full">
        <div className="w-full col-span-2">
          <div className="flex flex-col justify-center h-72 gap-4 items-center">
            <div className="w-16 h-16 rounded-full bg-secondary text-center mt-5">
              Image Toko
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold">Dipromosikan oleh</label>
              <label className="text">%nama toko%</label>
            </div>

            <div className="flex flex-row gap-2 text-xs font-semibold text-onSecondary">
              <Card className="!py-1 bg-secondary border-primary">
                Gratis Onkir
              </Card>
              <Card className="!py-1 bg-secondary border-primary">
                Cashback 20%
              </Card>
            </div>
            <label className="text-lg font-semibold">
              Belanja di asd Gratis 50% Potongan harga
            </label>
            <OtaButtonOutlined className="!py-1 !font-bold !border-[1px] mt-auto">
              Cek Sekarang
            </OtaButtonOutlined>
          </div>
        </div>
        {Array(3)
          .fill(null)
          .map((_) => (
            <ProductCard
              hideLocation={true}
              className="!shadow !min-w-min !h-min"
            />
          ))}
      </div>
    </Card>
  );
};

export default AdToko;
