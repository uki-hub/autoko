import OtaCol from "../components/UI-OTA/ota-col.tsx";
import OtaLine from "../components/UI-OTA/ota-line.tsx";
import OtaRow from "../components/UI-OTA/ota-row.tsx";
import Cart from "../components/pages/cart/cart.tsx";
import LastSeenProducts from "../components/pages/cart/recommended/last-seen-products.tsx";
import Wishlist from "../components/pages/cart/recommended/wishlist-products.tsx";
import SideBar from "../components/pages/cart/sidebar.tsx";
import RecommendedProducts from "../components/pages/product/recommended/recommended-products.tsx";

const CartPage = () => {
  return (
    <OtaCol gap={6}>
      <OtaRow className="gap-14">
        <Cart />
        <SideBar />
      </OtaRow>
      <OtaLine width={0.8} className="!bg-buttonColor" />
      <Wishlist />
      <OtaLine width={5} className="!bg-gray-100 col-span-2" />
      <LastSeenProducts />
      <OtaLine width={5} className="!bg-gray-100 col-span-2" />
      <RecommendedProducts title="Rekomendasi untukmu" />
    </OtaCol>
  );
};

export default CartPage;
