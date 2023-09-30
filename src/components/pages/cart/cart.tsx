import OtaCounter from "../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../UI-OTA/ota-col.tsx";
import OtaLine from "../../UI-OTA/ota-line.tsx";
import OtaRow from "../../UI-OTA/ota-row.tsx";
import CartRow from "./cart-row.tsx";

const Cart = () => (
  <OtaCol className="w-[70%]">
    <label className="font-bold text-2xl col-span-2">Keranjang</label>
    <OtaCol gap={2} className="sticky top-[90px] bg-white pt-4 mb-4">
      <OtaRow>
        <div className="w-8">
          <input type="checkbox" className="w-4 h-4 border-white" />
        </div>

        <label>Pilih Semua</label>
      </OtaRow>
      <OtaLine width={5} className="!bg-gray-200 col-span-2" />
    </OtaCol>
    <OtaCol gap={4}>
      <OtaCounter randomize={true} min={1} max={5}>
        <CartRow />
        <OtaLine width={5} className="!bg-gray-100 col-span-2" />
      </OtaCounter>
    </OtaCol>
  </OtaCol>
);

export default Cart;
