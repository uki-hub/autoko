import { useState } from "react";
import OtaButtonOutlined from "../../../UI-OTA/ota-button-outlined.tsx";
import OtaLine from "../../../UI-OTA/ota-line.tsx";
import Card from "../../../UI/card.tsx";
import OtaButton from "../../../UI-OTA/ota-button.tsx";
import styles from "./product-sidebar.module.css";

const ProductSidebar = () => {
  const [showCatatan, setShowCatatan] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="sticky top-28 flex flex-col gap-4">
        <Card className="flex flex-col gap-2 h-min pb-4">
          <label className="text-lg font-semibold">Atur belanja kamu</label>
          <div className="flex flex-row items-center gap-2 text-sm cursor-pointer">
            <img
              className="w-12 h-12"
              src="https://images.tokopedia.net/img/cache/150/VqbcmM/2022/9/29/f1cbd164-5133-4ce9-9078-8c24268b23e9.png"
            />
            <span>Hitam, Cokelat</span>
          </div>
          <OtaLine className="col-span-3 self-center !h-[0.3px] !bg-buttonColor my-2" />
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <Card className="flex flex-row items-center !px-0 !py-0.5 rounded-xl gap-4 w-min border-background">
                <div className="px-4 text-xl font-bold text-background">
                  <svg
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                    fill="var(--NN300, #bec4da)"
                  >
                    <path d="M20 12.75H4a.75.75 0 110-1.5h16a.75.75 0 110 1.5z"></path>
                  </svg>
                </div>
                <div className="text-lg font-semibold text-primaryVariant">
                  1
                </div>
                <div className="px-4 text-xl font-bold text-secondary">
                  <svg
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                    fill="var(--GN500, #4c5885)"
                  >
                    <path d="M20 11.25h-7.25V4a.75.75 0 10-1.5 0v7.25H4a.75.75 0 100 1.5h7.25V20a.75.75 0 101.5 0v-7.25H20a.75.75 0 100-1.5z"></path>
                  </svg>
                </div>
              </Card>
              <label>
                Stok:&nbsp;<span className="font-semibold">881</span>
              </label>
            </div>
            <label className="text-xs text-highlightColor">
              Max. pembelian 881 pcs
            </label>
          </div>
          <div className="flex flex-col gap-2 my-2">
            <div
              className="flex flex-row items-center gap-1 cursor-pointer"
              onClick={() => setShowCatatan(!showCatatan)}
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="var(--GN500, #4c5885)"
              >
                <path d="M21.32 5.26l-2.58-2.58a1.75 1.75 0 00-2.48 0l-12 12a1.73 1.73 0 00-.5 1l-.4 3.53a1.25 1.25 0 00.36 1c.236.23.551.358.88.36h.1l3.54-.4a1.73 1.73 0 001-.5l12-12a1.74 1.74 0 000-2.48l.08.07zM8.22 18.72a.23.23 0 01-.15.07l-3.22.36.36-3.22a.21.21 0 01.07-.15l9.22-9.22 2.94 2.94-9.22 9.22zm12-12L18.5 8.44 15.56 5.5l1.76-1.76a.24.24 0 01.36 0l2.58 2.58a.24.24 0 010 .36l-.04.04z"></path>
              </svg>

              <label className="text-sm font-semibold text-secondary cursor-pointer">
                Tambah Catatan
              </label>
            </div>

            {showCatatan && (
              <Card className="!text-sm !pr-0 h-32">
                <textarea
                  className="w-full h-full outline-none resize-none"
                  placeholder="catatan untuk penjual..."
                ></textarea>
              </Card>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-sm text-highlightColor line-through ml-auto">
              Rp485.000
            </label>
            <div className="flex flex-row justify-between">
              <label className="text-highlightColor">Subtotal</label>
              <span className="text-xl font-bold">Rp385.000</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <OtaButton>+ Keranjang</OtaButton>
            <OtaButtonOutlined>Beli Langsung</OtaButtonOutlined>
          </div>
        </Card>
        <Card className="flex flex-col gap-2">
          <label className="font-semibold">Promo</label>
          <div className="flex flex-row gap-1 overflow-x-scroll hide-scrollbar">
            <Card className={styles.promo}>
              <label className="text-sm">Cashback</label>
              <label className="text-lg font-semibold">10%</label>
              <label className="text-xs text-secondary">
                min. Pembelanjaan 100rb
              </label>
            </Card>

            <Card className={styles.promo}>
              <label className="text-sm">Cashback</label>
              <label className="text-lg font-semibold">6%</label>
              <label className="text-xs text-secondary">
                min. Pembelanjaan 50rb
              </label>
            </Card>
          </div>
          <label className="text-xs font-semibold text-secondary cursor-pointer">
            +3 Promo lainnya
          </label>
        </Card>
      </div>
    </div>
  );
};

export default ProductSidebar;
