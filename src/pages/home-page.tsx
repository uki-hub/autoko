import OtaLine from "../components/UI-OTA/ota-line.tsx";
import BrandTrending from "../components/pages/home/brand-trending/brand-trending.tsx";
import DiskonSpesial from "../components/pages/home/diskon-spesial/diskon-spesial.tsx";
import KategoriPilihan from "../components/pages/home/kategori-pilihan/kategori-pilihan.tsx";
import Kategori from "../components/pages/home/kategori/kategori.tsx";
import NewsBanner from "../components/pages/home/news-banner.tsx";
import ProdukMungkinMenarik from "../components/pages/home/produk-mungkin-menarik/produk-mungkin-menarik.tsx";
import ProdukTerlaris from "../components/pages/home/produk-terlaris/produk-terlaris.tsx";
import TopUpTagihan from "../components/pages/home/top-up-tagihan/top-up-tagihan.tsx";

const HomePage = () => {
  return (
    <>
      <NewsBanner />
      <div className="flex flex-row gap-4 h-50 sm:flex-col my-[20px]">
        <KategoriPilihan />
        <TopUpTagihan />
      </div>
      <Kategori />
      <OtaLine width={0.8} className="!bg-buttonColor my-7" />
      <DiskonSpesial />
      <OtaLine width={0.8} className="!bg-buttonColor my-7" />
      <DiskonSpesial />
      <OtaLine width={0.8} className="!bg-buttonColor my-7" />
      <ProdukTerlaris />
      <OtaLine width={0.8} className="!bg-buttonColor my-7" />
      <BrandTrending />
      <OtaLine width={0.8} className="!bg-buttonColor my-7" />
      <ProdukMungkinMenarik />
      <OtaLine width={0.8} className="!bg-buttonColor my-7" />
    </>
  );
};

export default HomePage;
