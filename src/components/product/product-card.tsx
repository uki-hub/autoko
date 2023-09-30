import Card from "../UI/card.tsx";
import styles from "./product-card.module.css";

type Props = {
  className?: string | undefined;
  hideLocation?: boolean | undefined;
};

const ProductCard = (props: Props) => {
  return (
    <Card className={`${styles._} ${props.className}`}>
      <img
        className="h-1/2"
        src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/7/13/6466a151-b968-47c6-be96-9e2bf00d4669.jpg"
      />
      <div className="h-1/2 p-2">
        <div className={styles.__}>
          Per CVT Daytona Vario 125 150 160 auto jsenggat ngab
        </div>
        <div className="font-bold">Rp125.000</div>
        {!props.hideLocation && (
          <div className="text-sm my-1 text-secondary">Jakarta Barat</div>
        )}

        <div className={styles.____}>
          <i></i>4.9 | Terjual 1.5rb
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
