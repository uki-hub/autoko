import OtaRepeater from "../../../../UI-OTA/builder/ota-repeater.tsx";
import OtaButton from "../../../../UI-OTA/ota-button.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaInputIcon from "../../../../UI-OTA/ota-input-icon.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../UI/card.tsx";

const Filter = () => {
  const searchIcon = (
    <svg
      className="unf-icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--NN500, #8D96AA)"
    >
      <path d="M20.53 19.46l-4.4-4.4a7.33 7.33 0 10-1.07 1.06l4.41 4.41a.77.77 0 001.06 0 .77.77 0 000-1.07zm-15.78-9a5.75 5.75 0 115.75 5.75 5.76 5.76 0 01-5.75-5.72v-.03z"></path>
    </svg>
  );

  return (
    <OtaCol className=" bg-white gap-2.5">
      <OtaRow className="h-10 gap-2.5" crossAxis="center">
        <OtaInputIcon
          className="h-full"
          placeholder="Cari transaksimu"
          icon={searchIcon}
        />
        <OtaInputIcon
          boxClassName="w-[30%] px-2 h-full"
          placeholder="Pilih tanggal transaksi"
          gap={2}
          icon={
            <img
              className="w-4 h-4"
              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/8c077721.png"
            />
          }
        />
        <OtaButton className="h-full px-8">Cari</OtaButton>
      </OtaRow>
      <OtaRow className="text-sm" crossAxis="center" gap={2}>
        <label className="font-bold mr-1">Kategori</label>
        <OtaRow className="overflow-x-auto hide-scrollbars" gap={2}>
          <OtaRepeater
            array={[
              "Belanja",
              "Top up & Tagihan",
              "Travel & Entertainment",
              "Keuangan",
            ]}
            f={(d) => (
              <Card className="!py-1.5 min-w-max !border-background">{d}</Card>
            )}
          />
        </OtaRow>
      </OtaRow>
    </OtaCol>
  );
};

export default Filter;
