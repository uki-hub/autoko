import Card from "../../../UI/card.tsx";
import ProductCard from "../../../product/product-card.tsx";

const ProdukMungkinMenarik = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-end mb-5 flex-wrap sm:flex-col sm:items-start">
          <h3 className="font-bold text-xl mr-1">Produk menarik</h3>
          <label className="text-secondary">*berdasarkan pencarian kamu</label>
        </div>
      </div>
      <Card className="grid grid-cols-6 gap-x-3 gap-y-4 sm:grid-cols-2">
        {Array(20).fill(null).map(_ => <ProductCard className="!min-w-0" />)}
        
      </Card>
    </>
  );
};

export default ProdukMungkinMenarik;
