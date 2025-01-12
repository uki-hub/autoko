import OtaButton from "../../UI-OTA/ota-button.tsx";
import OtaCol from "../../UI-OTA/ota-col.tsx";
import OtaLine from "../../UI-OTA/ota-line.tsx";
import OtaRow from "../../UI-OTA/ota-row.tsx";
import Card from "../../UI/card.tsx";

const SideBar = () => {
  const diskon = (
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
        d="M12.272 4.046A.65.65 0 0 0 12 4a.73.73 0 0 0-.57.21l-.8.7A5.41 5.41 0 0 1 7.94 6l-1.1.3a.68.68 0 0 0-.7.7L6 8.07a4.66 4.66 0 0 1-1 2.69l-.7.79a.67.67 0 0 0 0 1l.7.79A5 5 0 0 1 6 16l.1 1.12a.68.68 0 0 0 .7.7l1.2.1A4.63 4.63 0 0 1 10.73 19l.8.7a.72.72 0 0 0 1 0l.8-.7a5.37 5.37 0 0 1 2.68-1.08l1.1-.1a.68.68 0 0 0 .69-.7l.1-1.29a4.61 4.61 0 0 1 1.1-2.69l.7-.79a.67.67 0 0 0 0-1l-.7-.79a5.33 5.33 0 0 1-1.11-2.67l-.1-1.09a.68.68 0 0 0-.69-.7L16 6a4.61 4.61 0 0 1-2.7-1.1l-.8-.7a.65.65 0 0 0-.228-.154zM10.2 2.7A2.57 2.57 0 0 1 12 2a2.7 2.7 0 0 1 1.82.7l.8.59a2.57 2.57 0 0 0 1.6.7l1 .1a2.87 2.87 0 0 1 2.59 2.59l.1 1.09a2.87 2.87 0 0 0 .7 1.59l.7.8a2.73 2.73 0 0 1 0 3.58l-.7.8a2.53 2.53 0 0 0-.7 1.59l-.1 1.09a2.87 2.87 0 0 1-2.59 2.59l-1.1.1a2.93 2.93 0 0 0-1.6.7l-.8.69a2.53 2.53 0 0 1-1.79.7 3.12 3.12 0 0 1-1.8-.7l-.79-.69a2.57 2.57 0 0 0-1.6-.7l-1-.1a2.87 2.87 0 0 1-2.59-2.59l-.1-1.09a2.9 2.9 0 0 0-.7-1.59l-.7-.8a2.71 2.71 0 0 1 0-3.58l.7-.8a2.53 2.53 0 0 0 .7-1.59l.1-1.09a2.78 2.78 0 0 1 2.46-2.59l1.1-.1a2.27 2.27 0 0 0 1.6-.6l.89-.69zM8 14.54l6.42-6.37a.82.82 0 0 1 1.16.1.81.81 0 0 1 .1 1.19L9.3 15.83a1.42 1.42 0 0 1-.6.2.858.858 0 0 1-.6-.3.81.81 0 0 1-.1-1.19zm6.42-1.3a1.4 1.4 0 1 0 1.4 1.4 1.308 1.308 0 0 0-1.4-1.4zm-4.302-2.476A1.4 1.4 0 0 1 9.34 11a1.36 1.36 0 0 1-1.4-1.4 1.4 1.4 0 1 1 2.178 1.164z"
        fill="#384061"
      />
    </svg>
  );

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 40 40"
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="24" cy="24" r="24" />
        <path
          stroke="#5d6ba2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="M16.53 27.47l7.202-7.202m-7.202-7.2l7.202 7.203"
        />
      </g>
    </svg>
  );

  return (
    <Card className="sticky top-[110px] w-[30%] h-min !shadow !py-4 !px-0">
      <OtaCol gap={4}>
        <Card className="mx-4 !py-3">
          <OtaRow crossAxis="center">
            {diskon}
            <label className="ml-2 mr-auto font-semibold text-secondary">Makin hemat pakai promo</label>
            {arrow}
          </OtaRow>
        </Card>
        <OtaLine width={5} className="!bg-gray-200" />
        <OtaCol gap={4} className="px-4">
          <label className="text-lg font-bold">Ringkasan Belanja</label>
          <OtaRow className="text-gray-500" mainAxis="between">
            <label>Total Harga (1 barang)</label>
            <label>Rp125.000</label>
          </OtaRow>
          <OtaLine width={0.8} className="!bg-buttonColor" />
          <OtaRow className="text-lg font-bold" mainAxis="between">
            <label>Total Harga</label>
            <label>Rp125.000</label>
          </OtaRow>
          <OtaButton className="!py-3 !text-lg mt-2">Beli(1)</OtaButton>
        </OtaCol>
      </OtaCol>
    </Card>
  );
};

export default SideBar;
