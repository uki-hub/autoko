import ProductCard from "../../../product/product-card.tsx";

const RecommendedProducts = (props: {title: string }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-end mb-4">
        <label className="text-2xl font-bold">{props.title}</label>
        <label className="font-bold text-primary">Lihat Semuanya</label>
      </div>

      <div className="grid grid-cols-6 gap-x-3 gap-y-4 w-full">
        {Array(12)
          .fill(null)
          .map((_) => (
            <ProductCard
              hideLocation={true}
              className="!shadow !min-w-min !h-min"
            />
          ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
