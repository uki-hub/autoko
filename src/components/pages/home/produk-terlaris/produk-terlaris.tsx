import Card from "../../../UI/card.tsx";
import styles from "./produk-terlaris.module.css";

const ProdukTerlaris = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-end mb-5 flex-wrap sm:flex-col sm:items-start">
          <h3 className="font-bold text-xl mr-2">Produk Terlaris</h3>
          <div>
            <label>Cari produk mu&nbsp;</label>
            <label className="font-bold text-primary cursor-pointer">
              Lihat Semua
            </label>
          </div>
        </div>
      </div>
      <Card className={styles._}>
        <img src="https://images.tokopedia.net/img/WVCyGU/2023/7/6/7039c788-5fca-4dd8-b056-bb61b554d450.jpg" />
      </Card>
    </>
  );
};

export default ProdukTerlaris;
