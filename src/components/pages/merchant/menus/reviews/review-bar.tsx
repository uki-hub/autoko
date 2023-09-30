import { useState } from "react";
import Card from "../../../../UI/card.tsx";
import OtaLine from "../../../../UI-OTA/ota-line.tsx";
import OtaRepeater from "../../../../UI-OTA/builder/ota-repeater.tsx";
import OtaRepeaterEmpty from "../../../../UI-OTA/builder/ota-repeater-empty.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaInputIcon from "../../../../UI-OTA/ota-input-icon.tsx";

const ReviewBar = () => {
  const star = (
    <span className="inline-block">
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="var(--YN300, #FFC400)"
      >
        <path d="M21.57 9.14a2.37 2.37 0 00-1.93-1.63L15.9 7l-1.68-3.4a2.38 2.38 0 00-4.27 0L8.27 7l-3.75.54a2.39 2.39 0 00-1.32 4.04l2.71 2.64L5.27 18a2.38 2.38 0 002.35 2.79 2.42 2.42 0 001.11-.27l3.35-1.76 3.35 1.76a2.41 2.41 0 002.57-.23 2.369 2.369 0 00.89-2.29l-.64-3.73L21 11.58a2.38 2.38 0 00.57-2.44z"></path>
      </svg>
    </span>
  );

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

  const [show, setShow] = useState(true);

  return !show ? (
    <div onClick={() => setShow(true)}>
      <Card className="flex flex-row">
        <label className="ml-2 font-semibold text-base ">Filter Ulasan</label>
        <label>^</label>
      </Card>
    </div>
  ) : (
    <Card className="flex flex-row text-sm !py-0 overflow-x-auto">
      <div className="flex flex-col py-2 min-w-max">
        <label className="mx-2 mb-2 font-semibold text-base ">
          Filter Ulasan
        </label>
        <div className="flex flex-col gap-2 px-2">
          <div className="flex flex-row items-center gap-2 ">
            <input type="checkbox" className="w-4 h-4 !outline-white" />
            <label>Dengan Photo & Video</label>
          </div>
          <OtaLine className="!bg-buttonColor" width={0.8} />
          <div className="flex flex-row items-center gap-2">
            <input type="checkbox" className="w-4 h-4 !outline-white" />
            <label>Terbaru</label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input type="checkbox" className="w-4 h-4 !outline-white" />
            <label>Terlama</label>
          </div>
          <OtaLine className="!bg-buttonColor" width={0.8} />
          <div className="flex flex-row items-center gap-2 ">
            <input type="checkbox" className="w-4 h-4 !outline-white" />
            <label>Rating Tertinggi</label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input type="checkbox" className="w-4 h-4 !outline-white" />
            <label>Rating Terendah</label>
          </div>
        </div>
      </div>
      <OtaLine
        orientation="vertical"
        width={0.8}
        className="!bg-buttonColor mx-4 min-w-[0.8px] !h-[90%] my-auto"
      />
      <div className="flex flex-col py-2 min-w-max">
        <label className="mb-2 font-semibold text-base">Rating</label>
        <div className="flex flex-col-reverse w-full gap-2">
          <OtaRepeaterEmpty
            count={5}
            f={(i) => (
              <div className="flex flex-row items-center gap-2">
                <input type="checkbox" className="w-4 h-4 !outline-white" />
                <div className="flex flex-row items-center">
                  {star}&nbsp;{i + 1}
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <OtaLine
        orientation="vertical"
        width={0.8}
        className="!bg-buttonColor mx-4 min-w-[0.8px] !h-[90%] my-auto "
      />
      <div className="flex flex-col py-2 min-w-max">
        <label className="mx-2 mb-2 font-semibold text-base ">Produk</label>
        <OtaCol gap={2} className="px-2">
          <OtaRow gap={2} crossAxis="start">
            <Card className="w-12 h-12 !p-0">
              <img
                src={
                  "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/2/3e45d4b3-36dc-4cf3-b503-17c9732c7f44.jpg.webp?ect=4g"
                }
              />
            </Card>
            <label className="w-64 font-semibold line-clamp-2">
              Fantech MK857 Maxfit61 Wired Mechanical Gaming Keyboard Fantech
              MK857 Maxfit61 Wired Mechanical Gaming Keyboard
            </label>
          </OtaRow>
          <OtaInputIcon
            className="text-ellipsis"
            icon={searchIcon}
            placeholder="Fantech MK857 Maxfit61 Wired Mechanical Gaming Keyboard Fantech
              MK857 Maxfit61 Wired Mechanical Gaming Keyboard"
          />
        </OtaCol>
      </div>
      <OtaLine
        orientation="vertical"
        width={0.8}
        className="!bg-buttonColor mx-4 min-w-[0.8px] !h-[90%] my-auto"
      />
      <div className="flex flex-col py-2 !overflow-visible min-w-max">
        <label className="mb-2 font-semibold text-base">
          Varian&nbsp;
          <span className="font-normal text-gray-400">(Warna)</span>
        </label>
        <div className="grid grid-flow-col grid-rows-5 gap-2 max-h-[150px]">
          <OtaRepeater
            array={[
              "Hitam",
              "Putih",
              "Biru",
              "Pink",
              "Merah",
              "Hijau",
              "Abu Abu",
            ]}
            f={(d) => (
              <div className="flex flex-row items-center gap-2">
                <input disabled={Math.round(Math.random()) == 1} type="checkbox" className="w-4 h-4 !outline-white" />
                <div className="flex flex-row items-center">{d}</div>
              </div>
            )}
          />
        </div>
      </div>
      <OtaLine
        orientation="vertical"
        width={0.8}
        className="!bg-buttonColor mx-4 min-w-[0.8px] !h-[90%] my-auto"
      />
      <div className="flex flex-col py-2 !overflow-visible min-w-max">
        <label className="mb-2 font-semibold text-base">
          Varian&nbsp;
          <span className="font-normal text-gray-400">(Switch)</span>
        </label>
        <div className="grid grid-flow-col grid-rows-5 gap-2 max-h-[150px]">
          <OtaRepeater
            array={["Biru", "Cokelat", "Merah"]}
            f={(d) => (
              <div className="flex flex-row items-center gap-2">
                <input disabled={Math.round(Math.random()) == 1} type="checkbox" className="w-4 h-4 !outline-white" />
                <div className="flex flex-row items-center">{d}</div>
              </div>
            )}
          />
        </div>
      </div>
      <OtaLine
        orientation="vertical"
        width={0.8}
        className="!bg-buttonColor mx-4 min-w-[0.8px] !h-[90%] my-auto"
      />
      <div className="flex flex-col py-2 !overflow-visible min-w-max">
        <label className="mb-2 font-semibold text-base">
          Varian&nbsp;
          <span className="font-normal text-gray-400">(Switch)</span>
        </label>
        <div className="grid grid-flow-col grid-rows-5 gap-2 max-h-[150px]">
          <OtaRepeater
            array={["Biru", "Cokelat", "Merah"]}
            f={(d) => (
              <div className="flex flex-row items-center gap-2">
                <input disabled={Math.round(Math.random()) == 1} type="checkbox" className="w-4 h-4 !outline-white" />
                <div className="flex flex-row items-center">{d}</div>
              </div>
            )}
          />
        </div>
      </div>
    </Card>
  );
};

export default ReviewBar;
