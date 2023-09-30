import OtaCounter from "../../../../UI-OTA/builder/ota-counter.tsx";
import OtaButton from "../../../../UI-OTA/ota-button.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../UI/card.tsx";
import PaginationControl from "../../../../UI/pagination-control.tsx";

const TransactionList = () => {
  const moreIcon = (
    <svg
      className="ml-auto"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--color-icon-enabled, #5d6ba2)"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.48 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.5 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
    </svg>
  );

  return (
    <OtaCol className="gap-4">
      <OtaCounter count={10}>
        <Card className="shadow !py-5 !px-6">
          <OtaCol gap={4}>
            <OtaRow className="text-sm" gap={2} crossAxis="center">
              <img
                className="w-6 h-6"
                src="https://images.tokopedia.net/img/Belanja%20icon.png"
              />
              <label className="font-semibold">Belanja</label>
              <label>25 Apr 2023</label>
              <Card className="font-semibold !py-0.5 px-1.5 bg-secondary text-onSecondary">
                Selesai
              </Card>
              <label className="text-highlightColor">
                INV/20230425/MPL/3194795363
              </label>
              {moreIcon}
            </OtaRow>

            <OtaCol gap={2}>
              <OtaRow crossAxis="center" gap={1}>
                <img
                  className="w-4 h-4 object-fill"
                  src="https://images.tokopedia.net/img/official_store/badge_os.png"
                />
                <label className="text-sm font-semibold">Unilever Mall</label>
              </OtaRow>
              <OtaRow gap={3}>
                <img
                  className="h-16 w-16"
                  src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/5/31/4a7529a6-e64a-43c1-83bb-8bee829185ac.png.webp?ect=4g"
                />
                <OtaCol>
                  <label className="font-semibold">
                    Vaseline Healthy Bright Hand Body Lotion Spf 24 400 Ml
                  </label>
                  <label className="text-xs text-highlightColor">
                    2 barang x Rp56.063
                  </label>
                  <label className="text-xs text-highlightColor mt-auto">
                    +1 produk lainnya
                  </label>
                </OtaCol>

                <OtaCol
                  className="ml-auto border-l-[1px] pl-4"
                  mainAxis="center"
                >
                  <label className="text-sm text-highlightColor">
                    Total belanja
                  </label>
                  <label className="font-bold">Rp 193.898</label>
                </OtaCol>
              </OtaRow>
            </OtaCol>

            <OtaRow mainAxis="end" crossAxis="end" gap={4}>
              <label className="font-semibold text-sm text-secondary">
                Lihat detail transaksi
              </label>
              <OtaButton className="!font-bold !px-8 !py-2.5">
                Beli Lagi
              </OtaButton>
            </OtaRow>
          </OtaCol>
        </Card>
      </OtaCounter>
      <PaginationControl className="justify-center"/>
    </OtaCol>
  );
};

export default TransactionList;
