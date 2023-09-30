import OtaCounter from "../../../UI-OTA/builder/ota-counter.tsx";
import OtaButtonOutlined from "../../../UI-OTA/ota-button-outlined.tsx";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";
import Card from "../../../UI/card.tsx";

const Wishlist = () => {
  const trash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 5.09h-4.95v-.1A3.025 3.025 0 1 0 9 5v.1H4a1 1 0 0 0 0 2h1v13A1.84 1.84 0 0 0 6.92 22h10.16A1.9 1.9 0 0 0 19 20.09V7.1h1a1 1 0 1 0 0-2v-.01zM11 5a1 1 0 0 1 2 0v.1h-2V5zM7 20V7.1h10V20H7zm3-2a1 1 0 0 0 1-1v-6.9a1 1 0 0 0-2 0V17a1 1 0 0 0 1 1zm4.767-.293A1 1 0 0 1 13.06 17v-6.9a1 1 0 1 1 2 0V17a1 1 0 0 1-.293.707z"
        fill="#8D96AA"
      />
    </svg>
  );

  return (
    <OtaCol gap={4} className="text-sm">
      <OtaRow mainAxis="between">
        <label className="text-lg font-bold text-primaryVariant">
          Wujudkan wishlist kamu!
        </label>
        <label className="font-bold text-secondary">Lihat Semua</label>
      </OtaRow>
      <OtaRow gap={2} className="overflow-x-hidden">
        <OtaCounter count={10}>
          <Card className="min-w-[20%] !shadow">
            <OtaCol gap={4}>
              <OtaRow>
                <img
                  className="w-20 h-20"
                  src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/9/21f54efd-a647-4e68-80af-9dfa3debf831.jpg.webp?ect=4g"
                />
                <OtaCol>
                  <label className="line-clamp-2 text-[0.85rem] leading-[1.1rem] text-gray-600">
                    Ransel - Tas - Oreo - Legacy Gear - Outdoor Backpack - Black
                  </label>
                  <label className="font-semibold mt-1">Rp299.000</label>
                  <label className="text-xs text-gray-500">Legacy Gear</label>
                </OtaCol>
              </OtaRow>
              <OtaRow gap={2} crossAxis="center" className="">
                {trash}
                <OtaButtonOutlined className="!py-1.5 w-full">+Keranjang</OtaButtonOutlined>
              </OtaRow>
            </OtaCol>
          </Card>
        </OtaCounter>
      </OtaRow>
    </OtaCol>
  );
};

export default Wishlist;
