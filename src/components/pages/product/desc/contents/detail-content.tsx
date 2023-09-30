import OtaButtonOutlined from "../../../../UI-OTA/ota-button-outlined.tsx";
import OtaLine from "../../../../UI-OTA/ota-line.tsx";
import styles from "./detail-content.module.css";

const DetailContent = () => {
  const hollowStar = (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="var(--NN600, #6D7588)"
    >
      <path d="M7.62 20.74A2.381 2.381 0 015.27 18l.64-3.73-2.71-2.69a2.39 2.39 0 011.32-4.07L8.27 7 10 3.57a2.38 2.38 0 014.27 0L15.9 7l3.74.54A2.39 2.39 0 0121 11.58l-2.72 2.64.61 3.78a2.37 2.37 0 01-.89 2.29 2.41 2.41 0 01-2.52.18l-3.35-1.76-3.4 1.76a2.42 2.42 0 01-1.11.27zm4.46-17a.87.87 0 00-.79.5l-2 4.1L4.74 9a.89.89 0 00-.49 1.51l3.27 3.19-.77 4.51a.87.87 0 00.35.86.89.89 0 00.94.07l4-2.13 4 2.13a.89.89 0 001.29-.93l-.78-4.51 3.28-3.19a.89.89 0 00-.4-1.51l-4.53-.66-2-4.1a.88.88 0 00-.82-.5z"></path>
    </svg>
  );

  const clock = (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="var(--NN600, #6D7588)"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.584 3.882A9.75 9.75 0 0112 2.24 9.76 9.76 0 0121.75 12 9.75 9.75 0 116.584 3.882zm.832 14.967A8.25 8.25 0 0012 20.24 8.26 8.26 0 0020.25 12a8.25 8.25 0 10-12.834 6.849zm5.334-7.599H16a.75.75 0 110 1.5h-4a.76.76 0 01-.75-.75V7a.75.75 0 111.5 0v4.25z"
      ></path>
    </svg>
  );

  return (
    <div className={styles._}>
      <label>Kondisi</label>
      <label>:</label>
      <span>Baru</span>
      <OtaLine className="col-span-3 self-center !h-[0.3px] !bg-buttonColor" />
      <label>Min. Pemesanan</label>
      <label>:</label>
      <span>1</span>
      <OtaLine className="col-span-3 self-center !h-[0.3px] !bg-buttonColor" />
      <label>Dikirim dari</label>
      <label>:</label>
      <span>Jakarta Pusat</span>
      <OtaLine className="col-span-3 self-center !h-[0.3px] !bg-buttonColor" />
      <label>Berat</label>
      <label>:</label>
      <span>0.5 kg</span>
      <OtaLine className="col-span-3 self-center !h-[0.3px] !bg-buttonColor" />
      <label>Dimensi</label>
      <label>:</label>
      <span>310mm x 150mm</span>
      <OtaLine className="col-span-3 self-center !h-[0.3px] !bg-buttonColor" />
      <label>Kurir</label>
      <label>:</label>
      <span>{["JNE", "Si-Cepat", "Tiki", "Lion Parcel"].join(", ")}</span>
      <OtaLine className="col-span-3 self-center h-[0.3px] !bg-buttonColor" />
      <div className="col-span-3 py-2">
        <div className="flex flex-row w-full gap-2 items-center">
          <div className="w-16 h-16 rounded-full bg-secondary overflow-hidden">
            <img
              className="w-full h-full"
              src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/4/12/33e0de4a-0eb4-47c0-ade6-3255dcaaaf5f.png"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-center">
              <span className="text-lg !font-semibold !text-black">Tokolaptopid</span>
              <OtaButtonOutlined className="h-6 !py-0 !px-2 !text-xs !font-bold">Follow</OtaButtonOutlined>
            </div>
            <label className="!text-highlightColor">
              Online
              <span className="!text-primary font-semibold">1 jam lalu</span>
            </label>
            <div className="flex flex-row gap-4 mt-1 whitespace-nowrap">
              <div className="flex flex-row items-center gap-1 text-sm">
                <span className="mr-0.5">{hollowStar}</span>
                <span className="font-semibold">4.9</span>
                <span className="text-highlightColor">rata-rata ulasan</span>
              </div>
              <div className="flex flex-row items-center gap-1 text-sm">
                <span className="mr-0.5">{clock}</span>
                <span className="font-semibold">± 5 jam</span>
                <span className="text-highlightColor">pesanan diproses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
