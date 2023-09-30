import { useState } from "react";
import OtaButtonOutlined from "../components/UI-OTA/ota-button-outlined.tsx";
import OtaButton from "../components/UI-OTA/ota-button.tsx";
import OtaLine from "../components/UI-OTA/ota-line.tsx";
import MainMenu from "../components/pages/merchant/menus/main-menu.tsx";
import ProductsMenu from "../components/pages/merchant/menus/products-menu.tsx";
import ReviewsMenu from "../components/pages/merchant/menus/reviews/reviews-menu.tsx";
import InfoMenu from "../components/pages/merchant/menus/info/info-menu.tsx";

type Menu = "Beranda" | "Produk" | "Ulasan" | "Info Toko";

const MerchantPage = () => {
  const star = (
    <span className="inline-block">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="var(--YN300, #FFC400)"
      >
        <path d="M21.57 9.14a2.37 2.37 0 00-1.93-1.63L15.9 7l-1.68-3.4a2.38 2.38 0 00-4.27 0L8.27 7l-3.75.54a2.39 2.39 0 00-1.32 4.04l2.71 2.64L5.27 18a2.38 2.38 0 002.35 2.79 2.42 2.42 0 001.11-.27l3.35-1.76 3.35 1.76a2.41 2.41 0 002.57-.23 2.369 2.369 0 00.89-2.29l-.64-3.73L21 11.58a2.38 2.38 0 00.57-2.44z"></path>
      </svg>
    </span>
  );

  const [menu, setMenu] = useState<Menu>("Beranda");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row gap-4">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            className="w-full h-full"
            src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/4/12/33e0de4a-0eb4-47c0-ade6-3255dcaaaf5f.png"
          ></img>
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-bold text-primary">Tokolaptopid</label>
          <label className="text-sm font-semibold mb-2 text-secondary">
            Online
          </label>
          <div className="flex flex-row gap-2">
            <OtaButton className="!py-1 !px-2 min-w-[10rem]">Follow</OtaButton>
            <OtaButtonOutlined className="!py-1 !px-2 min-w-[10rem]">
              Chat Penjual
            </OtaButtonOutlined>
            <OtaButtonOutlined className="!p-1 min-w-[2rem] text-center !border-highlightColor">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="var(--color-icon-enabled, #66bcbc)"
              >
                <path d="M18.28 14.85a2.89 2.89 0 00-2.36 1.21l-6.69-3.53a.38.38 0 01-.1 0A2.63 2.63 0 009.1 11h.09l7-3.2a2.85 2.85 0 002.12 1 2.95 2.95 0 10-3-2.88c.02.203.057.403.11.6L8.57 9.61a.83.83 0 00-.18.13 2.95 2.95 0 00-5.06 2.12 3 3 0 003 2.88 2.94 2.94 0 002.16-1c.028.026.058.05.09.07l6.84 3.61c-.01.13-.01.26 0 .39a3 3 0 003 2.88 2.949 2.949 0 002.196-5.09 2.95 2.95 0 00-2.196-.8l-.14.05zm0-10.5a1.45 1.45 0 110 2.89 1.52 1.52 0 01-1.45-1.44 1.46 1.46 0 011.45-1.45zm-12 8.89a1.52 1.52 0 01-1.45-1.44 1.45 1.45 0 111.45 1.44zm12 6a1.52 1.52 0 01-1.45-1.44 1.45 1.45 0 111.45 1.44z"></path>
              </svg>
            </OtaButtonOutlined>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 ml-auto">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center gap-1">
              {star}
              <label className="text-lg font-bold">4.9</label>
            </div>
            <label className="text-sm text-secondary">Rating & Ulasan</label>
          </div>
          <OtaLine
            orientation="vertical"
            width={0.8}
            className="!bg-buttonColor !h-1/2"
          />
          <div className="flex flex-col items-center">
            <label className="text-lg font-bold">± 4 Jam</label>
            <label className="text-sm text-secondary">Pesanan diproses</label>
          </div>
          <OtaLine
            orientation="vertical"
            width={0.8}
            className="!bg-buttonColor !h-1/2"
          />
          <div className="flex flex-col items-center">
            <label className="text-lg font-bold">07:30 - 23:59</label>
            <label className="text-sm text-secondary">Jam operasi toko</label>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 border-b-[1px] border-b-buttonColor">
        {["Beranda", "Produk", "Ulasan", "Info Toko"].map((l) => {
          const isSelected =
            menu == l
              ? " border-b-2 border-b-primary text-primary !font-bold"
              : "";

          return (
            <label
              className={`font-semibold  text-highlightColor p-2 text-center min-w-[5rem] cursor-pointer ${isSelected}`}
              onClick={() => setMenu(l as Menu)}
            >
              {l}
            </label>
          );
        })}
      </div>
      {menu == "Beranda" && <MainMenu/> }
      {menu == "Produk" && <ProductsMenu/> }
      {menu == "Ulasan" && <ReviewsMenu/> }
      {menu == "Info Toko" && <InfoMenu/> }
    </div>
  );
};

export default MerchantPage;
