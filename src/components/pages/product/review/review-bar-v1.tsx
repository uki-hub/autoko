import OtaLine from "../../../UI-OTA/ota-line.tsx";
import Card from "../../../UI/card.tsx";

const ReviewBarv1 = () => {
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
    <div className="flex flex-row gap-3 text-sm">
      <Card className="flex flex-col !px-0">
        <label className="mx-2 font-semibold text-base ">Filter Ulasan</label>
        <OtaLine className="!bg-buttonColor mt-1 mb-2" />
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
      </Card>

      <Card className="flex flex-col !px-0">
        <label className="mx-2 font-semibold text-base">Rating</label>
        <OtaLine className="!bg-buttonColor mt-1 mb-2" />
        <div className="flex flex-col-reverse gap-2 px-2">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div className="flex flex-row items-center gap-2">
                <input type="checkbox" className="w-4 h-4 !outline-white" />
                <div className="flex flex-row items-center">
                  {star}&nbsp;{i + 1}
                </div>
              </div>
            ))}
        </div>
      </Card>
      <Card className="flex flex-col !px-0 !overflow-visible">
        <label className="mx-2 font-semibold text-base">
          Varian&nbsp;
          <span className="font-normal text-gray-400">(Warna)</span>
        </label>
        <OtaLine className="!bg-buttonColor mt-1 mb-2" />
        <div className="grid grid-flow-col grid-rows-5 gap-2 px-2 max-h-[150px]">
          {["Hitam", "Putih", "Biru", "Pink", "Merah", "Hijau", "Abu Abu"].map(
            (v) => (
              <div className="flex flex-row items-center gap-2">
                <input type="checkbox" className="w-4 h-4 !outline-white" />
                <div className="flex flex-row items-center">{v}</div>
              </div>
            )
          )}
        </div>
      </Card>
      <Card className="flex flex-col !px-0 !overflow-visible">
        <label className="mx-2 font-semibold text-base">
          Varian&nbsp;
          <span className="font-normal text-gray-400">(Switch)</span>
        </label>
        <OtaLine className="!bg-buttonColor mt-1 mb-2" />
        <div className="grid grid-flow-col grid-rows-5 gap-2 px-2 max-h-[150px]">
          {["Biru", "Cokelat", "Merah"].map((v) => (
            <div className="flex flex-row items-center gap-2">
              <input type="checkbox" className="w-4 h-4 !outline-white" />
              <div className="flex flex-row items-center">{v}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ReviewBarv1;
