import OtaCounter from "../../../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaLine from "../../../../UI-OTA/ota-line.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../UI/card.tsx";
import Catatan from "./catatan.tsx";
import styles from "./info-menu.module.css";

const InfoMenu = () => {
  return (
    <OtaCol gap={3} className="w-full pb-4">
      <OtaRow gap={3}>
        <OtaCol gap={3} className="w-[30%]">
          <Card className={styles._}>
            <label className="font-bold col-span-full text-lg">Info Toko</label>
            <label>Nama</label>
            <div>:</div>
            <div className="font-bold">Tokolaptoid</div>
            <OtaLine width={0.8} className="!bg-buttonColor col-span-full " />
            <label>Lokasi</label>
            <div>:</div>
            <div className="text-gray-500">Jakarta Utara</div>
            <OtaLine width={0.8} className="!bg-buttonColor col-span-full " />
            <label>Buka Sejak</label>
            <div>:</div>
            <div className="text-gray-500">Desember 2016</div>
            <OtaLine width={0.8} className="!bg-buttonColor col-span-full " />
            <label>Tipe</label>
            <div>:</div>
            <OtaRow
              crossAxis="center"
              className="font-semibold text-primaryVariant "
            >
              <img
                className="w-6 h-6 object-fill"
                src="https://images.tokopedia.net/img/official_store/badge_os.png"
              />
              <label>Official</label>
            </OtaRow>
            <OtaLine width={0.8} className="!bg-buttonColor col-span-full " />
            <label>Level</label>
            <div>:</div>
            <OtaRow
              crossAxis="center"
              gap={1}
              className="font-semibold text-secondary"
            >
              <img
                className="w-4 h-4 object-fill"
                src="https://ecs7.tokopedia.net/img/repsys/diamond-1.gif"
              />
              <label>Diamond</label>
            </OtaRow>
          </Card>

          <Card className="">
            <OtaCol gap={2}>
              <label className="font-bold text-lg">Deskripsi Toko</label>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                ullamcorper velit vitae ullamcorper congue. Duis faucibus ligula
                mollis, molestie nisi nec, dapibus elit. Donec commodo bibendum
                facilisis. Ut rhoncus orci enim, in semper nulla pretium a.
                Quisque consectetur purus mi, sed finibus augue placerat in.
                Aliquam varius nec arcu sit amet rutrum. Aliquam malesuada
                luctus suscipit. Vivamus in justo in eros vehicula euismod in ac
                tellus. Phasellus consequat justo fermentum, posuere sem eu, auc
              </div>
            </OtaCol>
          </Card>
        </OtaCol>

        <Card className="h-min max-h-[490px] w-[70%] !pb-4">
          <label className="font-bold text-lg">Catatan Toko</label>
          <OtaCol
            className="mt-2 overflow-y-auto overflow-x-hidden max-h-[430px]"
            gap={6}
          >
            <OtaCounter count={10}>
              <Catatan />
            </OtaCounter>
          </OtaCol>
        </Card>
      </OtaRow>
      <Card className="pb-3">
        <OtaCol gap={2}>
          <label className="font-bold text-lg">Layanan Pengiriman</label>
          <div className="grid grid-cols-6 gap-x-4 gap-y-3.5">
            <OtaCounter count={3}>
              <Card className="h-16">
                <OtaRow gap={2} crossAxis="center" className="h-full">
                  <img
                    className="w-14 h-full"
                    src="https://images.tokopedia.net/img/kurir-grab.png"
                  />
                  <OtaCol>
                    <label className="font-bold">GrabExpress</label>
                    <label className="text-xs text-gray-500">
                      Instant, Same Day
                    </label>
                  </OtaCol>
                </OtaRow>
              </Card>
            </OtaCounter>
          </div>
        </OtaCol>
      </Card>
    </OtaCol>
  );
};

export default InfoMenu;
