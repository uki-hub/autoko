import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaLine from "../../../UI-OTA/ota-line.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";
import Card from "../../../UI/card.tsx";

const Profile = () => {
  return (
    <OtaCol gap={2} className="pb-4 ">
      <OtaRow className="px-2" gap={2} crossAxis="center">
        <img
          className="w-12 h-12 rounded-full overflow-hidden"
          src="https://images.tokopedia.net/img/cache/300/tPxBYm/2022/4/7/5abd4ac4-3950-4127-911b-5eebd8ff6c22.png"
        />
        <OtaCol className="text-sm" gap={1}>
          <label className="font-semibold">Uki</label>
          <OtaRow gap={1} crossAxis="center" className="mt-auto">
            <img
              className="w-3 h-3"
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/e69b0960.svg"
            />
            <label className="text-xs font-semibold text-green-700">
              Tersambung ke Gojek
            </label>
          </OtaRow>
        </OtaCol>
      </OtaRow>

      <OtaLine width={0.8} className="!bg-gray-200" />

      <Card className="mx-3 my-3 !border-background text-xs !p-2.5">
        <OtaCol className="gap-1">
          <img
            className="w-12 h-4"
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/63040a89.png"
          />
          <label className="text-sm font-bold">
            Pakai Bebas Ongkir lebih banyak!
          </label>
          <label className="text-gray-600">
            Langganan PLUS mulai{" "}
            <span className="text-black font-bold">Rp15 rb/bulan</span>
          </label>
        </OtaCol>
      </Card>

      <OtaCol className="gap-6">
        <OtaRow className="px-4 w-full">
          <div className="w-[15%]">
            <img
              className="w-6 h-6"
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9deb8233.png"
            />
          </div>

          <OtaCol className="w-[85%]" gap={1}>
            <OtaRow className="text-sm" mainAxis="between">
              <label>Gopay</label>
              <label>Rp100.000</label>
            </OtaRow>
            <OtaRow className="text-xs text-gray-500" mainAxis="between">
              <label>Gopay Coins</label>
              <label>0 Coins</label>
            </OtaRow>
          </OtaCol>
        </OtaRow>

        <OtaRow className="px-4 w-full">
          <div className="w-[15%]">
            <img
              className="w-6 h-6"
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/60674228.png"
            />
          </div>

          <OtaRow className="w-[85%] text-sm" mainAxis="between">
            <label>Saldo</label>
            <label>Rp9.429.500</label>
          </OtaRow>
        </OtaRow>

        <OtaRow className="px-4 w-full">
          <div className="w-[15%]">
            <img
              className="w-6 h-6"
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/5ca9b45d.png"
            />
          </div>

          <label className="w-[85%] text-sm font-semibold text-green-400">
            + Daftar Tokepedia Card
          </label>
        </OtaRow>

        <OtaRow className="px-4 w-full">
          <div className="w-[15%]">
            <img
              className="w-6 h-6"
              src="https://assets.tokopedia.net/asts/rewards/icons/RewardsGold.svg"
            />
          </div>

          <OtaCol className="w-[85%] text-sm" gap={1}>
            <label className="font-semibold">
              Member <span className="text-orange-400">Gold</span>
            </label>
            <OtaCol className="pl-2 w-full text-sm" gap={2}>
              <OtaRow mainAxis="between">
                <label>Toko Member</label>
                <label>0</label>
              </OtaRow>
              <OtaRow mainAxis="between">
                <label>Misi Seru</label>
                <label>5</label>
              </OtaRow>
              <OtaRow mainAxis="between">
                <label>Kupon Saya</label>
                <label>22</label>
              </OtaRow>
            </OtaCol>
          </OtaCol>
        </OtaRow>
      </OtaCol>
    </OtaCol>
  );
};

export default Profile;
