import AutoTokoAppBar from "../components/UI/appbar.tsx";
import CartPage from "./cart-page.tsx";
import HomePage from "./home-page.tsx";
import MerchantPage from "./merchant-page.tsx";
import MenuPage from "./menu-page.tsx";
import ProductPage from "./product-page.tsx";
import SearchPage from "./search-page.tsx";

const Index = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <AutoTokoAppBar />      
      <div className="flex flex-col w-10/12 sm:w-11/12 mt-[110px]">
        <HomePage />
        <SearchPage />
        <ProductPage />
        <MerchantPage />
        <CartPage />
        <MenuPage />
      </div>
    </div>
  );
};

export default Index;
