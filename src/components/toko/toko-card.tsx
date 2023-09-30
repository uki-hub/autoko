import Card from "../UI/card.tsx";
import ProductCard from "../product/product-card.tsx";

type Props = {
  className?: string | undefined;
};

const TokoCard = (props: Props) => {
  return (
    <Card
      className={`flex flex-row items-center w-full shadow ${props.className}`}
    >
      <div className="flex flex-col gap-2 w-[40%] items-center text-center">
        <div className="w-16 h-16 rounded-full bg-secondary text-center mt-5">
          Image Toko
        </div>
        <label className="">%nama toko%</label>
      </div>
      <ProductCard
        hideLocation={true}
        className="!shadow !min-w-min !h-min !w-[60%]"
      />
    </Card>
  );
};

export default TokoCard;
