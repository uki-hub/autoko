import ProductDesc from "./desc/product-desc.tsx";
import ProductImages from "./images/product-images.tsx";
import styles from "./product.module.css";
import ProductSidebar from "./sidebar/product-sidebar.tsx";

const Product = () => {
  return (
    <div className={styles._}>
      <ProductImages />
      <ProductDesc />
      <ProductSidebar />
    </div>
  );
};

export default Product;
