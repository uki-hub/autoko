import OtaCounter from "../../../../UI-OTA/builder/ota-counter.tsx";
import OtaRepeaterEmpty from "../../../../UI-OTA/builder/ota-repeater-empty.tsx";
import OtaDataRepeater from "../../../../UI-OTA/builder/ota-repeater.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaLine from "../../../../UI-OTA/ota-line.tsx";
import Card from "../../../../UI/card.tsx";
import ReviewBar from "./review-bar.tsx";
import ReviewMessage from "./review-message.tsx";

const ReviewsMenu = () => {
  const bigstar = (
    <span className="inline-block">
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="var(--YN300, #FFC400)"
      >
        <path d="M21.57 9.14a2.37 2.37 0 00-1.93-1.63L15.9 7l-1.68-3.4a2.38 2.38 0 00-4.27 0L8.27 7l-3.75.54a2.39 2.39 0 00-1.32 4.04l2.71 2.64L5.27 18a2.38 2.38 0 002.35 2.79 2.42 2.42 0 001.11-.27l3.35-1.76 3.35 1.76a2.41 2.41 0 002.57-.23 2.369 2.369 0 00.89-2.29l-.64-3.73L21 11.58a2.38 2.38 0 00.57-2.44z"></path>
      </svg>
    </span>
  );

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

  return (
    <div className="flex flex-row gap-8">
      <div className="min-w-[15%]">
        <div className="sticky top-[100px] flex flex-col items-center gap-4">
          <div className="flex flex-row items-center">
            {bigstar}
            <label className="font-semibold text-6xl ml-2 text-primaryVariant">
              4.9
            </label>
            <label className="font-semibold text-background mt-auto">
              /5.0
            </label>
          </div>
          <div className="flex flex-col items-center">
            <label className="text-sm font-semibold text-primary">
              98% merasa puas !
            </label>
            <label className="text-xs font-semibold text-secondary">
              601 Rating • 224 Ulasan
            </label>
          </div>

          <div className="flex flex-col-reverse gap-2 w-full">
            <OtaRepeaterEmpty
              count={5}
              f={(i) => (
                <div className="flex flex-row gap-1 items-center">
                  {star}
                  <label className="text-sm font-semibold text-primaryVariant">
                    {i + 1}
                  </label>
                  <div className="relative rounded-full overflow-hidden h-1.5 w-full mx-1 bg-background">
                    <div className="absolute rounded-e-full left-0 top-0 w-[65%] h-full bg-primary"></div>
                  </div>
                  <label className="text-sm text-background">573</label>
                </div>
              )}
            />
          </div>
          <OtaCol gap={3} className="w-full text-sm text-primaryVariant">
            <OtaDataRepeater
              array={[
                "Kualitas Barang",
                "Pelayanan Penjual",
                "Kecepatan Penjual",
              ]}
              f={(d) => (
                <Card className="flex flex-row gap-2 items-center">
                  <Card className="w-min font-bold !p-1.5 bg-textSelectionColor text-primary">
                    4.9
                  </Card>
                  <div className="flex flex-col ">
                    <label>{d}</label>
                    <label className="text-xs text-highlightColor">
                      14.9 rb ulasan
                    </label>
                  </div>
                </Card>
              )}
            />
          </OtaCol>
        </div>
      </div>
      <OtaCol className="w-[85%]">
        <ReviewBar />
        {/* <ReviewBarv1 /> */}
        <OtaLine className="!bg-buttonColor my-4" width={0.8} />
        <label className="text-sm text-highlightColor mb-6">Menampilkan 10 dari 10000 ulasan</label>
        <OtaCol gap={6}>
          <OtaCounter count={6}>            
            <ReviewMessage />
          </OtaCounter>
        </OtaCol>
        <div className="relative flex flex-row justify-center gap-4 mt-2 font-semibold text-background">
          <label>&lt;</label>
          <OtaRepeaterEmpty
            count={5}
            f={(i) => (
              <label
                className={
                  i == 0
                    ? "text-primary font-bold underline underline-offset-4`"
                    : "font-normal"
                }
              >
                {i + 1}
              </label>
            )}
          />
          <label>...</label>
          <label>999</label>
          <label>&gt;</label>
          <label className="absolute right-0 ml-auto text-primary">
            Lihat semua Ulasan
          </label>
        </div>
      </OtaCol>
    </div>
  );
};

export default ReviewsMenu;
