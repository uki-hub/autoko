import DiscussBar from "./discuss-bar.tsx";
import DiscussCard from "./discuss-card.tsx";

const ProductDiscuss = () => {
  return (
    <div className="flex flex-col text-sm gap-4">
      <DiscussBar />
      <div className="w-[100%] grid grid-cols-2 gap-y-5 gap-x-4">
        {Array(6)
          .fill(null)
          .map((_) => (
            <DiscussCard />
          ))}
      </div>
      <div className="relative flex flex-row justify-center gap-4 mt-4 font-semibold text-background">
        <label>&lt;</label>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <label
              className={
                i == 0
                  ? "text-primary font-bold underline underline-offset-4`"
                  : "font-normal"
              }
            >
              {i + 1}
            </label>
          ))}
        <label>...</label>
        <label>999</label>
        <label>&gt;</label>
        <label className="absolute right-0 ml-auto text-primary">
          Lihat semua Ulasan
        </label>
      </div>
    </div>
  );
};

export default ProductDiscuss;
