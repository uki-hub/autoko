import { useState } from "react";
import Card from "../../../UI/card.tsx";

import styles from "./diskon-spesial.module.css";
import moment from "moment";
import ProductCard from "../../../product/product-card.tsx";

const DiskonSpesial = () => {
  const [, setTime] = useState<Date>(new Date());

  setTimeout(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-end mb-5 flex-wrap sm:flex-col sm:items-start">
        <h3 className="font-bold text-xl mr-2">Diskon Spesial</h3>
        <div className="flex flex-row items-end gap-2">
          <label>Berakhir dalam</label>
          <div className="flex flex-row items-center gap-1 font-bold sm:mt-1">
            <Card className={styles.____}>{moment().format("HH")}</Card>
            <label>:</label>
            <Card className={styles.____}>{moment().format("mm")}</Card>
            <label>:</label>
            <Card className={styles.____}>{moment().format("ss")}</Card>
          </div>
          <label className="font-bold text-primary cursor-pointer">
            Lihat Semua
          </label>
        </div>
      </div>
      <div className={styles._}>
        <Card className={styles.__}></Card>
        <div className={styles.___}>
          {[...Array(10)].map(() => (
            <ProductCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiskonSpesial;
