import { useState } from "react";
import styles from "./review-message.module.css";
import Card from "../../../UI/card.tsx";
import OtaCounter from "../../../UI-OTA/builder/ota-counter.tsx";

type Props = {
  hideVarian?: boolean;
};

const ReviewMessage = (props: Props = { hideVarian: false }) => {
  const activestar = (
    <span className="inline-block">
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="var(--YN300, #FFC400)"
      >
        <path d="M21.57 9.14a2.37 2.37 0 00-1.93-1.63L15.9 7l-1.68-3.4a2.38 2.38 0 00-4.27 0L8.27 7l-3.75.54a2.39 2.39 0 00-1.32 4.04l2.71 2.64L5.27 18a2.38 2.38 0 002.35 2.79 2.42 2.42 0 001.11-.27l3.35-1.76 3.35 1.76a2.41 2.41 0 002.57-.23 2.369 2.369 0 00.89-2.29l-.64-3.73L21 11.58a2.38 2.38 0 00.57-2.44z"></path>
      </svg>
    </span>
  );

  const unactivestar = (
    <span className="inline-block">
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="var(--YN300, #D3D3D3)"
      >
        <path d="M21.57 9.14a2.37 2.37 0 00-1.93-1.63L15.9 7l-1.68-3.4a2.38 2.38 0 00-4.27 0L8.27 7l-3.75.54a2.39 2.39 0 00-1.32 4.04l2.71 2.64L5.27 18a2.38 2.38 0 002.35 2.79 2.42 2.42 0 001.11-.27l3.35-1.76 3.35 1.76a2.41 2.41 0 002.57-.23 2.369 2.369 0 00.89-2.29l-.64-3.73L21 11.58a2.38 2.38 0 00.57-2.44z"></path>
      </svg>
    </span>
  );

  const more = (
    <svg
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

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-1 text-sm">
      <div className="flex flex-row items-center gap-1">
        <div className="w-8 h-8 bg-secondary rounded-full overflow-hidden" />
        <span className="font-semibold ml-1 mr-2">Uki</span>
        <div className="flex flex-row items-center mr-auto">
          {Array(5)
            .fill(null)
            .map((_, i) => (i >= 3 ? unactivestar : activestar))}
          <span className="font-semibold ml-1 text-gray-500">1 hari lalu</span>
        </div>
        {more}
      </div>
      <div className="grid grid-flow-col grid-cols-5 gap-1 max-w-[400px]">
        <OtaCounter randomize={true} min={0} max={5}>
          <Card className="!p-0 cursor-pointer mt-2">
            <img
              className="w-full h-16"
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/2/3e45d4b3-36dc-4cf3-b503-17c9732c7f44.jpg.webp?ect=4g"
            />
          </Card>
        </OtaCounter>
      </div>
      {!props.hideVarian && (
        <label className="text-gray-500">Varian: Hitam - Red Switch</label>
      )}
      <div className={expanded ? "" : styles.wrap}>
        overall sebenernya oke² aja sih cuma ada 2 point yg jadi minusnya yaitu
        1. pengiriman yg agak lama tapi ini masih di maklumi 2. kualitas produk
        yg menurut gua ada cacat di bagian bawah yaitu bagian kakinya itu
        tingginya gak sama dan itu cukup annoying banget. mungkin ini cuma
        terjadi di produk yg gua beli aja tapi selebihnya oke.
      </div>
      <label
        className="cursor-pointer text-[14px] font-bold text-primary"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
      </label>
    </div>
  );
};

export default ReviewMessage;
