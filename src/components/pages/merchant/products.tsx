import ProductCard from "../../product/product-card.tsx";

const Products = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-x-3 gap-y-4 w-full">
        {Array(20)
          .fill(null)
          .map((_) => (
            <ProductCard
              hideLocation={true}
              className="!shadow !min-w-min !h-min"
            />
          ))}
      </div>
      <div className="flex flex-row justify-end gap-4 mt-4 text-[1.05rem] font-semibold text-background">
        <label>&lt;</label>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <label
              className={
                i == 0
                  ? "text-primary font-bold underline underline-offset-4`"
                  : ""
              }
            >
              {i + 1}
            </label>
          ))}
        <label>...</label>
        <label>999</label>
      </div>
    </>
  );
};

export default Products;
