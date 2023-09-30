import { useState } from "react";
import Card from "../../../UI/card.tsx";
import DescriptionContent from "./contents/description-content.tsx";
import DetailContent from "./contents/detail-content.tsx";
import VarianContent from "./contents/varian-content.tsx";
import InfoContent from "./contents/info-content.tsx";

const ProductDesc = () => {
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

  type Content = "Deskripsi" | "Detail" | "Varian" | "Info Penting";

  const [content, setContent] = useState<Content>("Deskripsi");

  return (
    <div className="flex flex-col">
      <label className="text-xl font-bold mb-2">
        Fantech MK857 Maxfit61 Wired Mechanical Gaming Keyboard - Hitam, Blue
        Switch
      </label>
      <div className="flex flex-row items-center gap-5 text-primary">
        <span className="flex flex-row items-center">
          {star}
          <span className="ml-1 font-semibold">4.9&nbsp;</span>
          <span className="text-highlightColor">(459 Rating)</span>
        </span>

        <span className="flex flex-row items-center">
          {/* {star} */}
          <span className="ml-1 font-semibold">Terjual&nbsp;</span>
          <span className="text-highlightColor">750+</span>
        </span>

        <span className="flex flex-row items-center">
          {/* {star} */}
          <span className="ml-1 font-semibold">Diskusi&nbsp;</span>
          <span className="text-highlightColor">32</span>
        </span>
      </div>
      <div className="flex flex-col mt-4 gap-1">
        <div className="flex flex-row justify-between">
          <label className="text-3xl font-bold">Rp385.000</label>
          <div className="flex flex-row gap-2 items-center">
            <span className="cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="var(--NN950, #66bcbc)"
                data-testid="viewUnwishlisted"
              >
                <path d="M12.11 20.81a1.61 1.61 0 01-.92-.28c-2.14-1.28-6-4-7.92-7.64a6.8 6.8 0 010-7.12 5.39 5.39 0 014.6-2.54A5.1 5.1 0 0112 5.55a5.14 5.14 0 014.24-2.32 5.5 5.5 0 014.56 2.56 7.62 7.62 0 01.15 7c-2.31 4.17-7 7.15-8 7.7a1.63 1.63 0 01-.84.32zM7.87 4.73a3.89 3.89 0 00-3.4 1.87c-.18.27-1.6 2.45.13 5.59 1.7 3.32 5.4 5.86 7.4 7.08a.19.19 0 00.2 0c.56-.34 5.29-3.25 7.43-7.1a6.11 6.11 0 00-.09-5.6 4 4 0 00-3.29-1.86 4.12 4.12 0 00-3.57 2.61L12 8.68l-.67-1.34c-.84-1.68-2.07-2.61-3.46-2.61z"></path>
              </svg>
            </span>
            <span className="cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="var(--color-icon-enabled, #5d6ba2)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.66 21.67a.84.84 0 00.34.08.74.74 0 00.45-.15l3.8-2.85H17A3.71 3.71 0 0020.75 15V7A3.71 3.71 0 0017 3.25H7A3.71 3.71 0 003.25 7v14a.76.76 0 00.41.67zM6.13 4.907A2.2 2.2 0 017 4.75h10A2.2 2.2 0 0119.25 7v8A2.2 2.2 0 0117 17.25H8a.74.74 0 00-.45.15l-2.8 2.1V7a2.2 2.2 0 011.38-2.093zM16 9.74H8a.75.75 0 010-1.5h8a.75.75 0 110 1.5zm-3 4H8a.75.75 0 110-1.5h5a.75.75 0 110 1.5z"
                ></path>
              </svg>
            </span>
            <span className="cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="var(--color-icon-enabled, #4c5885)"
              >
                <path d="M18.28 14.85a2.89 2.89 0 00-2.36 1.21l-6.69-3.53a.38.38 0 01-.1 0A2.63 2.63 0 009.1 11h.09l7-3.2a2.85 2.85 0 002.12 1 2.95 2.95 0 10-3-2.88c.02.203.057.403.11.6L8.57 9.61a.83.83 0 00-.18.13 2.95 2.95 0 00-5.06 2.12 3 3 0 003 2.88 2.94 2.94 0 002.16-1c.028.026.058.05.09.07l6.84 3.61c-.01.13-.01.26 0 .39a3 3 0 003 2.88 2.949 2.949 0 002.196-5.09 2.95 2.95 0 00-2.196-.8l-.14.05zm0-10.5a1.45 1.45 0 110 2.89 1.52 1.52 0 01-1.45-1.44 1.46 1.46 0 011.45-1.45zm-12 8.89a1.52 1.52 0 01-1.45-1.44 1.45 1.45 0 111.45 1.44zm12 6a1.52 1.52 0 01-1.45-1.44 1.45 1.45 0 111.45 1.44z"></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <Card className="!p-1 text-xs bg-primary text-onPrimary font-semibold">
            16%
          </Card>
          <label className="line-through text-highlightColor">Rp459.000</label>
        </div>
      </div>
      {/* <OtaLine className="mt-6 mb-4 !bg-buttonColor" /> */}
      <div className="flex flex-row gap-4 border-y-[1px] mt-6 mb-2 text-highlightColor">
        {["Deskripsi", "Detail", "Varian", "Info Penting"].map((d) => {
          const isSelected = d == content;

          return (
            <label
              className={`h-full min-w-[20%] text-center py-2 cursor-pointer ${
                isSelected &&
                "font-bold border-b-2 text-primary border-b-primary"
              }`}
              onClick={() => setContent(d as Content)}
            >
              {d}
            </label>
          );
        })}
      </div>
      <div className="text-[14px]">
        {content == "Deskripsi" && <DescriptionContent />}
        {content == "Detail" && <DetailContent />}
        {content == "Varian" && <VarianContent />}
        {content == "Info Penting" && <InfoContent />}
      </div>
    </div>
  );
};

export default ProductDesc;
