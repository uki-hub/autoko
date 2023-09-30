import { useState } from "react";
import OtaLine from "../components/UI-OTA/ota-line.tsx";
import ProductReview from "../components/pages/product/review/product-review.tsx";
import ProductDiscuss from "../components/pages/product/discuss/product-discuss.tsx";
import Product from "../components/pages/product/product.tsx";
import RecommendedProducts from "../components/pages/product/recommended/recommended-products.tsx";
import RecommendedMerchants from "../components/pages/product/recommended/recommended-merchant.tsx";

const ProductPage = () => {
  type Menu = "review" | "diskusi";

  const [menu, setMenu] = useState<Menu>("review");

  return (
    <div className="flex flex-col gap-6 pb-5">
      <Product />
      <div className="flex flex-row gap-6 text-lg font-normal border-b-[1px] w-full mt-4 border-buttonColor text-highlightColor">
        <label
          className={
            "cursor-pointer " +
            (menu == "review"
              ? "px-2 font-bold text-primary border-b-2 border-b-primary"
              : "")
          }
          onClick={() => setMenu("review")}
        >
          Ulasan
        </label>
        <label
          className={
            "cursor-pointer " +
            (menu == "diskusi"
              ? "px-2 font-bold text-primary border-b-2 border-b-primary"
              : "")
          }
          onClick={() => setMenu("diskusi")}
        >
          Diskusi
        </label>
      </div>
      <div className="w-full">
        {menu == "review" && <ProductReview />}
        {menu == "diskusi" && <ProductDiscuss />}
      </div>
      <OtaLine width={0.8} className="!bg-buttonColor" />
      <RecommendedProducts title="Lainnya di toko ini" />
      <OtaLine width={0.8} className="!bg-buttonColor" />
      <RecommendedProducts title="Pilihan lainnya untukmu" />
      <OtaLine width={0.8} className="!bg-buttonColor" />
      <RecommendedMerchants />
    </div>
  );
};

export default ProductPage;
